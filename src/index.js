function plugin (Vue, options = {}) {
  Vue.prototype.$add = (a, b) => {
    return a + b
  }
}

plugin.version = '1.2.0'

export default plugin
