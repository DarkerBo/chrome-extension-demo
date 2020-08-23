chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // 接受到popup.js 发送过来的校验信息，确认通信安全建立
  // 接着开始获取web页面信息并返回给popup.js，再由popup.js返回给扩展页的内部
  if (request.message === "GET_TOPIC_INFO") {
    const msg = getMsg();
    // 发送数据到插件内部
    sendResponse(msg);
  }
});

const getMsg = () => {
  let title = document.getElementsByTagName('title')[0].text;
  let descriptionEl = document.querySelectorAll('meta[name=description]')[0];
  // 获取web网页描述 
  let description = descriptionEl ? descriptionEl.getAttribute('content') : title;
  const msg = {
    title,
    description,
    link: location.href,
  };
  console.log('msg: ', msg);
  return msg;
}

