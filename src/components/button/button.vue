<template>
  <button :disabled="disabled" :style="styles" ref="btn" :class="classes" @click="handleClick"
          @focus="handleFocus" @blur="handleBlur" @mouseenter.stop="handleMouseenter"
          @mouseleave.stop="handleMouseleave" type="button">
    <Icon v-if="icon" :type="icon" />
    <Icon type="iconloading" v-if="loading&&loadType==='default'" class="sta-select-icon-loading" />
    <slot name="iconNode"></slot>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
import { oneOf, colorRgb } from "../../utils/assist";
import Icon from "../icon";
const prefixCls = "sta-btn";
let timeOut = null;
export default {
  name: "sButton",
  components: { Icon },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: String,
    loading: {
      type: [Boolean, Object],
      default: false,
    },
    loadType: {
      type: String,
      default: "default",
      validator(value) {
        return oneOf(value, ["circle", "progress", "default"]);
      },
    },
    shape: {
      type: String,
      validator(value) {
        return oneOf(value, ["circle-outline", "circle"]);
      },
    },
    type: {
      type: String,
      validator(value) {
        return oneOf(value, [
          "default",
          "primary",
          "dashed",
          "danger",
          "info",
          "success",
          "warning",
          "error",
        ]);
      },
      default: "default",
    },
    backgroundColor: {
      type: String,
    },
    fontColor: {
      type: String,
    },
  },
  data() {
    return {
      currentLoading: this.loading,
      autoWidth: "",
      clicked: false,
      top: this.loading ? "50%" : 0,
      left: this.loading ? "50%" : 0,
      width: "auto",
      currentColor: this.backgroundColor,
      isFocus: false,
    };
  },
  mounted() {
    if (this.shape === undefined) {
      if (this.currentLoading) {
        this.width = "30px";
      }
    } else if (this.shape === "circle") {
      this.width = "32px";
    }
  },
  beforeDestroy() {
    clearTimeout(timeOut);
    timeOut = "";
  },
  computed: {
    classes() {
      return [
        prefixCls,
        {
          [`${prefixCls}-${this.type}`]: this.type,
          [`${prefixCls}-${this.shape}`]: this.shape,
          [`${prefixCls}-icon-only`]: !this.$slots.default && this.icon,
          [`${prefixCls}-loading`]: this.currentLoading,
          [`${prefixCls}-clicked`]: this.clicked,
        },
      ];
    },
    styles() {
      return {
        backgroundColor: this.currentColor || undefined,
        border: this.currentColor ? "none" : undefined,
        color: this.fontColor || undefined,
      };
    },
  },
  watch: {
    currentLoading(val) {
      if (this.shape === undefined) {
        if (val) {
          this.left = this.top = "50%";
          this.width = "30px";
        } else {
          this.width = this.autoWidth;
        }
      }
    },
    loading(val) {
      if (this.width === "auto" && this.$refs["btn"].offsetWidth > 0) {
        this.width = this.autoWidth = this.$refs["btn"].offsetWidth + "px";
      }
      this.$nextTick(() => {
        setTimeout(() => {
          this.currentLoading = val;
        }, 100);
      });
    },
  },
  methods: {
    handleClick(event) {
      if (!this.loading) {
        this.$emit("click", event);
      }
    },
    handleFocus() {
      if (this.backgroundColor) {
        this.currentColor = colorRgb(this.backgroundColor, 0.8);
        this.isFocus = true;
      }
    },
    handleBlur() {
      if (this.backgroundColor) {
        this.currentColor = this.backgroundColor;
        this.isFocus = false;
      }
    },
    handleMouseenter() {
      this.backgroundColor &&
        (this.currentColor = colorRgb(this.backgroundColor, 0.8));
    },
    handleMouseleave() {
      this.backgroundColor &&
        !this.isFocus &&
        (this.currentColor = this.backgroundColor);
    },
  },
};
</script>