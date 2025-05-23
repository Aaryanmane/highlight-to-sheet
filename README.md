# highlight-to-sheet
# Highlight to Sheet Chrome Extension

A Chrome extension that allows users to highlight text on any webpage and save it to a Google Sheet along with metadata (timestamp, page URL, page title).

## Permissions Used
- `contextMenus`: To add a "Save to Sheet" option to the right-click context menu.
- `activeTab`: To access the current tab’s content (selected text, URL, title).
- `https://script.google.com/*`: To send POST requests to the Google Apps Script Web App.

## Setup Instructions

### Chrome Extension
1. **Clone or Download the Repository**
   - Clone this repository or download the files (`manifest.json`, `content.js`, `background.js`).
2. **Load the Extension in Chrome**
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" (top-right toggle).
   - Click "Load unpacked" and select the folder containing the extension files.
3. **Update the Google Apps Script Web App URL**
   - In `background.js`, replace `YOUR_APPS_SCRIPT_WEB_APP_URL` with the deployed Google Apps Script Web App URL (see below).

### Google Apps Script
1. **Create a Google Sheet**
   - Open Google Sheets and create a new spreadsheet.
   - Name the sheet (e.g., "Highlights") and note its ID from the URL: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`.
2. **Set Up Google Apps Script**
   - Open the Google Sheet, go to `Extensions > Apps Script`.
   - Copy and paste the contents of `Code.gs` into the script editor.
   - Save the script with a name (e.g., "HighlightToSheet").
   - Click `Deploy > New Deployment > Web App`.
     - Set "Execute as" to "Me".
     - Set "Who has access" to "Anyone".
     - Deploy and copy the Web App URL.
   - Grant necessary permissions when prompted.
3. **Update the Extension**
   - Paste the Web App URL into `background.js` in place of `YOUR_APPS_SCRIPT_WEB_APP_URL`.
4. **Test the Extension**
   - Highlight text on any webpage, right-click, and select "Save to Sheet".
   - Check the Google Sheet to verify the data (text, URL, title, timestamp) is appended.

## Limitations
- **Google Apps Script Web App Access**: The Web App is set to "Anyone" for simplicity, which may not be suitable for sensitive data. For production, implement OAuth2 authentication for secure access.
- **Rate Limits**: Google Apps Script and Google Sheets have quotas, 20,000 requests/day for free accounts.



