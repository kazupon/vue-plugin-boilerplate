{{#flow}}/* @flow */{{/flow}}
function plugin (Vue{{#flow}}: any{{/flow}}, options{{#flow}}: Object{{/flow}} = {}) {
  Vue.prototype.$add = (a{{#flow}}: number{{/flow}}, b{{#flow}}: number{{/flow}}){{#flow}}: number{{/flow}} => {
    return a + b
  }
}

plugin.version = '{{ version }}'

export default plugin

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
