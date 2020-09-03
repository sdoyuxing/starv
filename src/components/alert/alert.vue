<template>
  <div v-if="!closed" :class="classes" :style="alertStyles">
    <span v-if="showIcon" :class="iconClasses" :style="iconStyles">
      <slot name="icon">
        <Icon :type="iconName"></Icon>
      </slot>
    </span>
    <slot></slot>
    <span :class="closeClasses" v-if="closable" @click="close">
      <Icon type="iconclose" />
    </span>
  </div>
</template>
<script>
const prefixCls = "sta-alert";
import Icon from "../icon";
import { oneOf } from "../../utils/assist";
export default {
  name: "sAlert",
  components: { Icon },
  props: {
    type: {
      type: String,
      validator(value) {
        return oneOf(value, ["info", "success", "warning", "error"]);
      },
      default: "info",
    },
    showIcon: {
      type: Boolean,
      default: false,
    },
    iconType: String,
    closable: {
      type: Boolean,
      default: false,
    },
    backgroundColor: String,
    fontColor: String,
    borderColor: String,
    iconColor: String,
  },
  data() {
    return {
      closed: false,
    };
  },
  computed: {
    iconStyles() {
      return {
        color: this.iconColor,
      };
    },
    alertStyles() {
      return {
        backgroundColor: this.backgroundColor,
        color: this.fontColor,
        borderColor: this.borderColor,
      };
    },
    classes() {
      return [prefixCls, `${prefixCls}-${this.type}`];
    },
    iconName() {
      let type = "";
      switch (this.type) {
        case "success":
          type = "iconsuccess-filling";
          break;
        case "info":
          type = "iconprompt-filling";
          break;
        case "warning":
          type = "iconwarning-filling";
          break;
        case "error":
          type = "icondelete-filling";
          break;
      }
      type = this.iconType || type;
      return type;
    },
    iconClasses() {
      return `${prefixCls}-icon`;
    },
    closeClasses() {
      return `${prefixCls}-closed`;
    },
  },
  methods: {
    close(e) {
      this.closed = true;
      this.$emit("on-close", e);
    },
  },
};
</script>