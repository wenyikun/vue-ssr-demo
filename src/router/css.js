export default {
  title: 'CSS技巧',
  path: '/css',
  component: () => import('@/views/css/index.vue'),
  redirect: '/css/layout',
  children: [
    {
      parentTitle: '布局',
      path: 'layout',
      component: () => import('@/views/css/content.vue'),
      title: '圣杯布局'
    },
    {
      parentTitle: '边框',
      path: 'border',
      component: () => import('@/views/css/content.vue'),
      title: '边框实现方法'
    }
  ]
}
