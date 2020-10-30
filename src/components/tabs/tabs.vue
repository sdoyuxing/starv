<template>
  <div :class="tabsClasses">
    <div :class="navClasses" ref="nav">
      <div :class="barClasses" v-if="type === 'line'" :style="barStyles"></div>
      <div
        :class="tabClasses(index)"
        @click="tabActive(index)"
        v-for="(pane, index) in navList"
        :key="pane.name"
      >
        <Icon v-if="pane.icon" :type="pane.icon" :class="iconClasses" />{{
          pane.label
        }}
        <span
          :class="closeClasses(index)"
          v-if="pane.closable&&type==='card'"
          @click.stop="handleRemove(index)"
        >
          <Icon type="iconclose" />
        </span>
      </div>
    </div>
    <slot></slot>
  </div>
</template>
<script>
import { findComponentsDownward, oneOf } from "../../utils/assist";
import Icon from "../icon";
const prefixCls = "sta-tabs";
let seed = 0;
export default {
  props: {
    value: String,
    type: {
      type: String,
      default: "line",
      validator(value) {
        return oneOf(value, ["line", "card"]);
      },
    },
  },
  components: { Icon },
  data() {
    return {
      activeIndex: 0,
      navList: [],
      tabPanes: [],
      barWidth: 0,
      translateX: 0,
    };
  },
  computed: {
    tabsClasses() {
      return [prefixCls, `${prefixCls}-${this.type}`];
    },
    navClasses() {
      return `${prefixCls}-nav`;
    },
    barClasses() {
      return `${prefixCls}-nav-bar`;
    },
    tabpaneClasses() {
      return `${prefixCls}-tabpane`;
    },
    iconClasses() {
      return `${prefixCls}-icon`;
    },

    barStyles() {
      return {
        transform: `translate(${this.translateX}px, 0)`,
        width: `${this.barWidth}px`,
      };
    },
  },
  mounted() {
    this.tabPanes = findComponentsDownward(this, "sTabPane", true);
    this.tabPanes[this.activeIndex].show = true;
    this.updateNav();
    this.getBarWidth(this.activeIndex);
    if (this.value)
      this.activeIndex = this.tabPanes.findIndex(
        (pane) => pane.name === this.value
      );
    else this.initActive();
  },
  methods: {
    handleRemove(index) {
      this.navList.splice(index, 1);
      this.tabPanes[index].show = false;
      this.$nextTick(() => {
        this.tabPanes[index].$destroy();
        this.tabPanes = findComponentsDownward(this, "sTabPane", true);
        if (this.activeIndex === this.navList.length) {
          this.activeIndex--;
          this.tabPanes[this.activeIndex].show = true;
        }
        this.initActive === index &&
          (this.tabPanes[this.initActive].show = true);
      });
    },
    closeClasses(index) {
      return [
        `${prefixCls}-close`,
        { [`${prefixCls}-close-show`]: this.activeIndex === index },
      ];
    },
    tabActive(num) {
      if (this.navList[num].disabled) return;
      this.activeIndex = num;
      this.$emit("input", this.navList[this.activeIndex].name);
    },
    tabClasses(num) {
      return [
        `${prefixCls}-tab`,
        { [`${prefixCls}-tab-active`]: this.activeIndex === num },
        { [`${prefixCls}-tab-disabled`]: this.navList[num].disabled },
      ];
    },
    updateNav() {
      this.tabPanes.forEach((pane, index) => {
        this.navList.push({
          label: pane.label,
          name: pane.name || index,
          disabled: pane.disabled,
          icon: pane.icon,
          closable: pane.closable,
        });
      });
    },
    initActive() {
      while (
        this.activeIndex < this.navList.length &&
        this.navList[this.activeIndex].disabled
      ) {
        this.activeIndex++;
      }
    },
    getBarWidth(val) {
      this.$nextTick(() => {
        const prevTabs = this.$refs.nav.querySelectorAll(`.${prefixCls}-tab`);
        this.barWidth = prevTabs[val].offsetWidth;
        let offsetX = 0;
        for (let i = 0; i < val; i++) {
          offsetX += parseFloat(prevTabs[i].offsetWidth) + 5;
        }
        this.translateX = offsetX;
      });
    },
  },
  watch: {
    activeIndex(newVal, oldVal) {
      oldVal !== undefined && (this.tabPanes[oldVal].show = false);
      this.tabPanes[newVal].show = true;
      if (this.type === "line") {
        this.getBarWidth(newVal);
      }
    },
  },
};
</script>