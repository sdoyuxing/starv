# Select 选择器

## 代码示例

:::demo
**基本用法**：基本用法。可以使用 `v-model` 双向绑定数据.

```html
<template>
  <div>
    <s-select v-model="selected" style="width:200px">
    <Option value="IPHONE">苹果</Option>
    <Option value="HUAWEI">华为</Option>
    <Option value="SAMSUNG">三星</Option>
    <Option value="MI">小米</Option>
    <Option value="OPPO">OPPO</Option>
    <Option value="VIVO">VIVO</Option>
    </s-select>
    {{selected}}
  </div>
</template>
<script>
export default {
    data(){
        return{
            selected:"IPHONE"
        }
    }
};
</script>
```
:::

:::script
<script>
export default {
    data(){
        return{
            selected:"IPHONE"
        }
    }
};
</script>
:::
