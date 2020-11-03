const tabsBasc = `
<template>
  <s-tabs>
    <s-tab-pane label="标签一" name="name1">标签一的内容</s-tab-pane>
    <s-tab-pane label="标签二" name="name2">标签二的内容</s-tab-pane>
    <s-tab-pane label="标签三" name="name3">标签三的内容</s-tab-pane>
  </s-tabs>
</template>
<script>
export default {};
</script>`;

const tabsDisable = `
<template>
  <s-tabs>
    <s-tab-pane label="标签一" name="name1" disabled>标签一的内容</s-tab-pane>
    <s-tab-pane label="标签二" name="name2">标签二的内容</s-tab-pane>
    <s-tab-pane label="标签三" name="name3" icon="iconmeh">标签三的内容</s-tab-pane>
  </s-tabs>
</template>
<script>
export default {};
</script>`;

const tabsIcon = `
<template>
  <s-tabs>
    <s-tab-pane label="标签一" name="name1" icon="iconsmile">标签一的内容</s-tab-pane>
    <s-tab-pane label="标签二" name="name2" icon="iconmeh">标签二的内容</s-tab-pane>
    <s-tab-pane label="标签三" name="name3" icon="iconcry">标签三的内容</s-tab-pane>
  </s-tabs>
</template>
<script>
export default {};
</script>`;

const tabsCard = `
<template>
  <s-tabs type="card">
    <s-tab-pane label="标签一" name="name1">标签一的内容</s-tab-pane>
    <s-tab-pane label="标签二" name="name2">标签二的内容</s-tab-pane>
    <s-tab-pane label="标签三" name="name3">标签三的内容</s-tab-pane>
  </s-tabs>
</template>
<script>
export default {};
</script>`;

const tabsClosed = `
<template>
  <s-tabs type="card">
    <s-tab-pane label="标签一" name="name1" closable>标签一的内容</s-tab-pane>
    <s-tab-pane label="标签二" name="name2" closable>标签二的内容</s-tab-pane>
    <s-tab-pane label="标签三" name="name3" closable>标签三的内容</s-tab-pane>
  </s-tabs>
</template>
<script>
export default {};
</script>`;

const tabsAPI = [{
  name: "value",
  desc: "当前激活 tab 面板的 name，可以使用 v-model 双向绑定数据",
  type: "String",
  default: "默认为第一项的 name"
}, {
  name: "type",
  desc: "页签的基本样式，可选值为 line 和 card",
  type: "String",
  default: "line"
}]

const tabsEvents = [{
    name: "on-click",
    desc: "tab 被点击时触发",
    type: "name"
  },
  {
    name: "on-tab-remove",
    desc: "tab 被关闭时触发",
    type: "name"
  }
]

const TabPaneAPI = [{
  name: "name",
  desc: "用于标识当前面板，对应 value，默认为其索引值",
  type: "String",
  default: "-"
}, {
  name: "label",
  desc: "选项卡头显示文字",
  type: "String",
  default: "-"
}, {
  name: "disabled",
  desc: "是否禁用该选项卡",
  type: "Boolean",
  default: "false"
}, {
  name: "closable",
  desc: "是否可以关闭页签，仅在 type='card' 时有效",
  type: "Boolean",
  default: "null"
}]

export default {
  tabsBasc,
  tabsDisable,
  tabsIcon,
  tabsCard,
  tabsClosed,
  tabsAPI,
  tabsEvents,
  TabPaneAPI
}