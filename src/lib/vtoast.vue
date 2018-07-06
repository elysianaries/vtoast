<template lang="pug">
  transition(name='fade-in')
    .toast-content(v-if='toast_show')
       span {{msg_content}}
</template>

<script>
export default {
  name: 'vtoast',
  data() {
    return {
      toast_show: 1,
      msg_content: 'it is toast',
      duration: 2000
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
     top: 2rem
     text-align: center
     width: 100%
     span
       padding: 0.3rem 0.8rem
       color: #fff
       background-color: #4c4c4c
       font-size: 0.7rem
       border-radius: 0.2rem


</style>
