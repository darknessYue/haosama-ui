<script setup lang="ts">
import { HrMessageBox, HrMessage } from "haosama-ui";

function openAlert() {
  HrMessageBox.alert("This is a message", "Title")
    .then((action) => {
      HrMessage.info(`action: ${action}`);
    })
    .catch((action) => {
      HrMessage.warning(`action: ${action}`);
    });
}
</script>

<template>
  <hr-button @click="openAlert" plain> Click to open the Alert</hr-button>
</template>