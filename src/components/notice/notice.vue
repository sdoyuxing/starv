<template>
  <div :class="noticeClasses">
    <div
      :class="wrapClasses(message.type,message.closed)"
      v-for="message in noticeList"
      :key="message.name"
      :ref="message.name"
    >
      <div :class="contentClasses" :style="message.style">
        <span
          :class="iconClasses(message.type,message.title)"
          v-if="message.showIcon&&message.type"
        >
          <Icon :type="iconName(message.type,message.title)"></Icon>
        </span>
        <div :class="textClasses(message.showIcon,message.title,message.type)">
          <div v-if="message.title" :class="titleClasses" v-text="message.title"></div>
          <render :template="message.template" :content="message.content"></render>
        </div>
        <span :class="closeClasses" @click="close(message.name)">
          <Icon type="iconclose" />
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { isEmpty } from "../../utils/assist";
import render from "../base/render";
const prefixCls = "sta-notice";

export default {
  name: "notice",
  data() {
    return {
      noticeList: [],
    };
  },
  components: { render },
  computed: {
    noticeClasses() {
      return `${prefixCls}`;
    },
    contentClasses() {
      return `${prefixCls}-content`;
    },
    closeClasses() {
      return `${prefixCls}-icon-closed`;
    },
    titleClasses() {
      return `${prefixCls}-title`;
    },
  },
  methods: {
    add(message) {
      this.noticeList.push({ closed: false, ...message });
      message.time = message.time || 3;
      this.$nextTick(() => {
        if (!isEmpty(this.$refs[message.name])) {
          this.$refs[message.name][0].style.height =
            this.$refs[message.name][0].scrollHeight + "px";
        }
      });
      if (message.time !== 0) {
        let timeOut = setTimeout(() => {
          this.close(message.name);
          clearTimeout(timeOut);
          timeOut = null;
        }, message.time * 1000);
      }
    },
    close(name) {
      const noticeList = this.noticeList;
      for (let i = 0; i < noticeList.length; i++) {
        if (noticeList[i].name === name) {
          this.noticeList[i].closed = true;
          let timeOut = setTimeout(() => {
            noticeList[i].onClose && noticeList[i].onClose();
            this.noticeList.splice(i, 1);
            clearTimeout(timeOut);
            timeOut = null;
          }, 600);
          break;
        }
      }
    },
    iconName(type, title) {
      let typeIcon = "";
      switch (type) {
        case "success":
          typeIcon = title ? "iconsuccess" : "iconsuccess-filling";
          break;
        case "info":
          typeIcon = title ? "iconprompt" : "iconprompt-filling";
          break;
        case "warning":
          typeIcon = title ? "iconwarning" : "iconwarning-filling";
          break;
        case "error":
          typeIcon = title ? "iconerror" : "icondelete-filling";
          break;
      }
      return typeIcon;
    },
    iconClasses(type, title) {
      return [
        `${prefixCls}-icon`,
        { [`${prefixCls}-${type}`]: type },
        { [`${prefixCls}-icon-lg`]: title },
      ];
    },
    textClasses(showIcon, title, type) {
      return [{ [`${prefixCls}-content-padding`]: type && title && showIcon }];
    },
    wrapClasses(type, closed) {
      return [
        `${prefixCls}-wrap`,
        { [`${prefixCls}-${type}`]: type },
        { [`${prefixCls}-closed`]: closed },
      ];
    },
  },
};
</script>