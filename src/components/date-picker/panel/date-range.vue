<template>
  <div :class="daterangeClasses">
    <picker-panel
      ref="startPicker"
      @pickerLinkage="pickerLinkage"
      @on-change="handleChange"
    ></picker-panel>
    <picker-panel
      ref="endPicker"
      daterange
      @pickerLinkage="pickerLinkage"
      @on-change="handleChange"
    ></picker-panel>
  </div>
</template>
<script>
const prefixCls = "sta-picker-panel";
import pickerPanel from "./picker-panel";
import { deepCopy } from "../../../utils/assist";
export default {
  name: "dateRange",
  components: { pickerPanel },
  inject: ["provideData"],
  data() {
    return {
      currentValue: deepCopy(this.provideData.visualValue),
      dateSegment: [],
    };
  },
  computed: {
    daterangeClasses() {
      return `${prefixCls}-content-daterange`;
    },
  },
  methods: {
    pickerLinkage(mode, type) {
      let monthEqual =
        this.$refs.startPicker.month === this.$refs.endPicker.month;
      let yearEqual = this.$refs.startPicker.year > this.$refs.endPicker.year;
      if (monthEqual && mode === "last" && type === "month") {
        this.$refs.startPicker.lastMonth();
      }
      if (monthEqual && mode === "next" && type === "month") {
        this.$refs.endPicker.nextMonth();
      }
      if (yearEqual && mode === "last" && type === "year") {
        this.$refs.startPicker.lastYear();
      }
      if (yearEqual && mode === "next" && type === "year") {
        this.$refs.endPicker.nextYear();
      }
    },
    handleChange(date) {
      this.currentValue.length === 2
        ? (this.currentValue = [date])
        : this.currentValue.push(date);
      this.currentValue.sort((a, b) => a.getTime() - b.getTime());
      this.dateSegment = deepCopy(this.currentValue);
      if (this.currentValue.length === 2) {
        this.$emit("on-change", this.currentValue);
      }
    },
  },
  watch: {
    "provideData.visualValue"() {
      this.currentValue = deepCopy(this.provideData.visualValue);
      if (this.provideData.visualValue.length === 0) {
        this.dateSegment = [];
      }
    },
  },
};
</script>