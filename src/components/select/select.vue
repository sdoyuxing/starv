<template>
  <div
    :class="wrapClasses"
    :tabindex="selectTabindex"
    :disabled="disabled"
    @click="handleClick"
    @keydown.esc="handleKeydown"
    @keydown.enter="handleKeydown"
    @keydown.up.prevent="handleKeydown"
    @keydown.down.prevent="handleKeydown"
    v-click-outside.stop="onClickOutside"
  >
    <div :class="classes">
      <span v-if="isPrefix" :class="prefixClasses">
        <slot name="prefix">
          <Icon v-if="prefix" :type="prefix"></Icon>
        </slot>
      </span>
      <span
        v-text="selected.label===''?placeholder:selected.label"
        :class="labelClasses"
        v-if="!filterable"
      ></span>
      <select-filter
        :value="selected.label"
        ref="filter"
        v-if="filterable"
        :placeholder="placeholder"
        @on-change="filterChange"
      />
      <Icon
        type="iconclose-bold"
        v-if="clearable&&selected.value"
        :class="clearClasses"
        @click.stop="handleClear"
      ></Icon>
      <Icon :class="downClasses" type="iconarrow-down-filling" />
      <div :class="activeClass" v-if="!disabled"></div>
    </div>
    <Drop :class="dropClasses" ref="drop" v-if="!disabled">
      <template v-if="!loading">
        <slot>
          <Option v-for="item in optionsList" :value="item.value" :key="item.id">{{item.label}}</Option>
        </slot>
      </template>
      <li v-show="isDropMessage" :class="loadingClasses">
        <Icon :class="iconLoadingClasses" type="iconloading" v-if="loading" />
        {{ localeLoadingText }}
      </li>
    </Drop>
  </div>
