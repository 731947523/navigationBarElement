<template>
  <el-submenu class="li" :index="item.index" v-if="item.children">
    <template slot="title">
      <i :class="item.iconClass"></i>
      <span>{{ item.title }}</span>
    </template>
    <template v-if="item.children">
      <default-home
        v-for="(item, index) in item.children"
        :item="item"
        :key="index"
      ></default-home>
    </template>
  </el-submenu>
  <el-menu-item v-else :index="item.index">
    <router-link :to="{ path: item.path }" class="cxs-a-line">
      <i :class="item.iconClass"></i>
      <span>{{ item.title }}</span>
    </router-link>
  </el-menu-item>
</template>
<script>
export default {
  props: ["item"],
  name: "defaultHome",
  data() {
    return {};
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
