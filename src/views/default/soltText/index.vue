<template>
  <div>
    <el-button type="primary">
      <slot name="defau">
        默认确认
      </slot>
      <slot name="na">
        晨曦
      </slot>
    </el-button>
    <slot name="like">
      爱好
    </slot>
    <p>电话费康师傅的</p>
  </div>
</template>
<script>
export default {
  name: "slotIndex",
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped></style>
