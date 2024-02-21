const extensions = 'https://www.nhl.com'
const webstore = 'http://www.nhl.com'

chrome.action.onClicked.addListener(async (tab) => {
  // await hideScores(tab.url, tab.id)
  if (tab.url.startsWith(extensions) || tab.url.startsWith(webstore)) {
    // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    // Next state will always be the opposite
    const nextState = prevState === 'ON' ? 'OFF' : 'ON'

    // Set the action badge to the next state
    await chrome.action.setBadgeText({ 
      tabId: tab.id,
      text: nextState,
    });

    // Insert the CSS file when the user turns the extension on
    await chrome.scripting.insertCSS({
      files: ["contentscript.css"],
      target: { tabId: tab.id },
    });
    await chrome.storage.sync.set({hide: nextState})
    await chrome.tabs.sendMessage(tab.id, {hide: nextState})
  }
});