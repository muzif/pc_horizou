import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/index' // 测试案例
import pad from '@/pages/pad/pad' // 测试案例

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta:{title:"首页"}
    },
    {
      path: '/pad',
      name: 'pad',
      component: pad,
      meta:{title:"购物车"}
    }
  ]
})
