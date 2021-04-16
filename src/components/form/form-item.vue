<template>
  <div :class="fromItemClass">
    <label :class="prefixCls + '-label'" v-text="label" :style="labelStyle"></label>
    <div :class="prefixCls + '-content'" :style="contentStyle">
      <slot></slot>
      <div :class="[prefixCls + '-error',{[`${prefixCls}-error-tip`]:validateState === 'error'}]">
        {{ validateMessage }}</div>

    </div>
  </div>
</template>
<script>
const prefixCls = "sta-form";
import AsyncValidator from "async-validator";
export default {
  name: "sFormItem",
  props: {
    label: String,
    prop: String,
  },
  data() {
    return {
      prefixCls,
      isRequired: false,
      validateDisabled: false,
      validateState: "",
      validateMessage: "",
    };
  },
  inject: ["FormInstance"],
  computed: {
    fromItemClass() {
      return [
        `${this.prefixCls}-item`,
        { [`${this.prefixCls}-item-required`]: this.isRequired },
        { [`${this.prefixCls}-item-error`]: this.validateState === "error" },
      ];
    },
    labelStyle() {
      let style = {};
      if (this.FormInstance.labelWidth || this.FormInstance.labelWidth === 0) {
        style.width = `${this.FormInstance.labelWidth}px`;
      }
      return style;
    },
    contentStyle() {
      let style = {};
      if (this.FormInstance.labelWidth || this.FormInstance.labelWidth === 0) {
        style.marginLeft = `${this.FormInstance.labelWidth}px`;
      }
      return style;
    },
    fieldValue() {
      const model = this.FormInstance.model;
      if (!model || !this.prop) {
        return;
      }
      return model[this.prop];
    },
  },
  mounted() {
    if (this.prop) {
      this.FormInstance.formItemAdd(this);
      this.setRules();
      this.$on("on-form-blur", this.onFieldBlur);
      this.$on("on-form-change", this.onFieldChange);
    }
  },
  methods: {
    getRules() {
      let formRules = this.FormInstance.rules;
      const selfRules = this.rules;
      formRules = formRules ? formRules[this.prop] : [];
      return [].concat(selfRules || formRules || []);
    },
    setRules() {
      let rules = this.getRules();
      rules.every((rule) => (this.isRequired = rule.required));
    },
    getFilteredRule(trigger) {
      const rules = this.getRules();
      return rules.filter(
        (rule) => !rule.trigger || rule.trigger.indexOf(trigger) !== -1
      );
    },
    validate(trigger, callback = function () {}) {
      let rules = this.getFilteredRule(trigger);
      if (!rules || rules.length === 0) {
        if (!this.required) {
          callback();
          return true;
        } else {
          rules = [{ required: true }];
        }
      }

      this.validateState = "validating";

      let descriptor = {};
      descriptor[this.prop] = rules;

      const validator = new AsyncValidator(descriptor);
      let model = {};

      model[this.prop] = this.fieldValue;

      validator.validate(model, { firstFields: true }, (errors) => {
        this.validateState = !errors ? "success" : "error";
        this.validateMessage = errors ? errors[0].message : "";

        callback(this.validateMessage);

        this.FormInstance &&
          this.FormInstance.$emit(
            "on-validate",
            this.prop,
            !errors,
            this.validateMessage || null
          );
      });
      this.validateDisabled = false;
    },
    onFieldBlur() {
      this.validate("blur");
    },
    onFieldChange() {
      if (this.validateDisabled) {
        this.validateDisabled = false;
        return;
      }
      this.validate("change");
    },
  },
};
</script>