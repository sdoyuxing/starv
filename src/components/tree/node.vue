<template>
  <li>
    <Icon
      type="iconarrow-down-bold"
      :class="iconClasses"
      v-if="data.children"
      @click="changeExpand"
    /><span :class="textClasses">
      <span :class="arrowClasses" v-if="!data.children"></span>
      {{ data.label }}
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
        ></tree-node>
      </div>
    </ul>
  </li>
</template>
<script>
const prefixCls = "sta-tree";
export default {
  name: "TreeNode",
  props: {
    data: Object,
  },
  data() {
    return {
      isExpand: this.data.expand || false,
      height: 0,
    };
  },
  mounted() {
    this.height = this.$refs.children
      ? this.$refs.children.offsetHeight + 8 + "px"
      : 0;
  },
  computed: {
    textClasses() {
      return `${prefixCls}-text`;
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
  },
  methods: {
    transitionend() {
      this.childrenHeight !== 0 && (this.height = "auto");
    },
    changeExpand() {
      if (this.isExpand) {
        this.height = this.$refs.children
          ? this.$refs.children.offsetHeight + 8 + "px"
          : 0;
        setTimeout(() => {
          this.isExpand = !this.isExpand;
        });
      } else this.isExpand = !this.isExpand;
    },
  },
};
</script>