import Vue from "vue";
import Router from "vue-router";
console.log('临时 test route')
Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/default"
    },
    {
      path: "/default",
      component: resolve => require(["@/views/default/index"], resolve)
    },
    {
      path: "/Base",
      meta: {
        title: "导航一"
      },
      component: resolve => require(["@/views/daohang/Base/index"], resolve),
      children: [
        {
          path: "/Base/slot",
          meta: {
            title: "插槽"
          },
          component: resolve =>
            require(["@/views/daohang/Base/slot/index"], resolve)
        },
        {
          path: "/Base/form",
          meta: {
            title: "实现表单"
          },
          component: resolve =>
            require(["@/views/daohang/Base/form/index"], resolve)
        },
        {
          path: "/Base/directive",
          meta: {
            title: "指令"
          },
          component: resolve =>
            require(["@/views/daohang/Base/directive/index"], resolve),
          children: [
            // {
            //   path: "child2",
            //   meta: {
            //     title: "选项二_子二"
            //   },
            // component: resolve =>
            // require(["@/views/daohang/dao1/xuan2/child2/index"], resolve)
            // }
          ]
        }
      ]
    }
  ]
});
router.beforeEach((to, from, next) => {
  // console.log(to, from)
  next();
});
export default router;
