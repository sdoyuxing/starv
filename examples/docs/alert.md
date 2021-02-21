# Alert 警告提示

## 代码示例

:::demo
**基本用法**：最简单的用法.

```html
<template>
  <div>
    <s-alert>提示信息</s-alert>
  </div>
</template>
<script>
export default {};
</script>
```
:::

:::demo
**四种样式**：type可以设置 `info`、 `success`、 `warning`、 `error`四种样式，默认是 info样式.

```html
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
</script>
```
:::

:::demo
**显示图标**：`show-icon`设置显示图标， `slot="icon"`或 `icon-type`属性自定义图标.

```html
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
</script>
```
:::

:::demo
**关闭**：`closable`属性设置是否可关闭.

```html
<template>
  <div>
    <s-alert type="success" show-icon closable>成功</s-alert>
  </div>
</template>
<script>
export default {};
</script>
```
:::

:::demo
**自定义背景颜色、字体颜色、边框颜色**：`background-color`属性设置背景颜色， `font-color`属性可以设置字体颜色, `border-color`属性可以设置边框颜色, `icon-color`属性可以设置图标颜色.

```html
<template>
  <div>
    <s-alert
    border-color="#BD8EF6"
    background-color="#E6D8F6"
    iconColor="#F049BB"
    show-icon
    icon-type="iconsmile"
    font-color="#048D48"
    >自定义样式</s-alert>
  </div>
</template>
<script>
export default {};
</script>
```
:::

## API

### Alert props

|  属性  | 说明  |  类型  |  默认值  |
|  ----  | ---- |  ----  |  ----   |
|  type  |告警提示类型，可选值为 `info`、`success`、`warning`、`error`或者不设置 | String  | info  |
|  closable  | 是否可关闭  |  Boolean  |  false  |
|  show-icon  | 是否显示图标  |  Boolean  |  false  |
|  background-color  | 是否背景颜色  |  String  |  -  |
|  font-color  | 是否字体颜色  |  String  |  -  |
|  icon-color  | 是否图标颜色  |  String  |  -  |

<br/>

### Alert events

<br/>

|  事件  | 说明  | 返回值  |
|  ----  | ---- | ---- |
|   on-close   | 关闭时触发 | event |

<br/>

### Alert slots

<br/>

|  名称  | 说明  |
|  ----  | ---- |
|   无   | 警告提示内容 |
|   icon   | 自定义图标内容 |
