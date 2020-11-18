import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import directive from "./utils/directive";
import "./style/reset.css";
// console.log(directive);
for (const key in directive) {
  Vue.directive(key, directive[key]);
  // console.log(key, "key", directive[key]);
}
// Vue.directive("focus", {
//   inserted(el) {
//     console.log(el.children[0]);
//     el.children[0].focus();
//   }
// });
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
