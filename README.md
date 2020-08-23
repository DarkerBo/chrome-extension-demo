

* `manifest.json` 文件注释

~~~
{
  // 插件的名称
  "name": "chrome plugin demo", 
  // 浏览器右上角图标设置，browser_action、page_action、app必须三选一
  "browser_action": 
	{
		"default_icon": "img/icon.png",
		// 图标悬停时的标题，可选
		"default_title": "这是一个示例Chrome插件",
		"default_popup": "popup.html"
	},
	// 当某些特定页面打开才显示的图标
	/*"page_action":
	{
		"default_icon": "img/icon.png",
		"default_title": "我是pageAction",
		"default_popup": "popup.html"
	},*/
  
}
~~~

