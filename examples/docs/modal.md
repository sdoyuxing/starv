# Modal 对话框

## 代码示例

:::demo
**基本用法**：最简单的用法.

```html
<template>
  <div>
    <s-modal v-model="modal" title="话框标题" @on-cancel="cancel" @on-define="define">
    <p>对话框内容</p>
    </s-modal>
    <s-button @click="modal=true">点击弹窗</s-button>
  </div>
</template>
<script>
export default {
    data(){
        return {
            modal:false
        }
    },
    methods: {
        cancel() {
          this.$Message.info("点击取消！");
        },
        define() {
          this.$Message.info("点击确定！");
          this.modal = false;
        },
    }
};
</script>
```
:::

:::demo
**自定义弹窗**：`title`设置标题， `width`设置宽度 `slot="title"`、 `slot="footer"`可以自定义标题和按钮.

```html
<template>
  <div>
    <s-modal v-model="titleModal">
    <p>对话框内容</p>
    </s-modal>
    <s-button @click="titleModal=true" class="starv-btn">没有标题弹窗</s-button>
    <s-modal v-model="widthModal" title="话框标题" width="300px">
    <p>对话框内容</p>
    </s-modal>
    <s-button @click="widthModal=true" class="starv-btn">设置弹窗宽度</s-button>
    <s-modal v-model="cusModal" title="话框标题">
    <div slot="title" class="title">
        <Icon type="iconsmile"></Icon>自定义标题
    </div>
    <p style="color:blue">自定义内容</p>
    <div slot="footer" style="text-align: center;">
        <s-button style="width:300px" type="success" @click="cusClick">自定义按钮</s-button>
    </div>
    </s-modal>
    <s-button @click="cusModal=true" class="starv-btn">自定义弹窗内容</s-button>
  </div>
</template>
<script>
export default {
    data() {
        return {
            titleModal: false,
            widthModal: false,
            cusModal: false,
        }
    }
    methods: {
        cusClick() {
            this.$Message.info("自定义按钮点击！");
          } 
    }
};
</script>
```
:::

:::demo
**loading弹窗**：`loading`设置确定按钮是否loading状态， `on-define`确定按钮触发事件.

```html
<template>
  <div>
    <s-modal v-model="loadModal" title="话框标题" :loading="loading" @on-define="defined">
    <p>对话框内容</p>
    </s-modal>
    <s-button @click="loadModal=true">loading弹窗</s-button>
  </div>
</template>
<script>
export default {
    data(){
       return{
         loadModal: false,
         loading:false
       }
    },
    methods:{
        defined() {
            this.loading = true;
            setTimeout(() => {
              this.loading = false;
              this.$Message.success("提交成功！");
              this.loadModal = false;
            }, 2000);
          },
    }
};
</script>
```
:::

:::demo
**设置弹窗位置和禁用点击遮罩关闭**：`mask-closable`属性禁用点击遮罩关闭， `styles`设置弹窗样式.

```html
<template>
  <div>
    <s-modal v-model="maskModal" title="对话框标题" :mask-closable="false">
    <p>对话框内容</p>
    </s-modal>
    <s-button @click="maskModal=true" class="starv-btn">禁用点击遮罩关闭</s-button>
    <s-modal v-model="stylesModal" title="对话框标题" :styles="{top:'10px'}">
    <p>对话框内容</p>
    </s-modal>
    <s-button @click="stylesModal=true" class="starv-btn">设置弹窗位置</s-button>
  </div>
</template>
<script>
export default {
    data(){
        return{
          maskModal: false,
          stylesModal:false
        }
     },
};
</script>
```
:::

## API

### Modal props

<br/>

|  属性  | 说明  |  类型  |  默认值  |
|  ----  | ---- |  ----  |  ----   |
|  value  | 对话框是否显示 |  Boolean  |  false  |
|  title  | 对话框标题，如果使用 slot 自定义了页头，则 title 无效  |  String  |  -  |
|  mask-closable  | 是否允许点击遮罩层关闭  |  Boolean  |  true  |
|  width  | 对话框宽度，单位 px  |  Number \| String  |  520 |
|  styles  | 弹窗样式  |  Object  |  -  |

<br/>

### Modal events

<br/>

|  事件  | 说明  | 返回值  |
|  ----  | ---- | ---- |
|   on-cancel   | 点击取消按钮触发 |  -  |
|   on-define   | 点击确定按钮触发 |  -  |

<br/>

### Modal slots

<br/>

|  名称  | 说明  |
|  ----  | ---- |
|   title   | 自定义标题 |
|   无   | 自定义内容 |
|   footer   | 自定义按钮 |

:::script
<script>
export default {
    data(){
        return {
            modal:false,
            titleModal: false,
            widthModal: false,
            cusModal: false,
            loadModal: false,
            loading:false,
            maskModal: false,
            stylesModal:false
        }
    },
    methods: {
        cancel() {
          this.$Message.info("点击取消！");
        },
        define() {
          this.$Message.info("点击确定！");
          this.modal = false;
        },
        cusClick() {
          this.$Message.info("自定义按钮点击！");
        },
        defined() {
            this.loading = true;
            setTimeout(() => {
              this.loading = false;
              this.$Message.success("提交成功！");
              this.loadModal = false;
            }, 2000);
        },
    }
};
</script>
:::