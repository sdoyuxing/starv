<template>
  <div
    :class="classes"
    @mouseenter="handleShowPopper"
    @mouseleave="handleClosePopper"
    @click="handleClick"
    v-click-outside.stop="onClickOutside"
  >
    <div ref="reference">
      <slot></slot>
    </div>
    <div :class="dropClasses" ref="drop" v-show="showDrop&&!disabled">
      <div :class="popperClasses">
        <div :class="arrowClasses"></div>
        <div :style="innerStyles">
          <div v-if="title||$slots.title" :class="titleClasses">
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
import { directive as clickOutside } from "../../directives/v-click-outside";
const prefixCls = "sta-tooltip";
import Popper from "popper.js";
export default {
  directives: { clickOutside },
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
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showDrop: this.visible,
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
      if (this.minWidth) {
        styles["min-width"] = `${this.minWidth}px`;
        styles["text-align"] = `left`;
      }
      return styles;
    },
    titleClasses() {
      return `${prefixCls}-title`;
    },
  },
  mounted() {
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    if (this.$refs.reference.childNodes.length > 0) {
      this.$refs.reference.childNodes[0].addEventListener(
        "focus",
        this.handleFocus
      );
      this.$refs.reference.childNodes[0].addEventListener(
        "blur",
        this.handleBlur
      );
    }
  },
  beforeDestroy() {
    if (this.trigger === "focus") {
      this.$refs.reference.childNodes[0].removeEventListener(
        "focus",
        this.handleFocus
      );
      this.$refs.reference.childNodes[0].removeEventListener(
        "blur",
        this.handleBlur
      );
    }
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
          this.showDrop = true;
        }, this.delay);
      } else {
        this.showDrop = true;
      }
      this.$emit("on-popper-show");
    },
    handleClick() {
      if (this.trigger !== "click") {
        return false;
      }
      this.showDrop ? this.closePopper() : this.showPopper();
    },
    onClickOutside() {
      if (this.trigger !== "click") {
        return false;
      }
      this.closePopper();
    },
    handleClosePopper() {
      if (this.trigger !== "hover") {
        return false;
      }
      this.closePopper();
    },
    closePopper() {
      if (this.timeout) clearTimeout(this.timeout);
      this.showDrop = false;
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
    showDrop(val) {
      if (val)
        this.$nextTick(() => {
          this.updatePopper();
        });
      this.$emit("update:visible", val);
    },
    visible(val) {
      this.showDrop = val;
    },
  },
};
</script>