<template>
  <div :class="prefixCls + '-item'">
    <label :class="prefixCls + '-label'" v-text="label"></label>
    <div :class="prefixCls + '-content'">
      <slot></slot>
    </div>
  </div>
</template>
<script>
const prefixCls = "sta-form";
export default {
  props: {
    label: String,
  },
  data() {
    return {
      prefixCls,
    };
  },
};
</script>