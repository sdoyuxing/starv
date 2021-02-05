# 快速上手

## 引入StarV

main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import starv from 'star-design-vue';
import 'star-design-vue/dist/styles/index.css';
import App from './App.vue';

Vue.use(starv);

new Vue({
  el: '#app',
  render: h => h(App)
});
```