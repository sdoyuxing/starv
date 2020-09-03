const alertBasc = `
<template>
  <div>
    <s-alert>提示信息</s-alert>
  </div>
</template>
<script>
export default {};
</script>`;

const alertType = `
<template>
  <div>
    <s-alert type="info">详情</s-alert>
    <s-alert type="success">成功</s-alert>
    <s-alert type="warning">警告</s-alert>
    <s-alert type="error">错误</s-alert>
  </div>
</template>
<script>
export default {};
</script>`;

const alertIcon = `
<template>
  <div>
    <s-alert show-icon>详情</s-alert>
    <s-alert type="success" show-icon>成功</s-alert>
    <s-alert type="warning" show-icon>警告</s-alert>
    <s-alert type="error" show-icon>错误</s-alert>
    <s-alert show-icon icon-type="iconmeh-filling">详情</s-alert>
    <s-alert show-icon type="success">
        成功
        <Icon type="iconsmile-filling" slot="icon" />
    </s-alert>
    <s-alert type="error" icon-type="iconcry-filling" show-icon>错误</s-alert>
  </div>
</template>
<script>
export default {};
</script>`;

const alertClose = `
<template>
  <div>
    <s-alert type="success" show-icon closable>成功</s-alert>
  </div>
</template>
<script>
export default {};
</script>`;

const alertStyle = `
<template>
  <div>
    <s-alert
    borderColor="#BD8EF6"
    backgroundColor="#E6D8F6"
    iconColor="#F049BB"
    show-icon
    iconType="iconsmile"
    fontColor="#048D48"
    >自定义样式</s-alert>
  </div>
</template>
<script>
export default {};
</script>`;

const alertAPI = [{
    name: "type",
    desc: "告警提示类型，可选值为 <code>info</code>、<code>success</code>、<code>warning</code>、<code>error</code>或者不设置",
    type: "String",
    default: "info"
}, {
    name: "closable	",
    desc: "是否可关闭",
    type: "Boolean",
    default: "false"
}, {
    name: "show-icon	",
    desc: "是否显示图标",
    type: "Boolean",
    default: "false"
},{
    name:"backgroundColor",
    desc: "是否背景颜色",
    type: "String",
    default: "-"
},{
    name:"fontColor",
    desc: "是否字体颜色",
    type: "String",
    default: "-"
},{
    name:"iconColor",
    desc: "是否图标颜色",
    type: "String",
    default: "-"
}];

const alertEvents = [
    {
        name: "on-close",
        desc: "关闭时触发",
        type: "event"
    }];

const alertSlots = [{
    name: "无",
    desc: "警告提示内容",
}, {
    name: "icon",
    desc: "自定义图标内容",
}];

export default {
    alertBasc,
    alertType,
    alertIcon,
    alertClose,
    alertAPI,
    alertEvents,
    alertSlots,
    alertStyle
}