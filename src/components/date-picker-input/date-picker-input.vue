<template>
  <div :class="wrapClasses">
    <span v-if="isPrefix" :class="prefixClasses">
      <slot name="prefix">
        <Icon v-if="prefix" :type="prefix"></Icon>
      </slot>
    </span>
    <input
      :class="inputClasses"
      :value="currentValue"
      :id="inputId"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :disabled="disabled"
      :type="currentType"
      ref="input"
      v-bind="$attrs"
      @input="handleInput"
      v-on="$listeners"
    />
    <Icon
      type="iconclose-bold"
      v-if="clearable && currentValue"
      :class="clearClasses"
      @click.stop="handleClear"
    ></Icon>
    <span :class="suffixClasses" v-if="isSuffix">
      <slot name="suffix">
        <Icon v-if="suffix" :type="suffix"></Icon>
      </slot>
    </span>
    <span :class="suffixClasses" v-if="type === 'password' && showPassword">
      <Icon
        type="iconbrowse"
        v-if="!isShowPassword"
        :class="passwordClasses"
        @click.stop="isShowPassword = !isShowPassword"
      ></Icon>
      <Icon
        type="iconeye-close"
        v-else
        :class="passwordClasses"
        @click.stop="isShowPassword = !isShowPassword"
      ></Icon>
    </span>
    <label :for="inputId" v-text="labelText" :class="labelClasses"></label>
    <span
      :class="wordCountClasses"
      v-if="showWordLimit"
      v-text="`${wordCount}/${maxlength}`"
    ></span>
  </div>
</template>
<script>
import Icon from "../icon";
import { oneOf } from "../../utils/assist";
const prefixCls = "sta-date-picker-input";
export default {
  name: "sInput",
  components: { Icon },
  props: {
    placeholder: String,
    labelText: String,
    clearable: { type: Boolean, default: false },
    value: { type: [String, Number], default: "" },
    suffix: String,
    prefix: String,
    maxlength: { type: [String, Number] },
    showWordLimit: Boolean,
    disabled: Boolean,
    type: {
      type: String,
      validator(value) {
        return oneOf(value, [
          "text",
          "password",
          "url",
          "email",
          "date",
          "tel",
        ]);
      },
      default: "text",
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentValue: this.value,
      inputId: this.labelText ? `sta-input-${new Date().getTime()}` : undefined,
      wordCount: 0,
      isShowPassword: false,
    };
  },
  computed: {
    currentType() {
      let type = this.type;
      if (type === "password" && this.isShowPassword && this.showPassword)
        type = "text";
      return type;
    },
    isPrefix() {
      return this.prefix || this.$slots.prefix;
    },
    isSuffix() {
      return this.suffix || this.$slots.suffix;
    },
    wrapClasses() {
      return [`${prefixCls}-wrapper`];
    },
    inputClasses() {
      return [
        prefixCls,
        { [`${prefixCls}-label-placeholder`]: this.labelText },
        {
          [`${prefixCls}-icon-padding-right`]:
            this.clearable || this.suffix || this.$slots.suffix,
        },
        {
          [`${prefixCls}-icon-padding-left`]: this.prefix || this.$slots.prefix,
        },
      ];
    },
    clearClasses() {
      return [
        `${prefixCls}-icon`,
        `${prefixCls}-icon-clear`,
        `${prefixCls}-icon-pointer`,
        `${prefixCls}-icon-suffix`,
        { [`${prefixCls}-icon-suffix-right`]: this.isSuffix },
      ];
    },
    suffixClasses() {
      return [`${prefixCls}-icon`, `${prefixCls}-icon-suffix`];
    },
    prefixClasses() {
      return [`${prefixCls}-icon`, `${prefixCls}-icon-prefix`];
    },
    labelClasses() {
      return [
        `${prefixCls}-label`,
        { [`${prefixCls}-lable-active`]: this.currentValue },
      ];
    },
    wordCountClasses() {
      return [`${prefixCls}-word-count`];
    },
    passwordClasses() {
      return [`${prefixCls}-icon-pointer`];
    },
  },
  methods: {
    handleInput(event) {
      let value = event.target.value;
      this.wordCount = value.length;
      this.currentValue = value;
      this.$emit("input", value);
    },
    handleClear(event) {
      this.currentValue = "";
      this.wordCount = 0;
      this.$emit("input", "");
      this.$emit("on-clear");
    },
    focus() {
      this.$refs.input.focus();
    },
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },
  },
};
</script>