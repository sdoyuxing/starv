<template>
  <table :class="pickerPanelContentClasses">
    <thead>
      <th v-for="item in dateHeader" :key="item" width="1">{{ item }}</th>
    </thead>
    <tbody>
      <tr v-for="row in rowTotal" :key="row" :class="rowClasses(row)">
        <template v-for="col in 7">
          <td
            :key="col"
            :class="tdClasses(col + 7 * row - 8)"
            @click="handleClick(col + 7 * row - 8)"
            @mouseenter.stop="handleMouseenter(col + 7 * row - 8)"
          >
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
import {
  typeOf,
  deepCopy,
  findComponentUpward,
} from "../../../../utils/assist";
export default {
  props: {
    year: Number,
    month: Number,
  },
  inject: ["provideData", "disabledDate"],
  data() {
    return {
      dateHeader: ["日", "一", "二", "三", "四", "五", "六"],
      dateList: [],
      rowTotal: 6,
      monthStartDay: 0,
      monthEndDay: 0,
      nowDate: null,
      cellIndex: 0,
      dateRange: null,
    };
  },
  mounted() {
    this.nowDate = new Date();
    this.getDateList();
    this.dateRange = findComponentUpward(this, "dateRange");
  },
  computed: {
    pickerPanelContentClasses() {
      return `${prefixCls}-content`;
    },
    selectedCell() {
      if (this.dateRange) return this.dateRange.currentValue;
      return this.provideData.visualValue;
    },
    dateSegment() {
      if (this.dateRange) return this.dateRange.dateSegment;
      else return [];
    },
  },
  methods: {
    rowClasses(rowIndex) {
      return this.provideData.type === "week"
        ? [
            `${prefixCls}-row`,
            {
              [`${prefixCls}-row-selected`]:
                this.provideData.visualValue &&
                this.dateList
                  .slice(
                    Math.max(this.monthStartDay, (rowIndex - 1) * 7),
                    Math.min(
                      rowIndex * 7,
                      this.monthEndDay + this.monthStartDay - 1
                    )
                  )
                  .includes(this.provideData.visualValue.getDate()),
            },
          ]
        : "";
    },
    cellClasses(num) {
      let dateArray = [];
      if (this.year === 0 && this.month === 0) return [];
      let cellDate = new Date(this.year, this.month - 1, this.dateList[num]);
      if (typeOf(this.selectedCell) === "date") dateArray = [this.selectedCell];
      else dateArray = this.selectedCell || [];
      return [
        `${prefixCls}-cell`,
        {
          [`${prefixCls}-cell-outer`]:
            num < this.monthStartDay ||
            num > this.monthEndDay + this.monthStartDay - 1,
          [`${prefixCls}-cell-today`]:
            this.nowDate &&
            new Date(
              this.nowDate.getFullYear(),
              this.nowDate.getMonth(),
              this.nowDate.getDate()
            ).getTime() === cellDate.getTime() &&
            num >= this.monthStartDay &&
            num <= this.monthEndDay + this.monthStartDay - 1,
          [`${prefixCls}-cell-selected`]: dateArray.some((item) => {
            return (
              item.getTime() === cellDate.getTime() &&
              num >= this.monthStartDay &&
              num <= this.monthEndDay + this.monthStartDay - 1
            );
          }),
          [`${prefixCls}-cell-segment`]:
            this.dateSegment.length === 2 &&
            this.dateSegment[0].getTime() <= cellDate.getTime() &&
            this.dateSegment[1].getTime() >= cellDate.getTime() &&
            num >= this.monthStartDay &&
            num <= this.monthEndDay + this.monthStartDay - 1,
        },
      ];
    },
    tdClasses(num) {
      if (this.year === 0 && this.month === 0) return [];
      let { month, year } = this;
      if (num < this.monthStartDay) {
        if (month > 1) month -= 1;
        else (month = 12), (year -= 1);
      }
      if (num > this.monthEndDay + this.monthStartDay - 1) {
        if (month < 12) month += 1;
        else (month = 1), (year += 1);
      }
      let cellDate = new Date(year, month - 1, this.dateList[num]);
      return {
        [`${prefixCls}-cell-disabled`]:
          typeOf(this.disabledDate) === "function" &&
          this.disabledDate(cellDate),
      };
    },
    getMonthStartEnd(month, year) {
      let monthEndDate = new Date(year, Number(month), 0);
      let monthStartDate = new Date(year, Number(month) - 1, 1);
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
      let { month, year } = this;
      this.cellIndex = num;
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
      let date = new Date(year, month - 1, this.dateList[num]);
      if (this.disabledDate && this.disabledDate(date)) return;
      this.$emit("selectedCell", date);
    },
    cellTitle(num) {
      return `${this.year}`;
    },
    handleMouseenter(num) {
      if (this.dateRange && this.dateRange.currentValue.length === 1) {
        this.dateRange.dateSegment = [
          this.dateRange.currentValue[0],
          new Date(this.year, this.month - 1, this.dateList[num]),
        ].sort((a, b) => a.getTime() - b.getTime());
      }
    },
  },
  watch: {
    month() {
      this.getDateList();
    },
    year() {
      this.getDateList();
    },
  },
};
</script>