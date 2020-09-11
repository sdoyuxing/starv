const messageBasc = `
<template>
  <div>
    <s-button @click="handleClick">点击提示信息</s-button>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick() {
      this.$Message.info("消息提示！");
    }
};
</script>`;

const messageType = `
<template>
  <div>
    <s-button @click="successClick">提示成功信息</s-button>
    <s-button @click="warnClick">提示告警信息</s-button>
    <s-button @click="errorClick">提示错误信息</s-button>
  </div>
</template>
<script>
export default {
  methods:{
    successClick() {
      this.$Message.success("操作成功！");
    },
    warnClick() {
      this.$Message.warning("该操作有丢失数据风险！");
    },
    errorClick() {
      this.$Message.error("操作失败，请联系网管！");
    }
  }
};
</script>`;

const messageBack = `
<template>
  <div>
    <s-button @click="subgClick">提示成功信息</s-button>
    <s-button @click="wabgClick">提示告警信息</s-button>
    <s-button @click="erbgClick">提示错误信息</s-button>
  </div>
</template>
<script>
export default {
  methods:{
    subgClick() {
      this.$Message.success({
        content: "操作成功！",
        background: true,
      });
    },
    wabgClick() {
      this.$Message.warning({
        content: "该操作有丢失数据风险！",
        background: true,
      });
    },
    erbgClick() {
      this.$Message.error({
        content: "操作失败，请联系网管！",
        background: true,
      });
    }
  }
};
</script>`;

const messageTime = `
<template>
  <div>
    <s-button @click="timeClick">显示5秒隐藏</s-button>
  </div>
</template>
<script>
export default {
  methods:{
    timeClick() {
      this.$Message.info({
        content: "提示显示5秒",
        time: 5,
      });
    }
  }
};
</script>`;

const messageClose = `
<template>
  <div>
    <s-button @click="closableClick">提示可关闭信息</s-button>
  </div>
</template>
<script>
export default {
  methods:{
    closableClick() {
      this.$Message.info({
        content: "可关闭提示信息",
        closable: true,
      });
    }
  }
};
</script>`;

const messageHtml = `
<template>
  <div>
    <s-button @click="messageClick">自定义html内容</s-button>
  </div>
</template>
<script>
export default {
  methods:{
    messageClick() {
      this.$Message.message("info", {
        template: "<span>这是一个自定义<code>html</code>内容</span>",
        style: { color: "#49C2BD" },
      });
    },
  }
};
</script>`;

const messageIcon = `
<template>
  <div>
   <s-button @click="iconClick">自定义图标</s-button>
  </div>
</template>
<script>
export default {
  methods:{
    iconClick() {
      this.$Message.message("info", {
        template:
          "<span><Icon :type='iconsmile-filling' style='color:#2db7f5;margin-right:5px;font-size:16px'/><span style='color:#19be6b'>这是一个自定义的笑脸</span></span>",
          showIcon: false,
      });
    },
  }
};
</script>`;

const messageAPI = [{
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
  name: "background ",
  desc: "是否显示背景色",
  type: "Boolean",
  default: "false"
}, {
  name: "closable",
  desc: "是否显示关闭按钮",
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
  messageBasc,
  messageType,
  messageBack,
  messageTime,
  messageClose,
  messageHtml,
  messageIcon,
  messageAPI,
}