![UEF logo](https://github.com/SSAgov/uef-vscode-extension/blob/main/UEF.png) UEF Snippets
============

[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/)
![](https://vsmarketplacebadge.apphb.com/version/CraigCecil.uef-snippets.svg)
![Last Commit](https://img.shields.io/github/last-commit/SSAgov/uef-vscode-extension)

A set of User Experience Framework (UEF) Snippets for Visual Studio Code. UEF is the official web application design system of the Social Security Administration.

[Install UEF Snippets](https://marketplace.visualstudio.com/items?itemName=CraigCecil.uef-snippets)

Create a new HTML document and type `uef` to see all available snippets. Note: For these snippets to accurately render page content you need to have the appropriate UEF libraries loaded in HEAD. See the `!!uef3` or `!!uef21` snippets to see how this is done--or just start with a blank HTML page and use one of those snippets.

UEF (Web Component Edition) Snippets
--------------------------------

**PAGE TEMPLATE**

Trigger | Description
------- | -----------
!!uef3 | Start a new UEF 3 page from a blank document
!!uef21 | Start a new UEF 2.1 Public or Pro page from a blank document
uef21-page-add-tab | Add a navigation tab to the page
uef21-page-add-tab-dropdown | Add a Pro dropdown navigation tab to the page
uef21-page-footer | Add an optional page footer

**LAYOUT GRIDS**

Trigger | Description
------- | -----------
uef21-grid | Start a new UEF layout grid
uef21-grid-unit | Insert a grid unit of 1-5 columns
uef21-grid-2-column-25%-75% | 2 Column Grid (&frac14;, &frac34;)
uef21-grid-2-column-75%-25% | 2 Column Grid (&frac34;, &frac14;)
uef21-grid-2-column-50%-50% | 2 Column Grid (&frac12;, &frac12;)
uef21-grid-2-column-66%-33% | 2 Column Grid (&frac23;, &frac13;)
uef21-grid-3-column-33%-33%-33% | 3 Column Grid (&frac13;, &frac13;, &frac13;)
uef21-grid-3-column-50%-25%-25% | 3 Column Grid (&frac12;, &frac14;, &frac14;)
uef21-grid-3-column-60%-20%-20% | 3 Column Grid (&frac35;, &frac15;, &frac15;)
uef21-grid-4-column-25%-25%-25%-25% | 4 Column Grid (&frac14;, &frac14;, &frac14;, &frac14;)
uef21-grid-4-column-40%-20%-20%-20% | 4 Column Grid (&frac25;, &frac15;, &frac15;, &frac15;)
uef21-grid-5-column-20%-20%-20%-20%-20% | 5 Column Grid (&frac15;, &frac15;, &frac15;, &frac15;, &frac15;)

**CONTAINERS**

Trigger | Description
------- | -----------
uef21-container-basic | Basic Container
uef21-container-summary | Summary/Receipt Container
uef21-container-tabs | Container with Tabs

**INPUTS**

Trigger | Description
------- | -----------
uef21-input-address-us | Address (US)
uef21-input-address-intl | Address (International)
uef21-input-amount | Amount
uef21-input-bank | Bank Information
uef21-input-checkbox | Check Box
uef21-input-checkbox-critical | Critical Check Box
uef21-input-checklist | Check List
uef21-input-checklist-add-item | Add Item to Check List
uef21-input-compound | Compound Pattern
uef21-input-country | Country
uef21-input-credit-card | Credit Card
uef21-input-date | Date
uef21-input-date-calendar | Date (Calendar)
uef21-input-droplist | Drop List
uef21-input-ein | Employee Information Number (EIN)
uef21-input-email | Email Address
uef21-input-file-upload | File Upload
uef21-input-gender | Gender
uef21-input-password | Password
uef21-input-phone | US and International Phone
uef21-input-place | Place (of Event)
uef21-input-radio-list | Radio List
uef21-input-radio-list-item | Add a Radio List item
uef21-input-ssn |SSN
uef21-input-state | State
uef21-input-state-abbr | State (with abbreviations)
uef21-input-textarea | Text Area
uef21-input-textbox | Text Box
uef21-input-time | Time
uef21-input-timezone | Time Zone
uef21-input-yesno | Yes/No
uef21-input-zipcode | Zip Code

**NAVIGATION**

Trigger | Description
------- | -----------
uef21-form-controls | Form Controls
uef21-subnav | Sub-Navigation (no groups)
uef21-subnav-groups | Sub-Navigation with Groups
uef21-subnav-groups-status | Sub-Navigation with Groups and Status
uef21-subnav-link | Add a Sub-Navigation link

**NOTICES**

Trigger | Description
------- | -----------
uef21-badge | Badges
uef21-error-summary | Error Summary
uef21-error-summary-item | Adds an Error Summary link item
uef21-notice | Info, Warning, Danger, Success Notices
uef21-notice-compact | Compact version of Notices
uef21-optional-info | Optional Info Statement
uef21-reentry | Re-entry Number Notice
uef21-required-info | Required Info Statement
uef21-waiting-indicator | Waiting Indicator

**MODALS**

Trigger | Description
------- | -----------
uef21-docviewer | Creates a Document Viewer (use a Link or Button to display it)
uef-21-lightbox | Creates a Lightbox (use a Link or Button to display it)
uef21-popover | Creates a Popover (use a Link or Button to display it)

**LINKS**

Trigger | Description
------- | -----------
uef21-link | Add Another, Email, Excel, External, PDF, PowerPoint, Print Page, Word, and Zip links
uef21-help-link | Help
uef21-show-hide | Show/Hide
uef21-tooltip | Tooltip

**BUTTONS**

Trigger | Description
------- | -----------
uef21-button | Button (Primary or Secondary)
uef21-button-dropdown | Drop Down Button
uef21-button-with-icon | Button with Icon

**TABLES**

Trigger | Description
------- | -----------
uef21-table | Basic & Single-Row Action Tables

Use the following quick table snippets to automatically insert tables of a predefined number of columns.

Trigger | Description
------- | -----------
uef21-table-2col | Table with 2 columns
uef21-table-3col | Table with 3 columns
uef21-table-4col | Table with 4 columns
uef21-table-5col | Table with 5 columns
uef21-table-6col | Table with 6 columns
uef21-table-7col | Table with 7 columns
uef21-table-8col | Table with 8 columns

UEF 2.0 Snippets
------------------

**PAGE TEMPLATES**

Trigger | Description
------- | -----------
uef-page-public | Public Page Template
uef-page-pro | Pro Page Template
uef-page-pro-side-container | Pro Page Template Side Container
uef-page-pro-add-tab | Add Pro Template Tab
uef-template-more-info | More Info Page Template
uef-template-progress | Progress template

**LAYOUT GRIDS**

Trigger | Description
------- | -----------
uef-grid-1-column-100% | Full Width Grid
uef-grid-2-column-25%-75% | 2 Column Grid (&frac14;, &frac34;)
uef-grid-2-column-75%-25% | 2 Column Grid (&frac34;, &frac14;)
uef-grid-2-column-50%-50% | 2 Column Grid (&frac12;, &frac12;)
uef-grid-2-column-66%-33% | 2 Column Grid (&frac23;, &frac13;)
uef-grid-3-column-33%-33%-33% | 3 Column Grid (&frac13;, &frac13;, &frac13;)
uef-grid-3-column-50%-25%-25% | 3 Column Grid (&frac12;, &frac14;, &frac14;)
uef-grid-3-column-60%-20%-20% | 3 Column Grid (&frac35;, &frac15;, &frac15;)
uef-grid-4-column-25%-25%-25%-25% | 4 Column Grid (&frac14;, &frac14;, &frac14;, &frac14;)
uef-grid-4-column-40%-20%-20%-20% | 4 Column Grid (&frac25;, &frac15;, &frac15;, &frac15;)
uef-grid-5-column-20%-20%-20%-20%-20% | 5 Column Grid (&frac15;, &frac15;, &frac15;, &frac15;, &frac15;)

You also have access to UEF's built-in alignment classes:

CSS Class | Description
--------- | -----------
uef-text-center | Centers text in a paragraph
uef-float-left | Aligns an object (e.g. link, button, image) to the left
uef-float-right | Aligns an object (e.g. link, button, image) to the right

**CONTAINERS**

Trigger | Description
------- | -----------
uef-container-basic | Basic Container
uef-container-basic-with-rows | Basic Container with Rows
uef-container-basic-with-subtitles | Basic Container with Subtitles
uef-container-basic-with-hidden-content | Basic Container with Hidden Content
uef-container-basic-white-or-gray | Basic Container (White or Gray)
uef-container-add-row | Add New Container Row
uef-container-summary | Summary/Receipt Container
uef-container-summary-add-section | Add Summary Container Section
uef-container-tabs | Tabs
uef-container-add-tab | Add tab

**NAVIGATION**

Trigger | Description
------- | -----------
uef-back-to-top | Back To Top
uef-form-controls | Form Controls
uef-subnav | Sub-Navigation
uef-subnav-add-group | Add Sub-Navigation Group (Expanded)
uef-subnav-add-group-collapsed | Add Sub-Navigation Group (Collapsed)
uef-subnav-add-link | Add Sub-Navigation Link

**BUTTONS**

Trigger | Description
------- | -----------
uef-button | Button (Primary or Secondary)

**INPUTS**

Trigger | Description
------- | -----------
uef-input-address-intl | Address (International)
uef-input-address-us | Address (US)
uef-input-amount | Amount/Currency
uef-input-bankinfo-us | Bank Information (US)
uef-input-checkbox | Check Box
uef-input-checkbox-critical | Critical Check Box
uef-input-checklist | Check List
uef-input-compound | Compound Pattern
uef-input-country | Country
uef-input-credit-card | Credit Card
uef-input-date | Date
uef-input-date-calendar | Date (Calendar)
uef-input-date-range | Date (Calendar) Range
uef-input-date-time | Date & Time
uef-input-droplist | Drop List
uef-input-droplist-add-item | Add Drop List Item
uef-input-ein | Employee Information Number (EIN)
uef-input-email | Email Address
uef-input-email-confirm | Email Address with Confirmation
uef-input-file-upload | File Upload
uef-input-gender | Gender
uef-input-name | Name
uef-input-password-create | Password (Create)
uef-input-password-enter | Password (Enter)
uef-input-phone-us | Phone (US)
uef-input-phone-only-us | Phone (US) Phone-Only Field
uef-input-phone-intl | Phone (International)
uef-input-place | Place (of Event)
uef-input-radio | Radio List
uef-input-radio-add-item | Add item to Radio List
uef-input-ssn |SSN
uef-input-state | State
uef-input-textarea | Text Area
uef-input-textbox | Text Box
uef-input-time | Time
uef-input-timezone | Time Zone
uef-input-username | Username (Create)
uef-input-yesno | Yes/No
uef-input-yesno-notyet | Yes/No/Not Yet Answered
uef-input-zipcode | Zip Code

**READ-ONLY INPUTS**

Use the following triggers to construct any type of Read-Only or
Summary display for any of the UEF Input patterns.

Trigger | Description
------- | -----------
uef-readonly-label | Read-Only Pattern/Field label
uef-readonly-label-bold | Bolded Read-Only Pattern/Field label
uef-readonly-label-bold-gray | Bold+Gray version of Read-Only Pattern/Field Label
uef-readonly-answer | Read-Only Answer
uef-readonly-answer-bold |Bolded Read-Only Answer
uef-readonly-not-answered | Not Answered
uef-readonly-not-answered-bold | Bolded Not Answered

**LINKS**

Trigger | Description
------- | -----------
uef-link-definition | Definition
uef-link-email | Email
uef-link-excel | Excel
uef-link-external | External
uef-link-help | Help
uef-link-pdf | PDF
uef-link-powerpoint | PowerPoint
uef-link-print-page | Print Page
uef-link-print-region | Print Region
uef-link-showhide | Show/Hide
uef-link-tooltip | Tooltip
uef-link-word | Word
uef-link-video-teaser | Video Teaser
uef-link-zip | Zip file

**MODALS**

Trigger | Description
------- | -----------
uef-docviewer | Document Viewer
uef-docviewer-link | Document Viewer Link
uef-modal | Lightbox Modal
uef-modal-link | Link triggers Modal
uef-modal-button | Button triggers Modal
uef-popover | Popover

**NOTICES**

Trigger | Description
------- | -----------
uef-notice-agreement | Agreement
uef-notice-agreement-container | Agreement Container
uef-notice-agreement-ssa | Agreement with SSA Text
uef-badge | Badges
uef-notice-danger | Danger
uef-notice-danger-compact | Compact Danger
uef-error-summary | Error Summary
uef-notice-info | Information
uef-notice-info-compact | Compact Information
uef-optional-info | Optional Info Statement
uef-progress | Progress
uef-notice-reentry | Re-Entry Number
uef-required-info | Required Info Statement
uef-notice-success | Success
uef-notice-success-compact | Compact Success
uef-notice-warning | Warning
uef-notice-warning-compact | Compact Warning
uef-notice-compact-dismissible | Compact Dismissible Notice

**TABLES**

Trigger | Description
------- | -----------
uef-table | Basic and Single-Row Action
uef-table-multi-row | Multi-Row Action Table
uef-table-paginated | Paginated Table
uef-table-add-col-header | Add another column header to the table
uef-table-add-col-data | Add another column of data (content) to the table

Use the following quick table snippets to automatically insert tables of a predefined number of columns.

Trigger | Description
------- | -----------
uef-table-2col | Table with 2 columns
uef-table-3col | Table with 3 columns
uef-table-4col | Table with 4 columns
uef-table-5col | Table with 5 columns
uef-table-6col | Table with 6 columns
uef-table-7col | Table with 7 columns
uef-table-8col | Table with 8 columns

Use the following quick table snippets to automatically insert Paginated Tables of a predefined number of columns.

Trigger | Description
------- | -----------
uef-table-paginated-2col | Paginated Table with 2 columns
uef-table-paginated-3col | Paginated Table with 3 columns
uef-table-paginated-4col | Paginated Table with 4 columns
uef-table-paginated-5col | Paginated Table with 5 columns
uef-table-paginated-6col | Paginated Table with 6 columns
uef-table-paginated-7col | Paginated Table with 7 columns
uef-table-paginated-8col | Paginated Table with 8 columns

**TYPOGRAPHY**

Trigger | Description
------- | -----------
uef-instruction-text | Instruction Text
uef-support-text | Support Text

**UEF SPEED SHORTCUTS**

Type any of the following Triggers, then the TAB key, followed by an asterisk and the number of times you want the item to repeat. Then press TAB again to build it.

For example, if you want to add six Container Rows, then type `uef-cr`, press TAB to expand the snippet, then type `*6` and TAB to build it.

Trigger | Description
------- | -----------
uef-cr | UEF Container Rows
