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
      <component
        :year="year"
        :month="month"
        :dateSegment.sync="dateSegment"
        :today="today"
        @selectedCell="selectedCell"
        :is="pickerTable"
      />
    </div>
  </div>
</template>
<script>
import Icon from "../../icon";
import dateTable from "./base/date-table";
import monthTable from "./base/month-table";
import yearTable from "./base/year-table";
import { findComponentUpward, typeOf } from "../../../utils/assist";
const prefixCls = "sta-picker-panel";
const PICKERTYPE = {
  date: "date-table",
  week: "date-table",
  daterange: "date-table",
  month: "month-table",
  year: "year-table",
};
export default {
  inject: ["provideData"],
  components: { Icon, dateTable, monthTable, yearTable },
  props: {
    daterange: {
      type: Boolean,
      default: false,
    },
    dateSegment: {
      type: Array,
      default: () => [],
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
    this.dateInit();
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
    pickerTable() {
      return PICKERTYPE[this.tableType];
    },
  },
  methods: {
    selectedCell(date, val) {
      let { type } = this.provideData;
      if (type === this.tableType) {
        // let datePicker = findComponentUpward(this, "datePicker");
        // if (type === "daterange") {
        //   datePicker.provideData.visualValue.length === 2
        //     ? (datePicker.provideData.visualValue = [date])
        //     : datePicker.provideData.visualValue.push(date);
        // } else datePicker.provideData.visualValue = date;
        this.$emit("on-change", date);
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
    dateInit() {
      let today = new Date();
      let valueType = typeOf(this.provideData.visualValue);
      let arrayIndex = this.daterange ? 0 : 1;
      if (valueType === "date") {
        this.year = this.provideData.visualValue.getFullYear();
        this.month = this.provideData.visualValue.getMonth() + 1;
        this.today = this.provideData.visualValue.getDate();
      } else if (
        valueType === "array" &&
        this.provideData.visualValue[arrayIndex]
      ) {
        this.year = this.provideData.visualValue[arrayIndex].getFullYear();
        this.month = this.provideData.visualValue[arrayIndex].getMonth() + 1;
        this.today = this.provideData.visualValue[arrayIndex].getDate();
      } else {
        this.year = today.getFullYear();
        this.month = today.getMonth() + 1;
        this.today = today.getDate();
      }
    },
  },
  watch: {
    "provideData.type"(val) {
      this.tableType = val;
    },
    dateSegment(val) {
      this.$emit("update:dateSegment", val);
    },
  },
};
</script>