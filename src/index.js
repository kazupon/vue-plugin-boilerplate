export default function (Vue, options = {}) {
  Vue.prototype.$add = (a, b) => {
    return a + b
  }
}
