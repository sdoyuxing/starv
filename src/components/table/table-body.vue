<template>
  <div
    :class="bodyClasses"
    :style="bodyStyles"
    @scroll="scrollChange"
    ref="bodyTable"
  >
    <div :class="fixedClasses" :style="fixedBodyStyles">
      <div :style="fixedLeftStyles" ref="fixedLeft" @scroll="fixedScrollChange">
        <tbody-table
          :columnsList="columnsList"
          :tableData="tableData"
          :tableCode="tableCode"
          :tableWidth="tableWidth"
        ></tbody-table>
      </div>
    </div>
    <div :class="fixedRightClasses" :style="fixedBodyRightStyles">
      <div
        :style="fixedRightStyles"
        ref="fixedRight"
        @scroll="fixedRightScrollChange"
      >
        <tbody-table
          :columnsList="columnsList"
          :tableData="tableData"
          :tableCode="tableCode"
          :tableWidth="tableWidth"
        ></tbody-table>
      </div>
    </div>
    <tbody-table
      ref="table"
      :columnsList="columnsList"
      :tableData="tableData"
      :tableCode="tableCode"
      :tableWidth="tableWidth"
      :row-class-name="rowClassName"
    ></tbody-table>
  </div>
</template>
<script>
import { typeOf, getScrollWidth } from "../../utils/assist";
import cell from "./cell";
import tbodyTable from "./tbody-table";
const prefixCls = "sta-table";
let timeOut = "";
export default {
  data() {
    return {
      scrollInex: 0,
      fixedShadow: false,
      fixedRightShadow: false,
    };
  },
  components: {
    cell,
    tbodyTable,
  },
  mounted() {
    this.$parent.isScroll =
      this.$refs.bodyTable.offsetHeight < this.$refs.table.$el.offsetHeight;
    this.$parent.isScrollY =
      this.$refs.bodyTable.offsetWidth < this.$refs.table.$el.offsetWidth;
    this.fixedRightShadow = this.$parent.isScrollY;
    this.$parent.scrollWidth = getScrollWidth(this.$refs.bodyTable);
    this.$parent.formatColumns();
  },
  computed: {
    rowClassName() {
      return this.$parent.rowClassName;
    },
    tableWidth() {
      return this.$parent.tableWidth;
    },
    fixedBodyRightStyles() {
      let total = this.$parent.fixedRight.reduce(
        (total, o) => (total += o._width * 1),
        0
      );
      if (this.$parent.isScroll) total += this.$parent.scrollWidth + 3;
      return {
        width: this.$parent.isScroll
          ? total - this.$parent.scrollWidth - 3 + "px"
          : total,
        height:
          (this.$parent.isScrollY
            ? this.$parent.height - 62
            : this.$parent.height - 45) + "px",
        right: this.$parent.isScroll ? this.$parent.scrollWidth + "px" : 0,
        boxShadow: this.fixedRightShadow
          ? " -5px 2px 5px 0 rgba(0,0,0,.15)"
          : "none",
      };
    },
    fixedRightClasses() {
      return `${prefixCls}-fixed-right`;
    },
    fixedRightStyles() {
      return {
        ...this.fixedLeftStyles,
        "padding-bottom": "1px",
      };
    },
    fixedLeftStyles() {
      return {
        "overflow-y": "auto",
        "overflow-x": "hidden",
        height: "100%",
        "margin-right": "-17px",
      };
    },
    columnsList() {
      return this.$parent.columnsList;
    },
    tableData() {
      return this.$parent.tableData;
    },
    tableCode() {
      return this.$parent.tableCode;
    },
    bodyClasses() {
      return `${prefixCls}-body`;
    },
    bodyStyles() {
      return {
        height: this.$parent.height - 45 + "px",
      };
    },
    fixedClasses() {
      return `${prefixCls}-fixed`;
    },
    fixedBodyStyles() {
      const total = this.$parent.fixedLeft.reduce(
        (total, o) => (total += o._width * 1),
        0
      );
      return {
        width: total + "px",
        height:
          (this.$parent.isScrollY
            ? this.$parent.height - 62
            : this.$parent.height - 45) + "px",
        boxShadow: this.fixedShadow ? " 5px 2px 5px 0 rgba(0,0,0,.15)" : "none",
      };
    },
  },
  methods: {
    fixedRightScrollChange() {
      if (this.scrollInex === 0 || this.scrollInex === 3) this.scrollInex = 3;
      else return;
      this.$refs.bodyTable.scrollTop = this.$refs.fixedRight.scrollTop;
      this.$refs.fixedLeft.scrollTop = this.$refs.fixedRight.scrollTop;
      if (timeOut) clearTimeout(timeOut);
      timeOut = setTimeout(() => {
        this.scrollInex = 0;
        clearTimeout(timeOut);
        timeOut = "";
      }, 100);
    },
    scrollChange() {
      if (this.scrollInex === 0 || this.scrollInex === 2) this.scrollInex = 2;
      else return;
      this.$parent.headerMarginLeft = -this.$refs.bodyTable.scrollLeft + "px";
      if (this.$refs.bodyTable.scrollLeft > 0) {
        this.fixedShadow = true;
      } else {
        this.fixedShadow = false;
      }
      if (
        this.$refs.bodyTable.scrollLeft + this.$refs.bodyTable.offsetWidth !==
        (this.$parent.isScroll
          ? this.$refs.table.$el.offsetWidth + this.$parent.scrollWidth
          : this.$refs.table.$el.offsetWidth)
      )
        this.fixedRightShadow = true;
      else this.fixedRightShadow = false;
      this.$refs.fixedLeft.scrollTop = this.$refs.bodyTable.scrollTop;
      this.$refs.fixedRight.scrollTop = this.$refs.bodyTable.scrollTop;
      if (timeOut) clearTimeout(timeOut);
      timeOut = setTimeout(() => {
        this.scrollInex = 0;
        clearTimeout(timeOut);
        timeOut = "";
      }, 100);
    },
    fixedScrollChange() {
      if (this.scrollInex === 0 || this.scrollInex === 1) this.scrollInex = 1;
      else return;
      this.$refs.bodyTable.scrollTop = this.$refs.fixedLeft.scrollTop;
      this.$refs.fixedRight.scrollTop = this.$refs.fixedLeft.scrollTop;
      if (timeOut) clearTimeout(timeOut);
      timeOut = setTimeout(() => {
        this.scrollInex = 0;
        clearTimeout(timeOut);
        timeOut = "";
      }, 100);
    },
  },
};
</script>