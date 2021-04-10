<template>
  <li :class="itemClasses" @click.stop="handleClick" :disabled="disabled" v-show="isShow">
    <slot>{{label||value}}</slot>
  </li>
</template>
<script>
import { findComponentUpward } from "../../utils/assist";
const prefixCls = "sta-select";
export default {
  name: "Option",
  props: {
    value: {
      type: [String, Number],
    },
    label: {
      type: [String, Number],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return { textContent: "", isFocus: false, isShow: true };
  },
  inject: ["selected"],
  computed: {
    itemClasses() {
      return [
        `${prefixCls}-item`,
        {
          [`${prefixCls}-item-selected`]:
            this.selected.value === (this.value || this.optionLabel),
        },
      ];
    },
    optionLabel() {
      return this.label || this.textContent;
    },
  },
  mounted() {
    this.textContent = this.$el && this.$el.textContent;
  },
  methods: {
    handleClick() {
      if (!this.disabled) {
        this.selected.value = this.value || this.optionLabel;
        this.selected.label = this.optionLabel;
        let parent = findComponentUpward(this, "sSelect");
        parent.hideMenu();
      }
    },
  },
};
</script>