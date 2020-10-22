<template>
  <table :style="headerTableStyles">
    <colgroup>
      <col
        v-for="(column, index) in columnsList"
        :key="tableCode + '_col_' + index"
        :width="column._width"
      />
      <col v-if="isScrollY" :width="scrollWidth" />
    </colgroup>
    <thead>
      <tr>
        <column
          v-for="(col, index) in columnsList"
          :key="tableCode + '_column_' + index"
          :col="col"
          :showFixed="showFixed"
        />
        <column v-if="isScrollY" style="padding: 0"></column>
      </tr>
    </thead>
  </table>
</template>
<script>
import column from "./column";
export default {
  props: {
    isScrollY: {
      type: Boolean,
      default: false,
    },
    tableWidth: {
      type: Number,
      default: 0,
    },
    scrollWidth: {
      type: Number,
      default: 0,
    },
    columnsList: {
      type: Array,
      default: () => [],
    },
    showFixed: {
      type: Boolean,
      default: false,
    },
    tableCode: String,
  },
  components: {
    column,
  },
  computed: {
    headerTableStyles() {
      return this.tableWidth === 0
        ? {}
        : {
            width: this.isScrollY
              ? this.tableWidth + this.scrollWidth + "px"
              : this.tableWidth + "px",
          };
    },
  },
};
</script>