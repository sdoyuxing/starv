<template>
  <div class="app" id="app">

    <!-- <layout></layout> -->
    <div class="starv-menu" @mouseenter="mouseenter" @mousewheel="scroll">
      <div ref="leftMenu" style="height: 100%; overflow: hidden">
        <ul class="starv-menu__list" ref="menuBox">
          <li class="starv-menu__com">文档</li>
          <li
            v-for="menu in menuMains"
            :key="menu.path"
            class="starv-menu__item"
            :class="{ 'starv-menu__item--selected': selected === menu.path }"
            @click="clickItem(menu.path)"
          >
            <a>{{ menu.title }}</a>
          </li>
          <li class="starv-menu__com">组件</li>
          <template v-for="item in menuCom">
            <li :key="item.path" class="starv-menu__group">
              {{ item.title }}
            </li>
            <li
              v-for="menu in item.menus"
              :key="menu.path"
              class="starv-menu__item"
              :class="{ 'starv-menu__item--selected': selected === menu.path }"
              @click="clickItem(menu.path)"
            >
              <a>{{ menu.title }}</a>
            </li>
          </template>
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
import menu from "./menu";
export default {
  data() {
    return {
      selected: "",
      scrollBar: false,
      scrollBarHeight: 0,
      menuMains: [...menu.mains],
      menuCom: [...menu.components],
    };
  },
  methods: {
    clickItem(path) {
      if (this.selected !== path) {
        this.selected = path;
        this.$router.push({ path });
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

