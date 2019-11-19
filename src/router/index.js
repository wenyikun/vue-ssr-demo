import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default () => {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: () => import('@/views/css/index.vue')
      },
      {
        path: '/css',
        component: () => import('@/views/css/index.vue'),
        children: [
          { path: 'content', component: () => import('@/views/css/content.vue') }
        ]
      }
    ]
  })
}
