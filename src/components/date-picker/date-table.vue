<template>
  <table :class="pickerPanelContentClasses">
    <thead>
      <th v-for="item in dateHeader" :key="item">{{ item }}</th>
    </thead>
    <tbody>
      <tr v-for="row in rowTotal" :key="row">
        <template v-for="col in 7">
          <td :key="col" @click="handleClick(col + 7 * row - 8)">
            <div :class="cellClasses(col + 7 * row - 8)">
              {{ dateList[col + 7 * row - 8] }}
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
    today: Number,
  },
  inject: ["provideData"],
  data() {
    return {
      dateHeader: ["日", "一", "二", "三", "四", "五", "六"],
      dateList: [],
      rowTotal: 6,
      monthStartDay: 0,
      monthEndDay: 0,
      nowMonth: 0,
      nowYear: 0,
      currentValue: this.provideData.visualValue,
    };
  },
  mounted() {
    let nowDate = new Date();
    this.getDateList();
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
          [`${prefixCls}-cell-outer`]:
            num < this.monthStartDay ||
            num > this.monthEndDay + this.monthStartDay - 1,
          [`${prefixCls}-cell-today`]:
            this.today === this.dateList[num] &&
            num >= this.monthStartDay &&
            num <= this.monthEndDay + this.monthStartDay - 1 &&
            this.nowMonth === this.month &&
            this.nowYear === this.year,
          [`${prefixCls}-cell-selected`]:
            this.currentValue &&
            this.currentValue.getDate() === this.dateList[num] &&
            this.currentValue.getMonth() + 1 === this.month &&
            this.currentValue.getFullYear() === this.year &&
            num >= this.monthStartDay &&
            num <= this.monthEndDay + this.monthStartDay - 1,
        },
      ];
    },
    getMonthStartEnd(month, year) {
      month = Number(month);
      let monthEndDate = new Date();
      monthEndDate.setFullYear(year);
      monthEndDate.setMonth(month);
      monthEndDate.setDate(0);

      let monthStartDate = new Date();
      monthStartDate.setFullYear(year);
      monthStartDate.setMonth(month - 1);
      monthStartDate.setDate(1);

      return [monthStartDate, monthEndDate];
    },
    getDateList() {
      this.dateList = [];
      let [monthStartDate, monthEndDate] = this.getMonthStartEnd(
        this.month,
        this.year
      );
      this.monthEndDay = monthEndDate.getDate();
      this.monthStartDay = monthStartDate.getDay();
      monthStartDate.setDate(0);
      let lastMonthEnd = monthStartDate.getDate();
      for (let i = 0; i < 42; i++) {
        if (i < this.monthStartDay) {
          this.dateList.push(lastMonthEnd + i - this.monthStartDay + 1);
        } else if (i < this.monthEndDay + this.monthStartDay) {
          this.dateList.push(i + 1 - this.monthStartDay);
        } else {
          this.dateList.push(i - this.monthEndDay - this.monthStartDay + 1);
        }
      }
    },
    handleClick(num) {
      let month = this.month;
      let year = this.year;
      if (num < this.monthStartDay) {
        this.$parent.lastMonth();
        if (month > 1) month -= 1;
        else (month = 12), (year -= 1);
      }
      if (num > this.monthEndDay + this.monthStartDay - 1) {
        this.$parent.nextMonth();
        if (month < 12) month += 1;
        else (month = 1), (year += 1);
      }
      let date = new Date();
      let datePicker = findComponentUpward(this, "datePicker");
      date.setFullYear(year);
      date.setMonth(month - 1);
      date.setDate(this.dateList[num]);
      datePicker.provideData.visualValue = date;
    },
    cellTitle(num){
      return `${this.year}`
    }
  },
  watch: {
    month() {
      this.getDateList();
    },
    year() {
      this.getDateList();
    },
    "provideData.visualValue"(val) {
      this.currentValue = val;
    },
  },
};
</script>