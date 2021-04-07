<template>
  <bubble-drop v-bind="$props" :minWidth="minWidth" @on-popper-show="popperShow"
               @on-popper-hide="popperHide" :visible.sync="showDrop">
    <slot></slot>
    <slot name="content" slot="content"></slot>
    <slot name="title" slot="title"></slot>
  </bubble-drop>
</template>
<script>
import { oneOf } from "../../utils/assist";
import bubbleDrop from "../base/bubbleDrop";
export default {
  name: "sPoptip",
  props: {
    isArrow: {
      type: Boolean,
      default: true,
    },
    trigger: {
      validator(value) {
        return oneOf(value, ["click", "focus", "hover"]);
      },
      type: String,
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
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      minWidth: this.title ? 150 : null,
      showDrop: this.visible,
    };
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
  watch: {
    visible(val) {
      this.showDrop = val;
    },
    showDrop(val) {
      this.$emit("update:visible", val);
    },
  },
};
</script>