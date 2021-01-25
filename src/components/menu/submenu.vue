<template>
  <li
    :class="[prefixCls + '-item', { [`${prefixCls}-item-selected`]: selected }]"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave"
  >
    <slot name="title"></slot>
    <Icon
      type="iconarrow-down"
      :class="{ [prefixCls + '-item-icon-down']: visible }"
    />
    <Drop :class="dropClasses" ref="drop" @transitionend="transitionend">
      <slot></slot>
    </Drop>
  </li>
</template>
<script>
const prefixCls = "sta-menu";
import Icon from "../icon";
import Drop from "../select/dropdown";
export default {
  name: "sSubmenu",
  components: { Icon, Drop },
  data() {
    return {
      prefixCls,
      visible: false,
      selected: false,
    };
  },
  computed: {
    dropClasses() {
      return [
        `sta-select-dropdown`,
        `${prefixCls}-dropdown`,
        { [`sta-select-dropdown-show`]: this.visible },
      ];
    },
  },
  methods: {
    handleMouseenter() {
      this.visible = true;
    },
    handleMouseleave() {
      this.visible = false;
    },
  },
};
</script>