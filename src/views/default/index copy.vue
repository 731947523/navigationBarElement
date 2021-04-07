<template>
  <div class="wrap">
    默认概况页面
    <p>
      练习solt的具体使用
    </p>
    <subButtom>
      <p slot="like">1211111</p>
    </subButtom>
    <p>
      <span style="display:block">让父组件卡槽访问到子组件的Data数据</span>
      <!-- <son-data :list="list">
        <template slot-scope="props">
          定义一个插槽，该插槽必须放在template标签内
          <li>{{ props }}</li>
        </template>
      </son-data> -->
    </p>
    <template>
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <p>
            <span>{{ index + 1 }}</span
            >&nbsp;&nbsp;
            <span v-html="item.content"></span>
          </p>
          <!-- <div v-html="item.content"></div> -->
          <!-- <br /> -->
        </li>
      </ul>
    </template>
  </div>
</template>
<script>
// import subButtom from "./soltText";
// import sonData from "./sonData";
export default {
  name: 'default',
  data () {
    return {
      list: [
        { text: '我的名字', id: 1 },
        { text: 'cxs', id: 2 },
        { text: '年龄', id: 3 },
        { text: '24', id: 4 }
      ]
    }
  },
  components: {
    // subButtom
    // sonData
  },
  created () {
    this.list = window.cxs.dataJson.all.list
    // console.log(this.list[0].content);
  }
}
</script>
<style lang="less" scoped>
.wrap {
  border: 1px solid red;
  height: 100%;
}
</style>
