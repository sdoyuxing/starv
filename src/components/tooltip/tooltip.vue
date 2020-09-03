<template>
  <div :class="classes" @mouseenter="handleShowPopper" @mouseleave="handleClosePopper">
    <div ref="reference">
      <slot></slot>
    </div>
    <div :class="dropClasses" ref="drop" v-show="visible&&!disabled">
      <div :class="popperClasses">
        <div :class="arrowClasses"></div>
        <div :style="innerStyles">
          <slot name="content">{{ content }}</slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const prefixCls = "sta-tooltip";
import Popper from "popper.js";
export default {
  props: {
    content: {
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
    delay: Number,
    maxWidth: {
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
      return styles;
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
    handleClosePopper() {
      this.visible = false;
      this.$emit("on-popper-hide");
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