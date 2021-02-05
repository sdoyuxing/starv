# 安装

## npm安装

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

```shell
$ npm install star-design-vue --save
``` 

## CDN安装
目前可以通过 unpkg.com/star-design-vue 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。
```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/star-design-vue/dist/styles/star.css">
<!-- import iView -->
<script src="https://unpkg.com/star-design-vue/dist/star.js"></script>
```
### 示例
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>example</title>
    <link rel="stylesheet" type="text/css" href="https://unpkg.com/star-design-vue/dist/styles/star.css">
    <script type="text/javascript" src="http://vuejs.org/js/vue.min.js"></script>
    <script src="https://unpkg.com/star-design-vue/dist/star.js"></script>
</head>
<body>
<div id="app">
    <s-button>Click me!</s-button>
</div>
<script>
    new Vue({
        el: '#app'
    })
  </script>
</body>
</html>
```