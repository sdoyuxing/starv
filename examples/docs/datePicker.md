# DatePicker 日期选择器

## 代码示例

:::demo
**基本用法**：设置属性 type 为 date 显示选择日期.

```html
<template>
    <s-date-picker type="date" style="width: 200px"></s-date-picker>
</template>
<script>
export default {};
</script>
```
:::

:::demo
**周、月和年**：设置属性 `type` 为 `year` 或 `month` 可以使用选择年或月的功能.

```html
<template>
    <s-date-picker type="week"  placeholder="请选择周" style="width: 200px"></s-date-picker>
    <s-date-picker type="month"  placeholder="请选择月份" style="width: 200px; margin-left: 50px"></s-date-picker>
    <s-date-picker type="year"  placeholder="请选择年份" style="width: 200px; margin-left: 50px"></s-date-picker>
</template>
<script>
export default {};
</script>
```
:::

:::demo
**选择范围**：设置属性 type 为 `daterange` 显示选择范围.

```html
<template>
  <div>
     <s-date-picker type="daterange" placeholder="请选择范围" style="width: 200px"></s-date-picker>
  </div>
</template>
<script>
export default {};
</script>
```
:::

:::demo
**日期格式**：设置属性 format 可以设置显示的日期格式.

```html
<template>
  <div>
    <s-date-picker type="date" format="yyyy年MM月dd日" placeholder="yyyy年MM月dd日" style="width: 200px"></s-date-picker>
    <s-date-picker type="date" format="yyyy/MM/dd" placeholder="yyyy/MM/dd" style="width: 200px; margin-left: 30px"></s-date-picker>
    <s-date-picker type="daterange" format="yyyy/MM/dd" placeholder="yyyy/MM/dd" style="width: 200px; margin-left: 30px"></s-date-picker>
   </div>
</template>
<script>
export default {};
</script>
```
:::

:::demo
**不可选日期**：设置属性 `disabledDate` 是函数，参数为当前的日期，需要返回 `Boolean` 是否禁用这天.

```html
<template>
  <div>
    <s-date-picker placeholder="请选择日期" type="date" style="width: 200px" :disabledDate="disabledfn1" ></s-date-picker>
    <s-date-picker placeholder="请选择日期" type="date" style="width: 200px; margin-left: 30px" :disabledDate="disabledfn" ></s-date-picker>
  </div>
</template>
<script>
export default {
  methods: {
    disabledfn(date) {
      const disabledDay = date.getDate();
      return disabledDay === 15;
    },
    disabledfn1(date) {
      return date && date.valueOf() < Date.now() - 86400000;
    },
  },
};
</script>
```
:::

## API

### DatePicker props

<br/>

|  属性  | 说明  |  类型  |  默认值  |
|  ----  | ---- |  ----  |  ----   |
|  type  |显示类型，可选值为 `date`、`daterange`、`datetime`、`datetimerange`、`year`、`month` | String  |  默认为第一项的 name  |
|  value  | 日期，可以是 JavaScript 的 Date，例如 new Date()，也可以是标准的日期格式可以使用v-model双向绑定  |  Date \| String  |  -  |
|  format  | 展示的日期格式值为:'yyyy-MM-dd'、'yyyy-MM'、'yyyy'等  |  String  |  yyyy-MM-dd  |
|  placement  | 日期选择器出现的位置，可选值为`top`、`top-start`、`top-end`、`bottom`、`bottom-start`、`bottom-end`、`left`、`left-start`、`left-end`、`right`、`right-start`、`right-end`  |  String  |  bottom-start  |
|  placeholder  | 占位文本  |  String  |  -  |
|  disabledDate  | 设置日期不可用，值为函数返回false为不可用  |  Function  |  -  |
|  clearable  | 是否显示清除按钮  |  Boolean  |  true  |
|  disabled  | 是否禁用选择器  |  Boolean  |  false  |

### Select events

<br/>

|  事件  | 说明  | 返回值  |
|  ----  | ---- | ---- |
|   on-change   | 日期发生变化时触发 | 已经格式化后的日期 |
|   on-open-change   | 弹出日历和关闭日历时触发 | true \| false |

