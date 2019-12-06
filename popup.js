let hideScores = document.getElementById('hideScores');
let showScores = document.getElementById('showScores');
let hideNews = document.getElementById('hideNews');
let showNews = document.getElementById('showNews');

hideScores.onclick = function(element) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {code: 'document.getElementsByTagName("BODY")[0].classList.remove("showScores");'});
  });
};

showScores.onclick = function(element) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {code: 'document.getElementsByTagName("BODY")[0].classList.add("showScores");'});
  });
}

showNews.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id,{code: 'document.getElementsByTagName("BODY")[0].classList.add("showNews");'});
  });
}

hideNews.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {code: 'document.getElementsByTagName("BODY")[0].classList.remove("showNews");'});
  });
}