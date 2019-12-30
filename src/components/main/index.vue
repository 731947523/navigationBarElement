<template>
  <li>
    <template v-if="item.children">
      <el-submenu :index="item.title">
        <template slot="title">
          <i :class="item.iconClass"></i>
          <router-link v-if="item.path" :to="{ path: item.path }">
            <span>{{ item.title }}</span>
          </router-link>
          <span v-else>{{ item.title }}</span>
        </template>
        <default-home v-for="(item, index) in item.children" :item="item" :key="index"></default-home>
      </el-submenu>
    </template>
    <template v-else>
      <el-menu-item :index="item.title">
        <router-link :to="{ path: item.path }" class="cxs-a-line">
          <i :class="item.iconClass"></i>
          <span>{{ item.title }}</span>
        </router-link>
      </el-menu-item>
    </template>
  </li>
</template>
<script>
export default {
  props: ["item"],
  name: "defaultHome",
  data() {
    return {};
  },
  mounted() {
    // console.log(this.$route, 3333);
  },
  watch: {
    $route(to, from) {
      console.log("路由变化", to, from);
      // this.activeRoute(to, from);
    }
  }
};
</script>
<style lang="less" scoped>
/deep/.el-submenu,
.el-submenu .el-menu-item {
  padding: 0;
}
.cxs-a-line {
  display: inline-block;
  width: 100%;
  height: 100%;
}
.router-link-active {
  color: orangered;
}
</style>
