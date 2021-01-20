<template>
  <div :class="treeClasses">
    <ul>
      <tree-node
        v-for="(item, i) in treeData"
        :key="i"
        :data="item"
        :checkbox="checkbox"
        :expandNode="expandNode"
        :lazy="lazy"
      />
    </ul>
  </div>
</template>
<script>
import TreeNode from "./node.vue";
import { typeOf } from "../../utils/assist";
import Icon from "../icon";
const prefixCls = "sta-tree";
export default {
  name: "sTree",
  components: { Icon, TreeNode },
  props: {
    data: Array,
    nodeKey: ["string", "number"],
    checkbox: {
      type: Boolean,
      default: false,
    },
    expandNode: {
      type: Boolean,
      default: true,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    lazy: {
      type: Boolean,
      default: false,
    },
    loadData: Function,
  },
  data() {
    return {
      nodeSelected: null,
      treeData: [],
      checkedNodeList: [],
    };
  },
  created() {
    this.treeData = this.compileFlatState();
  },
  computed: {
    treeClasses() {
      return prefixCls;
    },
  },
  methods: {
    handleChecked(node, checked) {
      node.halfChecked = false;
      node.checked = checked;
      this.checkedChildren(node, checked);
      this.checkedParent(node);
      this.$emit("on-check-change", node, checked);
    },
    handleSelect(data) {
      this.nodeSelected &&
        !this.multiple &&
        (this.nodeSelected.selected = false);
      this.nodeSelected = data;
      data.selected = true;
      this.$emit("on-node-click", { ...data });
    },
    compileFlatState() {
      this.checkedNodeList = [];
      function flattenChildren(nodeList) {
        return nodeList.map((o) => {
          let result = {
            expand: o.expand || false,
            selected: o.selected || false,
            disabled: o.disabled || false,
            ...o,
          };
          if (result.children)
            result.children = flattenChildren.call(this, result.children);
          if (this.checkbox)
            (result.checked = false), (result.halfChecked = false);
          if (o.checked) {
            result.checked = o.checked;
            this.checkedNodeList.push(result);
          }
          if (this.lazy) result.loading = false;
          return result;
        });
      }
      return flattenChildren.call(this, this.data);
    },
    flattenParent(data, node) {
      let parent;
      typeOf(data.children) === "array" &&
        data.children.forEach((o) => {
          if (o === node) {
            parent = data;
          } else {
            parent = this.flattenParent(o, node) || parent;
          }
        });
      return parent;
    },
    findParent(node) {
      let parent;
      this.treeData.forEach((o) => {
        parent = this.flattenParent(o, node) || parent;
      });
      return parent;
    },
    checkedParent(node) {
      let parent = this.findParent(node);
      if (parent) {
        parent.checked = parent.children.every((o) => o.checked);
        parent.halfChecked = parent.children.some((o) => o.checked);
        this.checkedParent(parent);
      }
    },
    checkedChildren(node, checked) {
      if (node.children && node.children.length > 0) {
        node.children.forEach((o) => {
          o.checked = checked;
          o.halfChecked = false;
          this.checkedChildren(o, checked);
        });
      }
    },
    getCheckedNodes(leafOnly, halfChecked) {
      return this.getChildrenCheckedNodes(this.treeData);
    },
    getChildrenCheckedNodes(
      nodes,
      leafOnly,
      halfChecked,
      halfCheckedOnly = false
    ) {
      return nodes.reduce((data, o) => {
        if (o.checked && leafOnly && (!o.children || o.children.length === 0)) {
          data.push(o);
        } else if (o.checked && !leafOnly && !halfChecked) {
          data.push(o);
        } else if ((o.checked || o.halfChecked) && !leafOnly && halfChecked) {
          data.push(o);
        } else if (o.halfChecked && halfCheckedOnly) {
          data.push(o);
        }
        if (o.children && o.children.length > 0) {
          data.concat(
            this.getChildrenCheckedNodes(
              o.children,
              leafOnly,
              halfChecked,
              halfCheckedOnly
            )
          );
        }
        return data;
      }, []);
    },
    expandChange(node, expand) {
      this.$emit("on-expand-change", node, expand);
    },
    getSelectedNodes() {
      return this.getChildrenSelectedNodes(this.treeData);
    },
    getChildrenSelectedNodes(nodes) {
      return nodes.reduce((data, o) => {
        if (o.selected) {
          data.push(o);
        }
        if (o.children && o.children.length > 0) {
          data.concat(this.getChildrenSelectedNodes(o.children));
        }
        return data;
      }, []);
    },
    getHalfCheckedNodes() {
      return this.getChildrenCheckedNodes(this.treeData, false, false, true);
    },
    setSelectedNodes(nodes) {
      nodes.forEach((o) => {
        if (typeOf(o) === "string" || typeOf(o) === "number") {
          let node = this.findNodeByKey(o);
          node && this.handleSelect(node);
        } else if (typeOf(o) === "object") {
          this.handleSelect(o);
        }
      });
    },
    setCheckedNodes(nodes) {
      nodes.forEach((o) => {
        if (typeOf(o) === "string" || typeOf(o) === "number") {
          let node = this.findNodeByKey(o);
          node && this.handleChecked(node);
        } else if (typeOf(o) === "object") {
          this.handleChecked(o);
        }
      });
    },
    findNodeByKey(nodes, nodeKey) {
      let resultNode = null;
      node.forEach((o) => {
        if (o.nodeKey === nodeKey) {
          resultNode = o;
        }
        if (o.children && o.children.length > 0) {
          resultNode = this.findNodeByKey(o.children, nodeKey) || resultNode;
        }
      });
      return resultNode;
    },
  },
  watch: {
    data() {
      this.treeData = this.compileFlatState();
    },
    treeData(val) {
      if (val)
        this.checkedNodeList.forEach((o) => {
          this.handleChecked(o, true);
        });
    },
  },
};
</script>