<template>
  <div :class="messageClasses">
    <div
      :class="noticeClasses(message.type,message.closed,message.background,message.closable)"
      v-for="message in messageList"
      :key="message.name"
      :ref="message.name"
    >
      <div :class="contentClasses" :style="message.style">
        <span :class="iconClasses" v-if="message.showIcon">
          <Icon :type="iconName(message.type)"></Icon>
        </span>
        <render :template="message.template" :content="message.content"></render>
        <span :class="closeClasses" v-if="message.closable" @click="close(message.name)">
          <Icon type="iconclose" />
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { isEmpty } from "../../utils/assist";
import render from "../base/render";
const prefixCls = "sta-message";

export default {
  name: "message",
  data() {
    return {
      messageList: [],
    };
  },
  components: { render },
  computed: {
    messageClasses() {
      return `${prefixCls}`;
    },
    contentClasses() {
      return `${prefixCls}-notice-content`;
    },
    iconClasses() {
      return `${prefixCls}-icon`;
    },
    closeClasses() {
      return `${prefixCls}-closed`;
    },
  },
  methods: {
    add(message) {
      this.messageList.push({ closed: false, ...message });
      message.time = message.time || 1.5;
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
      const messageList = this.messageList;
      for (let i = 0; i < messageList.length; i++) {
        if (messageList[i].name === name) {
          this.$refs[name][0].style.height = 0;
          this.$refs[name][0].style.padding = 0;
          this.messageList[i].closed = true;
          let timeOut = setTimeout(() => {
            noticeList[i].onClose && messageList[i].onClose();
            this.messageList.splice(i, 1);
            clearTimeout(timeOut);
            timeOut = null;
          }, 600);

          break;
        }
      }
    },
    iconName(type) {
      let typeIcon = "";
      switch (type) {
        case "success":
          typeIcon = "iconsuccess-filling";
          break;
        case "info":
          typeIcon = "iconprompt-filling";
          break;
        case "warning":
          typeIcon = "iconwarning-filling";
          break;
        case "error":
          typeIcon = "icondelete-filling";
          break;
      }
      //   type = this.iconType || type;
      return typeIcon;
    },
    noticeClasses(type, closed, background = false, closable = false) {
      return [
        `${prefixCls}-notice`,
        `${prefixCls}-${type}`,
        { [`${prefixCls}-notice-closed`]: closed },
        { [`${prefixCls}-notice-background`]: background },
        { [`${prefixCls}-padding`]: closable },
      ];
    },
  },
};
</script>