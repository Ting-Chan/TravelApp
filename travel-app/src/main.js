import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import './assets/style/normalize.css'
import './assets/style/border.css'
import './assets/style/iconfont.css'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)

// 解决移动端300ms点击事件延迟
fastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
