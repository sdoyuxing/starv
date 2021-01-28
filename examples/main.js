// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import button from './routers/button'
import ebutton from './routers/ebutton'
import icon from './routers/icon'
import radio from './routers/radio'
import input from './routers/input'
import checkbox from './routers/checkbox'
import describe from './routers/describe'
import dswitch from './routers/switch'
import alert from './routers/alert'
import tag from './routers/tag'
import select from './routers/select'
import progressBar from './routers/progressBar'
import pagination from './routers/pagination'
import message from './routers/message'
import hljs from 'highlight.js'
import starUi from '../src/index'
import tooltip from './routers/tooltip'
import poptip from './routers/poptip'
import notice from './routers/notice'
import modal from './routers/modal'
import table from './routers/table'
import tabs from './routers/tabs'
import datepicker from './routers/datepicker'
import tree from './routers/tree'
import menu from './routers/menu'
import '../src/styles/index.less'
import './styles/index.less'
import 'highlight.js/styles/atom-one-light.css' //样式

Vue.config.productionTip = false
Vue.use(Router)
Vue.use(starUi)

Vue.directive('highlight', {
  inserted: function (el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block) => {
      block.innerHTML = block.innerHTML.replace('\n', '').replace('\n', '').trim()
      hljs.highlightBlock(block)
    })
  }
})

function getAbsolutePath() {
  let pathName = location.pathname
  if (pathName.length > 1) {
    // let path = pathName.charAt(pathName.length - 1) === '/' ? pathName.substr(0, pathName.length - 1) : pathName
    return pathName.substring(0, pathName.lastIndexOf('/') + 1)
  } else {
    return ''
  }
}
const router = new Router({
  base: getAbsolutePath(),
  mode: 'history',
  routes: [{
      path: '/',
      name: '',
      component: describe
    }, {
      path: '/starv',
      name: 'starv',
      component: describe
    },
    {
      path: '/button',
      name: 'button',
      component: button
    },
    {
      path: '/ebutton',
      name: 'ebutton',
      component: ebutton
    },
    {
      path: '/radio',
      name: 'radio',
      component: radio
    },
    {
      path: '/icon',
      name: 'icon',
      component: icon
    }, {
      path: '/input',
      name: 'input',
      component: input
    }, {
      path: '/checkbox',
      name: 'checkbox',
      component: checkbox
    }, {
      path: '/switch',
      name: 'switch',
      component: dswitch
    }, {
      path: '/alert',
      name: 'alert',
      component: alert
    }, {
      path: '/tag',
      name: 'tag',
      component: tag
    }, {
      path: '/select',
      name: 'select',
      component: select
    }, {
      path: '/tooltip',
      name: 'tooltip',
      component: tooltip
    }, {
      path: '/progressBar',
      name: 'progressBar',
      component: progressBar
    }, {
      path: '/pagination',
      name: 'pagination',
      component: pagination
    }, {
      path: '/message',
      name: 'message',
      component: message
    }, {
      path: '/notice',
      name: 'notice',
      component: notice
    }, {
      path: '/poptip',
      name: 'poptip',
      component: poptip
    }, {
      path: '/modal',
      name: 'modal',
      component: modal
    }, {
      path: '/table',
      name: 'table',
      component: table
    }, {
      path: '/tabs',
      name: 'tabs',
      component: tabs
    }, {
      path: '/datepicker',
      name: 'datepicker',
      component: datepicker
    }, {
      path: '/tree',
      name: 'tree',
      component: tree
    }, {
      path: '/menu',
      name: 'menu',
      component: menu
    }
  ]
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