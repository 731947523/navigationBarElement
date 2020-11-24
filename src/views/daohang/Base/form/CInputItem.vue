<template>
  <div class="c-input-item">
    <label v-if="label">{{ label }}</label>
    <!-- 错误信息 -->
    <slot></slot>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import Schema from "async-validator";
export default {
  inject: ["user"],
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: {
      type: String
    }
  },
  data() {
    return {
      error: "" // error为空  代表通过
    };
  },
  mounted() {
    this.$on("validate", () => {
      this.validate();
    });
  },
  methods: {
    validate() {
      //   当前的规则
      // 获取对应FormItem校验规则
      const rules = this.user.rules[this.prop]; // 获取校验值
      //   传进来的是哪个input
      const value = this.user.user[this.prop]; // 校验描述对象
      const descriptor = { [this.prop]: rules }; // 创建校验器
      const schema = new Schema(descriptor); // 返回Promise，没有触发catch就说明验证通过
      return schema.validate(
        {
          [this.prop]: value
        },
        errors => {
          if (errors) {
            // 将错误信息显示
            this.error = errors[0].message;
          } else {
            // 校验通过
            this.error = "";
          }
        }
      );
      //   console.log(this.user.user[this.prop]);
    }
  }
};
</script>

<style lang="less" scoped>
.c-input-item {
  label {
    margin-right: 10px;
  }
}
</style>
