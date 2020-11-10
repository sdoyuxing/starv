<template>
  <picker-panel></picker-panel>
</template>
<script>
const prefixCls = "sta-picker";
import pickerPanel from "./picker-panel";
export default {
  components: { pickerPanel },
  computed: {
    pickerClasses() {
      return prefixCls;
    },
  },
};
</script>