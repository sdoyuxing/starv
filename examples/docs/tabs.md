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



