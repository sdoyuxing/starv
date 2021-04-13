<template>
  <div :class="fromItemClass">
    <label :class="prefixCls + '-label'" v-text="label" :style="labelStyle"></label>
    <div :class="prefixCls + '-content'" :style="contentStyle">
      <slot></slot>
    </div>
  </div>
</template>
<script>
const prefixCls = "sta-form";
export default {
  props: {
    label: String,
    prop: String,
  },
  data() {
    return {
      prefixCls,
      isRequired: false,
    };
  },
  inject: ["FormInstance"],
  computed: {
    fromItemClass() {
      return [
        `${this.prefixCls}-item`,
        { [`${this.prefixCls}-item-required`]: this.isRequired },
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
  },
  mounted() {
    if (this.prop) {
      this.FormInstance.formItemAdd(this);
      this.setRules();
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
  },
};
</script>