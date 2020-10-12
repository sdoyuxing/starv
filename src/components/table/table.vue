<template>
  <div :class="wrapClasses" :style="tableStyles">
    <table-header ref="header" />
    <div
      :class="bodyClasses"
      :style="bodyStyles"
      ref="bodyTable"
      @scroll="scrollChange"
    >
      <div :class="fixedClasses" :style="fixedBodyStyles">
        <div
          style="
            overflow-y: auto;
            overflow-x: hidden;
            height: 100%;
            margin-right: -17px;
          "
          ref="fixedLeft"
          @scroll="fixedScrollChange"
        >
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
        </div>
      </div>
      <div :class="fixedRightClasses" :style="fixedBodyRightStyles">
        <div
          style="
            overflow-y: auto;
            overflow-x: hidden;
            height: 100%;
            margin-right: -17px;
            padding-bottom: 1px;
          "
          ref="fixedRight"
          @scroll="fixedRightScrollChange"
        >
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
        </div>
      </div>
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
            @mouseenter="handleEnterr(index)"
            @mouseleave="handleLeave(index)"
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
import { deepCopy, typeOf, getScrollWidth } from "../../utils/assist";
import cell from "./cell";
import tableHeader from "./tableHeader";
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
      isScroll: false,
      isScrollY: false,
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
    };
  },
  components: {
    cell,
    tableHeader,
  },
  mounted() {
    this.isScroll =
      this.$refs.bodyTable.offsetHeight < this.$refs.table.offsetHeight;
    this.isScrollY =
      this.$refs.bodyTable.offsetWidth < this.$refs.table.offsetWidth;
    this.fixedRightShadow = this.isScrollY;
    this.scrollWidth = getScrollWidth(this.$refs.bodyTable);
    this.formatColumns();
    this.tableCode = this.getUuid();
  },
  computed: {
    fixedBodyRightStyles() {
      let total = this.fixedRight.reduce(
        (total, o) => (total += o._width * 1),
        0
      );
      if (this.isScroll) total += this.scrollWidth + 3;
      return {
        width: this.isScroll ? total - this.scrollWidth - 3 + "px" : total,
        height: (this.isScrollY ? this.height - 62 : this.height - 45) + "px",
        right: this.isScroll ? this.scrollWidth + "px" : 0,
        boxShadow: this.fixedRightShadow
          ? " -5px 2px 5px 0 rgba(0,0,0,.15)"
          : "none",
      };
    },
    fixedBodyStyles() {
      return {
        ...this.fixedStyles,
        height: (this.isScrollY ? this.height - 62 : this.height - 45) + "px",
        boxShadow: this.fixedShadow ? " 5px 2px 5px 0 rgba(0,0,0,.15)" : "none",
      };
    },
    fixedStyles() {
      const total = this.fixedLeft.reduce(
        (total, o) => (total += o._width * 1),
        0
      );
      return { width: total + "px" };
    },
    fixedClasses() {
      return `${prefixCls}-fixed`;
    },
    fixedRightClasses() {
      return `${prefixCls}-fixed-right`;
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
      if (!this.width) {
        this.tableWidth = "auto";
        return;
      }
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
        }
        if (columns[i].fixed && columns[i].fixed === "right") {
          this.fixedRight.unshift(columns.splice(i, 1)[0]);
          i--;
        }
      }
      this.tableWidth = tableWidth;
      return [...this.fixedLeft, ...columns, ...this.fixedRight];
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
    handleEnterr(index) {
      this.tableData[index].isHover = true;
    },
    handleLeave(index) {
      this.tableData[index].isHover = false;
    },
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
    scrollChange() {
      if (this.scrollInex === 0 || this.scrollInex === 2) this.scrollInex = 2;
      else return;
      this.$refs.header.tableEl.style.marginLeft =
        -this.$refs.bodyTable.scrollLeft + "px";
      if (this.$refs.bodyTable.scrollLeft > 0) {
        this.fixedShadow = true;
      } else {
        this.fixedShadow = false;
      }
      console.log(
        this.$refs.bodyTable.scrollLeft,
        this.$refs.bodyTable.offsetWidth,
        this.$refs.table.offsetWidth + this.scrollWidth
      );
      if (
        this.$refs.bodyTable.scrollLeft + this.$refs.bodyTable.offsetWidth !==
        (this.isScroll
          ? this.$refs.table.offsetWidth + this.scrollWidth
          : this.$refs.table.offsetWidth)
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
      const classList = [
        "row",
        { [`${prefixCls}-check-row`]: row.isCheck },
        ,
        { [`${prefixCls}-row-hover`]: row.isHover },
      ];
      if (typeOf(this.rowClassName) === "function") {
        classList.push(this.rowClassName(row, index));
      }
      return classList;
    },
    formatColumns() {
      if (!this.width) return;
      let totalWidth = this.isScroll
        ? this.width - this.scrollWidth
        : this.width;
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
