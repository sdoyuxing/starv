<template>
  <table :class="tableClasses" :style="bodyTableStyles">
    <colgroup>
      <col
        v-for="(column, index) in columnsList"
        :key="tableCode + '_bodycol_' + index"
        :width="column._width"
      />
    </colgroup>
    <tbody>
      <tr
        :class="rowClasses(row, index)"
        v-for="(row, index) in tableData"
        :key="tableCode + '_row_' + index"
        @mouseenter="handleEnterr(index)"
        @mouseleave="handleLeave(index)"
      >
        <cell
          v-for="(col, d) in columnsList"
          :key="tableCode + '_row_' + index + '_col_' + d"
          :row="row"
          :col="col"
          :index="index"
          showFixed
        ></cell>
      </tr>
    </tbody>
  </table>
</template>
<script>
import { deepCopy, typeOf } from "../../utils/assist";
import cell from "./cell";
const prefixCls = "sta-table";
export default {
  props: {
    columnsList: {
      type: Array,
      default: () => [],
    },
    tableData: {
      type: Array,
      default: () => [],
    },
    tableCode: String,
    tableWidth: Number,
  },
  data() {
    return {
      data: deepCopy(this.tableData),
    };
  },
  components: {
    cell,
  },
  computed: {
    tableClasses: () => prefixCls,
    bodyTableStyles() {
      return this.tableWidth === 0
        ? {}
        : {
            width: this.tableWidth + "px",
          };
    },
  },
  methods: {
    rowClasses(row, index) {
      const classList = [
        "row",
        { [`${prefixCls}-check-row`]: row.isCheck },
        ,
        { [`${prefixCls}-row-hover`]: row.isHover },
      ];
      if (typeOf(this.$parent.rowClassName) === "function") {
        classList.push(this.$parent.rowClassName(row, index));
      }
      return classList;
    },
    handleEnterr(index) {
      this.tableData[index].isHover = true;
    },
    handleLeave(index) {
      this.tableData[index].isHover = false;
    },
  },
  watch: {
    tableData() {
      this.data = deepCopy(this.tableData);
    },
  },
};
</script>