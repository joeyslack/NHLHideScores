let hideScores = document.getElementById('hideScores');
let showScores = document.getElementById('showScores');

hideScores.onclick = function(element) {
	// chrome.storage.sync.set({hide: true});
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(null, {file: 'jquery.min.js'}, function() {
    	chrome.tabs.executeScript(
    		tabs[0].id,
    		{code: '$(".g5-component--nhl-scores__team-score").hide().css("visibility", "hidden");'}
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
    		{code: '$(".g5-component--nhl-scores__team-score").show().css("visibility", "visible");'}
    	);}
    );
  });
}