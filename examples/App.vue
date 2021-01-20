<template>
  <div class="app" id="app">
    <!-- <layout></layout> -->
    <div class="starv-menu" @mouseenter="mouseenter" @mousewheel="scroll">
      <div ref="leftMenu" style="height: 100%; overflow: hidden">
        <ul class="starv-menu__list" ref="menuBox">
          <li
            v-for="(item, index) in routers"
            :key="index"
            class="starv-menu__item"
            :class="{ 'starv-menu__item--selected': selected === index }"
            @click="clickItem(index)"
          >
            <a>{{ item.name }}</a>
          </li>
        </ul>
      </div>
      <transition name="fade">
        <div
          ref="scrollBar"
          class="slimScrollBar"
          v-show="scrollBar"
          :style="{ height: scrollBarHeight + 'px' }"
        ></div>
      </transition>
    </div>
    <div class="starv-container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
let time = "";
export default {
  data() {
    return {
      selected: "",
      scrollBar: false,
      scrollBarHeight: 0,
      routers: [
        { name: "Star of Vue", url: "/starv" },
        { name: "Icon 图标", url: "/icon" },
        { name: "Button 按钮", url: "/button" },
        { name: "Radio 按钮", url: "/radio" },
        { name: "Input 输入框", url: "/input" },
        { name: "Checkbox 多选框", url: "/checkbox" },
        { name: "Switch 开关", url: "/switch" },
        { name: "Alert 警告提示", url: "/alert" },
        { name: "Tag 标签", url: "/tag" },
        { name: "Select 选择器", url: "/select" },
        { name: "Tooltip 文字提示", url: "/tooltip" },
        { name: "ProgressBar 加载进度条", url: "/progressBar" },
        { name: "Pagination 分页", url: "/pagination" },
        { name: "Message 全局提示", url: "/message" },
        { name: "Notice 通知提醒", url: "/notice" },
        { name: "Poptip 气泡提示", url: "/poptip" },
        { name: "Modal 对话框", url: "/modal" },
        { name: "Table 表格", url: "/table" },
        { name: "Tabs 标签页", url: "/tabs" },
        { name: "DatePicker 日期选择器", url: "/datepicker" },
        { name: "Tree 树形控件", url: "/tree" },
        { name: "demo", url: "/ebutton" },
      ],
    };
  },
  methods: {
    clickItem(num) {
      if (this.selected !== num) {
        this.selected = num;
        this.$router.push({ path: this.routers[num].url });
      }
    },
    mouseenter() {
      let proportion = this.scrollBarShow();
      if (proportion < 1) {
        clearTimeout(time);
        if (!this.scrollBar) {
          this.scrollBar = true;
          this.scrollBarHeight = proportion * this.$refs.leftMenu.offsetHeight;
        } else {
          time = setTimeout(() => {
            this.scrollBar = false;
            clearTimeout(time);
            time = null;
          }, 2000);
        }
      } else {
        this.scrollBar = false;
      }
    },
    scrollBarShow() {
      return this.$refs.leftMenu.offsetHeight / this.$refs.menuBox.offsetHeight;
    },
    scroll(event) {
      if (event.wheelDelta) {
        if (event.wheelDelta > 0) {
          //向上滚动
          if (this.$refs.leftMenu.scrollTop > 0)
            this.$refs.leftMenu.scrollTop -= 30;
        } else {
          //向下
          this.$refs.leftMenu.scrollTop += 30;
        }
      } else if (event.detail) {
        if (event.detail > 0) {
          //向下滚动
          this.$refs.leftMenu.scrollTop += 30;
        } else {
          if (this.$refs.leftMenu.scrollTop > 0)
            this.$refs.leftMenu.scrollTop -= 30;
        }
      }
      clearTimeout(time);
      if (!this.scrollBar) {
        this.scrollBar = true;
      }
      let top =
        (this.$refs.leftMenu.scrollTop /
          (this.$refs.menuBox.offsetHeight -
            this.$refs.leftMenu.offsetHeight)) *
        (this.$refs.leftMenu.offsetHeight - this.$refs.scrollBar.offsetHeight);
      this.$refs.scrollBar.style.top = top + "px";
      time = setTimeout(() => {
        this.scrollBar = false;
        clearTimeout(time);
        time = null;
      }, 3000);
      // if (event.delta < 0 && this.$refs.leftMenu.scrollTop > 0) {
      //   this.$refs.leftMenu.scrollTop -= 10;
      // } else this.$refs.leftMenu.scrollTop += 10;
    },
  },
  watch: {
    scrollBar(val) {
      if (val) {
        time = setTimeout(() => {
          this.scrollBar = false;
          clearTimeout(time);
          time = null;
        }, 2000);
      }
    },
  },
};
</script>
<style lang="less" scoped>
.fade-enter-active {
  animation: bounce-in 0.5s;
}
.fade-leave-active {
  animation: bounce-leave 0.5s;
}
@keyframes bounce-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.4;
  }
}
@keyframes bounce-leave {
  0% {
    opacity: 0.4;
  }
  100% {
    opacity: 0;
  }
}
.slimScrollBar {
  background: rgb(158, 165, 171);
  width: 8px;
  position: absolute;
  top: 0px;
  opacity: 0.4;
  border-radius: 7px;
  z-index: 999;
  right: 1px;
}
</style>

