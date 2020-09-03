<template>
  <label :class="labelClasses" :disabled="disabled">
    <span :class="checkboxClasses">
      <input
        type="checkbox"
        :class="inputClasses"
        :disabled="disabled"
        :checked="currentValue"
        :name="name"
        v-bind="$attrs"
        @change="change"
        v-on="$listeners"
      />
      <span :class="innerClasses" :style="innerStyles"></span>
      <div :class="activeClasses"></div>
    </span>
    <span v-if="label||$slots.default">
      <slot>{{label}}</slot>
    </span>
  </label>
</template>
<script>
import { findComponentUpward, typeOf } from "../../utils/assist";
const prefixCls = "sta-checkbox";
export default {
  name: "sCheckbox",
  props: {
    label: {
      type: [String, Number, Boolean],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [String, Number, Boolean],
      default: false,
    },
    labelValue: {
      type: [String, Number, Boolean],
      default: true,
    },
    halfChecked: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
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
      currentValue: this.value === this.labelValue,
      parent: null,
    };
  },
  mounted() {
    this.parent = findComponentUpward(this, "CheckboxGroup");
  },
  computed: {
    checkboxClasses() {
      return [`${prefixCls}`];
    },
    labelClasses() {
      return [`${prefixCls}-label`];
    },
    innerClasses() {
      return [
        `${prefixCls}-inner`,
        { [`${prefixCls}-checked`]: this.currentValue },
        {
          [`${prefixCls}-half-checked`]: this.halfChecked && !this.currentValue,
        },
      ];
    },
    inputClasses() {
      return [`${prefixCls}-input`];
    },
    activeClasses() {
      return [`${prefixCls}-active`];
    },
    innerStyles() {
      return this.currentValue
        ? {
            backgroundColor: this.backgroundColor,
            borderColor: this.backgroundColor,
            color: this.fontColor,
          }
        : {};
    },
  },
  methods: {
    change(event) {
      const checked = !this.halfChecked && event.target.checked;
      this.halfChecked = this.halfChecked && false;
      let value =
        typeOf(this.labelValue) === "boolean"
          ? checked
            ? this.labelValue
            : !this.labelValue
          : checked
          ? this.labelValue
          : "";
      event.target.checked = this.currentValue = checked;
      if (this.parent) {
        this.parent.change(
          typeOf(this.labelValue) === "boolean" ? this.label : this.labelValue
        );
      }
      this.$emit("input", value);
      this.$emit("on-change", value);
    },
  },
  watch: {
    value(val) {
      this.currentValue = val === this.labelValue;
    },
  },
};
</script>