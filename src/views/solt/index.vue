<template>
  <div>
    <h1>
      {{ title }}
      <br />
      <slot></slot>
      <template>
        <div class="slot-head">
          <slot name="head"></slot>
        </div>
      </template>

      <template class="slot-foot-1">
        <div class="slot-foot">
          <slot name="foot"></slot>
        </div>
      </template>
    </h1>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["title"]
};
</script>
