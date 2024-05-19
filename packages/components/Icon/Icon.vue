<script setup lang="ts">
import type { IconProps } from './types';
import { omit } from 'lodash-es';
import { computed } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


defineOptions({
  name: 'HrIcon',
  inheritAttrs: false
});

const props = defineProps<IconProps>();
const filterProps = computed(() => omit(props, ['type', 'color']));
const customStyle = computed(() => ({ color: props.color ?? void 0 }));
</script>

<template>
    <i
        class="hr-icon"
        :class="[`hr-icon-${props.type}`]"
        :style="customStyle"
        v-bind="$attrs"
    >
        <font-awesome-icon v-bind="filterProps" />
    </i>
</template>

<style scoped>
@import "./style.css";
</style>
