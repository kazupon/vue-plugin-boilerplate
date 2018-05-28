import _Vue, { PluginObject } from 'vue'

const version = '__VERSION__'

const install = (Vue: typeof _Vue): void => {
  Vue.prototype.$add = (a: number, b: number): number => {
    return a + b
  }
}

const plugin: PluginObject<_Vue> = {
  install,
  version
}

export default plugin

interface Window {
  Vue: any
}

if (typeof window !== 'undefined' && (<any>window).Vue) {
  (<any>window).Vue.use(plugin)
}
