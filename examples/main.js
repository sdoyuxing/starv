// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import starUi from '../src/index'
// import button from './docs/button.md'
// import ebutton from './routers/ebutton'
// import icon from './routers/icon'
// import radio from './routers/radio'
// import input from './routers/input'
// import checkbox from './routers/checkbox'
// import describe from './routers/describe'
// import dswitch from './routers/switch'
// import alert from './routers/alert'
// import tag from './routers/tag'
// import select from './routers/select'
// import progressBar from './routers/progressBar'
// import pagination from './routers/pagination'
// import message from './routers/message'

// import tooltip from './routers/tooltip'
// import poptip from './routers/poptip'
// import notice from './routers/notice'
// import modal from './routers/modal'
// import table from './routers/table'
// import tabs from './routers/tabs'
// import datepicker from './routers/datepicker'
// import tree from './routers/tree'
// import menu from './routers/menu'
import menus from "./menu"
import '../src/styles/index.less'
import './styles/index.less'
import 'highlight.js/styles/atom-one-light.css' //样式
import apiItem from "./components/apiItem"
import attrCode from "./components/attrCode"

Vue.component("api-item", apiItem);
Vue.component("attr-code", attrCode);
Vue.config.productionTip = false
Vue.use(Router)
Vue.use(starUi)


function getAbsolutePath() {
  let pathName = location.pathname
  if (pathName.length > 1) {
    // let path = pathName.charAt(pathName.length - 1) === '/' ? pathName.substr(0, pathName.length - 1) : pathName
    return pathName.substring(0, pathName.lastIndexOf('/') + 1)
  } else {
    return ''
  }
}
let routes = menus.mains.map(o => ({
  path: `/${o.path}`,
  name: o.path,
  component: resolve => require([`./docs/${o.path}.md`], resolve)
}))
// let routes = []
routes.push({
  path: "/",
  name: "",
  component: resolve => require([`./docs/introduction.md`], resolve)
})

menus.components.forEach(o => {
  routes = routes.concat(o.menus.map(item => ({
    path: `/${item.path}`,
    name: item.path,
    component: resolve => require([`./docs/${item.path}.md`], resolve)
  })))
})

const router = new Router({
  base: getAbsolutePath(),
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  starUi.progressBar.start()
  next()
})

router.afterEach(() => {
  starUi.progressBar.finish()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})

