function plugin (Vue) {
  Vue.prototype.$add = (a, b) => {
    return a + b
  }
}

plugin.version = '__VERSION__'

export default plugin

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
