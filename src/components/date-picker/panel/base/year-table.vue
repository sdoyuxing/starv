<template>
  <table :class="pickerPanelContentClasses">
    <tbody>
      <tr v-for="row in rowTotal" :key="row">
        <template v-for="col in 3">
          <td
            :key="col"
            style="padding: 14px 14px"
            @click="handleClick(startYear + col + 3 * row - 5)"
          >
            <div :class="cellClasses(startYear + col + 3 * row - 5)">
              {{ startYear + col + 3 * row - 5 }}
            </div>
          </td>
        </template>
      </tr>
    </tbody>
  </table>
</template>
<script>
const prefixCls = "sta-picker-panel";
import { findComponentUpward } from "../../../../utils/assist";
export default {
  props: {
    year: Number,
  },
  inject: ["provideData"],
  data() {
    return {
      dateList: [],
      rowTotal: 4,
      nowYear: 0,
      currentValue: this.provideData.visualValue,
    };
  },
  mounted() {
    let nowDate = new Date();
    this.nowYear = nowDate.getFullYear();
  },
  computed: {
    startYear() {
      return Math.floor(this.year / 10) * 10;
    },
    pickerPanelContentClasses() {
      return `${prefixCls}-content`;
    },
  },
  methods: {
    cellClasses(num) {
      return [
        `${prefixCls}-cell`,
        {
          [`${prefixCls}-cell-today`]: num === this.nowYear,
          [`${prefixCls}-cell-selected`]:
            this.currentValue && num === this.currentValue.getFullYear(),
        },
      ];
    },
    handleClick(num) {
      let date = "";
      if (this.provideData.type === "year") {
        date = new Date(num, 1, 1);
      }
      this.$emit("selectedCell", date, num);
    },
  },
  watch: {
    "provideData.visualValue"(val) {
      this.currentValue = val;
    },
  },
};
</script>