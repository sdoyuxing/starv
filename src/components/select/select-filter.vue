<template>
  <input
    tpye="text"
    ref="input"
    tabindex="0"
    :placeholder="placeholder"
    v-model="currentValue"
    @blur="onInputBlur"
    :class="classes"
  />
</template>
<script>
const prefixCls = "sta-select";
export default {
  props: {
    value: {
      type: [String, Number, Array],
      default: "",
    },
    placeholder:String
  },
  data() {
    return {
      currentValue: this.value,
    };
  },
  computed: {
    classes() {
      return `${prefixCls}-input`;
    },
  },
  methods: {
    onfocus() {
      this.$refs.input.focus();
    },
    onInputBlur() {
      this.currentValue = this.value;
      this.$emit("on-input-blur");
    },
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },
    currentValue(val) {
      if (val !== this.value || val === "") this.$emit("on-change", val);
      if (val === this.value) this.$emit("on-change", "");
    },
  },
};
</script>