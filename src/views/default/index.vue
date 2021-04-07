<template>
  <div>
    <h1>默认首页</h1>
    <directives-input></directives-input>
    <p v-purview="1">权限1</p>
    <p v-purview="2">权限2</p>
    <p v-purview="3">权限3</p>
    <p v-purview="4">权限4</p>
    <p>权限5</p>
    <!-- <head-leavel :leavel="2"> 佛挡杀佛</head-leavel> -->
  </div>
</template>

<script>
// import directivesInput from "./input";

export default {
  data () {
    return {}
  },
  components: {
    // directivesInput
  },
  created () {}
}
</script>
<style lang="less" scoped></style>
