Vue.use(window['vue-plugin-boilerplate'].default)

new Vue({
  data: { a: 1, b: 2 },
  computed: {
    result: function () {
      return this.$add(this.a, this.b)
    }
  }
}).$mount('#app')
