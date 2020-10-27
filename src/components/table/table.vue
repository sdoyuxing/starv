<template>
  <div :class="wrapClasses" :style="tableStyles" ref="wrapTable">
    <table-header ref="header" />
    <table-body ref="bodyTable" />
  </div>
</template>
<script>
const prefixCls = "sta-table";
const checkboxWidth = 53;
import { deepCopy, typeOf, getScrollWidth } from "../../utils/assist";
import cell from "./cell";
import tableHeader from "./table-header";
import tableBody from "./table-body";
let copyTable = null;
let copySortTable = null;
let timeOut = "";
export default {
  name: "sTable",
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
    bordered: {
      type: Boolean,
      default: false,
    },
    rowClassName: Function,
    height: [String, Number],
    width: [String, Number],
  },
  data() {
    return {
      isScrollY: false,
      isScrollX: false,
      scrollWidth: 0,
      scrollInex: 0,
      tableWidth: 0,
      columnWidth: 0,
      isAllCheck: false,
      tableData: [],
      seed: 0,
      tableCode: "",
      fixedLeft: [],
      fixedRight: [],
      fixedShadow: false,
      fixedRightShadow: false,
      headerMarginLeft: "",
      halfChecked: false,
    };
  },
  components: {
    cell,
    tableHeader,
    tableBody,
  },
  mounted() {
    this.tableCode = this.getUuid();
    if (!this.width) {
      this.tableWidth = this.$refs.wrapTable.offsetWidth;
      this.formatColumns();
      return;
    }
  },
  computed: {
    fixedStyles() {
      const total = this.fixedLeft.reduce(
        (total, o) => (total += o._width * 1),
        0
      );
      return { width: total + "px" };
    },
    tableStyles() {
      return {
        width: (this.width || this.tableWidth || undefined) + "px",
        height: this.height + "px",
      };
    },
    wrapClasses() {
      return [
        `${prefixCls}-wrap`,
        {
          [`${prefixCls}-border`]: this.bordered,
        },
      ];
    },
    columnSlot() {
      if (
        typeOf(this.$slots.default) === "array" &&
        this.$slots.default.length > 0
      ) {
        return this.$slots.default
          .filter((o) => o.tag === "column")
          .map((o) => {
            const attr =
              o.data && o.data.attrs
                ? {
                    key: o.data.attrs.prop,
                    className: o.data.attrs["class-name"],
                    width:
                      o.data.attrs.width ||
                      ((o.data.attrs.type === "checkbox" ||
                        o.data.attrs.type === "radio") &&
                        checkboxWidth),
                    render: o.data.attrs.render,
                    type: o.data.attrs.type,
                    align: o.data.attrs.align,
                    sort: "sort" in o.data.attrs ? true : false,
                    filters: o.data.attrs.filters,
                    fixed: o.data.attrs.fixed,
                  }
                : {};
            const children =
              typeOf(o.children) === "array"
                ? {
                    title: o.children
                      .filter((o) => o.tag === undefined)
                      .map((o) => o.text)
                      .join(""),
                    format: o.children.filter(
                      (o) =>
                        o.tag === "template" &&
                        o.data &&
                        o.data.slot === "format"
                    ),
                  }
                : {};
            const scopedSlots =
              o.data && o.data.scopedSlots ? { ...o.data.scopedSlots } : {};
            return { disabled: false, ...attr, ...children, ...scopedSlots };
          });
      } else {
        return this.columns;
      }
    },
    columnsList() {
      let columns = [...this.columnSlot];
      this.fixedLeft = [];
      this.fixedRight = [];
      let tableWidth = 0;
      for (let i = 0; i < columns.length; i++) {
        columns[i] = {
          ...columns[i],
          _width: columns[i].width || this.columnWidth,
        };
        tableWidth += columns[i]._width * 1;
        if (columns[i].fixed && columns[i].fixed === "left") {
          this.fixedLeft.push(columns.splice(i, 1)[0]);
          i--;
        } else if (columns[i].fixed && columns[i].fixed === "right") {
          this.fixedRight.unshift(columns.splice(i, 1)[0]);
          i--;
        }
      }
      this.tableWidth =
        tableWidth < this.tableWidth ? this.tableWidth : tableWidth;
      return [...this.fixedLeft, ...columns, ...this.fixedRight];
    },
  },
  methods: {
    cellClick(row, col){
       this.$emit("on-cell-click", row, col);
    },
    rowClick(row, index) {
      this.$emit("on-row-click", row, index);
    },
    rowDblclick(row, index) {
      this.$emit("on-row-dblclick", row, index);
    },
    filterChange(filters, key) {
      if (filters.length > 0) {
        this.tableData = deepCopy(copyTable).filter(
          (o) => filters.indexOf(o[key]) > -1
        );
        copySortTable = [...this.tableData];
        this.$emit("on-filter-change", copySortTable);
      } else {
        this.tableData = deepCopy(copyTable);
      }
    },
    formatColumns() {
      let totalWidth;
      if (this.width) {
        totalWidth = this.isScrollY
          ? this.width - this.scrollWidth
          : this.width;
      } else {
        totalWidth = this.isScrollY
          ? this.tableWidth - this.scrollWidth
          : this.tableWidth;
      }

      let length = this.columnSlot.length;
      this.columnSlot.forEach((o) => {
        totalWidth -= o.width || 0;
        o.width && length--;
      });
      if (totalWidth > 0) {
        this.columnWidth = parseInt(totalWidth / length);
      } else {
        this.columnWidth = 80;
      }
    },
    checkAll(val) {
      if (val === 0 || typeOf(val) === "boolean") {
        this.isAllCheck = val;
      } else {
        throw new TypeError("The selectAll parameter must be of Boolean type");
        return;
      }
    },
    getUuid() {
      return "starTable_" + Date.now() + "_" + this.seed++;
    },
    checkChange(val, row, index) {
      if (this.tableData.every((o) => o.isCheck)) this.isAllCheck = true;
      else if (!this.tableData.some((o) => o.isCheck)) this.isAllCheck = false;
      else this.isAllCheck = 0;
      this.halfChecked =
        !this.tableData.every((o) => o.isCheck) &&
        this.tableData.some((o) => o.isCheck);
      this.$emit("on-check-change", val, row, index);
    },
    getCheckRow() {
      return this.tableData.filter((o) => o.isCheck);
    },
    checkRow(num) {
      this.setCheck(num, true);
    },
    uncheckRow(num) {
      this.setCheck(num, false);
    },
    setCheck(num, bool) {
      if (typeOf(num) === "number") {
        this.tableData[num - 1].isCheck = bool;
      } else if (typeOf(num) === "array") {
        num.forEach((o) => {
          if (typeOf(o) === "number") {
            this.tableData[o - 1].isCheck = bool;
          } else {
            throw new TypeError("The phases in the array must be number");
          }
        });
      } else {
        throw new TypeError("The parameter must be an array or number");
        return;
      }
    },
    sortChange(sort, key) {
      if (sort === "") {
        this.tableData = [...copySortTable];
        return;
      }
      this.tableData.sort((a, b) => {
        return sort === "desc" ? b[key] - a[key] : a[key] - b[key];
      });
      this.$emit("on-sort-change", key, sort);
    },
  },
  watch: {
    data: {
      handler: function (val) {
        this.tableData = val.map((o, index) => ({
          ...o,
          isCheck: o.check || false,
          isHover: false,
        }));
        copySortTable = copyTable = [...this.tableData];
      },
      immediate: true,
    },
    isAllCheck(val) {
      if (typeOf(val) === "boolean") {
        this.tableData.forEach((o) => (o.isCheck = val));
        this.$emit("on-all-change", val);
      }
    },
  },
};
</script>
