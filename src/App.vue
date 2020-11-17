<template>
  <div id="app">
    <el-container class="box">
      <!-- <el-header>晨曦-----------头部</el-header> -->
      <el-container class="el-main-box">
        <!-- <el-aside width="200px" style="height:100%"> -->
        <!-- 左侧导航 -->
        <!-- <app-home></app-home>
        </el-aside> -->
        <el-main>
          <!-- 面包屑 -->
          <!-- <breadcrumb></breadcrumb> -->
          <router-view />
        </el-main>
      </el-container>
      <el-footer>底部</el-footer>
    </el-container>
  </div>
</template>
<script>
import AppHome from "./views/home/index";
import breadcrumb from "@/components/breadcrumb/index";
export default {
  components: {
    AppHome,
    breadcrumb
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
