const noticeBasc = `
<template>
  <div>
    <s-button type="primary" @click="noticeShow">点击提醒</s-button>
  </div>
</template>
<script>
export default {
  methods: {
    noticeShow() {
        this.$Notice.show({
            title: "提醒标题",
            content: "您正在看StarUI的提醒文档",
          });
    }
};
</script>`;

const noticeType = `
<template>
  <div>
    <s-button @click="infoClick" class="starv-btn">提示详情信息</s-button>
    <s-button @click="successClick" class="starv-btn">提示成功信息</s-button>
    <s-button @click="warnClick" class="starv-btn">提示告警信息</s-button>
    <s-button @click="errorClick" class="starv-btn">提示错误信息</s-button>
  </div>
</template>
<script>
export default {
  methods:{
    successClick() {
        this.$Notice.success({
          title: "提醒标题",
          content: "成功提醒；成功提醒；成功提醒；成功提醒；"});
      },
      infoClick() {
        this.$Notice.info({
          title: "提醒标题",
          content: "详情提醒；详情提醒；详情提醒；详情提醒；"});
      },
      warnClick() {
        this.$Notice.warning({
          title: "提醒标题",
          content: "告警提醒；告警提醒；告警提醒；告警提醒；"});
      },
      errorClick() {
        this.$Notice.error({
          title: "提醒标题",
          content: "失败提醒；失败提醒；失败提醒；失败提醒；"});
      },
  }
};
</script>`;

const noticeBack = `
<template>
  <div>
    <s-button @click="inbgClick" class="starv-btn">提示详情信息</s-button>
    <s-button @click="subgClick" class="starv-btn">提示成功信息</s-button>
    <s-button @click="wabgClick" class="starv-btn">提示告警信息</s-button>
    <s-button @click="erbgClick" class="starv-btn">提示错误信息</s-button>
  </div>
</template>
<script>
export default {
  methods:{
    subgClick() { this.$Notice.success({ content: "成功提醒；成功提醒；成功提醒；成功提醒；"});},
    wabgClick() { this.$Notice.warning({ content: "告警提醒；告警提醒；告警提醒；告警提醒；"});},
    erbgClick() { this.$Notice.error({ content: "失败提醒；失败提醒；失败提醒；失败提醒；"});},
    inbgClick() { this.$Notice.info({ content: "详情提醒；详情提醒；详情提醒；详情提醒；"});}
  }
};
</script>`;

const noticeTime = `
<template>
  <div>
    <s-button @click="timeClick">显示5秒隐藏</s-button>
  </div>
</template>
<script>
export default {
  methods:{
    timeClick() {
        this.$Notice.show({
            content: "提示显示5秒",
            time: 5,
        });
    }
  }
};
</script>`;

const noticeHtml = `
<template>
  <div>
    <s-button @click="messageClick">自定义html内容</s-button>
  </div>
</template>
<script>
export default {
  methods:{
    messageClick() {
        this.$Notice.show({
            template: "<span>这是一个自定义<code>html</code>内容</span>",
            style: { color: "#49C2BD" },
          });
    },
  }
};
</script>`;

const noticeIcon = `
<template>
  <div>
   <s-button @click="iconClick">自定义图标</s-button>
  </div>
</template>
<script>
export default {
  methods:{
    iconClick() {
        this.$Notice.info({
        template:
          "<span><Icon :type='iconsmile-filling' style='color:#2db7f5;margin-right:5px;font-size:16px'/><span style='color:#19be6b'>这是一个自定义的笑脸</span></span>",
          showIcon: false,
      });
    },
  }
};
</script>`;

const noticeAPI = [{
    name: "content",
    desc: "提示内容",
    type: "String",
    default: "-"
}, {
    name: "template	",
    desc: "自定义提示内容为html",
    type: "String",
    default: "-"
}, {
    name: "showIcon",
    desc: "是否显示图标",
    type: "Boolean",
    default: "true"
}, {
    name: "title ",
    desc: "标题内容",
    type: "Boolean",
    default: "false"
}, {
    name: "time",
    desc: "自动关闭的延时，单位秒，不关闭可以写 0",
    type: "Number",
    default: "1.5"
}, {
    name: "style",
    desc: "设置提示框的内容样式",
    type: "Object",
    default: "{}"
}, {
    name: "onClose",
    desc: "关闭时的回调",
    type: "Function",
    default: "-"
}];

export default {
    noticeBasc,
    noticeType,
    noticeBack,
    noticeTime,
    noticeHtml,
    noticeIcon,
    noticeAPI,
}