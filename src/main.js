import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import leftBody from '@/views/common/leftBody'
import './plugins/element.js'

import  VueResource  from 'vue-resource'

Vue.use(VueResource)

Vue.component("leftBody",leftBody)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
