Vue.use(VuePluginBoilerplate)

new Vue({
  data: { a: 1, b: 2 },
  computed: {
    result: function () {
      return this.$add(this.a, this.b)
    }
  }
}).$mount('#app')
