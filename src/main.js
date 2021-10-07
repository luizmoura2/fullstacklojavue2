import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

import pdf from 'vue-pdf'
Vue.config.productionTip = false
Vue.component("pdf", pdf);


new Vue({
   pdf,
   store,
   router,
  render: h => h(App)
}).$mount('#app')