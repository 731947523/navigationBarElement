<template>
  <div>
    <template v-if="item.children">
      <el-submenu :index="item.title">
          <template slot="title">
            <i :class="item.iconClass"></i>
            <router-link v-if="item.path" :to="{path: item.path}">
              <span>{{item.title}}</span>
            </router-link> 
            <span v-else>{{item.title}}</span>
          </template>
          <default-home v-for="(item, index) in item.children" :item='item' :key="index"></default-home>
        </el-submenu>
    </template>
    <template v-else>
      <el-menu-item :index="item.title">
          <router-link :to="{path: item.path}" class="defaultA">
            <i :class="item.iconClass"></i>
            <span>{{item.title}}</span>
          </router-link> 
      </el-menu-item>
    </template>
  </div>
</template>
<script>
export default {
  props: ['item'],
  name: 'defaultHome',
  data () {
    return {
      
    }
  }
}
</script>
<style lang="less" scoped>
.el-submenu .el-menu-item{
  padding: 0;
}
.defaultA{
  display: inline-block; width: 100%; height: 100%;
}
.router-link-active{
  color: orangered
}
</style>
