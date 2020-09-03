<template>
  <div :class="messageClasses">
    <div
      :class="noticeClasses(message.type,message.closed)"
      v-for="message in messageList"
      :key="message.name"
      :ref="message.name"
    >
      <div :class="contentClasses">
        <span :class="iconClasses">
          <slot name="icon">
            <Icon :type="iconName(message.type)"></Icon>
          </slot>
        </span>
        {{message.content}}
      </div>
    </div>
  </div>
</template>
<script>
const prefixCls = "sta-message";
export default {
  data() {
    return {
      messageList: [],
    };
  },
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
  },
  methods: {
    add(message) {
      this.messageList.push({ closed: false, ...message });
      this.$nextTick(() => {
        this.$refs[message.name][0].style.height =
          this.$refs[message.name][0].scrollHeight + "px";
      });
      let timeOut = setTimeout(() => {
        this.close(message.name);
        clearTimeout(timeOut);
        timeOut = null;
      }, 3000);
    },
    close(name) {
      const messageList = this.messageList;
      for (let i = 0; i < messageList.length; i++) {
        if (messageList[i].name === name) {
          this.$refs[name][0].style.height = 0;
          this.$refs[name][0].style.padding = 0;
          this.messageList[i].closed = true;
          let timeOut = setTimeout((i) => {
            this.messageList.splice(i, 1);
            clearTimeout(timeOut);
            timeOut = null;
          }, 500);

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
    noticeClasses(type, closed) {
      return [
        `${prefixCls}-notice`,
        `${prefixCls}-${type}`,
        { [`${prefixCls}-notice-closed`]: closed },
      ];
    },
  },
};
</script>