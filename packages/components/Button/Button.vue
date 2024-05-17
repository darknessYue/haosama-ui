<template>
  <button style="padding: 5px 10px;">
    <slot></slot>
  </button>
</template>

<script>
/**
 * @name HrButton
 * @description 按钮
 * 目录结构
 * Button.vue
 * Button.test.tsx
 * types.ts
 * style.css
 * constants.ts
 */
import { defineComponent } from "vue";
export default defineComponent({
  name: "HrButton",
  setup(props) {
    return {};
  },
});
</script>

<style scoped>

</style>