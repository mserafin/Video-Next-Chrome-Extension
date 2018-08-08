((chrome) => {
	chrome.contextMenus.removeAll();

	chrome.contextMenus.create({
		id: 'play.faster',
		title: chrome.i18n.getMessage('button_name'),
		contexts: ['page','video']
	});

	chrome.contextMenus.onClicked.addListener((info, tab) => {
		if (info.menuItemId === 'play.faster') {
			chrome.tabs.executeScript(tab.id, {
				file: 'content.js',
				frameId: info.frameId,
				allFrames: true,
			});
		}
	});
}).call(this, chrome);
