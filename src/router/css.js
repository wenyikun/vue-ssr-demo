export default {
  title: 'CSS技巧',
  path: '/css',
  component: () => import('@/views/css/index.vue'),
  redirect: '/css/what-is-fliter',
  children: [
    {
      parentTitle: '滤镜(fliter)',
      path: 'what-is-fliter',
      component: () => import('@/views/css/what-is-fliter.vue'),
      title: 'fliter是什么'
    },
    {
      parentTitle: '滤镜(fliter)',
      path: 'fliter-gradient',
      component: () => import('@/views/css/fliter-gradient.vue'),
      title: 'fliter设置渐变背景'
    }
  ]
}
