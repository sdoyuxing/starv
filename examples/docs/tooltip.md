# Tooltip 文字提示

## 代码示例

:::demo
**基本用法**：最简单的用法.

```html
<template>
  <div style="text-align: center;">
    <s-tooltip placement="top-start" class="starv-btn" content="Top Left 文字提示"><s-button>上左</s-button></s-tooltip>
    <s-tooltip placement="top" class="starv-btn" content="Top Center 文字提示"><s-button>上中</s-button></s-tooltip>
    <s-tooltip placement="top-end" class="starv-btn" content="Top Right 文字提示"><s-button>上右</s-button></s-tooltip>
    <div class="starv-center">
    <div class="float-left">
        <s-tooltip placement="left-start" class="starv-btn" content="Left Top 文字提示"><s-button>左上</s-button></s-tooltip>
        <s-tooltip placement="left" class="starv-btn" content="Left Center 文字提示"><s-button>左中</s-button></s-tooltip>
        <s-tooltip placement="left-end" class="starv-btn" content="Left Bottom 文字提示"><s-button>左下</s-button></s-tooltip>
    </div>
    <div class="float-right">
        <s-tooltip placement="right-start" class="starv-btn" content="Right Top 文字提示"><s-button>右上</s-button></s-tooltip>
        <s-tooltip placement="right" class="starv-btn" content="Right Center 文字提示"><s-button>右中</s-button></s-tooltip>
        <s-tooltip placement="right-end" class="starv-btn" content="Right Bottom 文字提示"><s-button>右下</s-button></s-tooltip>
    </div>
    </div>
    <s-tooltip placement="bottom-start" class="starv-btn" content="Bottom Left 文字提示"><s-button>下左</s-button></s-tooltip>
    <s-tooltip placement="bottom" class="starv-btn" content="Bottom Center 文字提示"><s-button>下中</s-button></s-tooltip>
    <s-tooltip placement="bottom-end" class="starv-btn" content="Bottom Right 文字提示"><s-button>下右</s-button></s-tooltip>
  </div>
</template>
<script>
export default {};
</script>
```
:::

:::demo
**多行**：可以通过 `slot="content"`定义内容和样式.

```html
<template>
  <div>
    <s-tooltip placement="bottom" class="starv-btn">
    <s-button>多行</s-button>
    <div slot="content">
        <p>这个社会一直都在拿你和别人比。</p>
        <p>因为这是人的博弈竞争。</p>
    </div>
    </s-tooltip>
  </div>
</template>
<script>
export default {};
</script>
```
:::

:::demo
**延时**：`delay`设置延迟时间，单位是毫秒.

```html
<template>
  <div>
    <s-tooltip placement="bottom" class="starv-btn" content="延迟显示" :delay="1000">
    <s-button>延迟1秒显示</s-button>
    </s-tooltip>
  </div>
</template>
<script>
export default {};
</script>
```
:::

:::demo
**禁用**：`disabled`可以不提示.

```html
<template>
  <div>
    <s-tooltip placement="bottom" :disabled="disabled" class="starv-btn" content="点击关闭提示">
    <s-button @click="disabled=!disabled">点击{{disabled?'显示':'关闭'}}提示</s-button>
    </s-tooltip>
  </div>
</template>
<script>
export default {
    data(){
      return {
        disabled:false
      }
    }
};
</script>
```
:::

:::demo
**自动换行**：设置属性`max-width`，当超出最大值后，文本将自动换行，并两端对齐.

```html
<template>
  <div>
      <s-tooltip
      placement="bottom"
      class="starv-btn"
      max-width="200"
      content="余秋雨，1946年8月23日出生于浙江省余姚县桥头镇（今属浙江省慈溪市），中国著名文化学者，理论家、文化史学家、散文家。"
    >
      <s-button>长文本</s-button>
    </s-tooltip>
  </div>
</template>
<script>
export default {};
</script>
```
:::

## API

### Tooltip props

<br/>

|  属性  | 说明  |  类型  |  默认值  |
|  ----  | ---- |  ----  |  ----   |
|  content  | 显示的内容 |  String  |  -  |
|  placement  | 提示框出现的位置，可选值为`top`、`top-start`、`top-end`、`bottom`、`bottom-start`、`bottom-end`、`left`、`left-start`、`left-end`、`right`、`right-start`、`right-end` |  String  |  bottom  |
|  disabled  | 是否禁用提示框  |  Boolean  |  false  |
|  delay  | 延迟显示，单位毫秒  |  Number  |  0 |
|  max-width  | 最大宽度，超出最大值后，文本将自动换行，并两端对齐  |  String \| Number  |  -  |

<br/>

### Modal events

<br/>

|  事件  | 说明  | 返回值  |
|  ----  | ---- | ---- |
|   on-cancel   | 点击取消按钮触发 |  -  |
|   on-define   | 点击确定按钮触发 |  -  |

<br/>

:::script
<script>
export default {
    data(){
      return {
        disabled:false
      }
    }
};
</script>
:::

:::style
<style scoped>
.starv-center {
  width: 360px;
  height: 140px;
  margin: auto;
  overflow: hidden;
}
.float-left {
  float: left;
  height: 140px;
  width: 62px;
}
.float-right {
  float: right;
  height: 140px;
  width: 62px;
}
</style>
:::