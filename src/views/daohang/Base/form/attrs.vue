<template>
  <div></div>
</template>
<script>
export default {
  data () {
    return {
      provideObj: this.testAttr
    }
  },
  props: {
    testAttr: {
      type: Object
    }
  },
  mounted () {
    console.log(this, 'attrs----组件')
    console.log(this.$attrs.testAttrs, 'attrs----组件', this.provideObj)
    console.log(this.$listeners, 'attrs----组件', this.provideObj)
  }
}
</script>
