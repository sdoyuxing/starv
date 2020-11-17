<template>
  <table :class="pickerPanelContentClasses">
    <tbody>
      <tr v-for="row in rowTotal" :key="row">
        <template v-for="col in 3">
          <td
            :key="col"
            style="padding: 14px 14px"
            @click="handleClick(col + 3 * row - 3)"
          >
            <div :class="cellClasses(col + 3 * row - 3)">
              {{ col + 3 * row - 3 }}月
            </div>
          </td>
        </template>
      </tr>
    </tbody>
  </table>
</template>
<script>
const prefixCls = "sta-picker-panel";
import { findComponentUpward } from "../../utils/assist";
export default {
  props: {
    year: Number,
    month: Number,
  },
  inject: ["provideData"],
  data() {
    return {
      dateList: [],
      rowTotal: 4,
      nowMonth: 0,
      nowYear: 0,
      currentValue: this.provideData.visualValue,
    };
  },
  mounted() {
    let nowDate = new Date();
    this.nowMonth = nowDate.getMonth() + 1;
    this.nowYear = nowDate.getFullYear();
  },
  computed: {
    pickerPanelContentClasses() {
      return `${prefixCls}-content`;
    },
  },
  methods: {
    cellClasses(num) {
      return [
        `${prefixCls}-cell`,
        {
          [`${prefixCls}-cell-today`]:
            num === this.nowMonth && this.year === this.nowYear,
          [`${prefixCls}-cell-selected`]:
            this.currentValue &&
            num === this.currentValue.getMonth() + 1 &&
            this.currentValue.getFullYear() === this.year,
        },
      ];
    },
    handleClick(num) {
      let date = "";
      if (this.provideData.type === "month") {
        date = new Date(this.year, num, 1);
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