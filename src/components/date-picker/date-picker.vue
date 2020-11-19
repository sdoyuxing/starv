<template>
  <div :class="datePickerWrap" v-click-outside.stop="onClickOutside">
    <div @click="handleFocus">
      <s-date-picker-input
        suffix="iconriqixuanze"
        :value="inputValue"
        ref="pickerInput"
      ></s-date-picker-input>
    </div>
    <drop :class="pickerClasses">
      <!-- <picker-panel
        ref="startPicker"
        :dateSegment.sync="dateSegment"
        @pickerLinkage="pickerLinkage"
      ></picker-panel>
      <picker-panel
        v-if="type === 'daterange'"
        :dateSegment.sync="dateSegment"
        ref="endPicker"
        daterange
        @pickerLinkage="pickerLinkage"
      ></picker-panel> -->
      <component :is="pickerTable" @on-change="handleChange" />
    </drop>
  </div>
</template>
<script>
import sDatePickerInput from "../date-picker-input";
import pickerPanel from "./panel/picker-panel";
import dateRange from "./panel/date-range";
import drop from "./panel/base/dropdown";
import dateUtil from "../../utils/date";
import { toDate, oneOf, weeklyIndex, typeOf } from "../../utils/assist";
import { directive as clickOutside } from "../../directives/v-click-outside";
const dropPrefixCls = "sta-picker";
const DEFAULT_FORMATS = {
  date: "yyyy-MM-dd",
  month: "yyyy-MM",
  year: "yyyy",
  datetime: "yyyy-MM-dd HH:mm:ss",
  time: "HH:mm:ss",
  timerange: "HH:mm:ss",
  daterange: "yyyy-MM-dd",
  datetimerange: "yyyy-MM-dd HH:mm:ss",
};
const PICKERTYPE = {
  date: "picker-panel",
  year: "picker-panel",
  month: "picker-panel",
  week: "picker-panel",
  daterange: "date-range",
};
export default {
  name: "datePicker",
  props: {
    value: {
      type: String,
      validator(value) {
        let result = toDate(value) !== null;
        if (!result) {
          result = value.indexOf("周") > -1 && value.indexOf("-") > -1;
          if (!result) throw new Error("Invalid Date in date-picker.value");
        }
        return result;
      },
    },
    type: {
      type: String,
      default: "date",
      validator(value) {
        return oneOf(value, ["date", "year", "month", "week", "daterange"]);
      },
    },
  },

  data() {
    return {
      dropShow: false,
      provideData: { visualValue: toDate(this.value), type: this.type },
    };
  },
  provide() {
    return {
      provideData: this.provideData,
    };
  },
  directives: { clickOutside },
  components: { sDatePickerInput, pickerPanel, drop, dateRange },
  mounted() {
    if (this.type === "daterange") {
      this.provideData.visualValue = [];
    }
  },
  computed: {
    pickerTable() {
      return PICKERTYPE[this.type];
    },
    pickerClasses() {
      return [dropPrefixCls, { [`${dropPrefixCls}-show`]: this.dropShow }];
    },
    datePickerWrap(){
       return `${dropPrefixCls}-wrap`;
    },
    inputValue() {
      if (this.type === "week") {
        return `${this.provideData.visualValue.getFullYear()}-${weeklyIndex(
          this.provideData.visualValue
        )}周`;
      } else if (this.type !== "daterange") {
        return (
          this.provideData.visualValue &&
          dateUtil.format(
            this.provideData.visualValue,
            DEFAULT_FORMATS[this.type]
          )
        );
      } else if (this.type === "daterange") {
        return (
          typeOf(this.provideData.visualValue) === "array" &&
          this.provideData.visualValue
            .map((item) => dateUtil.format(item, DEFAULT_FORMATS[this.type]))
            .join(" - ")
        );
      }
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
    handleFocus() {
      this.$refs.pickerInput.focus();
      this.dropShow = true;
    },
    onClickOutside() {
      this.dropShow = false;
    },
    handleChange(val) {
      this.provideData.visualValue = val;
    },
  },
  watch: {
    "provideData.visualValue"(val) {
      if (typeOf(val) === "date") {
        this.$emit("input", this.inputValue);
      }
      this.$refs.pickerInput.focus();
      this.onClickOutside();
    },
    value(val) {
      if (toDate(val).geTime() !== this.provideData.visualValue.geTime()) {
        this.provideData.visualValue = toDate(val);
      }
    },
    type(val) {
      this.provideData.type = val;
      if (this.type === "daterange") {
        this.provideData.visualValue = [];
      }
    },
  },
};
</script>