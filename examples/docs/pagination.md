# Pagination 分页

## 代码示例

:::demo
**基本用法**：基本的分页，页数过多时会自动折叠.

```html
<template>
  <div>
    <s-pagination :total="100"></s-pagination>
  </div>
</template>
<script>
export default {}
</script>
```
:::

:::demo
**显示总数**:可以通过`show-total`设置是否显示总数.

```html
<template>
  <div>
    <s-pagination :total="100" show-total></s-pagination>
  </div>
</template>
<script>
export default {}
</script>
```
:::

:::demo
**每页数量**：可以通过`page-size`值为数组设置每页数量.

```html
<template>
  <div>
    <s-pagination :total="100" :page-size="[10,20,30]"></s-pagination>
  </div>
</template>
<script>
export default {}
</script>
```
:::

:::demo
**快速跳转到某一页**：可以通过`show-jumper`来显示快速跳转到某一页.

```html
<template>
  <div>
   <s-pagination :total="100" show-jumper></s-pagination>
  </div>
</template>
<script>
export default {};
</script>
```
:::

## API

### Pagination props
<br/>

|  属性  | 说明  |  类型  |  默认值  |
|  ----  | ---- |  ----  |  ----   |
|  current  | 当前页码 |  Number  |  1  |
|  total  | 数据总数  |  Number  |  0  |
|  page-size  | 每页条数  |  Number|Array  |  10  |
|  show-total  | 显示总数  |  Boolean  |  false  |
|  show-jumper  | 显示快速跳转到某一页  |  Boolean  |  false  |

<br/>

### Pagination events
<br/>

|  事件名 | 说明 |  返回值 |
|  ----   | ----  |  ----   |
| on-change  | 页码改变的回调，返回改变后的页码 |  页码  |
|  on-page-change  | 切换每页条数时的回调，返回切换后的每页条数  |  变化的页数  |