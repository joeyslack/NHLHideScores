chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({hide: true});

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'www.nhl.com'},
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });

});


let hideScores = document.getElementById('hideScores');
let showScores = document.getElementById('showScores');

hideScores.onclick = function(element) {
	// chrome.storage.sync.set({hide: true});
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(null, {file: 'jquery.min.js'}, function() {
    	chrome.tabs.executeScript(
    		tabs[0].id,
    		{code: '$(".g5-component--nhl-scores__team-score, .g5-component--nhl-scores__status-series").hide().css("visibility", "hidden");'}
    	);}
    );
  });
};

showScores.onclick = function(element) {
	// chrome.storage.sync.set({hide: false});
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(null, {file: 'jquery.min.js'}, function() {
    	chrome.tabs.executeScript(
    		tabs[0].id,
    		{code: '$(".g5-component--nhl-scores__team-score, .g5-component--nhl-scores__status-series").show().css("visibility", "visible");'}
    	);}
    );
  });
}