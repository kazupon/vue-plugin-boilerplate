/*!
 * vue-plugin-boilerplate v1.2.0
 * (c) 2015 kazuya kawaguchi
 * Released under the MIT License.
 */
'use strict';

function plugin(Vue) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  Vue.prototype.$add = function (a, b) {
    return a + b;
  };
}

plugin.version = '1.2.0';

module.exports = plugin;