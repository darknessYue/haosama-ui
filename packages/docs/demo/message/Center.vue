<script lang="ts" setup>
import { HrMessage } from "haosama-ui";

const openCenter = () => {
  HrMessage({
    showClose: true,
    message: "Centered text",
    center: true
  });
};
</script>

<template>
  <hr-button plain @click="openCenter">Centered text</hr-button>
</template>