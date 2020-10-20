<template>
  <div :class="headerClasses">
    <div :class="fixedClasses" :style="fixedStyles">
      <thead-table
        :columnsList="columnsList"
        :isScroll="isScroll"
        :scrollWidth="scrollWidth"
        :tableWidth="tableWidth"
        :showFixed="true"
        :tableCode="tableCode"
      />
    </div>
    <div :class="fixedRightClasses" :style="fixedRightStyles">
      <thead-table
        :columnsList="columnsList"
        :isScroll="isScroll"
        :scrollWidth="scrollWidth"
        :tableWidth="tableWidth"
        :tableCode="tableCode"
        :showFixed="true"
      />
    </div>
    <thead-table
      :style="theadStyles"
      :columnsList="columnsList"
      :isScroll="isScroll"
      :scrollWidth="scrollWidth"
      :tableWidth="tableWidth"
      :tableCode="tableCode"
      ref="theadTable"
    />
  </div>
</template>
<script>
const prefixCls = "sta-table";
import theadTable from "./thead-table";
export default {
  components: {
    theadTable,
  },
  computed: {
    theadStyles() {
      return {
        "margin-left": this.$parent.headerMarginLeft,
      };
    },
    tableCode() {
      return this.$parent.tableCode;
    },
    columnsList() {
      return this.$parent.columnsList;
    },
    isScroll() {
      return this.$parent.isScroll;
    },
    scrollWidth() {
      return this.$parent.scrollWidth;
    },
    tableWidth() {
      return this.$parent.tableWidth;
    },
    fixedLeft() {
      return this.$parent.fixedLeft;
    },
    fixedRight() {
      return this.$parent.fixedRight;
    },
    headerClasses: () => `${prefixCls}-header`,
    fixedClasses: () => `${prefixCls}-fixed`,
    fixedRightClasses: () => `${prefixCls}-fixed-right`,
    fixedStyles() {
      const total = this.fixedLeft.reduce(
        (total, o) => (total += o._width * 1),
        0
      );
      return { width: total + "px" };
    },
    fixedRightStyles() {
      let total = this.fixedRight.reduce(
        (total, o) => (total += o._width * 1),
        0
      );
      if (this.isScroll) total += this.scrollWidth + 3;
      return { width: total + "px" };
    },
  },
};
</script>