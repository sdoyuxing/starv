#   Poptip 气泡提示

## 代码示例

:::demo
**基本用法**：最简单的用法.

```html
<template>
  <div style="text-align: center;">
    <s-poptip placement="top-start" class="starv-btn" title="文字提示" content="Top Left 文字提示"><s-button>上左</s-button></s-poptip>
    <s-poptip placement="top" class="starv-btn" title="文字提示" content="Top Center 文字提示"><s-button>上中</s-button></s-poptip>
    <s-poptip placement="top-end" class="starv-btn" title="文字提示" content="Top Right 文字提示"><s-button>上右</s-button></s-poptip>
    <div class="starv-center">
    <div class="float-left">
        <s-poptip placement="left-start" class="starv-btn" title="文字提示" content="Left Top 文字提示"><s-button>左上</s-button></s-poptip>
        <s-poptip placement="left" class="starv-btn" title="文字提示" content="Left Center 文字提示"><s-button>左中</s-button></s-poptip>
        <s-poptip placement="left-end" class="starv-btn" title="文字提示" content="Left Bottom 文字提示"><s-button>左下</s-button></s-poptip>
    </div>
    <div class="float-right">
        <s-poptip placement="right-start" class="starv-btn" title="文字提示" content="Right Top 文字提示"><s-button>右上</s-button></s-poptip>
        <s-poptip placement="right" class="starv-btn" title="文字提示" content="Right Center 文字提示"><s-button>右中</s-button></s-poptip>
        <s-poptip placement="right-end" class="starv-btn" title="文字提示" content="Right Bottom 文字提示"><s-button>右下</s-button></s-poptip>
    </div>
    </div>
    <s-poptip placement="bottom-start" class="starv-btn" title="文字提示" content="Bottom Left 文字提示"><s-button>下左</s-button></s-poptip>
    <s-poptip placement="bottom" class="starv-btn" title="文字提示" content="Bottom Center 文字提示"><s-button>下中</s-button></s-poptip>
    <s-poptip placement="bottom-end" class="starv-btn" title="文字提示" content="Bottom Right 文字提示"><s-button>下右</s-button></s-poptip>
  </div>
</template>
<script>
export default {};
</script>
```
:::

:::demo
**触发方式**：可以通过`trigger`设置`hover`、`click`、`focus`设置触发方式 `slot="content"`定义内容和样式.

```html
<template>
  <div>
      <s-poptip placement="bottom" class="starv-btn" trigger="hover">
      <s-button>hover触发</s-button>
      <div slot="title">
        <p>标题</p>
      </div>
      <div slot="content">
        <p>hover触发提示</p>
      </div>
    </s-poptip>
    <s-poptip placement="bottom" class="starv-btn" trigger="click">
      <s-button>click触发</s-button>
      <div slot="title">
        <p>标题</p>
      </div>
      <div slot="content">
        <p>click触发提示</p>
      </div>
    </s-poptip>
    <s-poptip placement="bottom" class="starv-btn" trigger="focus">
      <s-button>focus触发</s-button>
      <div slot="title">
        <p>标题</p>
      </div>
      <div slot="content">
        <p>focus触发提示</p>
      </div>
    </s-poptip>
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
    <s-poptip placement="bottom" class="starv-btn" content="延迟显示" :delay="1000">
      <s-button>延迟1秒显示</s-button>
    </s-poptip>
  </div>
</template>
<script>
export default {};
</script>
```
:::

:::demo
**自定义内容和内容关闭提示**：`slot="content"`自定义内容 `visible`设置提示的显示和隐藏.

```html
<template>
  <div>
      <s-poptip :visible.sync="visible">
      <a>Click</a>
      <div slot="title">
        <i>标题</i>
      </div>
      <div slot="content">
        <a @click="close">close</a>
      </div>
    </s-poptip>
  </div>
</template>
<script>
export default {
  data(){
    return{
      visible:false,
    }
  },
  methods: {
    close(){
      this.visible=false
    }
  },
};
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
    return{
      visible:false,
    }
  },
  methods: {
    close(){
      this.visible=false
    }
  },
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