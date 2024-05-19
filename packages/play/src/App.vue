<script setup lang="ts">
</script>

<template>
  <hr-button :onClick="() => {console.log('click')}" type="primary">按钮</hr-button>
  <hr-button :onClick="() => {console.log('click')}" type="success">按钮</hr-button>
  <hr-button :onClick="() => {console.log('click')}" type="danger">按钮</hr-button>
  <hr-button :onClick="() => {console.log('click')}" type="warning">按钮</hr-button>
  <hr-button :onClick="() => {console.log('click')}" type="info">按钮</hr-button>
  <hr-icon icon="spinner" />

  <hr-button-group type="info">
    <hr-button >按钮1</hr-button>
    <hr-button >按钮2</hr-button>
  </hr-button-group>
</template>

<style scoped>
</style>
