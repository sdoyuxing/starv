<template>
  <div :class="tabpaneClasses" v-show="show">
    <slot></slot>
  </div>
</template>
<script>
const prefixCls = "sta-tabs";
export default {
  name: "sTabPane",
  props: {
    name: String,
    label: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: String,
    closable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  computed: {
    tabpaneClasses() {
      return `${prefixCls}-tabpane`;
    },
  },
};
</script>