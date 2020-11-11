<template>
  <div :class="pickerPanelClasses">
    <div :class="pickerPanelHeaderClasses">
      <span :class="arrowDoubleLeftClasses" @click="lastYear">
        <Icon type="iconarrow-double-left"></Icon>
      </span>
      <span :class="arrowLeftClasses" v-show="tableType === 'date'">
        <Icon
          type="iconarrow-right"
          style="transform: rotate(180deg)"
          @click="lastMonth"
        ></Icon>
      </span>
      <span
        :class="pickerPanelBtnClasses"
        v-show="tableType !== 'year'"
        @click="tableType = 'year'"
      >
        {{ year }}年
      </span>
      <span v-show="tableType === 'year'"
        >{{ startYear }}-{{ startYear + 9 }}
      </span>
      <span
        :class="pickerPanelBtnClasses"
        v-show="tableType === 'date'"
        @click="tableType = 'month'"
      >
        {{ month }}月
      </span>
      <span :class="arrowDoubleRightClasses" @click="nextYear">
        <Icon type="iconarrow-double-right"></Icon>
      </span>
      <span :class="arrowRightClasses" v-show="tableType === 'date'">
        <Icon type="iconarrow-right" @click="nextMonth"></Icon>
      </span>
    </div>
    <div :class="pickerPanelBodyClasses">
      <date-table
        :year="year"
        :month="month"
        :today="today"
        v-show="tableType === 'date'"
      ></date-table>
      <month-table
        :month="month"
        :year="year"
        v-show="tableType === 'month'"
      ></month-table>
      <year-table :year="year" v-show="tableType === 'year'"></year-table>
    </div>
  </div>
</template>
<script>
import Icon from "../icon";
import dateTable from "./date-table";
import monthTable from "./month-table";
import yearTable from "./year-table";
const prefixCls = "sta-picker-panel";
export default {
  components: { Icon, dateTable, monthTable, yearTable },
  data() {
    return {
      year: 0,
      month: 0,
      today: 0,
      tableType: "date",
    };
  },
  mounted() {
    let today = new Date();
    this.year = today.getFullYear();
    this.month = today.getMonth() + 1;
    this.today = today.getDate();
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
    nextYear() {
      if (this.tableType === "year") this.year += 10;
      else this.year += 1;
    },
    lastYear() {
      if (this.year > 1 && this.tableType !== "year") this.year -= 1;
      if (this.tableType === "year") this.year -= 10;
    },
    lastMonth() {
      if (this.month > 1) this.month -= 1;
      else (this.year -= 1), (this.month = 12);
    },
    nextMonth() {
      if (this.month < 12) this.month += 1;
      else (this.year += 1), (this.month = 1);
    },
  },
};
</script>