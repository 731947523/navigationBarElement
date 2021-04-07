<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
/*
*   高内聚 功能单一：代表可复用强
*   低耦合

实现一个form表单
-------------------------------
cForm
-------------------------------最外层
-------cinput-item----------|-- 做校验用
----------------------cInput|-- 仅做双向绑定，单一
*/
export default {
  provide () {
    return {
      user: this
    }
  },
  props: {
    user: {
      type: Object,
      required: true,
      default: () => {}
    },
    rules: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped></style>
