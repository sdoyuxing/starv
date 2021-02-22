# Notice 通知提醒

## 代码示例

:::demo
**基本用法**：最简单的用法.

```html
<template>
  <div>
    <s-button type="primary" @click="noticeShow">点击提醒</s-button>
  </div>
</template>
<script>
export default {
  methods: {
    noticeShow() {
        this.$Notice.show({
            title: "提醒标题",
            content: "您正在看StarUI的提醒文档",
          });
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
    <s-button @click="infoClick" class="starv-btn">提示详情信息</s-button>
    <s-button @click="successClick" class="starv-btn">提示成功信息</s-button>
    <s-button @click="warnClick" class="starv-btn">提示告警信息</s-button>
    <s-button @click="errorClick" class="starv-btn">提示错误信息</s-button>
  </div>
</template>
<script>
export default {
  methods:{
    successClick() {
        this.$Notice.success({
          title: "提醒标题",
          content: "成功提醒；成功提醒；成功提醒；成功提醒；"});
      },
      infoClick() {
        this.$Notice.info({
          title: "提醒标题",
          content: "详情提醒；详情提醒；详情提醒；详情提醒；"});
      },
      warnClick() {
        this.$Notice.warning({
          title: "提醒标题",
          content: "告警提醒；告警提醒；告警提醒；告警提醒；"});
      },
      errorClick() {
        this.$Notice.error({
          title: "提醒标题",
          content: "失败提醒；失败提醒；失败提醒；失败提醒；"});
      },
  }
};
</script>
```
:::

:::demo
**只有内容提醒的图标**：只有内容提醒的图标.

```html
<template>
  <div>
    <s-button @click="inbgClick" class="starv-btn">提示详情信息</s-button>
    <s-button @click="subgClick" class="starv-btn">提示成功信息</s-button>
    <s-button @click="wabgClick" class="starv-btn">提示告警信息</s-button>
    <s-button @click="erbgClick" class="starv-btn">提示错误信息</s-button>
  </div>
</template>
<script>
export default {
  methods:{
    subgClick() { 
        this.$Notice.success({ content: "成功提醒；成功提醒；成功提醒；成功提醒；"});
    },
    wabgClick() { 
        this.$Notice.warning({ content: "告警提醒；告警提醒；告警提醒；告警提醒；"});
    },
    erbgClick() { 
        this.$Notice.error({ content: "失败提醒；失败提醒；失败提醒；失败提醒；"});
    },
    inbgClick() { 
        this.$Notice.info({ content: "详情提醒；详情提醒；详情提醒；详情提醒；"});
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
        this.$Notice.show({
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
        this.$Notice.info({
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
        this.$Notice.show({
            template: "<span>这是一个自定义<code>html</code>内容</span>",
            style: { color: "#49C2BD" },
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
    noticeShow() {
      this.$Notice.show({
        title: "提醒标题",
        content: "您正在看StarUI的提醒文档",
        });
    },
    successClick() {
      this.$Notice.success({
        title: "提醒标题",
        content: "成功提醒；成功提醒；成功提醒；成功提醒；"});
    },
    infoClick() {
      this.$Notice.info({
        title: "提醒标题",
        content: "详情提醒；详情提醒；详情提醒；详情提醒；"});
    },
    warnClick() {
      this.$Notice.warning({
        title: "提醒标题",
        content: "告警提醒；告警提醒；告警提醒；告警提醒；"});
    },
    errorClick() {
      this.$Notice.error({
        title: "提醒标题",
        content: "失败提醒；失败提醒；失败提醒；失败提醒；"});
    },
    subgClick() { 
        this.$Notice.success({ content: "成功提醒；成功提醒；成功提醒；成功提醒；"});
    },
    wabgClick() { 
        this.$Notice.warning({ content: "告警提醒；告警提醒；告警提醒；告警提醒；"});
    },
    erbgClick() { 
        this.$Notice.error({ content: "失败提醒；失败提醒；失败提醒；失败提醒；"});
    },
    inbgClick() { 
        this.$Notice.info({ content: "详情提醒；详情提醒；详情提醒；详情提醒；"});
    },
    timeClick() {
        this.$Notice.show({
            content: "提示显示5秒",
            time: 5,
        });
    },
    iconClick() {
        this.$Notice.info({
            template:
                "<span><Icon :type='iconsmile-filling' style='color:#2db7f5;margin-right:5px;font-size:16px'/><span style='color:#19be6b'>这是一个自定义的笑脸</span></span>",
                showIcon: false,
            });
    },
    messageClick() {
        this.$Notice.show({
            template: "<span>这是一个自定义<code>html</code>内容</span>",
            style: { color: "#49C2BD" },
          });
    },
  }
}
</script>
:::

## API

### Notice 调用方法

<br/>

* `this.$Notice.info(config)`
* `this.$Notice.success(config)`
* `this.$Notice.warning(config)`
* `this.$Notice.error(config)`
* `this.$Notice.message(type,config)`

<br/>

### config 对象说明

<br/>

|  属性  | 说明  |  类型  |  默认值  |
|  ----  | ---- |  ----  |  ----   |
|  content  | 提示内容 |  String  |  -  |
|  template  | 自定义提示内容为html  |  String  |  -  |
|  showIcon  | 是否显示图标  |  Boolean  |  true  |
|  title  | 标题内容  |  Boolean  |  false  |
|  time  | 自动关闭的延时，单位秒，不关闭可以写 0  |  Number  |  1.5  |
|  style  | 设置提示框的内容样式  |  Object  |  {}  |
|  onClose  | 关闭时的回调  |  Function  |  -  |