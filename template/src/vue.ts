/*
 * NOTE: if you need to extend Vue contstructor, you can extend it in here.
 */

// NOTE: if you don't need, you should remove!
type PluginAddFunction = (a: number, b: number) => number

// NOTE: if you don't need, you should remove!
declare module 'vue/types/vue' {
  interface Vue {
    $add: PluginAddFunction
  }
}
