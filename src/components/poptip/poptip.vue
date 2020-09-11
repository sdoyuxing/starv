<template>
  <bubble-drop v-bind="$props" minWidth="150">
    <slot></slot>
  </bubble-drop>
</template>
<script>
import { oneOf } from "../../utils/assist";
import bubbleDrop from "../base/bubbleDrop";
export default {
  name: "sPoptip",
  props: {
    trigger: {
      validator(value) {
        return oneOf(value, ["click", "focus", "hover"]);
      },
      default: "click",
    },
    content: {
      type: [String, Number],
      default: "",
    },
    title: {
      type: [String, Number],
      default: "",
    },
    placement: {
      type: String,
      default: "bottom",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    delay: Number,
    maxWidth: {
      type: [String, Number],
    },
  },
  components: { bubbleDrop },
};
</script>