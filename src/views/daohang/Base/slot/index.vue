<template>
  <div>
    <message :title="'标题'">
      <template>
        插槽 必须要以template为外层---后面为具名插槽
      </template>
      <!-- 具名插槽 -->
      <template v-slot:head>
        <div>
          页面head
        </div>
      </template>
      <template v-slot:foot>
        <p>
          页面底部
        </p>
      </template>
      <!-- 作用于插槽 -->
    </message>
  </div>
</template>
<script>
import message from "@/components/slot/index";
export default {
  components: {
    message
  }
};
</script>
