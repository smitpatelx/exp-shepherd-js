import Vue from 'vue'
import Shepherd from 'shepherd.js'

declare module 'vue/types/vue' {
  // this.$myInjectedFunction inside Vue components
  interface Vue {
    $shepherd: (...args: any[]) => Shepherd.Tour
  }
}

Vue.prototype.$shepherd = (...args: any[]) => new Shepherd.Tour(...args)

import App from './App.vue'
import router from './router'
import store from './store'
import './style/tailwind.css'
import './style/shepherd.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
