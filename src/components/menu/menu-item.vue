<template>
  <li
    :class="[prefixCls + '-item', { [`${prefixCls}-item-selected`]: selected }]"
    @click="handleClick"
  >
    <slot></slot>
  </li>
</template>
<script>
const prefixCls = "sta-menu";
import { findComponentUpward } from "../../utils/assist";
export default {
  name: "sMenuItem",
  props: {
    name: [String, Number],
  },
  data() {
    return {
      prefixCls,
      selected: false,
    };
  },
  methods: {
    handleClick() {
      let parent = findComponentUpward(this, "sMenu");
      parent.activeName = this.name;
      this.$parent.$parent.$options.name === "sSubmenu" &&
        ((this.$parent.$parent.visible = false),
        (this.$parent.$parent.selected = true));
    },
  },
};
</script>