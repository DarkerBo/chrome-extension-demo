window.onload = () => {
	// 获取 content-script.js 返回的web页面信息
	chrome.tabs.query({
		active: true,
		currentWindow: true
	}, function (tabs) {
		// 获取当前窗口 id 
		console.log(tabs, 'tabs');
		let tabId = tabs.length ? tabs[0].id : null;
		// 先向 content-script.js 发送一个消息，用来检验通信通道
		chrome.tabs.sendMessage(tabId, {
			message: 'GET_TOPIC_INFO',
		}, function (response) {
			// 获取到返回的文章 title 、url、description 
			console.log(response, 'response');
			if (!response) {
				console.log('获取chrome tabs 信息失败');
				return;
			}
			// 把信息发送给扩展页的内部，为了避免其他插件的影响，增加了一个type校验
			window.postMessage({ type: 'tabsData', response }, '*');
		});
	});
}
