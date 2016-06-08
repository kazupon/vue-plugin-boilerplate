function plugin (Vue, options = {}) {
  Vue.prototype.$add = (a, b) => {
    return a + b
  }
}

plugin.version = '1.3.0'

export default plugin

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
