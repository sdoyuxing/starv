<template>
  <div
    :class="prefixCls + '-submenu'"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave"
    @click="handleClick"
  >
    <li
      :class="[
        prefixCls + '-item',
        { [`${prefixCls}-item-selected`]: selected },
      ]"
    >
      <slot name="title"></slot>
      <Icon
        type="iconarrow-down"
        :class="{ [prefixCls + '-item-icon-down']: visible }"
      />
    </li>
    <Drop
      :class="dropClasses"
      ref="drop"
      v-if="mode === 'horizontal'"
    >
      <slot></slot>
    </Drop>
    <div
      :class="[
        prefixCls + '-submenu-drop',
        { [prefixCls + '-submenu-drop-show']: visible },
      ]"
      v-if="mode === 'vertical'"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script>
const prefixCls = "sta-menu";
import Icon from "../icon";
import Drop from "../select/dropdown";
import { findComponentUpward } from "../../utils/assist";
export default {
  name: "sSubmenu",
  components: { Icon, Drop },
  props: {
    name: [String, Number],
  },
  data() {
    return {
      prefixCls,
      visible: false,
      selected: false,
      mode: "",
    };
  },
  mounted() {
    let parent = findComponentUpward(this, "sMenu");
    this.mode = parent.mode;
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
  watch: {
    visible(val) {
      let parent = findComponentUpward(this, "sMenu");
      parent.changeExpand(this.name, val);
    },
  },
  methods: {
    handleMouseenter() {
      this.mode === "horizontal" && (this.visible = true);
    },
    handleMouseleave() {
      this.mode === "horizontal" && (this.visible = false);
    },
    handleClick() {
      this.mode === "vertical" && (this.visible = !this.visible);
    },
  },
};
</script>