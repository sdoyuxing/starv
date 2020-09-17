<template>
  <div :class="wrapClasses" :style="{'zIndex':modalIndex}" v-show="visbale">
    <div :class="maskClasses" @click="maskClick" tabindex="1"></div>
    <div :class="classes" :style="modalstyles">
      <div :class="titleClasses" v-if="title||$slots.title">
        <slot name="title">{{title}}</slot>
      </div>
      <span :class="closeClasses" @click="close">
        <Icon type="iconclose" />
      </span>
      <div :class="contentClasses">
        <slot></slot>
      </div>
      <div style="text-align: right;">
        <slot name="footer">
          <s-button @click="cancel" style="margin-right:10px">取消</s-button>
          <s-button type="primary" @click="define" :loading="loading">确定</s-button>
        </slot>
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
    width: [String, Number],
    loading: {
      type: Boolean,
      default: false,
    },
    styles: {
      type: Object,
      default() {
        return {};
      },
    },
    maskClosable: {
      type: Boolean,
      default: true,
    },
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
      if (setTime) {
        clearTimeout(setTime);
        setTime = null;
        this.visbale === val && (this.visbale = !val);
      }
      val ? (this.visbale = val) : this.close();
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
    modalstyles() {
      return { ...this.styles, width: this.width };
    },
    wrapClasses() {
      return `${prefixCls}-wrap`;
    },
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
    maskClick() {
      if (this.maskClosable) {
        this.close();
      }
    },
    close() {
      this.isClose = true;
      setTime = setTimeout(() => {
        this.visbale = false;
        clearTimeout(setTime);
        setTime = null;
      }, 250);
    },
    cancel() {
      this.$emit("on-cancel");
      this.close();
    },
    define() {
      this.$emit("on-define");
    },
  },
};
</script>