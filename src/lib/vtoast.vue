<template lang="pug">
  transition(name='fade-in')
    .toast-content(v-if='toast_show', :style='finalStyle')
       span {{msg_content}}
</template>

<script>
export default {
  name: 'vtoast',
  data() {
    return {
      toast_show: 0,
      msg_content: 'it is toast',
      duration: 2000,
      top_style: 'top: 20vh',
      pos: 'bottom',
      final_style: ''
    }
  },
  computed: {
    finalStyle() {

      console.log(this.pos)
      switch (this.pos) {
        case 'bottom':
          return 'bottom: 20vh'
          break;
        case 'top':
          return 'top: 10vh'
          break;
        case 'center':
          return 'bottom: 45vh'
          break;
        default:
          return 'bottom: 20vh'
      }
    }
  },
  methods: {
    show() {
      this.toast_show = 1
      setTimeout(() => {
        this.toast_show = 0
      }, this.duration)
    }
  }
}
</script>

<style lang="sass">
  .fade-in-enter-active, .fade-in-leave-active
    transition: all 0.5s
  .fade-in-enter, .fade-in-leave-active
    opacity: 0
  .toast-content
    position: fixed
    bottom: 4rem
    text-align: center
    width: 100%
    z-index: 3000
    span
      padding: 0.3rem 0.8rem
      color: #fff
      background-color: #4c4c4c
      font-size: 0.7rem
      border-radius: 0.3rem


</style>
