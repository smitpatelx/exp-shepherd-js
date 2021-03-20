import Vue from 'vue'
import Shepherd from 'shepherd.js'
import StepType from 'shepherd.js/src/types/step'
import TourType from 'shepherd.js/src/types/tour'

// declare module 'vue/types/vue' {
//   // this.$myInjectedFunction inside Vue components
//   interface Vue {
//     $shepherd_t: (...args: TourType[]) => Shepherd.Tour,
//     $shepherd_s: (...args: StepType[]) => Shepherd.Step,
//   }
// }

Vue.prototype.$shepherd_t = (args: TourType) => new Shepherd.Tour(args)
Vue.prototype.$shepherd_s = (tour: TourType, options: StepType.StepOptions) => new Shepherd.Step(tour, options)

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