</template>
<script>
let timeOut;
const prefixCls = "sta-select";
import Icon from "../icon";
import Drop from "./dropdown";
import selectFilter from "./select-filter";
import Option from "./option";
import { findComponentsDownward, typeOf } from "../../utils/assist";
import { directive as clickOutside } from "../../directives/v-click-outside";
export default {
  name: "sSelect",
  provide() {
    return { selected: this.selected };
  },
  directives: { clickOutside },
  components: { Icon, Drop, selectFilter, Option },
  data() {
    return {
      visible: false,
      focusIndex: 0,
      selected: { value: "", label: "" },
      childrens: [],
    };
  },
  props: {
    placeholder: String,
    prefix: String,
    loadingText: String,
    value: {
      type: [String, Number, Array],
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    filterable: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    lazyload: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    isDropMessage() {
      return (
        this.loading ||
        (this.optionsList.length === 0 && this.$slots.default === undefined)
      );
    },
    selectTabindex() {
      return this.disabled || this.filterable ? undefined : 0;
    },
    prefixClasses() {
      return [`${prefixCls}-icon`, `${prefixCls}-icon-prefix`];
    },
    isPrefix() {
      return this.prefix || this.$slots.prefix;
    },
    clearClasses() {
      return [
        `${prefixCls}-icon`,
        `${prefixCls}-icon-clear`,
        `${prefixCls}-icon-suffix`,
        `${prefixCls}-icon-suffix-right`,
      ];
    },
    wrapClasses() {
      return `${prefixCls}-wrap`;
    },
    classes() {
      return [
        prefixCls,
        { [`${prefixCls}-padding-left`]: this.isPrefix },
        { [`${prefixCls}-padding-right`]: this.clearable },
      ];
    },
    activeClass() {
      return `${prefixCls}-active-bottom`;
    },
    downClasses() {
      return [
        `${prefixCls}-icon`,
        `${prefixCls}-icon-suffix`,
        { [`${prefixCls}-icon-down`]: this.visible && !this.disabled },
      ];
    },
    dropClasses() {
      return [
        `${prefixCls}-dropdown`,
        { [`${prefixCls}-dropdown-show`]: this.visible && !this.disabled },
      ];
    },
    labelClasses() {
      return [
        {
          [`${prefixCls}-placeholder`]:
            this.selected.label === "" && this.placeholder,
        },
      ];
    },
    localeLoadingText() {
      if (this.loading) {
        if (typeof this.loadingText === "undefined") {
          return "加载中";
        } else {
          return this.loadingText;
        }
      } else if (
        this.optionsList.length === 0 &&
        this.$slots.default === undefined
      ) {
        return "暂无数据";
      }
    },
    loadingClasses() {
      return `${prefixCls}-loading`;
    },
    iconLoadingClasses() {
      return `${prefixCls}-icon-loading`;
    },
    childrensLength() {
      return this.childrens.length;
    },
    optionsList() {
      const list = this.options;
      const options = [];
      for (let i = 0; i < list.length; i++) {
        if (typeOf(list[i]) === "object") {
          if (
            !list[i].hasOwnProperty("value") &&
            !list[i].hasOwnProperty("label")
          ) {
            throw new TypeError(
              "The object in options has no value and label attributes."
            );
            break;
          } else {
            options.push({
              id: "sel" + Date.now(),
              value: list[i].value || list[i].label,
              label: list[i].label || list[i].value,
            });
          }
        } else if (
          typeOf(list[i]) === "string" ||
          typeOf(list[i]) === "number"
        ) {
          options.push({
            value: list[i],
            label: list[i],
          });
        } else {
          throw new TypeError("Wrong type in options array.");
          break;
        }
      }
      return options;
    },
  },
  mounted() {
    this.childrens = this.findChildrens();
    this.checkUpdateStatus();
  },
  methods: {
    findChildrens() {
      return this.disabled
        ? this.$slots.default
            .filter((o) => o.componentOptions)
            .map((o) => ({
              textContent: o.componentOptions.children
                .map((o) => o.text)
                .join(""),
              ...o.componentOptions.propsData,
            }))
        : findComponentsDownward(this, "Option");
    },
    handleClear() {
      this.selected.value = "";
      this.selected.label = "";
    },
    handleClick(e) {
      this.visible = !this.visible;
      if (this.filterable) {
        this.$refs.filter.onfocus();
      }
      if (this.lazyload && this.options.length === 0 && this.visible) {
        this.onLazyload();
      }
    },
    onLazyload() {
      this.$emit("on-lazyload");
    },
    navigateOptions(direction) {
      let nearestActiveOption = this.childrens.length;
      if (direction > 0) {
        if (this.focusIndex + direction < nearestActiveOption)
          this.focusIndex += direction;
        else this.focusIndex += direction - nearestActiveOption;
      } else {
        if (this.focusIndex + direction >= 0) this.focusIndex += direction;
        else this.focusIndex += direction + nearestActiveOption;
      }
    },
    hideMenu() {
      this.visible = false;
    },
    handleKeydown(e) {
      if (this.visible) {
        e.preventDefault();
        const key = e.key || e.code;
        switch (key) {
          case "Escape":
            e.stopPropagation();
            this.hideMenu();
            break;
          case "ArrowUp":
            this.navigateOptions(-1);
            break;
          case "ArrowDown":
            this.navigateOptions(1);
            break;
          case "Enter":
            this.childrens[this.focusIndex].handleClick();
            this.hideMenu();
            break;
        }
      } else {
        this.visible = true;
      }
    },
    checkUpdateStatus() {
      if (this.childrens.length === 0) return false;
      if (this.value) {
        const selectItem = this.childrens.filter(
          (o) => this.value === (o.value || o.label || o.textContent)
        )[0];
        this.selected.value = this.value;
        this.selected.label = selectItem.label || selectItem.textContent;
        selectItem.isFocus = true;
      } else {
        this.childrens[0].isFocus = true;
      }
    },
    filterChange(val) {
      const hidenItem = this.childrens.forEach((o) => {
        if (o.textContent.includes(val)) {
          o.isShow = true;
        } else {
          o.isShow = false;
        }
      });
    },
    onClickOutside(event) {
      this.hideMenu();
    },
    onFocusIndex(n, o) {
      const optionInstance = this.childrens[n];
      typeOf(o) === "number" && (this.childrens[o].isFocus = false);
      optionInstance.isFocus = true;
      let bottomOverflowDistance =
        optionInstance.$el.getBoundingClientRect().bottom -
        this.$refs.drop.$el.getBoundingClientRect().bottom;
      let topOverflowDistance =
        optionInstance.$el.getBoundingClientRect().top -
        this.$refs.drop.$el.getBoundingClientRect().top;
      if (bottomOverflowDistance > 0) {
        this.$refs.drop.$el.scrollTop += bottomOverflowDistance;
      }
      if (topOverflowDistance < 0) {
        this.$refs.drop.$el.scrollTop += topOverflowDistance;
      }
    },
  },
  watch: {
    focusIndex(val, old) {
      this.onFocusIndex(val, old);
    },
    "selected.value"(val) {
      this.focusIndex = this.childrens.findIndex(
        (o) => val === (o.value || o.label || o.textContent)
      );
      this.$emit("input", this.selected.value);
    },
    value(value) {
      this.checkUpdateStatus();
    },
    visible(val) {
      this.$emit("on-visible-change", val);
    },
    options(val) {
      this.$nextTick(() => {
        this.childrens = this.findChildrens();
        this.focusIndex = this.childrens.findIndex(
          (o) => val === (o.value || o.label || o.textContent)
        );
        if (this.focusIndex === -1) this.focusIndex = 0;
        this.onFocusIndex(this.focusIndex);
      });
    },
  },
};
</script>