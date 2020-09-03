<template>
  <span :class="classes" v-if="!closed" :style="styles" @click="handleClick">
    <slot></slot>
    <span :class="closeClasses" v-if="closable" @click="close" :style="closeStyles">
      <Icon type="iconclose" />
    </span>
  </span>
</template>
<script>
import Icon from "../icon";
import { oneOf } from "../../utils/assist";
const prefixCls = "sta-tag";
export default {
  name: "sTag",
  components: { Icon },
  props: {
    closable: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      validator(value) {
        return oneOf(value, [
          "info",
          "success",
          "warning",
          "error",
          "primary",
          "default",
        ]);
      },
      default: "default",
    },
    backgroundColor: String,
    fontColor: String,
    borderColor: String,
    closedColor: String,
    checkable: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      closed: false,
      currentValue: this.checked,
    };
  },
  computed: {
    closeStyles() {
      return {
        color: this.closedColor,
      };
    },
    styles() {
      return {
        backgroundColor: this.backgroundColor,
        color: this.fontColor,
        borderColor: this.borderColor,
      };
    },
    classes() {
      return [
        prefixCls,
        { [`${prefixCls}-closed`]: this.closable },
        { [`${prefixCls}-${this.type}`]: !this.checkable || this.currentValue },
        { [`${prefixCls}-checkable`]: this.checkable && !this.currentValue },
        { [`${prefixCls}-pointer`]: this.checkable },
      ];
    },
    closeClasses() {
      return `${prefixCls}-closed-icon`;
    },
  },
  methods: {
    close(e) {
      this.closed = true;
      this.$emit("on-close", e);
    },
    handleClick(e) {
      if (this.checkable) {
        this.currentValue = !this.currentValue;
        this.type = this.type === "default" ? "primary" : this.type;
        this.$emit("on-change", this.currentValue);
      }
    },
  },
  watch: {
    checked(val) {
      this.currentValue = val;
    },
  },
};
</script>