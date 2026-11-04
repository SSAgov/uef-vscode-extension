/**
 * preview.js
 * Generates the snippet previews into dist/preview and opens index.html in the default browser.
 * Run with: npm run preview
 */

const { execFileSync, spawn } = require('child_process');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const INDEX_FILE = path.join(ROOT_DIR, 'dist', 'preview', 'index.html');

execFileSync(process.execPath, [path.join(__dirname, 'generate-previews.js')], { stdio: 'inherit' });

const opener = {
  win32: { cmd: 'cmd', args: ['/c', 'start', '""', INDEX_FILE] },
  darwin: { cmd: 'open', args: [INDEX_FILE] },
}[process.platform] || { cmd: 'xdg-open', args: [INDEX_FILE] };

spawn(opener.cmd, opener.args, { stdio: 'ignore', detached: true, shell: false, windowsVerbatimArguments: true }).unref();
