<template>
  <div class="oul">
    <ul>
      <li v-for="item in list" :key="item.id">
        {{ item.text }}
      </li>
    </ul>
    <div>
      查看酒店name
      <ul>
        <slot v-for="item in list">{{ item.name }}</slot>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "sonData",
  props: ["list"],
  data() {
    return {
      hotel: {
        name: "橘子",
        address: "朝阳区定福庄犀利",
        type: 3
      }
    };
  }
};
</script>
<style lang="less" scoped>
li {
  display: inline-block;
  padding: 20px 4px;
  &:nth-child(2) {
    border-right: 1px solid #eee;
  }
}
</style>
