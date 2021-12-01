import Vue from 'vue'
import App from './App.vue'
// bootstrap
import 'bootstrap/scss/bootstrap.scss'
// fontawesome
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
