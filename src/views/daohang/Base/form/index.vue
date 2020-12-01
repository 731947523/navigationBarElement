<template>
  <div>
    <h2>当前页面为自己编写的form表单提交页</h2>
    <c-form :user="user" :rules="rules">
      <!-- 用户名 -->
      <c-input-item :label="'姓名'" prop="name">
        <c-input
          c="1"
          :sex="'男'"
          v-model="user.name"
          @input="cInput"
          :test-attr="testAttrs"
        ></c-input>
      </c-input-item>
      <!-- 密码 -->
      <!-- <c-input-item :label="'密码'" prop="password">
        <c-input
          :type="'password'"
          v-model="user.password"
          @input="cInput"
        ></c-input>
      </c-input-item> -->
      <el-button @click="submit">提交</el-button>
    </c-form>
  </div>
</template>

<script>
import cForm from "./cForm.vue";
import cInput from "./CInput";
import CInputItem from "./CInputItem";
export default {
  data() {
    return {
      testAttrs: {
        name: "测试",
        age: 16,
        sex: "南"
      },
      user: {
        name: "1",
        password: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "不能为空",
            trigger: "blur"
          }
        ]
      }
    };
  },
  components: {
    cForm,
    cInput,
    CInputItem
  },
  methods: {
    cInput(value) {
      console.log("cInput传进来的值", value);
    },
    submit() {
      var a = {
        title: "提示",
        messgae: "提交成功",
        duration: 1000
      };
      this.$createNotice(a);
    }
  }
};
</script>

<style lang="less" scoped></style>
