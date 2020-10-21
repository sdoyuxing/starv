const tableBasc = `
<template>
  <div>
    <s-table :data="tableData">
        <column prop="name">姓名</column>
        <column prop="sex">性别</column>
        <column prop="age">年龄</column>
        <column prop="flats">公寓</column>
        <column prop="room">房间</column>
    </s-table>
  </div>
</template>
<script>
export default {
    data() {
        tableData: [{ name: "张玮", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
            { name: "曾小贤", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
            { name: "林宛瑜", sex: "女", age: 18, flats: "爱情公寓", room: "3605" },
            { name: "吕小布", sex: "男", age: 18, flats: "爱情公寓", room: "3606" }]
    }
};
</script>`;

const tableBorder = `
<template>
  <div>
    <s-table :data="tableData" bordered>
        <column prop="name">姓名</column>
        <column prop="sex">性别</column>
        <column prop="age">年龄</column>
        <column prop="flats">公寓</column>
        <column prop="room">房间</column>
    </s-table>
  </div>
</template>
<script>
export default {
    data() {
        tableData: [{ name: "张玮", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
            { name: "曾小贤", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
            { name: "林宛瑜", sex: "女", age: 18, flats: "爱情公寓", room: "3605" },
            { name: "吕小布", sex: "男", age: 18, flats: "爱情公寓", room: "3606" }]
    }
};
</script>`;

const tableRowClass = `
<template>
  <div>
    <s-table :data="tableData"  class="customize" :row-class-name="rowClassName">
      <column prop="name">姓名</column>
      <column prop="sex">性别</column>
      <column prop="age">年龄</column>
      <column prop="flats">公寓</column>
      <column prop="room">房间</column>
    </s-table>
  </div>
</template>
<script>
export default {
  data() {
    tableData: [{ name: "张玮", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
        { name: "曾小贤", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
        { name: "林宛瑜", sex: "女", age: 18, flats: "爱情公寓", room: "3605" },
        { name: "吕小布", sex: "男", age: 18, flats: "爱情公寓", room: "3606" }]
  },
  methods: {
    rowClassName(row, index) {
      if (row.name === "林宛瑜") {
        return "error";
      }
      return "";
    },
  }
};
</script>
<style lang="less" scoped>
.customize /deep/ .error {
  background-color: #ff6600;
  color: #fff;
}
</style>`;

const tableColClass = `
<template>
  <div>
    <s-table class="customize" :data="tableData">
      <column prop="name" class-name="info">姓名</column>
      <column prop="sex">性别</column>
      <column prop="age">年龄</column>
      <column prop="flats">公寓</column>
      <column prop="room">房间</column>
    </s-table>
  </div>
</template>
<script>
export default {
  data() {
    tableData: [{ name: "张玮", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
        { name: "曾小贤", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
        { name: "林宛瑜", sex: "女", age: 18, flats: "爱情公寓", room: "3605" },
        { name: "吕小布", sex: "男", age: 18, flats: "爱情公寓", room: "3606" }]
  },
};
</script>
<style lang="less" scoped>
.customize /deep/ .info {
  background-color: #2db7f5;
  color: #fff;
}
</style>`;

const tableCellClass = `
<template>
  <div>
      <s-table class="customize" :data="cellStyleData">
        <column prop="name">姓名</column>
        <column prop="sex">性别</column>
        <column prop="age">年龄</column>
        <column prop="flats">公寓</column>
        <column prop="room">房间</column>
      </s-table>
  </div>
</template>
<script>
export default {
  data(){
    return{
      cellStyleData: [
        { name: "张玮", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
        { name: "曾小贤", sex: "男", age: 18, flats: "爱情公寓", room: "3606", cellClassName: { room: "error", name: "info" } },
        { name: "林宛瑜", sex: "女", age: 18, flats: "爱情公寓", room: "3605" },
        { name: "吕小布", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
        { name: "陈美嘉", sex: "女", age: 18, flats: "爱情公寓", room: "3605" }]
    }
  }
};
</script>
<style lang="less" scoped>
.customize /deep/ .error {
  background-color: #ff6600;
  color: #fff;
}
.customize /deep/ .info {
  background-color: #2db7f5;
  color: #fff;
}
</style>`;

const alertAPI = [{
  name: "type",
  desc: "告警提示类型，可选值为 <code>info</code>、<code>success</code>、<code>warning</code>、<code>error</code>或者不设置",
  type: "String",
  default: "info"
}, {
  name: "closable",
  desc: "是否可关闭",
  type: "Boolean",
  default: "false"
}, {
  name: "show-icon",
  desc: "是否显示图标",
  type: "Boolean",
  default: "false"
}, {
  name: "backgroundColor",
  desc: "是否背景颜色",
  type: "String",
  default: "-"
}, {
  name: "fontColor",
  desc: "是否字体颜色",
  type: "String",
  default: "-"
}, {
  name: "iconColor",
  desc: "是否图标颜色",
  type: "String",
  default: "-"
}];

const alertEvents = [{
  name: "on-close",
  desc: "关闭时触发",
  type: "event"
}];

const alertSlots = [{
  name: "无",
  desc: "警告提示内容",
}, {
  name: "icon",
  desc: "自定义图标内容",
}];

export default {
  tableBasc,
  tableBorder,
  tableRowClass,
  tableColClass,
  tableCellClass,
  alertAPI,
  alertEvents,
  alertSlots,
}