/**
 * generate-previews.js
 * Generates HTML preview files for each UEF snippet.
 * Run with: npm run generate
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const SNIPPETS_FILE = path.join(ROOT_DIR, 'uef-snippets.json');
const OUTPUT_DIR = path.join(ROOT_DIR, 'dist', 'preview');

const UEF_SCRIPT = 'https://www.ssa.gov/uef/uef3/latest/uef3-web-components.esm.js';
const UEF_VARIABLES = 'https://www.ssa.gov/uef/uef3/latest/assets/css/uef-variables.css';
const UEF_GLOBAL = 'https://www.ssa.gov/uef/uef3/latest/assets/css/uef-global.css';


// ── Tabstop processor ────────────────────────────────────────────────────────
// Uses a character-level parser to correctly handle:
//   ${N:default text}      → default text (recursive, handles nesting + multiline)
//   ${N|opt1,opt2,...|}    → first option
//   ${N}                   → "" (bare cursor stop)
//   $N                     → "" (bare cursor stop)

function processTabstops(text) {
  let result = '';
  let i = 0;

  while (i < text.length) {
    if (text[i] === '$' && i + 1 < text.length) {
      if (text[i + 1] === '{') {
        // Skip '${'
        let j = i + 2;
        // Skip the stop number
        while (j < text.length && /[0-9]/.test(text[j])) j++;

        if (j < text.length && text[j] === ':') {
          // ${N:default} — extract default, track nested braces
          j++; // skip ':'
          let depth = 1;
          let content = '';
          while (j < text.length && depth > 0) {
            if (text[j] === '{') depth++;
            else if (text[j] === '}') { depth--; if (depth === 0) break; }
            content += text[j];
            j++;
          }
          j++; // skip closing '}'
          result += processTabstops(content); // recurse for nested tabstops
          i = j;

        } else if (j < text.length && text[j] === '|') {
          // ${N|opt1,opt2,...|} — use first option
          j++; // skip '|'
          let opts = '';
          while (j < text.length && text[j] !== '|' && text[j] !== '}') {
            opts += text[j++];
          }
          while (j < text.length && text[j] !== '}') j++;
          j++; // skip '}'
          result += opts.split(',')[0];
          i = j;

        } else {
          // ${N} — bare stop, drop it
          while (j < text.length && text[j] !== '}') j++;
          j++; // skip '}'
          i = j;
        }

      } else if (/[0-9]/.test(text[i + 1])) {
        // $N — bare stop, drop it
        let j = i + 1;
        while (j < text.length && /[0-9]/.test(text[j])) j++;
        i = j;

      } else {
        result += text[i++];
      }
    } else {
      result += text[i++];
    }
  }

  return result;
}

function processBody(bodyLines) {
  return processTabstops(bodyLines.join('\n'));
}

// ── Slug helper ───────────────────────────────────────────────────────────────

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// ── HTML escaping for the <code> display block ────────────────────────────────

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ── Shared asset content ──────────────────────────────────────────────────────

const SNIPPET_CSS = `\
body { font-family: system-ui, sans-serif; margin: 0; padding: 0; }
.snp-preview-header {
  background: #112e51;
  color: #fff;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}
.snp-preview-header a { color: #9bdaf1; text-decoration: none; font-size: .875rem; }
.snp-preview-header a:hover { text-decoration: underline; }
.snp-preview-header h1 { margin: 0; font-size: 1.25rem; flex: 1; }
.snp-meta { background: #f0f0f0; border-bottom: 1px solid #ccc; padding: .5rem 1.5rem; font-size: .875rem; display: flex; gap: 2rem; flex-wrap: wrap; }
.snp-meta code { background: #ddd; padding: .1em .4em; border-radius: 3px; }
.snp-section-label {
  font-size: .7rem;
  font-weight: bold;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: #555;
  background: #e8e8e8;
  border-bottom: 1px solid #ccc;
  padding: .25rem 1.5rem;
}
.snp-render-area { padding: 1.5rem; min-height: 80px; border-bottom: 1px solid #ccc; }
.snp-code-area { padding: 1rem 1.5rem; }
.snp-code-area pre {
  background: #1e1e1e;
  color: #d4d4d4;
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
  font-size: .8rem;
  line-height: 1.5;
  margin: 0;
}
.snp-badge {
  display: inline-block;
  font-size: .7rem;
  padding: .15em .5em;
  border-radius: 3px;
  background: #4CAF50;
  color: white;
  font-weight: bold;
}
.snp-badge.snp-template { background: #7b68ee; }`;

const SNIPPET_JS = `\
const sourceEl = document.getElementById('snp-source');
const codeEl = document.getElementById('snp-code');
if (sourceEl && codeEl) {
  codeEl.textContent = JSON.parse(sourceEl.textContent);
}

if (window.self !== window.top) {
  document.querySelector('.snp-preview-header').style.display = 'none';
}`;

const INDEX_CSS = `\
*, *::before, *::after { box-sizing: border-box; }
html, body { height: 100%; margin: 0; padding: 0; font-family: system-ui, sans-serif; }

.app { display: flex; flex-direction: column; height: 100vh; }

header {
  background: #112e51;
  color: white;
  padding: .6rem 1rem;
  display: flex;
  align-items: baseline;
  gap: 1rem;
  flex-shrink: 0;
}
header h1 { margin: 0; font-size: 1.1rem; font-weight: 600; }
header p { margin: 0; font-size: .75rem; opacity: .65; }

.split { display: flex; flex: 1; overflow: hidden; }

/* ── Left panel ── */
.panel-list {
  width: 300px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #d0d0d0;
  background: #fafafa;
  overflow: hidden;
}
.search-wrap {
  padding: .5rem;
  background: #f0f0f0;
  border-bottom: 1px solid #d0d0d0;
  flex-shrink: 0;
}
.search-wrap input {
  width: 100%;
  padding: .35rem .5rem;
  border: 1px solid #bbb;
  border-radius: 4px;
  font-size: .8rem;
  background: white;
}
.search-wrap input:focus { outline: 2px solid #1a73e8; border-color: transparent; }
.list-count {
  padding: .25rem .6rem;
  font-size: .7rem;
  color: #888;
  border-bottom: 1px solid #e0e0e0;
  flex-shrink: 0;
  background: #f5f5f5;
}
.list-wrap { overflow-y: auto; flex: 1; }

ul.snippet-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
li.snippet-item {
  display: flex;
  flex-direction: column;
  gap: .1rem;
  padding: .45rem .75rem;
  border-bottom: 1px solid #e8e8e8;
  cursor: pointer;
  transition: background .1s;
}
li.snippet-item:hover { background: #e8f0fe; }
li.snippet-item.active { background: #1a73e8; }
li.snippet-item.active .item-name { color: white; }
li.snippet-item.active .item-prefix { background: rgba(255,255,255,.2); color: rgba(255,255,255,.85); }

.item-name {
  font-size: .8rem;
  font-weight: 500;
  color: #202124;
  line-height: 1.3;
}
.item-prefix {
  font-size: .7rem;
  font-family: monospace;
  color: #555;
  background: #e8e8e8;
  padding: .05em .35em;
  border-radius: 3px;
  align-self: flex-start;
}

/* ── Right panel ── */
.panel-preview {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.preview-toolbar {
  display: flex;
  align-items: center;
  gap: .75rem;
  padding: .35rem .75rem;
  background: #f8f8f8;
  border-bottom: 1px solid #ddd;
  flex-shrink: 0;
  font-size: .8rem;
  min-height: 32px;
}
.preview-toolbar strong { flex: 1; color: #202124; }
.preview-toolbar a { color: #1a73e8; font-size: .75rem; text-decoration: none; white-space: nowrap; }
.preview-toolbar a:hover { text-decoration: underline; }
.preview-empty {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #bbb;
  font-size: .95rem;
}
iframe { flex: 1; border: none; width: 100%; }`;

const INDEX_JS = `\
const frame = document.getElementById('preview-frame');
const emptyMsg = document.getElementById('empty-msg');
const previewTitle = document.getElementById('preview-title');
const previewLink = document.getElementById('preview-link');
let activeItem = null;

function loadPreview(slug, el) {
  const url = slug + '.html';
  frame.src = url;
  frame.style.display = 'block';
  emptyMsg.style.display = 'none';
  previewTitle.textContent = el.querySelector('.item-name').textContent;
  previewLink.href = url;
  previewLink.style.display = 'inline';

  if (activeItem) activeItem.classList.remove('active');
  el.classList.add('active');
  activeItem = el;
  el.scrollIntoView({ block: 'nearest' });

  // Update URL without reloading so this selection can be bookmarked
  const params = new URLSearchParams(window.location.search);
  params.set('snippet', slug);
  history.replaceState(null, '', '?' + params.toString());
}

function filterItems(query) {
  const q = query.toLowerCase().trim();
  const items = document.querySelectorAll('#snippet-list li');
  let visible = 0;
  items.forEach(li => {
    const match = !q || li.dataset.search.includes(q);
    li.style.display = match ? '' : 'none';
    if (match) visible++;
  });
  document.getElementById('count').textContent =
    visible + ' snippet' + (visible !== 1 ? 's' : '');
}

// Restore from ?snippet= param, or load first item
const initSlug = new URLSearchParams(window.location.search).get('snippet');
const initEl = initSlug
  ? document.querySelector(\`#snippet-list li[data-slug="\${initSlug}"]\`)
  : document.querySelector('#snippet-list li');
if (initEl) {
  loadPreview(initEl.dataset.slug, initEl);
  initEl.scrollIntoView({ block: 'nearest' });
}`;

// ── Per-snippet HTML template ─────────────────────────────────────────────────

function buildSnippetPage(name, snippet, slug, allSlugs) {
  const prefix = snippet.prefix;
  const description = snippet.description || name;
  const bodyLines = Array.isArray(snippet.body) ? snippet.body : [snippet.body];
  const rawCode = bodyLines.join('\n');
  const rendered = processBody(bodyLines);

  // Is this a full page template?
  const isFullPage = rawCode.includes('<!DOCTYPE html>');

  // Safely embed the raw source as JSON (guard against </script> in content)
  const sourceJson = JSON.stringify(rendered).replace(/<\/script>/gi, '<\\/script>');

  // Navigation (prev/next not computed here — just index link)
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(name)} — UEF Snippet Preview</title>
  <link rel="stylesheet" href="${UEF_VARIABLES}">
  <link rel="stylesheet" href="${UEF_GLOBAL}">
  <link rel="stylesheet" href="snippet.css">
  <script type="module" src="${UEF_SCRIPT}"></script>
</head>
<body>

<div class="snp-preview-header">
  <div>
    <a href="index.html">← All Snippets</a>
  </div>
  <h1>${escapeHtml(name)}</h1>
  ${isFullPage ? '<span class="snp-badge snp-template">Full Page Template</span>' : '<span class="snp-badge">Component</span>'}
</div>

<div class="snp-meta">
  <span>Trigger: <code>${escapeHtml(prefix)}</code></span>
  <span>Description: ${escapeHtml(description)}</span>
</div>

${isFullPage ? `
<div class="snp-section-label">⚠️ Full page template — rendered inline below (may look different in isolation)</div>
<div class="snp-render-area">${rendered}</div>
` : `
<div class="snp-section-label">Live Render</div>
<div class="snp-render-area">${rendered}</div>
`}

<div class="snp-section-label">Snippet Code</div>
<div class="snp-code-area">
  <pre><code id="snp-code"></code></pre>
</div>

<script type="application/json" id="snp-source">${sourceJson}</script>
<script src="snippet.js"></script>
</body>
</html>`;
}

// ── Index page ────────────────────────────────────────────────────────────────

function buildIndexPage(snippets) {
  const items = snippets.map(({ name, snippet, slug }) => {
    const prefix = snippet.prefix;
    return `      <li class="snippet-item" data-slug="${slug}" data-search="${escapeHtml((name + ' ' + prefix).toLowerCase())}" onclick="loadPreview('${slug}', this)">
        <span class="item-name">${escapeHtml(name)}</span>
        <code class="item-prefix">${escapeHtml(prefix)}</code>
      </li>`;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>UEF Snippet Previews</title>
  <link rel="stylesheet" href="index.css">
</head>
<body>
<div class="app">

  <header>
    <h1>UEF Snippet Previews</h1>
    <p>v4.2.0</p>
  </header>

  <div class="split">

    <div class="panel-list">
      <div class="search-wrap">
        <input type="search" id="search" placeholder="Filter snippets…" oninput="filterItems(this.value)" />
      </div>
      <div class="list-count" id="count">${snippets.length} snippets</div>
      <div class="list-wrap">
        <ul class="snippet-list" id="snippet-list">
${items}
        </ul>
      </div>
    </div>

    <div class="panel-preview">
      <div class="preview-toolbar" id="toolbar">
        <strong id="preview-title">Select a snippet</strong>
        <a id="preview-link" href="#" target="_blank" style="display:none">Open full page ↗</a>
      </div>
      <div class="preview-empty" id="empty-msg">← Select a snippet to preview</div>
      <iframe id="preview-frame" style="display:none" title="Snippet preview"></iframe>
    </div>

  </div>
</div>

<script src="index.js"></script>

</body>
</html>`;
}

// ── Main ──────────────────────────────────────────────────────────────────────

function main() {
  const snippetsData = JSON.parse(fs.readFileSync(SNIPPETS_FILE, 'utf8'));

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Track slugs — handle duplicates by appending a counter
  const usedSlugs = new Map();
  const snippets = Object.entries(snippetsData).map(([name, snippet]) => {
    let slug = slugify(name);
    if (usedSlugs.has(slug)) {
      usedSlugs.set(slug, usedSlugs.get(slug) + 1);
      slug = `${slug}-${usedSlugs.get(slug)}`;
    } else {
      usedSlugs.set(slug, 1);
    }
    return { name, snippet, slug };
  });

  // Write shared CSS / JS assets
  fs.writeFileSync(path.join(OUTPUT_DIR, 'snippet.css'), SNIPPET_CSS, 'utf8');
  fs.writeFileSync(path.join(OUTPUT_DIR, 'snippet.js'), SNIPPET_JS, 'utf8');
  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.css'), INDEX_CSS, 'utf8');
  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.js'), INDEX_JS, 'utf8');

  // Write individual snippet pages
  let count = 0;
  for (const { name, snippet, slug } of snippets) {
    const html = buildSnippetPage(name, snippet, slug, snippets);
    fs.writeFileSync(path.join(OUTPUT_DIR, `${slug}.html`), html, 'utf8');
    count++;
  }

  // Write index
  const indexHtml = buildIndexPage(snippets);
  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.html'), indexHtml, 'utf8');

  console.log(`✓ Generated ${count} snippet pages + index.html + snippet.css/js + index.css/js → ${OUTPUT_DIR}`);
}

main();
