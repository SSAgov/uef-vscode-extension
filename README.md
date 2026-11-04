# UEF Snippets for VSCode

A set of User Experience Framework (UEF) Snippets for Visual Studio Code. UEF is the official design system of the Social Security Administration.

[Install UEF Snippets](https://marketplace.visualstudio.com/items?itemName=CraigCecil.uef-snippets)

Create a new HTML document and type `uef` to see all available snippets.

## Page Templates

Trigger | Description
------- | -----------
!!uef3 | Start a new UEF 3 page from a blank document

> Full public/business page chrome (header, nav, footer) is maintained in the UEF Storybook and the `uef-page-templates` skill, where the markup and its CSS are broken out into separate, versioned files. Because that chrome depends on external, versioned stylesheets that a snippet can't carry, build it by copying a complete template (HTML + CSS) from Storybook / the skill, then start your page body from the `!!uef3` shell.

## Layouts

Trigger | Description
------- | -----------
uef-layout-1-col-stacked | 1 Column Stacked Layout
uef-layout-2-col-even-split | 2 Column Even Split Layout
uef-layout-2-col-left-sidebar | 2 Column Left Sidebar Layout
uef-layout-3-col | 3 Column Layout
uef-layout-3-col-dual-sidebars | 3 Column Dual Sidebars Layout

## Components

Trigger | Description
------- | -----------
uef-accordion | Accordion
uef-accordion-item | Add an accordion item
uef-address | Address (US)
uef-address-intl | Address (International)
uef-alert | Alert (Info, Warning, Danger, Success)
uef-avatar | Avatar
uef-back-to-top | Back to Top
uef-bank-info | Bank Information
uef-banner | Federal government website banner
uef-button | Insert a Button
uef-button-group | Button Group
uef-card | Basic Card
uef-card-with-title | Card with more options
uef-checkbox | Checkbox
uef-checklist | Checklist
uef-checklist-other | Checklist with 'Other' option
uef-combobox | Combobox (dropdown with filter)
uef-combobox-item | Combobox Item
uef-compound | Compound
uef-alert-confirmation-number | Confirmation Number
uef-container | Generic Container
uef-country | Country (Current)
uef-country-historical | Country (Historical) -- useful for place of birth
uef-currency | Currency ($,£,€)
uef-date-md | Date (Month & Day dropdowns)
uef-date-mdy | Date (Month, Day, Year -- month dropdown, day textbox, year dropdown)
uef-date-mdy-dropdowns | Date (Month, Day, Year -- all dropdowns)
uef-date-my | Date (Month, Year -- month dropdown, year textbox)
uef-date-picker | Date Picker
uef-dialog | Dialog
uef-drawer | Drawer
uef-droplist | Drop List
uef-droplist-item | Add a Drop List item
uef-ein | Employee Information Number (EIN)
uef-email | Email Address
uef-email-confirmation | Email Address with Confirmation
uef-error-summary | Error Summary
uef-figure | Figure
uef-file-input | File Input (upload a file)
uef-flex | FlexBox layout
uef-flex-item | Add FlexBox item
uef-form | Form wrapper
uef-sex | Sex (Male, Female)
uef-grid | CSS Grid layout
uef-grid-3col-template | 3-column layout grid using a template
uef-grid-fluid | Fluid layout grid
uef-help | Help dialog
uef-hero | Hero (call to arms)
uef-icon | Icon
uef-indicator | Indicator
uef-link | Insert hyperlink
uef-link-icon | Hyperlink with a leading icon (set icon name/type)
uef-link-external | External site link
uef-media | Media element (image)
uef-mega-menu | Mega Menu
uef-menu | Menu
uef-multi-select | Multi-Select
uef-name-default | Name (Title dropdown, First/Middle/Last text boxes, Suffix dropdown)
uef-name-f-l | Name (First/Last text boxes)
uef-name-f-m-l-s | Name (First/Middle/Last/Suffix text boxes)
uef-nav-menu | Navigation menu
uef-optional-info | Optional Info
uef-page-timeout-warning | Page Timeout Warning
uef-page-timed-out | Page Timed Out
uef-pagination | Pagination control
uef-password | Password
uef-percent | Percent textbox
uef-phone | U.S. Phone Number (10-digit number, extension, type dropdown)
uef-phone-intl | International Phone Number (country code and number, extension, type dropdown)
uef-phone-simple | Simple U.S. Phone Number (Area Code + Number)
uef-pill | Pill (Badge)
uef-place | Place of an event
uef-popover | Popover
uef-progress | Progress
uef-radiolist | Radio List
uef-radiolist-other | Radio List with 'Other' option
uef-alert-reentry-number | Reentry Number
uef-required-info | Required Info
uef-section | Section
uef-show-hide | Show/Hide
uef-site-alert | Site Alert (Info, Warning, Danger, Success)
uef-skipnav | Skip Navigation control
uef-ssn | Social Security Number (SSN)
uef-state | State
uef-subnav | Sub-Navigation
uef-subnav-groups | Sub-Navigation with Groups
uef-subnav-icons | Sub-Navigation with icons
uef-summary-accordion | Summary (Accordion)
uef-summary-receipt | Summary (Receipt)
uef-summary-review | Summary (Review)
uef-switch | Switch (toggle)
uef-table | Table (duplicate uef-th/uef-td cells for more columns)
uef-tabs | Tabs
uef-tag | Tag
uef-textarea | Textarea
uef-textbox | Textbox
uef-textbox-icon | Textbox with embedded icon
uef-time | Time selection with dropdowns
uef-timezone | Time Zone
uef-toggle-group | Toggle Group
uef-tooltip | Tooltip
uef-typography | Typography
uef-video | Media element (video)
uef-visually-hidden | Visually hidden text
uef-yesno | Yes/No
uef-zipcode | Zip Code
uef-zipcode-plus-4 | Zip Code plus 4-digit extension

## Named Slots

Trigger | Description
------- | -----------
uef-alert-slot-header | Alert Header Slot
uef-alert-slot-footer | Alert Footer Slot
uef-avatar-slot-overlay | Avatar Overlay Slot
uef-card-slot-footer | Card Footer Slot
uef-combobox-slot-no-results | Combobox No Results Slot
uef-datalist | Datalist
uef-datalist-item | Datalist Item
uef-datalist-slot-no-results | Datalist No Results Slot
uef-figure-slot-caption | Figure Caption Slot
uef-input-slot-help | Input Help Slot
uef-input-slot-instructions | Input Instructions Slot
uef-input-slot-label | Input Label Slot
uef-input-slot-support-info | Input Support Info Slot
uef-input-slot-overlay | Input Overlay Slot
uef-menu-slot-control | Menu Control Slot
uef-multi-select-slot-dialog-body | Multi-Select Dialog Body Slot
uef-multi-select-slot-dialog-no-results | Multi-Select Dialog No Results Found Slot
uef-read-only | Read-Only
uef-table-slot-support-info | Table Support Info Slot
uef-tooltip-slot-content | Tooltip Content Slot
