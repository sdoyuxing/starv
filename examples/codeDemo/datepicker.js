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
}]

const tabsEvents = [{
    name: "on-click",
    desc: "tab 被点击时触发",
    type: "name"
  },
  {
    name: "on-tab-remove",
    desc: "tab 被关闭时触发",
    type: "name"
  }
]

const TabPaneAPI = [{
  name: "name",
  desc: "用于标识当前面板，对应 value，默认为其索引值",
  type: "String",
  default: "-"
}, {
  name: "label",
  desc: "选项卡头显示文字",
  type: "String",
  default: "-"
}, {
  name: "disabled",
  desc: "是否禁用该选项卡",
  type: "Boolean",
  default: "false"
}, {
  name: "closable",
  desc: "是否可以关闭页签，仅在 type='card' 时有效",
  type: "Boolean",
  default: "null"
}]

export default {
  datepickerBasc,
  datepickerType,
  datepickerDisable,
  daterange,
  dateFormat,
  datepickerAPI,
  tabsEvents,
  TabPaneAPI
}