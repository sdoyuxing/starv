<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script>
import { findComponentsDownward, deepCopy, typeOf } from "../../utils/assist";
import emitter from "@/mixins/emitter";
const prefixCls = "sta-checkbox-group";
export default {
  name:"CheckboxGroup",
  props: {
    value: {
      typeof: Array,
      default: () => [],
    },
  },
  mixins: [emitter],
  computed: {
    classes() {
      return [prefixCls];
    },
  },
  mounted() {
    this.initCheckbox();
  },
  methods: {
    initCheckbox() {
      let childrens = findComponentsDownward(this, "sCheckbox");
      let label = "";
      if (Array.isArray(childrens) && childrens.length > 0) {
        childrens.forEach((child) => {
          label =
            typeOf(child.labelValue) === "boolean"
              ? child.label
              : child.labelValue;
          child.currentValue = this.value.indexOf(label) >= 0;
        });
      }
    },
    change(data) {
      let currentValue = deepCopy(this.value);
      if (currentValue.indexOf(data) === -1) {
        currentValue.push(data);
      } else {
        currentValue.splice(currentValue.indexOf(data), 1);
      }
      this.$emit("input", currentValue);
      this.$emit("on-change", currentValue);
      this.dispatch("sFormItem", "on-form-change");
    },
  },
  watch: {
    value() {
      this.initCheckbox();
    },
  },
};
</script>