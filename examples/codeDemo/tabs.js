const tagBasc = `
<template>
  <div>
    <s-tag>苹果</s-tag><s-tag>华为</s-tag><s-tag>三星</s-tag>
  </div>
</template>
<script>
export default {};
</script>`;

const tagClose = `
<template>
  <div>
    <s-tag closable>可关闭标签</s-tag>
  </div>
</template>
<script>
export default {};
</script>`;

const tagTpye = `
<template>
  <div>
    <s-tag>默认样式</s-tag>
    <s-tag type="primary">primary</s-tag>
    <s-tag type="info">info</s-tag>
    <s-tag type="warning">warning</s-tag>
    <s-tag type="error">error</s-tag>
    <br />
    <s-tag closable>默认样式</s-tag>
    <s-tag type="primary" closable>primary</s-tag>
    <s-tag type="info" closable>info</s-tag>
    <s-tag type="warning" closable>warning</s-tag>
    <s-tag type="error" closable>error</s-tag>
  </div>
</template>
<script>
export default {};
</script>`;

const tagColor = `
<template>
  <div>
    <s-tag backgroundColor="#fff0f6" borderColor="#ffadd2" fontColor="#eb2f96">自定义标签</s-tag>
    <s-tag backgroundColor="#e6fffb" borderColor="#87e8de" fontColor="#13c2c2">自定义标签</s-tag>
    <s-tag backgroundColor="#f9f0ff" borderColor="#d3adf7" fontColor="#722ed1"  closable>自定义标签</s-tag>
    <s-tag backgroundColor="#FFA2D3" borderColor="#FFA2D3" fontColor="#fff" closedColor="#fff" closable>自定义标签</s-tag>
  </div>
</template>
<script>
export default {};
</script>`;

const tagCheck = `
<template>
  <div>
    <s-tag checkable>可选择</s-tag>
    <s-tag checkable type="primary">可选择</s-tag>
    <s-tag checkable type="info">可选择</s-tag>
    <s-tag checkable type="warning" checked>可选择</s-tag>
    <s-tag checkable type="error" checked>可选择</s-tag>
  </div>
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
    tagBasc,
    tagClose,
    tagTpye,
    tagColor,
    tagCheck,
    tagAPI,
    tagEvents
}