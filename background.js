chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "saveToSheet",
    title: "Save to Sheet",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "saveToSheet") {
    chrome.tabs.sendMessage(tab.id, { action: "getSelection" }, (response) => {
      if (response.error) {
        console.error(response.error);
        return;
      }
      // Replace with your Google Apps Script Web App URL
      const scriptUrl =
        "https://script.google.com/macros/s/AKfycbzhLOJcnSCr0TOQrcaadu-HZbvhMhjg2jmfBkZSzvn03NwwrR97DUQREhrMy7nyCyCF/exec";
      fetch(scriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(response),
      })
        .then((res) => {
          if (!res.ok) throw new Error("Failed to save to sheet");
          console.log("Data saved to sheet successfully");
        })
        .catch((error) => console.error("Error saving to sheet:", error));
    });
  }
});
