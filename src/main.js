import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
// 按需导入组件
import './plugins/element.js'
// 导入全局样式表
import './assets/css/global.css'
import * as echarts from 'echarts'
import 'lib-flexible'

import axios from 'axios'
Vue.prototype.$http = axios

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
