<script setup lang="ts">
import { throttle } from 'lodash-es';
import { ref, computed, inject } from 'vue';
import type { ButtonProps, ButtonEmits, ButtonInstance  } from './types'
import HrIcon from '../Icon/Icon.vue';
import { BUTTON_GROUP_CTX_KEY } from './constants';
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
defineOptions({
  name: 'HrButton'
})

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  nativeType: 'button',
  type: 'primary',
  useThrottle: true,
  throttleDuration: 500,
})

const emits = defineEmits<ButtonEmits>();
const slots = defineSlots()

const ctx = inject(BUTTON_GROUP_CTX_KEY, void 0)
const _ref = ref<HTMLButtonElement>();
const size = computed(() => ctx?.size ?? props?.size ?? "");
const type = computed(() => ctx?.type ?? props?.type ?? "");
const disabled = computed(() => ctx?.disabled ?? props?.disabled ?? false);
const iconStyle = computed(() => ({
  marginRight: slots.default ? '6px' : '0px'
}))

const handleBtnClick = (e: MouseEvent) => {
  emits("click", e);
};
const handlBtneCLickThrottle = throttle(
  handleBtnClick, 
  props.throttleDuration,
  {
    trailing: false
  }
);

defineExpose<ButtonInstance>({
  ref: _ref,
})
</script>

<template>
  <component
    :is="tag"
    :ref="_ref"
    :type="tag === 'button' ? nativeType : void 0"
    :class="{
      'hr-button': true,
      [`hr-button-${type}`]: type,
      [`hr-button-${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    :autofocus="autofocus"
    :disabled="disabled || loading ? true : void 0"
    @click="(e: MouseEvent) =>useThrottle ? handlBtneCLickThrottle(e) : handleBtnClick(e)"
  >
  <template v-if="loading">
    <slot name="loading">
      <hr-icon class="loading-icon" :icon="loadingIcon ?? 'spinner'" :style="iconStyle" spin />
    </slot>
  </template>
  <hr-icon v-if="icon && !loading" :icon="icon" size="1x" :style="iconStyle"/>
  <slot></slot>
  </component>
</template>

<style scoped>
@import './style.css';
</style>