<template>
  <div>
    <el-col :span="12">
      <h1>自定义指令</h1>
      <plugin-title :title="'cxs'"></plugin-title>
      <br />
      <el-input v-focus></el-input>
      <el-button v-debounce="search">搜索</el-button>
    </el-col>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    search () {
      console.log('搜索')
    }
  }
}
</script>
<style lang="less" scoped></style>
