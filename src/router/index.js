import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Mean from '../components/demand-source.vue'
import Test from '../components/index.vue'
import Header from '@/components/Header'
import Qw from '../components/123'
import Time from '../components/time'
import Echart from '../components/echart'
import Bar from '../components/echarts/bar'
import Bi from '../components/bi'
import Xls from '../components/test'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    // 访问根路径，重定向到login
    { path: '/', redirect: '/login' },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/mean',
      component: Mean
    },
    {
      path: '/test',
      component: Test
    },
    { path: '/2', component: Header },
    { path: '/q', component: Qw },
    { path: '/time', component: Time },
    { path: '/echart', component: Echart },
    {
      path: '/bar',
      component: Bar
    },
    {
      path: '/bi',
      component: Bi
    },
    {
      path: '/xl',
      component: Xls
    }
  ]
})

export default router
