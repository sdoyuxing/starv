# Tag 标签

## 代码示例

:::demo
**基本用法**：最简单的用法.

```html
<template>
  <div>
    <s-tag>苹果</s-tag><s-tag>华为</s-tag><s-tag>三星</s-tag>
  </div>
</template>
<script>
export default {};
</script>
```
:::

:::demo
**可关闭**：`closable`可以设置关闭标签.

```html
<template>
  <div>
    <s-tag closable>可关闭标签</s-tag>
  </div>
</template>
<script>
export default {};
</script>
```
:::

:::demo
**标签样式**：`type`可以设置 `default`、 `primary`、 `info`、 `warning`、 `error`五种样式，默认是 `default`.

```html
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
</script>
```
:::

:::demo
**自定义背景颜色、字体颜色、边框颜色**：`background-color`属性设置背景颜色、 `border-color`属性设置边框颜色、 `font-color`属性设置字体颜色、`closed-color`属性设置删除图标字体颜色.

```html
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
</script>
```
:::

:::demo
**可选择**：`checkable`设置是否可选择，`checked`设置是否选中状态.
```html
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
</script>
```
:::

## API

### Tag props

<br/>

|  属性  | 说明  |  类型  |  默认值  |
|  ----  | ---- |  ----  |  ----   |
|  type  | 标签类型，可选值为 `default`、`primary`、`info`、`warning`、`error`，默认是`default` |  String  |  text  |
|  closable  | 设置是否可关闭 |  String  |  bottom  |
|  disabled  | 是否禁用提示框  |  Boolean  |  false  |
|  checkable  | 设置是否可选中  |  Boolean  |  false |
|  checked  | 设置是选中状态  |  Boolean  |  false  |

<br/>

### Tag events

<br/>

|  事件  | 说明  | 返回值  |
|  ----  | ---- | ---- |
|   on-close   | 关闭时触发 |  event  |
|   on-change   | 切换选中状态时触发 |  true \| flase  |

<br/>