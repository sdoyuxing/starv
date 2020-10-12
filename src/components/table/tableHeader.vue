<template>
  <div :class="headerClasses">
    <div :class="fixedClasses" :style="fixedStyles">
      <thead-table
        :columnsList="columnsList"
        :isScroll="isScroll"
        :scrollWidth="scrollWidth"
        :tableWidth="tableWidth"
        :showFixed="true"
      />
    </div>
    <div :class="fixedRightClasses" :style="fixedRightStyles">
      <thead-table
        :columnsList="columnsList"
        :isScroll="isScroll"
        :scrollWidth="scrollWidth"
        :tableWidth="tableWidth"
        :showFixed="true"
      />
    </div>
    <thead-table
      :columnsList="columnsList"
      :isScroll="isScroll"
      :scrollWidth="scrollWidth"
      :tableWidth="tableWidth"
      ref="theadTable"
    />
  </div>
</template>
<script>
const prefixCls = "sta-table";
import theadTable from "./theadTable";
export default {
  components: {
    theadTable,
  },
  data() {
    return {
      tableEl: null,
    };
  },
  computed: {
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
  mounted() {
    this.tableEl = this.$refs.theadTable.$el;
  },
};
</script>