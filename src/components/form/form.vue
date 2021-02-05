<template>
  <form :class="{ [`${prefixCls}-inline`]: inline }"><slot></slot></form>
</template>
<script>
const prefixCls = "sta-form";
export default {
  props: {
    inline: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      prefixCls,
    };
  },
};
</script>