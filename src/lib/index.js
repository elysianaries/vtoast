import Vue from 'vue'
import vueToast from './vtoast.vue'

let ToastConstructor = Vue.extend(vueToast)
let hasShow = false
let init = () => {
  let instance = new ToastConstructor({
    el: document.createElement('div')
  })
  document.body.appendChild(instance.$el);
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

const testToast = {
  install(Vue, options) {
    Vue.prototype.vtoast = showToast
  }
}

export default testToast
