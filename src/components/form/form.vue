<template>
  <form :class="[{ [`${prefixCls}-inline`]: inline },`${prefixCls}-label-${labelPosition}`]">
    <slot></slot>
  </form>
</template>
<script>
import { oneOf } from "../../utils/assist";
const prefixCls = "sta-form";
export default {
  props: {
    inline: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Object,
    },
    rules: {
      type: Object,
    },
    labelWidth: {
      type: Number,
    },
    labelPosition: {
      validator(value) {
        return oneOf(value, ["left", "right", "top"]);
      },
      default: "right",
    },
  },
  provide() {
    return { FormInstance: this };
  },
  data() {
    return {
      prefixCls,
      fields: [],
    };
  },
  methods: {
    formItemAdd(field) {
      if (field) this.fields.push(field);
    },
    formItemRemove(field) {
      if (field.prop) this.fields.splice(this.fields.indexOf(field), 1);
    },
  },
};
</script>