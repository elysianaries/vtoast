import Vue from 'vue'
import App from './App.vue'

import vtoast from '../dist/vtoast'
console.log(vtoast)
// import './assets/main.sass'

new Vue({
  el: '#app',
  render: h => h(App)
})
