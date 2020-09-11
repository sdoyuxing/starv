<template>
  <div
    :class="classes"
    @mouseenter="handleShowPopper"
    @mouseleave="handleClosePopper"
    @click="handleClick"
    @focus="handleFocus"
    @blur="handleBlur"
    tabindex="1"
  >
    <div ref="reference">
      <slot></slot>
    </div>
    <div :class="dropClasses" ref="drop" v-show="visible&&!disabled">
      <div :class="popperClasses">
        <div :class="arrowClasses"></div>
        <div :style="innerStyles">
          <div :class="titleClasses">
            <slot name="title">{{ title }}</slot>
          </div>
          <slot name="content">{{ content }}</slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { oneOf } from "../../utils/assist";
const prefixCls = "sta-tooltip";
import Popper from "popper.js";
export default {
  props: {
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
      default: "bottom-start",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    trigger: {
      validator(value) {
        return oneOf(value, ["click", "focus", "hover"]);
      },
      default: "click",
    },
    delay: Number,
    maxWidth: {
      type: [String, Number],
    },
    minWidth: {
      type: [String, Number],
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  computed: {
    classes() {
      return `${prefixCls}`;
    },
    popperClasses() {
      return [`${prefixCls}-popper`];
    },
    arrowClasses() {
      return `${prefixCls}-arrow`;
    },
    dropClasses() {
      return `${prefixCls}-drop`;
    },
    innerStyles() {
      const styles = {};
      if (this.maxWidth) styles["max-width"] = `${this.maxWidth}px`;
      if (this.minWidth) styles["min-width"] = `${this.minWidth}px`;
      return styles;
    },
    titleClasses() {
      return `${prefixCls}-title`;
    },
  },
  methods: {
    updatePopper() {
      this.popper = new Popper(this.$refs.reference, this.$refs.drop, {
        placement: this.placement,
        modifiers: {
          computeStyle: {
            gpuAcceleration: false,
          },
          preventOverflow: {
            boundariesElement: "star",
          },
        },
      });
    },
    handleShowPopper() {
      if (this.trigger !== "hover") {
        return false;
      }
      this.showPopper();
    },
    showPopper() {
      if (this.timeout) clearTimeout(this.timeout);
      if (this.delay) {
        this.timeout = setTimeout(() => {
          this.visible = true;
        }, this.delay);
      } else {
        this.visible = true;
      }
      this.$emit("on-popper-show");
    },
    handleClick() {
      if (this.trigger !== "click") {
        return false;
      }
      this.visible ? this.closePopper() : this.showPopper();
    },
    handleClosePopper() {
      if (this.trigger !== "hover") {
        return false;
      }
      this.closePopper();
    },
    closePopper() {
      this.visible = false;
      this.$emit("on-popper-hide");
    },
    handleFocus() {
      if (this.trigger !== "focus") {
        return false;
      }
      this.showPopper();
    },
    handleBlur() {
      if (this.trigger !== "focus") {
        return false;
      }
      this.closePopper();
    },
  },
  watch: {
    visible(val) {
      if (val)
        this.$nextTick(() => {
          this.updatePopper();
        });
    },
  },
};
</script>