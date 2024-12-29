// src/main.js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { globalMixin } from './mixins/globalMixin'

Vue.config.productionTip = false
Vue.mixin(globalMixin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
