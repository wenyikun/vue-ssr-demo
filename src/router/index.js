import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default () => {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: () => import('@/views/home.vue')
      },
      {
        path: '/test',
        component: () => import('@/views/test.vue')
      }
    ]
  })
}