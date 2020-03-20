// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import {Message} from 'element-ui';
import {s_set,s_get} from './public/index'
Vue.use(ElementUI)
Vue.use('Message')
Vue.config.productionTip = false
Vue.prototype.$s_set = s_set
Vue.prototype.$s_get = s_get
// Vue.prototype.$alert = MessageBox.alert;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


router.beforeEach((to,form,next)=>{
  window.scrollTo(0, 0) //页面高度归0
  if(to.meta.title){
    document.title = to.meta.title
  }
  next()
  // // 判断用户是否登录 从session里面取值
  // if(sessionStorage.getItem("a")){
  //   next()
  // }else{
  //   // // alert("您还没有登录")
  //   // Vue.prototype.$message({
  //   //   type:"error",
  //   //   message:"您还没有登录"
  //   // })
  //   next({
  //     path: '/',
  //   })
  //   return
  // }
})
