# 表单

## 代码示例

:::demo
基本用法.
```html
<template>
  <div>
      <s-input placeholder="请输入..." style="width:300px"/>
  </div>
</template>
<script>
export default {};
</script>
```
:::

:::demo
**可清空**：使用`clearable`属性即可得到一个可清空的输入框.
```html
<template>
  <div>
     <s-input placeholder="请输入名称" v-model="text" clearable style="width:300px"/>
  </div>
</template>
<script>
export default {}
</script>
```
:::

:::demo
**前后缀图标**：通过设置 `prefix` 和
`suffix` 及同名 `slot` 设置前缀及后缀图标，
`slot` 可以自定义显示文字或其他元素.
```html
<template>
  <div>
    <h4>前后缀图标</h4>
    <br />
    <s-input prefix="iconsmile-filling" placeholder="Enter text" style="width: 300px" />
    <br />
    <s-input suffix="iconsearch" placeholder="Enter text" style="width: 300px" />
    <h4>前后缀图标带清除</h4>
    <br />
    <s-input prefix="iconsmile-filling" clearable placeholder="Enter text" style="width: 300px"/>
    <br />
    <s-input suffix="iconsearch" clearable placeholder="Enter text" style="width: 300px" />
    <h4><code>slot</code>自定义前后缀，可以是图标也可以是文字</h4>
    <br />
    <s-input placeholder="Enter text" style="width: 300px"> <Icon type="iconemail" slot="prefix" /> <i slot="suffix" style="font-size:14px">RMB</i> </input>
  </div>
</template>
<script>
export default {}
</script>
```
:::

:::demo
**输入长度限制**： 属性`show-word-limit`显示数字统计，配合`maxlength`使用.
```html
<template>
  <div>
    <s-input placeholder="请输入名称"  maxlength="10" clearable style="width:300px" />
    <br/>
    <s-input placeholder="请输入名称" show-word-limit  maxlength="10" clearable style="width:300px" />
    <br/>
    <s-input placeholder="请输入名称" show-word-limit  maxlength="10" clearable style="width:300px" />
  </div>
</template>
<script>
export default {}
</script>
```
:::

:::demo
**不可用状态**：`disabled`属性设置为不可用状态.
```html
<template>
  <div>
    <s-input placeholder="请输入..." style="width:300px" disabled />
  </div>
</template>
<script>
export default {};
</script>
```
:::

:::demo
**输入框内容说明**：属性`labelText`设置输入框内容说明.
```html
<template>
  <div>
    <s-input placeholder="请输入名称" v-model="text" clearable style="width:300px" labelText="名称"/>
  </div>
</template>
<script>
export default {};
</script>
```
:::

:::demo
**支持`input`的原生属性**：支持`input`原生属性，`readonly`设置输入框只读;`autofocus`设置自动获取焦点.
```html
<template>
  <div>
    <s-input placeholder="请输入..." readonly style="width:300px" />
    <br />
    <s-input placeholder="请输入..." autofocus style="width:300px" />
  </div>
</template>
<script>
export default {};
</script>
```
:::

:::demo
**支持`input`原生事件**： 支持`input`原生事件`focus`获取焦点事件,`blur`失去焦点事件.
```html
<template>
  <div>
    <s-input
      placeholder="请输入..."
      style="width:300px"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    {{text}}
  </div>
</template>
<script>
export default {
  data(){
      return{
          text:""
      }
  },
  methods: {
    handleFocus() {
      this.text="获取焦点"
    },
    handleBlur() {
      this.text="失去焦点"
    },
  },
}
</script>
```
:::

## API

### Input props
<br/>

|  属性  | 说明  |  类型  |  默认值  |
|  ----  | ---- |  ----  |  ----   |
|  type  | 输入框类型，可选值为 `text`、`password`、`url`、`email`、`date`、`number`、`tel` |  String  |  text  |
|  value  | 绑定的值，可使用 `v-model` 双向绑定  |  String \| Number  |  -  |
|  placeholder  | 占位文本  |  String  |  -  |
|  clearable  | 是否显示清空按钮  |  Boolean  |  false  |
|  disabled  | 设置输入框为禁用状态  |  Boolean  |  false  |
|  maxlength  | 最大输入长度  |  Number  |  -  |
|  show-word-limit  | 是否显示输入字数统计，可以配合 `maxlength` 使用  |  Boolean  |  false  |
|  show-password  | 是否显示切换密码图标  |  Boolean  |  false  |
|  prefix  | 输入框头部图标  |  String  |  -  |
|  suffix  | 输入框尾部图标  |  String  |  -  |
|  input原生属性  | 支持`input`原生属性  |  -  |  -  |

<br/>

### Input events
<br/>

|  事件名 | 说明 |  返回值 |
|  ----   | ----  |  ----   |
| on-clear  | 开启 clearable 时可用，点击清空按钮时触发 |  -  |
|  input原生事件  | 支持`input`原生事件  |  -  |

<br/>

### Input methods
<br/>

|  事件名 | 说明 |  参数 |
|  ----  | ----  |  ----   |
| focus  | 手动获取焦点 |  -  |


:::script
<script>
export default {
  data(){
      return{
          text:""
      }
  },
  methods: {
    handleFocus() {
      this.text="获取焦点"
    },
    handleBlur() {
      this.text="失去焦点"
    },
  },
}
</script>
:::