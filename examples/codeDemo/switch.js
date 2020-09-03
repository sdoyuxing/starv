export const switchBasc = `
<template>
  <div>
    <s-switch v-model="checked" />
    <br />
    {{checked}}
  </div>
</template>
<script>
export default {
    data() {
        return {
          checked: false
        };
      }
};
</script>`;

export const switchDisabled = `
<template>
  <div>
    <s-switch v-model="dChecked" :disabled="disabled" />
    <s-switch v-model="nChecked" :disabled="disabled">
        <span slot="checkName">ON</span>
        <span slot="uncheckName">OFF</span>
    </s-switch>
    <s-button type="primary" @click="disabled=!disabled">{{disabled?'Usable':'Disabled'}}</s-button>
  </div>
</template>
<script>
export default {
    data() {
        return {
            dChecked: false,
            disabled: false,
            nChecked: false,
        };
      }
};
</script>`;

export const switchColor = `
<template>
  <div>
    <s-switch check-color="#13ce66" uncheck-color="#ff4949" />
  </div>
</template>
<script>
export default {};
</script>`;

export const switchAPI = [{
  name: "value",
  desc: "指定当前是否选中，可以使用 <code>v-model</code> 双向绑定数据",
  type: "Boolean",
  default: "false"
},
{
  name: "disabled",
  desc: "指定禁用状态",
  type: "Boolean",
  default: "false"
},
{
  name: "check",
  desc: "自定义选中时的内容",
  type: "String",
  default: "-"
},
{
  name: "uncheck",
  desc: "自定义未选中时的内容",
  type: "String",
  default: "-"
},
{
  name: "checkColor",
  desc: "自定义选中的背景颜色",
  type: "String",
  default: "-"
},
{
  name: "uncheckColor",
  desc: "自定义未选中的背景颜色",
  type: "String",
  default: "-"
},
{
  name: "large",
  desc: "设置尺寸，2个汉字的文字用",
  type: "Boolean",
  default: "false"
}];

export default {
    switchBasc,
    switchDisabled,
    switchColor,
    switchAPI
}