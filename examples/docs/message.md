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
    }
};
</script>
:::