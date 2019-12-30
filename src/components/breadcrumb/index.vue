<template>
  <div>
    <el-breadcrumb separator="/">
      <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> -->
      <el-breadcrumb-item v-for="(item, index) in routeList" :key="index">{{ item.meta.title }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  data() {
    return {
      routeList: []
    };
  },
  watch: {
    $route(to, from) {
      // console.log('路由变化',to, from)
      this.activeRoute(to, from);
    }
  },
  created() {
    // console.log('进图',this)
  },
  methods: {
    activeRoute(to, from) {
      // console.log("目的页面", to, to.matched);
      this.routeList = to.matched;
    }
  }
};
</script>
<style lang="less" scoped></style>
