<script lang="ts" setup>
import { h } from "vue";
import { HrMessage } from "haosama-ui";

const open = () => {
  HrMessage("This is a message.");
};

const openVn = () => {
  HrMessage({
    message: h("p", { style: "line-height: 1; font-size: 14px" }, [
      h("span", null, "Message can be "),
      h("i", { style: "color: teal" }, "VNode"),
    ]),
  });
};
</script>

<template>
  <hr-button :plain="true" @click="open">Show message</hr-button>
  <hr-button :plain="true" @click="openVn">VNode</hr-button>
</template>