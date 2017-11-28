chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.tabs.sendMessage(tab.id, {
		command : "show_editButtons"
	},
		function (msg) {
		console.log("result message:", msg);
	});
});
