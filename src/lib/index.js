import Vue from 'vue'
import vueToast from './vtoast.vue'

let ToastConstructor = Vue.extend(vueToast)
let instance

let hasShow = true

let init = () => {
  instance = new ToastConstructor({
    el: document.createElement('div')
  })
  document.body.append(instance.$el)
}

let showToast = (msg, pos='bottom', duration=2000,) => {
  if (hasShow) {
    hasShow = false
    init()
    instance.msg_content = msg
    instance.duration = duration
    instance.pos = pos
    instance.show()

    setTimeout(() => {
      hasShow = true
    }, duration)
  }
}

const finalToast = {
  install(Vue, options) {
    Vue.prototype.vtoast = showToast
  }
}

export default finalToast
