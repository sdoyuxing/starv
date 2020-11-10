<template>
  <div :class="pickerPanelClasses">
    <div :class="pickerPanelHeaderClasses">
      <span :class="arrowDoubleLeftClasses" @click="lastYear">
        <Icon type="iconarrow-double-left"></Icon>
      </span>
      <span :class="arrowLeftClasses">
        <Icon
          type="iconarrow-right"
          style="transform: rotate(180deg)"
          @click="lastMonth"
        ></Icon>
      </span>
      <span :class="pickerPanelBtnClasses"> {{ year }}年 </span>
      <span :class="pickerPanelBtnClasses"> {{ month }}月 </span>
      <span :class="arrowDoubleRightClasses" @click="nextYear">
        <Icon type="iconarrow-double-right"></Icon>
      </span>
      <span :class="arrowRightClasses">
        <Icon type="iconarrow-right" @click="nextMonth"></Icon>
      </span>
    </div>
    <div :class="pickerPanelBodyClasses">
      <date-table :year="year" :month="month" :today="today"></date-table>
    </div>
  </div>
</template>
<script>
import Icon from "../icon";
import dateTable from "./date-table";
const prefixCls = "sta-picker-panel";
export default {
  components: { Icon, dateTable },
  data() {
    return {
      year: 0,
      month: 0,
      today: 0,
    };
  },
  mounted() {
    let today = new Date();
    this.year = today.getFullYear();
    this.month = today.getMonth() + 1;
    this.today = today.getDate();
  },
  computed: {
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
      this.year += 1;
    },
    lastYear() {
      if (this.year > 1) this.year -= 1;
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