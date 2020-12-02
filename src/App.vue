<template>
  <div id="app">
    <router-link :to="'/default'">时刻-1</router-link>
    <router-link :to="'/Base'">时刻-2</router-link>

    <p @click="$store.commit('add')">
      commit方案： counter: {{ $store.state.counter }}
    </p>
    <p @click="$store.dispatch('addAction')">
      dispatch方案： counter {{ $store.state.counter }}
    </p>
    <p>double counter: {{ $store.getters.doubleCounter }}</p>
    <p @click="$store.dispatch('asyncTest')">
      async counter: {{ $store.state.counter }}
    </p>
    <router-view></router-view>
  </div>
</template>
<script>
// import AppHome from "./views/home/index";
// import breadcrumb from "@/components/breadcrumb/index";
export default {
  // components: {
  //   AppHome,
  //   breadcrumb
  // },
  data() {
    return {
      title: "12234"
    };
  },
  mounted() {
    // console.log(this.$store);
  }
};
</script>

<style lang="less" scoped>
#app {
  height: 100%;
  .box {
    height: 100%;
    .el-header {
      height: 60px;
      line-height: 60px;
      background: #eee;
    }
    .el-main-box {
      padding: 0px;
    }
    .el-footer {
      height: 60px;
      line-height: 60px;
      background: #cecece;
    }
    .el-main-box {
      height: calc(100% - 120px);
      div[type="box"] {
        height: 100%;
      }
    }
  }
}
</style>
