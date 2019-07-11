import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './App'
import router from './router'
import store from './store' // vuex store instance
require('es6-promise').polyfill()

const unsync = sync(store, router) // done. Returns an unsync callback fn

import { AjaxPlugin, Tabbar, TabbarItem, XButton, Group, Cell, InlineCalendar, XTextarea  } from 'vux'
let comps = [Tabbar, TabbarItem, XButton, Group, Cell ,InlineCalendar, XTextarea]
for (let comp of comps) {
  Vue.component(comp.name, comp)
}
Vue.use(AjaxPlugin)

import FastClick from 'fastclick'
FastClick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app-box')
