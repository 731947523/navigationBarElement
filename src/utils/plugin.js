/*
 *   插件经常在npm下和cdn的时候使用
 */
// 生命插件
import load from '../views/daohang/Base/directive/loading.vue'
const Myplugin = {
  install (Vue, options) {
    console.log('自己写的插件', options)
    Vue.component('pluginTitle', load)
    Vue.prototype.$name = '李莹'
  }
}
// 使用插件
// if (typeof window !== "undefined" && window.Vue) {
//   console.log("-------", Myplugin);
//   window.Vue.use(Myplugin);
// }
export default Myplugin
