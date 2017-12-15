// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import routes from './router'
import vueCropper from 'vue-cropper'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(vueCropper)
    /* eslint-disable no-new */
Vue.use(VueRouter)
const router = new VueRouter({
    routes //routes不能动
})
console.log("VueRouter", VueRouter)
console.log("router", router)
new Vue({
    router
}).$mount('#app')