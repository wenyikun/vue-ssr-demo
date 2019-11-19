import Vue from 'vue'
import Router from 'vue-router'
import css from './css.js'

Vue.use(Router)

export default () => {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        redirect: '/css/what-is-fliter',
        component: () => import('@/views/css/index.vue')
      },
      css
    ]
  })
}
