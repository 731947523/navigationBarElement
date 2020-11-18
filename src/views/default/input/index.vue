<template>
  <div>
    <h5>此页面为input页面，测试自定义指令</h5>
    <el-input v-focus type="text" />
    <br />
    <el-input type="text" />
    <el-button v-debounce="testClick">
      点击
    </el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    testClick() {
      console.log("111");
    }
  }
};
</script>
<style lang="less" scoped></style>
