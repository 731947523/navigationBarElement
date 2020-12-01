<template>
  <div class="c-input">
    <!-- 自定义组件实现双向绑定 value   @input -->
    {{ name }}--{{ sex }}
    <input :value="value" @input="onInput" :type="type" />
    <CAttrs v-bind="$attrs" v-on="$listeners"></CAttrs>
  </div>
</template>

<script>
import CAttrs from "./attrs";
export default {
  data() {
    return {};
  },
  components: {
    CAttrs
  },
  props: {
    value: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    sex: {
      type: String
    },
    name: {
      type: String
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
