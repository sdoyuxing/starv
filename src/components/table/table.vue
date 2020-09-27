<template>
  <div :class="wrapClasses" :style="tableStyles">
    <div :class="headerClasses">
      <table :style="headerTableStyles">
        <colgroup>
          <col
            v-for="(column, index) in columnsList"
            :key="tableCode + '_col_' + index"
            :width="column._width"
          />
          <col v-if="isScroll" :width="scrollWidth" />
        </colgroup>
        <thead>
          <tr>
            <column
              v-for="(col, index) in columnsList"
              :key="tableCode + '_column_' + index"
              :col="col"
            />
            <column style="padding: 0"></column>
          </tr>
        </thead>
      </table>
    </div>
    <div :class="bodyClasses" :style="bodyStyles" ref="bodyTable">
      <table :class="tableClasses" ref="table" :style="bodyTableStyles">
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
          >
            <cell
              v-for="(col, d) in columnsList"
              :key="tableCode + '_row_' + index + '_col_' + d"
              :row="row"
              :col="col"
              :index="index"
            ></cell>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
const prefixCls = "sta-table";
const checkboxWidth = 53;
import { deepCopy, typeOf } from "../../utils/assist";
import cell from "./cell";
import column from "./column";
let copyTable = null;
let copySortTable = null;
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
      isScroll: false,
      scrollWidth: 0,
      tableWidth: 0,
      headerTableWidth: 0,
      columnWidth: 0,
      isAllCheck: false,
      tableData: [],
      seed: 0,
      tableCode: "",
    };
  },
  components: {
    column,
    cell,
  },
  mounted() {
    this.isScroll =
      this.$refs.bodyTable.offsetHeight < this.$refs.table.offsetHeight;
    this.isScroll &&
      (this.scrollWidth =
        this.$refs.bodyTable.offsetWidth - this.$refs.table.offsetWidth - 1);
    this.tableWidth = this.$refs.table.offsetWidth;
    this.headerTableWidth = this.$refs.bodyTable.offsetWidth;
    this.formatColumns();
    this.tableCode = this.getUuid();
  },
  computed: {
    headerClasses() {
      return `${prefixCls}-header`;
    },
    bodyClasses() {
      return `${prefixCls}-body`;
    },
    tableClasses() {
      return [prefixCls];
    },
    tableStyles() {
      return {
        width: this.width + "px",
        height: this.height + "px",
      };
    },
    bodyTableStyles() {
      return this.tableWidth === 0
        ? {}
        : {
            width: this.tableWidth + "px",
          };
    },
    headerTableStyles() {
      return this.headerTableWidth === 0
        ? {}
        : {
            width: this.headerTableWidth + "px",
          };
    },
    bodyStyles() {
      return {
        height: this.height - 45 + "px",
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
                    sortable: "sortable" in o.data.attrs ? true : false,
                    filters: o.data.attrs.filters,
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
      let columns = this.columnSlot;
      columns = columns.map((o) => {
        return {
          ...o,
          _width: o.width || this.columnWidth,
        };
      });
      return columns;
    },
    halfChecked() {
      if (this.tableData.every((o) => o.isCheck)) this.isAllCheck = true;
      else if (!this.tableData.some((o) => o.isCheck)) this.isAllCheck = false;
      else this.isAllCheck = 0;
      return (
        !this.tableData.every((o) => o.isCheck) &&
        this.tableData.some((o) => o.isCheck)
      );
    },
  },
  methods: {
    filterChange(filters, key) {
      if (filters.length > 0) {
        this.tableData = deepCopy(copyTable).filter(
          (o) => filters.indexOf(o[key]) > -1
        );
        copySortTable = [...this.tableData];
      } else {
        this.tableData = deepCopy(copyTable);
      }
    },
    rowClasses(row, index) {
      const classList = ["row", { [`${prefixCls}-check-row`]: row.isCheck }];
      if (typeOf(this.rowClassName) === "function") {
        classList.push(this.rowClassName(row, index));
      }
      return classList;
    },
    formatColumns() {
      let totalWidth = this.$refs.table.offsetWidth;
      let length = this.columnSlot.length;
      this.columnSlot.forEach((o) => {
        totalWidth -= o.width || 0;
        o.width && length--;
      });
      this.columnWidth = parseInt(totalWidth / length);
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
    },
  },
  watch: {
    data: {
      handler: function (val) {
        this.tableData = val.map((o, index) => ({
          ...o,
          isCheck: o.check || false,
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
