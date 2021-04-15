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
    model: {
      type: Object,
    },
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
    validate(callback) {
      return new Promise((resolve) => {
        let valid = true;
        let count = 0;
        // fields 为空需要返回promise
        if (this.fields.length === 0) {
          resolve(valid);
          if (typeof callback === "function") {
            callback(valid);
          }
        }
        this.fields.forEach((field) => {
          field.validate("", (errors) => {
            if (errors) {
              valid = false;
            }
            if (++count === this.fields.length) {
              // all finish
              resolve(valid);
              if (typeof callback === "function") {
                callback(valid);
              }
            }
          });
        });
      });
    },
  },
};
</script>