# Message 全局提示

## 代码示例

:::demo
**基本用法**：最简单的用法.

```html
<template>
  <div>
    <s-button @click="handleClick">点击提示信息</s-button>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick() {
      this.$Message.info("消息提示！");
    }
  }
};
</script>
```
:::

:::demo
**提示类型**：不同的提示状态：成功、警告、错误.

```html
<template>
  <div>
    <s-button @click="successClick">提示成功信息</s-button>
    <s-button @click="warnClick">提示告警信息</s-button>
    <s-button @click="errorClick">提示错误信息</s-button>
  </div>
</template>
<script>
export default {
  methods:{
    successClick() {
      this.$Message.success("操作成功！");
    },
    warnClick() {
      this.$Message.warning("该操作有丢失数据风险！");
    },
    errorClick() {
      this.$Message.error("操作失败，请联系网管！");
    }
  }
};
</script>
```
:::

:::demo
**背景样式**：设置属性 background 后，通知提示会显示背景色.

```html
<template>
  <div>
    <s-button @click="subgClick">提示成功信息</s-button>
    <s-button @click="wabgClick">提示告警信息</s-button>
    <s-button @click="erbgClick">提示错误信息</s-button>
  </div>
</template>
<script>
export default {
  methods:{
    subgClick() {
      this.$Message.success({
        content: "操作成功！",
        background: true,
      });
    },
    wabgClick() {
      this.$Message.warning({
        content: "该操作有丢失数据风险！",
        background: true,
      });
    },
    erbgClick() {
      this.$Message.error({
        content: "操作失败，请联系网管！",
        background: true,
      });
    }
  }
};
</script>
```
:::

:::demo
**自定义时长**：`time`属性设置是时长.

```html
<template>
  <div>
    <s-button @click="timeClick">显示5秒隐藏</s-button>
  </div>
</template>
<script>
export default {
  methods:{
    timeClick() {
      this.$Message.info({
        content: "提示显示5秒",
        time: 5,
      });
    }
  }
};
</script>
```
:::

:::demo
**可关闭**：`closable`设置是否可手动关闭.

```html
<template>
  <div>
    <s-button @click="closableClick">提示可关闭信息</s-button>
  </div>
</template>
<script>
export default {
  methods:{
    closableClick() {
      this.$Message.info({
        content: "可关闭提示信息",
        closable: true,
      });
    }
  }
};
</script>
```
:::

:::demo
**自定义带标签或者组件内容**：`template`属性设置自定义的html内容， `style`设置内容样式.

```html
<template>
  <div>
    <s-button @click="messageClick">自定义html内容</s-button>
  </div>
</template>
<script>
export default {
  methods:{
    messageClick() {
      this.$Message.message("info", {
        template: "<span>这是一个自定义<code>html</code>内容</span>",
        style: { color: "#49C2BD" },
      });
    },
  }
};
</script>
```
:::

:::demo
**自定义图标和内容**：`showIcon`设置不显示默认图标。 `template`自定义图标，注：在给vue组件props传参时， 属性名前面加个:.

```html
<template>
  <div>
   <s-button @click="iconClick">自定义图标</s-button>
  </div>
</template>
<script>
export default {
  methods:{
    iconClick() {
      this.$Message.message("info", {
        template:
          "<span><Icon :type='iconsmile-filling' style='color:#2db7f5;margin-right:5px;font-size:16px'/><span style='color:#19be6b'>这是一个自定义的笑脸</span></span>",
          showIcon: false,
      });
    },
  }
};
</script>
```
:::

:::script
<script>
export default {
   methods: {
    handleClick() {
      this.$Message.info("消息提示！");
    },
    successClick() {
      this.$Message.success("操作成功！");
    },
    warnClick() {
      this.$Message.warning("该操作有丢失数据风险！");
    },
    errorClick() {
      this.$Message.error("操作失败，请联系网管！");
    },
    subgClick() {
      this.$Message.success({
        content: "操作成功！",
        background: true,
      });
    },
    wabgClick() {
      this.$Message.warning({
        content: "该操作有丢失数据风险！",
        background: true,
      });
    },
    erbgClick() {
      this.$Message.error({
        content: "操作失败，请联系网管！",
        background: true,
      });
    },
    timeClick() {
      this.$Message.info({
        content: "提示显示5秒",
        time: 5,
      });
    },
    closableClick() {
      this.$Message.info({
        content: "可关闭提示信息",
        closable: true,
      });
    },
    messageClick() {
      this.$Message.message("info", {
        template: "<span>这是一个自定义<code>html</code>内容</span>",
        style: { color: "#49C2BD" },
      });
    },
    iconClick() {
      this.$Message.message("info", {
        template:
          "<span><Icon :type='iconsmile-filling' style='color:#2db7f5;margin-right:5px;font-size:16px'/><span style='color:#19be6b'>这是一个自定义的笑脸</span></span>",
          showIcon: false,
      });
    },
   }
};
</script>
:::

## API

### Message 调用方法

<br/>

* `this.$Message.info(config)`
* `this.$Message.success(config)`
* `this.$Message.warning(config)`
* `this.$Message.error(config)`
* `this.$Message.message(type,config)`

<br/>

### config 对象说明

<br/>

|  属性  | 说明  |  类型  |  默认值  |
|  ----  | ---- |  ----  |  ----   |
|  content  | 提示内容 |  String  |  -  |
|  template  | 自定义提示内容为html  |  String  |  -  |
|  showIcon  | 是否显示图标  |  Boolean  |  true  |
|  background  | 是否显示背景色  |  Boolean  |  false  |
|  closable  | 是否显示关闭按钮  |  Boolean  |  false  |
|  time  | 自动关闭的延时，单位秒，不关闭可以写 0 |  Number  |  1.5  |
|  style  | 设置提示框的内容样式  |  Object  |  {}  |
|  onClose  | 关闭时的回调  |  Function  |  -  |