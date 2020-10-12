<template>
  <div :class="bodyClasses" :style="bodyStyles" @scroll="scrollChange">
    <div :class="fixedClasses" :style="fixedBodyStyles">
      <div
        style="margin-right: -17px"
        :class="fixedScrollClasses"
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
        :class="fixedScrollClasses"
        style="margin-right: -17px"
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
</template>
<script>
export default {
  computed: {
    bodyClasses: () => `${prefixCls}-body`,
    fixedClasses: () => `${prefixCls}-fixed`,
    fixedRightClasses: () => `${prefixCls}-fixed-right`,
    fixedScrollClasses: () => `${prefixCls}-fixed-scroll`,
    tableClasses: () => prefixCls,
    bodyStyles() {
      return {
        height: this.height - 45 + "px",
      };
    },
    bodyTableStyles() {
      return this.tableWidth === 0
        ? {}
        : {
            width: this.tableWidth + "px",
          };
    },
    fixedBodyStyles() {
      return {
        ...this.fixedStyles,
        height: (this.isScrollY ? this.height - 62 : this.height - 45) + "px",
        boxShadow: this.fixedShadow ? " 5px 2px 5px 0 rgba(0,0,0,.15)" : "none",
      };
    },
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
  },
  methods: {
    scrollChange() {
      this.$emit("on-scroll-change");
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
    handleEnterr(index) {
      this.tableData[index].isHover = true;
    },
    handleLeave(index) {
      this.tableData[index].isHover = false;
    },
  },
};
</script>