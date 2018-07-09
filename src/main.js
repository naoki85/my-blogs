import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import Router from './plugins/router'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router: Router,
  render: h => h(App)
}).$mount('#app')
