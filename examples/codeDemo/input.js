export const inputBasc = `
<template>
  <div>
      <s-input placeholder="请输入..." style="width:300px"/>
  </div>
</template>
<script>
export default {};
</script>`;

export const inputClear = `
<template>
  <div>
     <s-input placeholder="请输入名称" v-model="text" clearable style="width:300px"/>
  </div>
</template>
<script>
export default {};
</script>`;

export const inputIcon = `
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
export default {};
</script>`;

export const inputMaxlength = `
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
export default {};
</script>`;

export const inputDisabled = `
<template>
  <div>
    <s-input placeholder="请输入..." style="width:300px" disabled />
  </div>
</template>
<script>
export default {};
</script>`;

export const inputLabelText = `
<template>
  <div>
    <s-input placeholder="请输入名称" v-model="text" clearable style="width:300px" labelText="名称"/>
  </div>
</template>
<script>
export default {};
</script>`;

export const inputAttr = `
<template>
  <div>
    <s-input placeholder="请输入..." readonly style="width:300px" />
    <br />
    <s-input placeholder="请输入..." autofocus style="width:300px" />
  </div>
</template>
<script>
export default {};
</script>`;

export const inputEventsCode = `
<template>
  <div>
    <s-input
      placeholder="请输入..."
      style="width:300px"
      @focus="handleFocus"
      @blur="handleBlur"
    />
  </div>
</template>
<script>
export default {
  methods: {
    handleFocus() {
      console.log("获取焦点")
    },
    handleBlur() {
      console.log("失去焦点")
    },
  },
};
</script>`;

export const inputAPI = [{
  name: "type",
  desc: "输入框类型，可选值为 <code>text</code>、<code>password</code>、<code>url</code>、<code>email</code>、<code>date</code>、<code>number</code>、<code>tel</code>",
  type: "String",
  default: "text"
},{
  name: "value",
  desc: "绑定的值，可使用 <code>v-model</code> 双向绑定",
  type: "String | Number",
  default: "-"
},{
  name: "placeholder",
  desc: "占位文本",
  type: "String",
  default: "-"
},{
  name: "clearable",
  desc: "是否显示清空按钮",
  type: "Boolean",
  default: "false"
},{
  name: "disabled",
  desc: "设置输入框为禁用状态",
  type: "Boolean",
  default: "false"
},{
  name: "maxlength",
  desc: "最大输入长度",
  type: "Number",
  default: "-"
},{
  name: "show-word-limit",
  desc: "是否显示输入字数统计，可以配合 <code>maxlength</code> 使用",
  type: "Boolean",
  default: "false"
},{
  name: "show-password",
  desc: "是否显示切换密码图标",
  type: "Boolean",
  default: "false"
},{
  name: "prefix",
  desc: "输入框头部图标",
  type: "String",
  default: "-"
},{
  name: "suffix",
  desc: "输入框尾部图标",
  type: "String",
  default: "-"
},{
  name: "input原生属性",
  desc: "支持<code>input</code>原生属性",
  type: "-",
  default: "-"
}]

export const inputEvents =[
  {
    name: "on-clear",
    desc: "开启 clearable 时可用，点击清空按钮时触发",
    type: "-"
  },
  {
    name: "input原生事件",
    desc: "支持<code>input</code>原生事件",
    type: "-"
  }
]

export const inputMethods=[
  {
    name: "focus",
    desc: "手动获取焦点",
    type: "-"
  }
]