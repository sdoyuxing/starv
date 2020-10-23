<template>
  <th :style="cellStyles(col)" :class="colClasses" @click="sortChange">
    <template v-if="col.type === 'checkbox'">
      <s-checkbox v-model="isCheck" :halfChecked="halfChecked" />
    </template>
    <template v-else>
      {{ col.title }}
      <div :class="sortClasses" v-if="col.sort">
        <Icon type="iconpaixujiantoushang" :class="sortUpClasses" />
        <Icon type="iconpaixujiantouxia" :class="sortDownClasses" />
      </div>
      <filter-tooltip
        v-if="col.filters"
        :col="col"
        @filter-change="filterChange"
      />
    </template>
  </th>
</template>
<script>
const prefixCls = "sta-table";
const sortList = ["", "asc", "desc"];
import { findComponentUpward } from "../../utils/assist";
import Icon from "../icon";
import sCheckbox from "../checkbox";
import filterTooltip from "./filter-tooltip";
export default {
  name: "column",
  props: {
    col: {
      type: Object,
      default: () => ({}),
    },
    showFixed: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    sCheckbox,
    Icon,
    filterTooltip,
  },
  data() {
    return {
      isCheck: this.isAllCheck,
      sort: "",
      changeDisable: true,
      table: findComponentUpward(this, "sTable"),
    };
  },
  computed: {
    tableCode() {
      return this.table.tableCode;
    },
    halfChecked() {
      return this.table.halfChecked;
    },
    isAllCheck() {
      return this.table.isAllCheck;
    },
    sortClasses() {
      return `${prefixCls}-sort`;
    },
    sortUpClasses() {
      return [
        `${prefixCls}-sort-up`,
        `${prefixCls}-sort-icon`,
        { [`${prefixCls}-sort-highlight`]: this.sort === "asc" },
      ];
    },
    sortDownClasses() {
      return [
        `${prefixCls}-sort-down`,
        `${prefixCls}-sort-icon`,
        { [`${prefixCls}-sort-highlight`]: this.sort === "desc" },
      ];
    },
    colClasses() {
      return { [`${prefixCls}-col-sort`]: this.col.sort };
    },
  },
  methods: {
    cellStyles(data) {
      return {
        "text-align": data.align || "left",
        "font-size":
          data.type === "checkbox" || data.type === "radio" ? 0 : "inherit",
        visibility: data.fixed && !this.showFixed ? "hidden" : "visible",
      };
    },
    sortChange() {
      if (this.col.sort) {
        const num = sortList.indexOf(this.sort) + 1;
        this.sort = sortList[num > 2 ? 0 : num];
        this.table.sortChange(this.sort, this.col.key);
      }
    },
    filterChange(filterSelect, key) {
      this.table.filterChange(filterSelect, key);
    },
  },
  watch: {
    isCheck(val) {
      let table = findComponentUpward(this, "sTable");
      table.checkAll(val);
    },
    isAllCheck(val) {
      this.isCheck = val;
    },
  },
};
</script>