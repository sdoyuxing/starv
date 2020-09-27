<template>
  <td :class="cellClasses(row,col)" :style="cellStyles(col)">
    <span v-if="col.type==='index'" v-text="index+1"></span>
    <s-checkbox
      v-else-if="col.type==='checkbox'"
      @on-change="checkChange($event,row,index+1)"
      v-model="row.isCheck"
      :disabled="row.disabled"
    />
    <s-radio v-else-if="col.type==='radio'" :name="tableCode" />
    <render v-else-if="col.format.length===0" :template="render(col,row)" :content="row[col.key]"></render>
    <vnRender v-else :vnode="col.format" :row="row" :index="index"></vnRender>
  </td>
</template>
<script>
import { typeOf } from "../../utils/assist";
import render from "../base/render";
import vnRender from "../base/vnRender";
import sCheckbox from "../checkbox";
import sRadio from "../radio";
export default {
  props: {
    row: {
      type: Object,
      default: () => ({}),
    },
    col: {
      type: Object,
      default: () => ({}),
    },
    index: Number,
  },
  components: {
    vnRender,
    render,
    sCheckbox,
  },
  computed: {
    tableCode() {
      return this.$parent.tableCode;
    },
  },
  methods: {
    cellStyles(data) {
      return {
        "text-align": data.align,
        "font-size":
          data.type === "checkbox" || data.type === "radio" ? 0 : "inherit",
      };
    },
    cellClasses(row, col) {
      return (row.cellClassName && row.cellClassName[col.key]) || col.className;
    },
    render(col, row) {
      if (typeOf(col.render) === "function") {
        return col.render(row[col.key]);
      } else if (typeOf(col.render) === "undefined") {
        return "";
      } else {
        throw new TypeError("render is not a function");
        return "";
      }
    },
  },
};
</script>