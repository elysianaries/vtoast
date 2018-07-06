import Vue from 'vue'
import vueToast from './vtoast.vue'

let ToastConstructor = Vue.extend(vueToast)
let instance

let init = () => {
  instance = new ToastConstructor({
    el: document.createElement('div')
  })
  document.body.append(instance.$el)
}

let showToast = (msg, pos='bottom', duration=2000,) => {
    init()
    instance.msg_content = msg
    instance.duration = duration
    instance.pos = pos
    instance.show()
}

const finalToast = {
  install(Vue, options) {
    Vue.prototype.vtoast = showToast
  }
}

export default finalToast
