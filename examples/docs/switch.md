# Switch 开关

## 代码示例

:::demo
**基本用法**：基本用法.

```html
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
</script>
```
:::

:::demo
**不可用状态**：添加 `disabled` 属性即可处于不可用状态.

```html
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
</script>
```
:::

:::demo
**文字和图标**：自定义内容，建议如果使用2个汉字，将开关尺寸设置为 `large`.

```html
 <s-switch large>
    <span slot="check">ON</span>
    <span slot="uncheck">OFF</span>
 </s-switch>
 <s-switch check="开启" uncheck="关闭" large />
 <s-switch>
    <Icon slot="check" type="iconselect-bold" />
    <Icon slot="uncheck" type="iconclose-bold" />
 </s-switch>
```
:::

:::demo
**自定义背景样式**：check-color设置选中的背景颜色，uncheck-color设置未选择的背景颜色.

```html
  <s-switch check-color="#13ce66" uncheck-color="#ff4949" />
```
:::

## API

### Switch props
<br/>

|  属性  | 说明  |  类型  |  默认值  |
|  ----  | ---- |  ----  |  ----   |
|  value  | 指定当前是否选中，可以使用 `v-model` 双向绑定数据 |  Boolean  |  false  |
|  disabled  | 指定禁用状态  |  Boolean  |  false  |
|  check  | 自定义选中时的内容  |  String  |  -  |
|  uncheck  | 自定义未选中时的内容  |  String  |  -  |
|  check-color  | 自定义选中的背景颜色  |  String  |  -  |
|  uncheck-color  | 自定义未选中的背景颜色  |  String  |  -  |
|  large  | 设置尺寸，2个汉字的文字用  |  Boolean  |  false  |

<br/>


:::script
<script>
export default {
    data() {
        return {
          checked: false,
          dChecked: false,
          disabled: false,
          nChecked: false,
        };
      }
};
</script>
:::