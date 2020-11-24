const datepickerBasc = `
<template>
    <s-date-picker type="date" style="width: 200px"></s-date-picker>
</template>
<script>
export default {};
</script>`;

const datepickerType = `
<template>
    <s-date-picker type="week" style="width: 200px"></s-date-picker>
    <s-date-picker type="month" style="width: 200px; margin-left: 50px"></s-date-picker>
    <s-date-picker type="year" style="width: 200px; margin-left: 50px"></s-date-picker>
</template>
<script>
export default {};
</script>`;

const datepickerDisable = `
<template>
  <s-tabs>
    <s-date-picker placeholder="请选择日期" type="date" style="width: 200px" :disabledDate="disabledfn1" ></s-date-picker>
    <s-date-picker placeholder="请选择日期" type="date" style="width: 200px" :disabledDate="disabledfn" ></s-date-picker>
  </s-tabs>
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
</script>`;

const daterange = `
<template>
  <s-tabs type="card">
    <s-date-picker type="daterange" placeholder="请选择范围" style="width: 200px"></s-date-picker>
  </s-tabs>
</template>
<script>
export default {};
</script>`;

const dateFormat = `
<template>
  <s-tabs type="card">
    <s-date-picker type="date" format="yyyy年MM月dd日" placeholder="yyyy年MM月dd日" style="width: 200px"></s-date-picker>
    <s-date-picker type="date" format="yyyy/MM/dd" placeholder="yyyy/MM/dd" style="width: 200px; margin-left: 30px"></s-date-picker>
    <br />
    <s-date-picker type="daterange" format="yyyy/MM/dd" placeholder="yyyy/MM/dd" style="width: 200px"></s-date-picker>
  </s-tabs>
</template>
<script>
export default {};
</script>`;

const datepickerAPI = [{
  name: "type",
  desc: "显示类型，可选值为 <code>date</code>、<code>daterange</code>、<code>datetime</code>、<code>datetimerange</code>、<code>year</code>、<code>month</code>",
  type: "String",
  default: "默认为第一项的 name"
}, {
  name: "value",
  desc: "日期，可以是 JavaScript 的 Date，例如 new Date()，也可以是标准的日期格式可以使用v-model双向绑定",
  type: "Date | String",
  default: "-"
}, {
  name: "format",
  desc: "展示的日期格式值为:'yyyy-MM-dd'、'yyyy-MM'、'yyyy'等",
  type: "String",
  default: "yyyy-MM-dd"
}, {
  name: "placement",
  desc: "日期选择器出现的位置，可选值为<code>top</code>、<code>top-start</code>、<code>top-end</code>、<code>bottom</code>、<code>bottom-start</code>、<code>bottom-end</code>、<code>left</code>、<code>left-start</code>、<code>left-end</code>、<code>right</code>、<code>right-start</code>、<code>right-end</code>",
  type: "String",
  default: "bottom-start"
}, {
  name: "placeholder",
  desc: "占位文本",
  type: "String",
  default: "-"
}, {
  name: "disabledDate",
  desc: "设置日期不可用，值为函数返回false为不可用",
  type: "Function",
  default: "-"
}, {
  name: "clearable",
  desc: "是否显示清除按钮",
  type: "Boolean",
  default: "true"
}, {
  name: "disabled",
  desc: "是否禁用选择器",
  type: "Boolean",
  default: "false"
}]

const datepickerEvents = [{
    name: "on-change",
    desc: "日期发生变化时触发",
    type: "已经格式化后的日期"
  },
  {
    name: "on-open-change",
    desc: "弹出日历和关闭日历时触发",
    type: "true | false"
  }
]

export default {
  datepickerBasc,
  datepickerType,
  datepickerDisable,
  daterange,
  dateFormat,
  datepickerAPI,
  datepickerEvents
}