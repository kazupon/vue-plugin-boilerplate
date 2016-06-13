{{#flow}}/* @flow */{{/flow}}
function plugin (Vue, options{{#flow}}: Object{{/flow}} = {}){{#flow}}: number{{/flow}} {
  Vue.prototype.$add = (a{{#flow}}: number{{/flow}}, b{{#flow}}: number{{/flow}}) => {
    return a + b
  }
}

plugin.version = '1.3.0'

export default plugin

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
