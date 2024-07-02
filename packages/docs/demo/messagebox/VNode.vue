<script setup lang="ts">
import { h, ref } from "vue";
import { HrMessageBox } from "haosama-ui";

function open1() {
  HrMessageBox({
    title: "Message",
    message: h("p", null, [
      h("span", null, "Message can be "),
      h("i", { style: "color: teal" }, "VNode"),
    ]),
  });
}

</script>

<template>
  <hr-button @click="open1" plain>Common VNode</hr-button>
</template>