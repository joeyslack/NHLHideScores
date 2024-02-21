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