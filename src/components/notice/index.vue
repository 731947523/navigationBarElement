<template>
  <div class="notice-wrap" v-if="isShow">
    <title class="notice-title">{{ title }}</title>
    <span class="notice-close">X</span>
    <div class="notice-center">
      {{ content }}
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShow: false
    }
  },
  props: {
    title: {
      type: String,
      default: '默认标题'
    },
    content: {
      type: String,
      default: '默认信息内容'
    },
    duration: {
      type: [Number, String],
      default: 1000
    }
  },
  methods: {
    show () {
      this.isShow = true
      setTimeout(this.hide, this.duration)
    },
    hide () {
      this.isShow = false
      this.remove()
    }
  }
}
</script>
<style lang="less" scoped>
.notice-wrap {
  width: 200px;
  min-height: 100px;
  position: fixed;
  left: 50%;
  top: 100px;
  border: 1px solid blanchedalmond;
  transform: translate(-100px, -50px);
  .notice-title {
    display: block;
    height: 40px;
    line-height: 40px;
    background: floralwhite;
    text-align: center;
  }
  .notice-close {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  .notice-center {
    padding: 10px;
  }
}
</style>
