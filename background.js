
  
chrome.browserAction.onClicked.addListener(function(tab) {
    console.log("start polarizing")
    chrome.tabs.executeScript(tab.ib, {
		file: 'polarScript.js'
	});
});
