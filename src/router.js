import Vue from "vue";
import Router from "vue-router";

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
      path: "/dao1",
      meta: {
        title: "导航一"
      },
      component: resolve => require(["@/views/daohang/dao1/index"], resolve),
      children: [
        {
          path: "xuan1",
          meta: {
            title: "选项一"
          },
          component: resolve => require(["@/views/daohang/dao1/xuan1/index"], resolve)
        },
        {
          path: "xuan2",
          meta: {
            title: "选项二"
          },
          component: resolve => require(["@/views/daohang/dao1/xuan2/index"], resolve),
          children: [
            {
              path: "child2",
              meta: {
                title: "选项二_子二"
              },
              component: resolve => require(["@/views/daohang/dao1/xuan2/child2/index"], resolve)
            },
            {
              path: "child1",
              meta: {
                title: "选项二_子一"
              },
              component: resolve => require(["@/views/daohang/dao1/xuan2/child1/index"], resolve)
            }
          ]
        }
      ]
    },
    {
      path: "/dao2",
      meta: {
        title: "导航二"
      },
      component: resolve => require(["@/views/daohang/dao2/index"], resolve),
      children: [
        {
          path: "xuan1",
          meta: {
            title: "选项1"
          },
          component: resolve => require(["@/views/daohang/dao2/xuan1/index"], resolve)
        }
      ]
    },
    {
      path: "/dao3/index",
      meta: {
        title: "导航三"
      },
      component: resolve => require(["@/views/daohang/dao3/index"], resolve)
    }
  ]
});
router.beforeEach((to, from, next) => {
  // console.log(to, from)
  next();
});
export default router;
