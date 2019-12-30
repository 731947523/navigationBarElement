<template>
  <!-- <div>
    <default-home v-for="(item, index) in list" :key="index" :item="item"></default-home>
  </div>-->

  <el-menu default-active="2" class="el-menu-vertical-demo">
    <default-home v-for="(item, index) in list" :key="index" :item="item"></default-home>
  </el-menu>
</template>
<script>
import defaultHome from "@/components/main/index.vue";
export default {
  components: {
    defaultHome
  },
  data() {
    return {
      list: [
        {
          title: "概况",
          iconClass: "el-icon-setting",
          path: "/default"
        },
        {
          title: "导航一",
          iconClass: "el-icon-location",
          children: [
            {
              title: "选项一",
              iconClass: "",
              path: "/dao1/xuan1"
            },
            {
              title: "选项二",
              children: [
                {
                  title: "选项二_一",
                  path: "/dao1/xuan2/child1"
                },
                {
                  title: "选项二_二",
                  path: "/dao1/xuan2/child2"
                }
              ]
            }
          ]
        },
        {
          title: "导航二",
          iconClass: "el-icon-menu",
          children: [
            {
              title: "选项1",
              path: "/dao2/xuan1"
            }
          ]
        },
        {
          title: "导航三",
          iconClass: "el-icon-setting",
          path: "/dao3/index"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.el-menu {
  height: 100% !important;
}
</style>
