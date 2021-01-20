<template>
  <li>
    <Icon
      type="iconarrow-down-bold"
      :class="iconClasses"
      v-if="data.children && !data.loading"
      @click="iconClick"
    />
    <Icon :class="iconLoadingClasses" type="iconloading" v-if="data.loading" />
    <span :class="arrowClasses" v-if="!data.children"></span>
    <s-checkbox
      v-model="checked"
      v-if="checkbox"
      :halfChecked="data.halfChecked"
      @on-change="checkedChange"
      :disabled="data.disabled"
    />
    <span :class="textClasses" @click="nodeClick">
      <render :content="data.label" :template="render()"></render>
    </span>
    <ul
      :class="childrenClasses"
      v-if="data.children"
      :style="{ height: childrenHeight }"
      @transitionend="transitionend"
    >
      <div ref="children">
        <tree-node
          v-for="(item, i) in data.children"
          :key="i"
          :data="item"
          :checkbox="checkbox"
        ></tree-node>
      </div>
    </ul>
  </li>
</template>
<script>
import render from "../base/render";
import sCheckbox from "../checkbox";
import { findComponentUpward, typeOf } from "../../utils/assist";
const prefixCls = "sta-tree";
export default {
  name: "TreeNode",
  props: {
    data: Object,
    checkbox: {
      type: Boolean,
      default: false,
    },
    expandNode: {
      type: Boolean,
      default: true,
    },
    lazy: {
      type: Boolean,
      default: false,
    },
  },
  components: { sCheckbox, render },
  data() {
    return {
      isExpand: this.data.expand || false,
      height: this.data.expand ? "auto" : 0,
      checked: this.data.checked,
    };
  },
  watch: {
    "data.checked"(val) {
      this.checked = val;
    },
  },
  computed: {
    textClasses() {
      return [
        `${prefixCls}-text`,
        { [`${prefixCls}-text-selected`]: this.data.selected },
      ];
    },
    iconClasses() {
      return [
        `${prefixCls}-icon`,
        { [`${prefixCls}-icon-arrow`]: !this.isExpand },
      ];
    },
    arrowClasses() {
      return `${prefixCls}-arrow`;
    },
    childrenClasses() {
      return [`${prefixCls}-children`];
    },
    childrenHeight() {
      return this.isExpand ? this.height : 0;
    },
    iconLoadingClasses() {
      return `sta-select-icon-loading`;
    },
  },
  methods: {
    render() {
      if (typeOf(this.data.render) === "function") {
        return this.data.render(this.data);
      } else {
        return "";
      }
    },
    setHeight() {
      this.height = this.$refs.children
        ? this.$refs.children.offsetHeight + 8 + "px"
        : 0;
    },
    checkedChange(val) {
      let tree = findComponentUpward(this, "sTree");
      tree.handleChecked(this.data, val);
    },
    nodeClick() {
      if (!this.data.disabled) {
        let tree = findComponentUpward(this, "sTree");
        tree.handleSelect(this.data);
      }
      if (this.expandNode) {
        this.changeExpand();
      }
    },
    transitionend() {
      this.childrenHeight !== 0 && (this.height = "auto");
    },
    iconClick() {
      if (
        (this.lazy && !this.isExpand && !Array.isArray(this.data.children)) ||
        this.data.children.length === 0
      ) {
        this.data.loading = true;
        let tree = findComponentUpward(this, "sTree");
        tree.loadData(this.data, this.resolve);
      } else {
        this.changeExpand();
      }
    },
    changeExpand() {
      this.setHeight();
      setTimeout(() => {
        this.isExpand = !this.isExpand;
        let tree = findComponentUpward(this, "sTree");
        tree.changeExpand(this.data, this.isExpand);
      });
    },
    resolve(nodeList) {
      this.data.loading = false;
      this.data.children = nodeList;
      this.$nextTick(() => {
        this.changeExpand();
      });
    },
  },
};
</script>