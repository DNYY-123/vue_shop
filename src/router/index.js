import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    // 访问根路径，重定向到login
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: () => import('../components/Login'),
      meta: { title: 'login' }
    },
    {
      path: '/mean',
      component: () => import('../components/demand-source')
    },
    {
      path: '/test',
      component: () => import('../components/index')
    },
    {
      path: '/2',
      component: () => import('../components/Header')
    },
    {
      path: '/q',
      component: () => import('../components/123')
    },
    {
      path: '/time',
      component: () => import('../components/time')
    },
    {
      path: '/echart',
      component: () => import('../components/echart')
    },
    {
      path: '/bar',
      component: () => import('../components/echarts/bar')
    },
    {
      path: '/bi',
      component: () => import('../components/bi')
    },
    {
      path: '/xl',
      component: () => import('../components/test')
    }
  ]
})

export default router
