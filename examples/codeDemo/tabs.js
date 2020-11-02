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

const tagAPI = [{
  name: "type",
  desc: "标签类型，可选值为 <code>default</code>、<code>primary</code>、<code>info</code>、<code>warning</code>、<code>error</code>，默认是<code>default</code>",
  type: "String",
  default: "text"
}, {
  name: "closable",
  desc: "设置是否可关闭",
  type: "Boolean",
  default: "false"
}, {
  name: "checkable",
  desc: "设置是否可选中",
  type: "Boolean",
  default: "false"
}, {
  name: "checked",
  desc: "设置是选中状态",
  type: "Boolean",
  default: "false"
}]

const tagEvents = [{
    name: "on-close",
    desc: "关闭时触发",
    type: "event"
  },
  {
    name: "on-change",
    desc: "切换选中状态时触发",
    type: "true | flase"
  }
]

export default {
  tabsBasc,
  tabsDisable,
  tabsIcon,
  tabsCard,
  tabsClosed,
  tagAPI,
  tagEvents
}