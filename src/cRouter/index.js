/*
 * 1、实现插件: 实现router  和 install方法
 * 2、实现两个全局组件 route-link    route-view
 * 3、监听路由变化 hashchange或popstate事件
 * 4、响应最新url，创建一个属于current，改变时获取对应组件
 */
let Vue;
class CRouter {
  constructor(options) {
    this.$option = options;
    // 需要创建响应式的current属性 this.current = "/default";
    Vue.util.defineReactive(this, "current", "/default");

    // 监听hashchange事件
    window.addEventListener("hashchange", this.onHashChange.bind(this));
    window.addEventListener("load", this.onHashChange.bind(this));

    // 创建一个路由映射表
    this.routeMap = {};
    options.routes.forEach(route => {
      this.routeMap[route.path] = route;
    });
  }
  onHashChange() {
    this.current = window.location.hash.slice(1);
  }
}
// 存在
CRouter.install = _vue => {
  // 保存构造函数  在CRouter里面使用
  Vue = _vue;
  //   挂载$router  使用mixins
  Vue.mixin({
    beforeCreate() {
      // console.log(this);
      //   确保根实例的时候才执行
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router;
      }
    }
  });

  // 创建自带组件
  Vue.component("router-link", {
    props: {
      to: {
        type: String,
        required: true
      }
    },
    render(h) {
      // <a href='#/ablut'></a>
      // h(tag, data, children)
      return h(
        "a",
        { attrs: { href: "#" + this.to }, class: "cxs" },
        this.$slots.default
      );
    }
  });
  Vue.component("router-view", {
    props: {},
    render(h) {
      // 获取对象path的component
      const { routeMap, current } = this.$router;
      let component = routeMap[current].component || null;
      return h(component);
    }
  });
};
export default CRouter;
