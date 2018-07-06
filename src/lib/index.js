import Vue from 'vue'
import vueToast from './vtoast.vue'

let ToastConstructor = Vue.extend(vueToast)
let hasShow = false
let instance

let init = () => {
  instance = new ToastConstructor({
    el: document.createElement('div')
  })
}

let showToast = (msg, duration=2000) => {
  if (!hasShow) {
    hasShow = true
    init()
    instance.msg_content = msg
    instance.duration = duration
    instance.show()
    setTimeout(() => {
      hasShow = false
    }, duration)
  }
}

const finalToast = {
  install(Vue, options) {
    Vue.prototype.vtoast = showToast
  }
}


export default finalToast
