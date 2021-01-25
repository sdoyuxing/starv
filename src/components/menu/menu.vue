<template>
  <ul :class="[prefixCls, prefixCls + '-' + mode]">
    <slot></slot>
    <li :class="prefixCls + '-item-clear'"></li>
  </ul>
</template>
<script>
const prefixCls = "sta-menu";
import Icon from "../icon";
import { oneOf } from "../../utils/assist";
import {
  findComponentsDownward,
  findComponentUpward,
} from "../../utils/assist";
export default {
  name: "sMenu",
  props: {
    active: [String, Number],
    mode: {
      type: String,
      default: "horizontal",
      validator(value) {
        return oneOf(value, ["horizontal", "vertical"]);
      },
    },
  },
  data() {
    return {
      prefixCls,
      activeName: this.active,
      activeItem: null,
    };
  },
  components: { Icon },
  mounted() {
    this.setActiveItem();
  },
  methods: {
    setActiveItem() {
      let sSubmenu;
      this.activeItem &&
        (sSubmenu = findComponentUpward(this.activeItem, "sSubmenu"));
      let sMenuItem = findComponentsDownward(this, "sMenuItem", true);
      if (
        this.activeName !== undefined &&
        this.activeName !== null &&
        this.activeName !== ""
      ) {
        this.activeItem && (this.activeItem.selected = false);
        this.activeItem && sSubmenu && (sSubmenu.selected = false);
        let activeItem = sMenuItem.filter((o) => o.name === this.activeName);
        activeItem.length === 1 &&
          ((this.activeItem = activeItem[0]),
          (this.activeItem.selected = true));
      } else {
        this.activeName = sMenuItem[0].name;
      }
    },
  },
  watch: {
    active(val) {
      this.activeName = val;
    },
    activeName() {
      this.setActiveItem();
    },
  },
};
</script>