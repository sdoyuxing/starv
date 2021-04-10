# Tabs 标签页

## 代码示例

:::demo
**基本用法**:最简单的用.

```html
<template>
  <s-tabs>
    <s-tab-pane label="标签一" name="name1">标签一的内容</s-tab-pane>
    <s-tab-pane label="标签二" name="name2">标签二的内容</s-tab-pane>
    <s-tab-pane label="标签三" name="name3">标签三的内容</s-tab-pane>
  </s-tabs>
</template>
<script>
export default {};
</script>
```
:::

:::demo
**禁用**:`disabled`禁用某一项.

```html
<template>
  <s-tabs>
    <s-tab-pane label="标签一" name="name1" disabled>标签一的内容</s-tab-pane>
    <s-tab-pane label="标签二" name="name2">标签二的内容</s-tab-pane>
    <s-tab-pane label="标签三" name="name3" icon="iconmeh">标签三的内容</s-tab-pane>
  </s-tabs>
</template>
<script>
export default {};
</script>
```
:::

:::demo
**图标**:`icon`可以设置图标.

```html
<template>
  <s-tabs>
    <s-tab-pane label="标签一" name="name1" icon="iconsmile">标签一的内容</s-tab-pane>
    <s-tab-pane label="标签二" name="name2" icon="iconmeh">标签二的内容</s-tab-pane>
    <s-tab-pane label="标签三" name="name3" icon="iconcry">标签三的内容</s-tab-pane>
  </s-tabs>
</template>
<script>
export default {};
</script>
```
:::

:::demo
**卡片样式**:`type="card"`设置卡片样式.

```html
<template>
  <s-tabs type="card">
    <s-tab-pane label="标签一" name="name1">标签一的内容</s-tab-pane>
    <s-tab-pane label="标签二" name="name2">标签二的内容</s-tab-pane>
    <s-tab-pane label="标签三" name="name3">标签三的内容</s-tab-pane>
  </s-tabs>
</template>
<script>
export default {};
</script>
```
:::

:::demo
**可删除**:`closable`设置是否可删除.
```html
<template>
  <s-tabs type="card">
    <s-tab-pane label="标签一" name="name1" closable>标签一的内容</s-tab-pane>
    <s-tab-pane label="标签二" name="name2" closable>标签二的内容</s-tab-pane>
    <s-tab-pane label="标签三" name="name3" closable>标签三的内容</s-tab-pane>
  </s-tabs>
</template>
<script>
export default {};
</script>
```
:::

:::demo
**选项很多情况**:选项很多情况.
```html
<template>
    <s-tabs>
        <s-tab-pane
            :label="'标签' + item"
            :name="'name' + item"
            v-for="item in index"
            :key="item"
            >标签{{ item }}的内容</s-tab-pane
        >
    </s-tabs>
</template>
<script>
export default {
  data() {
    return {
      index: 15,
    };
  },
};
</script>
```
:::


:::script
<script>
export default {
  data() {
    return {
      index: 15,
    };
  },
};
</script>
:::

## API

### Tabs props

<br/>

|  属性  | 说明  |  类型  |  默认值  |
|  ----  | ---- |  ----  |  ----   |
|  value  | 当前激活 tab 面板的 name，可以使用 v-model 双向绑定数据 |  String  |  默认为第一项的 name  |
|  type  | 页签的基本样式，可选值为 line 和 card |  String  |  line  |

<br/>

### Tabs events

<br/>

|  事件  | 说明  | 返回值  |
|  ----  | ---- | ---- |
|   on-click   | tab 被点击时触发 | name |
|   on-tab-remove   | tab 被关闭时触发 | name |

<br/>

### TabPane props

<br/>

|  属性  | 说明  |  类型  |  默认值  |
|  ----  | ---- |  ----  |  ----   |
|  name  | 用于标识当前面板，对应 value，默认为其索引值 |  String  |  -  |
|  label  | 选项卡头显示文字 |  String  |  -  |
|  disabled  | 是否禁用该选项卡 |  Boolean  |  false  |
|  closable  | 是否可以关闭页签，仅在 `type='card'` 时有效 |  Boolean  |  false  |
