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

// -----------------------------------------------------------------------------------

// 暗黑模式
/**
 * 获取URL
 */
function getCurrentTabUrl(callback) {
  let queryInfo = {
    active: true,
    currentWindow: true,
  }

  chrome.tabs.query(queryInfo, (tabs) => {
    let tab = tabs[0]
    let url = tab.url
    console.assert(typeof url === 'string', 'tab.url should be a string')
    callback(url)
  })
}

/**
 *改变当前页面的背景颜色。
 *
 */
function changeBackgroundStyle() {
  const script = 'document.body.style.filter = "grayscale(1)";';
  // 向页面注入JavaScript代码.
  chrome.tabs.executeScript({
    code: script,
  })
}

// 插件会先加载用户上次选择的颜色，如果存在的话。
document.addEventListener('DOMContentLoaded', () => {
	console.log('DOMContentLoaded');
	const DarkBtn = document.getElementById('DarkBtn');
	console.log(DarkBtn);

  getCurrentTabUrl((url) => {
    // 更改 背景颜色
    DarkBtn.addEventListener('click', function () {
      changeBackgroundStyle();
    })
  })
})
