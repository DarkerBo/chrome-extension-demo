



# Chrome extension Demo

### 前言

本项目基于 React 脚手架 create-react-app 实现。主要实现了获取 Web 页面信息、一键暗黑模式等功能。通过开发该项目初步学习 Chrome 扩展的消息通信和动态 JS 注入。



### 项目主要结构

```
│── public                           
│   └── chrome                       // 放置chrome extension文件
│        └── content-script.js       // Web页面注入脚本
│        └── popup.js                // 扩展页面JS文件
│   └── images                       // 图片资源 如图标
│   └── index.html                   
│   └── manifest.json                // 配置所有和插件相关的配置
├── src             
│   └── pages            
│        └── DarkMode                // 暗黑模式
│        └── PageData                // 获取Web页面的信息，地址、标题、描述等
│   └── App.tsx          
│   └── index.tsx      
```



### 运行效果图

* **获取Web页面信息**

![获取Web页面信息](/screenshots/获取Web页面信息.gif)



* **暗黑模式**

![暗黑模式](/screenshots/暗黑模式.gif)



### 注意事项

1. 为了降低潜在XSS攻击，Chrome 扩展开发 内容安全策略Content Security Policy (CSP)  。因此根据开发者的需要配置白名单：

`manifest.json`

~~~
"content_security_policy": "script-src 'self'; object-src 'self';"
~~~



2. 默认情况下，Create React App将`index.html`在生产构建期间将运行时脚本嵌入到其中。`INLINE_RUNTIME_CHUNK`设置为`false`，脚本将不会被嵌入，并且将照常导入。处理CSP时通常需要这样做：

`package.json`

~~~
"build": "set \"INLINE_RUNTIME_CHUNK=false\" && react-scripts build"
~~~

