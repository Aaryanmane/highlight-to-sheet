chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getSelection") {
    const selection = window.getSelection().toString().trim();
    if (selection) {
      const data = {
        text: selection,
        url: window.location.href,
        title: document.title,
        timestamp: new Date().toISOString(),
      };
      sendResponse(data);
    } else {
      sendResponse({ error: "No text selected" });
    }
  }
});
