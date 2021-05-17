import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Mean from '../components/demand-source.vue'
import Test from '../components/index.vue'
import Header from '@/components/Header'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    // 访问根路径，重定向到login
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/mean', component: Mean },
    { path: '/test', component: Test },
    { path: '/2', component: Header }
  ]
})

export default router
