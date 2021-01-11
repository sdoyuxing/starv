<template>
  <div :class="treeClasses">
    <ul>
      <!-- <li>
        <Icon type="iconarrow-down-bold" :class="iconClasses" /><span
          :class="textClasses"
          class="sta-tree-text-selected"
          >parent 1</span
        >
        <ul>
          <li>
            <Icon type="iconarrow-down-bold" :class="iconClasses" /><span
              :class="textClasses"
              >parent 1-1</span
            >
            <ul>
              <li>
                <span :class="arrowClasses"></span
                ><span :class="textClasses">leaf 1-1-1</span>
              </li>
            </ul>
          </li>
        </ul>
      </li> -->
      <tree-node v-for="(item, i) in treeData" :key="i" :data="item" />
    </ul>
  </div>
</template>
<script>
import TreeNode from "./node.vue";
import Icon from "../icon";
const prefixCls = "sta-tree";

export default {
  components: { Icon, TreeNode },
  props: {
    data: Array,
  },
  computed: {
    treeClasses() {
      return prefixCls;
    },
    treeData() {
      return this.data.map((o) => ({ expand: true, ...o }));
    },
  },
};
</script>