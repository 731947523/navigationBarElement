import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
import store from "./cVuex/index";
// 自定义指令
import directive from "./utils/directive";
import "./style/reset.css";
for (const key in directive) {
  Vue.directive(key, directive[key]);
}
// import Myplugin from "@/utils/plugin";
import Myplugin from "./utils/plugin";
// Myplugin(Vue);
Vue.use(Myplugin);
// 创建notice组件
import createNotice from "@/utils/createNotice";
// Vue.prototype.$createNotice = createNotice;
Vue.use(createNotice);
//  引入element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
