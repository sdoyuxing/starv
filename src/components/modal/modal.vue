<template>
  <div>
    <div
      :class="maskClasses"
      v-show="visbale"
      @click="close"
      tabindex="1"
      @keydown.esc="close"
      :style="{'zIndex':modalIndex}"
    ></div>
    <div :class="classes" v-show="visbale" :style="{'zIndex':modalIndex}">
      <div :class="titleClasses">
        <slot name="title">{{title}}</slot>
        <span :class="closeClasses" @click="close">
          <Icon type="iconclose" />
        </span>
      </div>
      <div :class="contentClasses">
        <slot></slot>
      </div>
      <div style="text-align: right;">
        <s-button @click="cancel" style="margin-right:10px">取消</s-button>
        <s-button type="primary" @click="define">确定</s-button>
      </div>
    </div>
  </div>
</template>
<script>
const prefixCls = "sta-modal";
import sButton from "../button";
let setTime = null;
let zIndex = 0;
export default {
  name: "sModal",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    title: String,
  },
  data() {
    return {
      visbale: this.value,
      isClose: !this.value,
      defaultIndex: 1000,
    };
  },
  watch: {
    value(val) {
      this.visbale = val;
    },
    visbale(val) {
      if (this.isClose === val) {
        this.isClose = !val;
      }
      this.$emit("input", val);
    },
  },
  components: { sButton },
  computed: {
    maskClasses() {
      return [
        `${prefixCls}-mask`,
        { [`${prefixCls}-mask-show`]: this.visbale },
        { [`${prefixCls}-mask-hide`]: this.isClose },
      ];
    },
    classes() {
      return [
        prefixCls,
        { [`${prefixCls}-open-animation`]: this.visbale },
        { [`${prefixCls}-close-animation`]: this.isClose },
      ];
    },
    titleClasses() {
      return `${prefixCls}-title`;
    },
    closeClasses() {
      return `${prefixCls}-closed`;
    },
    contentClasses() {
      return `${prefixCls}-content`;
    },
    modalIndex() {
      return this.defaultIndex + zIndex++;
    },
  },
  methods: {
    close() {
      this.isClose = true;
      setTime = setTimeout(() => {
        this.visbale = false;
        clearTimeout(setTime);
        setTime = null;
      }, 400);
    },
    cancel() {
      this.close();
    },
    define() {
      this.close();
    },
  },
};
</script>