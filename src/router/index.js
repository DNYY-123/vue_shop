import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    // 访问根路径，重定向到login
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login }
  ]
})

export default router
