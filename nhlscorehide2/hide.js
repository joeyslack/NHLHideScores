chrome.storage.sync.get(["hide"]).then((sync) => {
  if (sync["hide"] === "OFF") {
    document.body.classList.add("showScores")
  }
  else if (sync["hide"] === "ON") {
    document.body.classList.remove("showScores")
  }
})

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request && request.hide === "ON") {
    document.body.classList.remove("showScores")
  }
  else if (request && request.hide === "OFF") {
    document.body.classList.add("showScores")
  }
});