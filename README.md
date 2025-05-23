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

## Known Limitations
- **Google Apps Script Web App Access**: The Web App is set to "Anyone" for simplicity, which may not be suitable for sensitive data. For production, implement OAuth2 authentication for secure access.
- **Rate Limits**: Google Apps Script and Google Sheets have quotas (e.g., 20,000 requests/day for free accounts). Heavy usage may hit these limits.
- **Error Handling**: Basic error handling is implemented. For production, enhance with user notifications (e.g., popup alerts) for failed requests.
- **Cross-Origin Requests**: Ensure the Google Apps Script Web App URL is correctly configured in `host_permissions` to avoid CORS issues.
- **No UI Feedback**: The extension logs success/errors to the console. A future version could add a popup for user feedback.

## Demo Video Instructions
To create a demo video:
1. Record your screen using software like OBS Studio or Loom.
2. Show the following steps:
   - Highlight text on a webpage.
   - Right-click and select "Save to Sheet".
   - Open the Google Sheet to show the new row with the highlighted text, URL, title, and timestamp.
3. Keep the video between 3–5 minutes, focusing on the core functionality.

## Folder Structure
