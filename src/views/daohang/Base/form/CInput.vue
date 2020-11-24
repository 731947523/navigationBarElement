<template>
  <div class="c-input">
    <!-- 自定义组件实现双向绑定 value   @input -->
    <input :value="value" @input="onInput" :type="type" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    value: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    }
  },
  methods: {
    onInput(e) {
      // 派发input事件
      this.$emit("input", e.target.value);

      // 通知父级
      this.$parent.$emit("validate", e.target.value);
    }
  }
};
</script>

<style lang="less" scoped>
.c-input {
  display: inline-block;
}
</style>
