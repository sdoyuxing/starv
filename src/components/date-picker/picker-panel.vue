<template>
  <div :class="pickerPanelClasses">
    <div :class="pickerPanelHeaderClasses">
      <span :class="arrowDoubleLeftClasses" @click="lastYear">
        <Icon type="iconarrow-double-left"></Icon>
      </span>
      <span
        :class="arrowLeftClasses"
        v-show="tableType === 'date' || tableType === 'daterange'"
      >
        <Icon
          type="iconarrow-right"
          style="transform: rotate(180deg)"
          @click="lastMonth"
        ></Icon>
      </span>
      <span
        :class="pickerPanelBtnClasses"
        v-show="provideData.type !== 'year'"
        @click="tableType = 'year'"
      >
        {{ year }}年
      </span>
      <span v-show="provideData.type === 'year'"
        >{{ startYear }}-{{ startYear + 9 }}
      </span>
      <span
        :class="pickerPanelBtnClasses"
        v-show="
          tableType === 'date' ||
          tableType === 'week' ||
          tableType === 'daterange'
        "
        @click="tableType = 'month'"
      >
        {{ month }}月
      </span>
      <span :class="arrowDoubleRightClasses" @click="nextYear">
        <Icon type="iconarrow-double-right"></Icon>
      </span>
      <span
        :class="arrowRightClasses"
        v-show="tableType === 'date' || tableType === 'daterange'"
      >
        <Icon type="iconarrow-right" @click="nextMonth"></Icon>
      </span>
    </div>
    <div :class="pickerPanelBodyClasses">
      <date-table
        :year="year"
        :month="month"
        :today="today"
        v-show="
          tableType === 'date' ||
          tableType === 'week' ||
          tableType === 'daterange'
        "
        @selectedCell="selectedCell"
      ></date-table>
      <month-table
        :month="month"
        :year="year"
        @selectedCell="selectedCell"
        v-show="tableType === 'month'"
      ></month-table>
      <year-table
        :year="year"
        @selectedCell="selectedCell"
        v-show="tableType === 'year'"
      ></year-table>
    </div>
  </div>
</template>
<script>
import Icon from "../icon";
import dateTable from "./date-table";
import monthTable from "./month-table";
import yearTable from "./year-table";
import { findComponentUpward } from "../../utils/assist";
const prefixCls = "sta-picker-panel";
export default {
  inject: ["provideData"],
  components: { Icon, dateTable, monthTable, yearTable },
  props: {
    daterange: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      year: 0,
      month: 0,
      today: 0,
      tableType: this.provideData.type,
    };
  },
  mounted() {
    let today = new Date();
    this.year = this.provideData.visualValue
      ? this.provideData.visualValue.getFullYear()
      : today.getFullYear();
    this.month = this.provideData.visualValue
      ? this.provideData.visualValue.getMonth() + 1
      : today.getMonth() + 1;
    this.today = this.provideData.visualValue
      ? this.provideData.visualValue.getDate()
      : today.getDate();

    this.daterange && this.nextMonth();
  },
  computed: {
    startYear() {
      return Math.floor(this.year / 10) * 10;
    },
    pickerPanelClasses() {
      return prefixCls;
    },
    pickerPanelHeaderClasses() {
      return `${prefixCls}-header`;
    },
    pickerPanelBtnClasses() {
      return `${prefixCls}-btn`;
    },
    arrowDoubleLeftClasses() {
      return [`${prefixCls}-btn`, `${prefixCls}-icon-arrow-double-left`];
    },
    arrowLeftClasses() {
      return [`${prefixCls}-btn`, `${prefixCls}-icon-arrow-left`];
    },
    arrowDoubleRightClasses() {
      return [`${prefixCls}-btn`, `${prefixCls}-icon-arrow-double-right`];
    },
    arrowRightClasses() {
      return [`${prefixCls}-btn`, `${prefixCls}-icon-arrow-right`];
    },
    pickerPanelBodyClasses() {
      return `${prefixCls}-body`;
    },
  },
  methods: {
    selectedCell(date, val) {
      let { type } = this.provideData;
      if (type === this.tableType) {
        let datePicker = findComponentUpward(this, "datePicker");
        datePicker.provideData.visualValue = date;
      } else if (
        (type === "date" || type === "daterange") &&
        this.tableType === "month"
      ) {
        this.month = val;
        this.tableType = "date";
      } else if (
        (type === "date" || type === "month" || type === "daterange") &&
        this.tableType === "year"
      ) {
        this.year = val;
        this.tableType = "month";
      }
    },
    nextYear() {
      if (this.tableType === "year") this.year += 10;
      else this.year += 1;
      this.tableType === "daterange" &&
        this.$emit("pickerLinkage", "next", "year");
    },
    lastYear() {
      if (this.year > 1 && this.tableType !== "year") this.year -= 1;
      if (this.tableType === "year") this.year -= 10;
      this.daterange && this.$emit("pickerLinkage", "last", "year");
    },
    lastMonth() {
      if (this.month > 1) this.month -= 1;
      else (this.year -= 1), (this.month = 12);
      this.daterange && this.$emit("pickerLinkage", "last", "month");
    },
    nextMonth() {
      if (this.month < 12) this.month += 1;
      else (this.year += 1), (this.month = 1);
      this.tableType === "daterange" &&
        this.$emit("pickerLinkage", "next", "month");
    },
  },
  watch: {
    "provideData.type"(val) {
      this.tableType = val;
    },
  },
};
</script>