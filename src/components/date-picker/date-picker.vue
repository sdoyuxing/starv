<template>
  <div v-click-outside.stop="onClickOutside">
    <div @click="handleFocus">
      <s-date-picker-input
        suffix="iconriqixuanze"
        :value="inputValue"
        ref="pickerInput"
      ></s-date-picker-input>
    </div>
    <drop :class="pickerClasses"><picker-panel></picker-panel></drop>
  </div>
</template>
<script>
import sDatePickerInput from "../date-picker-input";
import pickerPanel from "./picker-panel";
import drop from "./dropdown";
import { toDate } from "../../utils/assist";
import dateUtil from "../"
import { directive as clickOutside } from "../../directives/v-click-outside";
const dropPrefixCls = "sta-picker";
export default {
  name: "datePicker",
  props: {
    value: {
      type: String,
      validator(value) {
        result = toDate(value) !== null;
        if (!result) {
          throw new Error("Invalid Date in date-picker value");
        }
        return result;
      },
    },
  },

  data() {
    return {
      dropShow: false,
      provideData: { visualValue: new Date(this.value) },
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
      return (
        this.provideData.visualValue &&
        `${this.provideData.visualValue.getFullYear()}-${
          this.provideData.visualValue.getMonth() + 1 > 9
            ? this.provideData.visualValue.getMonth() + 1
            : "0" + (this.provideData.visualValue.getMonth() + 1)
        }-${
          this.provideData.visualValue.getDate() > 9
            ? this.provideData.visualValue.getDate()
            : "0" + this.provideData.visualValue.getDate()
        }`
      );
    },
  },
  methods: {
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
      this.$emit("input", this.provideData.visualValue);
    },
    // value(val) {
    //   this.provideData.visualValue =
    // },
  },
};
</script>