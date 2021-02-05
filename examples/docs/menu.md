# Menu 导航菜单

## 代码示例

:::demo
**按钮类型**：主按钮、次按钮.

```html
<template>
  <s-menu>
    <s-menu-item name="1">
      <Icon type="iconuser" />用户管理</s-menu-item>
    <s-menu-item name="2">
      <Icon type="icondata-view" />统计管理</s-menu-item>
    <s-submenu name="3">
      <template slot="title">
        <Icon type="iconsetting" />权限管理
      </template>
      <s-menu-item name="4">统计管理</s-menu-item>
    </s-submenu>
  </s-menu>
</template>
<script>
export default {}
</script>
```
:::

:::script
export default {}
:::