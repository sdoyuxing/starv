<template>
  <bubble-drop
    v-bind="$props"
    trigger="hover"
    @on-popper-show="popperShow"
    @on-popper-hide="popperHide"
  >
    <slot></slot>
    <slot name="content" slot="content"></slot>
  </bubble-drop>
</template>
<script>
import bubbleDrop from "../base/bubbleDrop";
import { oneOf } from "../../utils/assist";
export default {
  name: "sTooltip",
  props: {
    content: {
      type: [String, Number],
      default: "",
    },
    placement: {
      type: String,
      default: "bottom-start",
      validator(value) {
        return oneOf(value, [
          "top",
          "top-start",
          "top-end",
          "bottom",
          "bottom-start",
          "bottom-end",
          "left",
          "left-start",
          "left-end",
          "right",
          "right-start",
          "right-end",
        ]);
      },
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
  methods: {
    popperShow() {
      this.$emit("on-popper-show");
    },
    popperHide() {
      this.$emit("on-popper-hide");
    },
  },
};
</script>