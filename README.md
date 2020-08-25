



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

![获取Web页面信息](.\screenshots\获取Web页面信息.gif)



* **暗黑模式**

![获取Web页面信息](.\screenshots\暗黑模式.gif)