<template>
  <div v-click-outside.stop="onClickOutside">
    <div @click="handleFocus">
      <s-date-picker-input
        suffix="iconriqixuanze"
        :value="inputValue"
        ref="pickerInput"
      ></s-date-picker-input>
    </div>
    <drop :class="pickerClasses"
      ><picker-panel
        ref="startPicker"
        @pickerLinkage="pickerLinkage"
      ></picker-panel>
      <picker-panel
        v-if="type === 'daterange'"
        ref="endPicker"
        daterange
        @pickerLinkage="pickerLinkage"
      ></picker-panel
    ></drop>
  </div>
</template>
<script>
import sDatePickerInput from "../date-picker-input";
import pickerPanel from "./picker-panel";
import drop from "./dropdown";
import { toDate, oneOf, weeklyIndex } from "../../utils/assist";
import dateUtil from "../../utils/date";
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
      provideData: { visualValue: new Date(this.value), type: this.type },
    };
  },
  provide() {
    return {
      provideData: this.provideData,
    };
  },
  directives: { clickOutside },
  components: { sDatePickerInput, pickerPanel, drop },
  computed: {
    pickerClasses() {
      return [dropPrefixCls, { [`${dropPrefixCls}-show`]: this.dropShow }];
    },
    inputValue() {
      if (this.type === "week") {
        return `${this.provideData.visualValue.getFullYear()}-${weeklyIndex(
          this.provideData.visualValue
        )}周`;
      } else {
        return (
          this.provideData.visualValue &&
          dateUtil.format(
            this.provideData.visualValue,
            DEFAULT_FORMATS[this.type]
          )
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
  },
  watch: {
    "provideData.visualValue"() {
      this.$refs.pickerInput.focus();
      this.onClickOutside();
      this.$emit("input", this.inputValue);
    },
    value(val) {
      if (toDate(val).geTime() !== this.provideData.visualValue.geTime()) {
        this.provideData.visualValue = toDate(val);
      }
    },
    type(val) {
      this.provideData.type = val;
    },
  },
};
</script>