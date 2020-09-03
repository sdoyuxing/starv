<template>
  <span :class="switchClasses" :style="switchStyles" @click="handleClick" :disabled="disabled">
    <div :class="activeClasses"></div>
    <span :class="labelClasses">
      <span v-show="currentValue">
        <slot name="check">{{check}}</slot>
      </span>
      <span v-show="!currentValue">
        <slot name="uncheck">{{uncheck}}</slot>
      </span>
    </span>
  </span>
</template>
<script>
const prefixCls = "sta-switch";
export default {
  name: "sSwitch",
  props: {
    check: [String, Number],
    uncheck: [String, Number],
    value: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
    checkColor: String,
    uncheckColor: String,
  },
  data() {
    return {
      currentValue: this.value,
    };
  },
  computed: {
    switchStyles() {
      return {
        backgroundColor: this.currentValue
          ? this.uncheckColor
          : this.checkColor,
      };
    },
    switchClasses() {
      return [
        prefixCls,
        { [`${prefixCls}-checked`]: this.currentValue },
        { [`${prefixCls}-large`]: this.large },
      ];
    },
    activeClasses() {
      return [`${prefixCls}-active`];
    },
    labelClasses() {
      return [`${prefixCls}-label`];
    },
  },
  methods: {
    handleClick() {
      if (this.disabled) return false;
      this.currentValue = !this.currentValue;
      this.$emit("input", this.currentValue);
      this.$emit("on-change", this.currentValue);
    },
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },
  },
};
</script>