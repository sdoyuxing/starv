const menuBasc = `
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
    <s-menu-item name="3">统计管理</s-menu-item>
  </s-submenu>
</s-menu>
</template>
<script>
export default {};
</script>`;

const menuVertical = `
<template>
<div style="width: 250px">
 <s-menu mode="vertical">
  <s-menu-item name="1">
    <Icon type="iconuser" />用户管理</s-menu-item>
  <s-menu-item name="2">
    <Icon type="icondata-view" />统计管理</s-menu-item>
  <s-submenu name="3">
    <template slot="title">
      <Icon type="iconsetting" />权限管理</template>
    <s-menu-item name="3">统计管理</s-menu-item>
  </s-submenu>
 </s-menu>
</div>
</template>
<script>
export default {};
</script>`;

const menuAPI = [{
  name: "mode",
  desc: "菜单类型，可选值为 <code>horizontal</code>水平、<code>vertical</code>垂直",
  type: "String",
  default: "horizontal"
}, {
  name: "active",
  desc: "激活菜单的 name 值",
  type: "String | Number",
  default: "-"
}]

const menuEvents = [{
    name: "on-select",
    desc: "选择菜单（MenuItem）时触发",
    type: "name"
  },
  {
    name: "on-change-expand",
    desc: "当 展开/收起 子菜单时触发",
    type: "name,isExpand（是否展开）"
  }
]
const menuItemAPI = [{
  name: "name",
  desc: "菜单项的唯一标识，必填",
  type: "String | Number",
  default: "-"
}]

export default {
  menuBasc,
  menuVertical,
  menuAPI,
  menuEvents,
  menuItemAPI
}