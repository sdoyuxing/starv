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

const tableFixed = `
<template>
  <div>
    <s-table :data="tableData" width="700">
      <column prop="name" width="100" fixed="left">姓名</column>
      <column prop="sex" width="200">性别</column>
      <column prop="age" width="200">年龄</column>
      <column prop="flats" width="200">公寓</column>
      <column prop="room" fixed="right" width="100">房间</column>
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
</script>`;

const tableCheckbox = `
<template>
  <div>
    <s-table :data="tableData">
      <column type="checkbox"></column>
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
      tableData: [{ name: "张玮", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
      { name: "曾小贤", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
      { name: "林宛瑜", sex: "女", age: 18, flats: "爱情公寓", room: "3605" },
      { name: "吕小布", sex: "男", age: 18, flats: "爱情公寓", room: "3606" }]
    }
  }
};
</script>`;

const tableSort = `
<template>
  <div>
    <s-table :data="tableData">
      <column prop="name">姓名</column>
      <column prop="sex">性别</column>
      <column prop="age">年龄</column>
      <column prop="flats">公寓</column>
      <column prop="room" sort>房间</column>
    </s-table>
  </div>
</template>
<script>
export default {
  data(){
    return{
      tableData: [{ name: "张玮", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
      { name: "曾小贤", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
      { name: "林宛瑜", sex: "女", age: 18, flats: "爱情公寓", room: "3605" },
      { name: "吕小布", sex: "男", age: 18, flats: "爱情公寓", room: "3606" }]
    }
  }
};
</script>`;

const tableFilters = `
<template>
  <div>
    <s-table :data="tableData">
      <column prop="name">姓名</column>
      <column prop="sex" :filters="filters">性别</column>
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
      filters: [
        {
          text: "男",
          value: "男",
        },
        {
          text: "女",
          value: "女",
        },
      ],
      tableData: [{ name: "张玮", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
      { name: "曾小贤", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
      { name: "林宛瑜", sex: "女", age: 18, flats: "爱情公寓", room: "3605" },
      { name: "吕小布", sex: "男", age: 18, flats: "爱情公寓", room: "3606" }]
    }
  }
};
</script>`;

const tableFormat = `
<template>
  <div>
      <s-table :data="tableData">
        <column prop="name">姓名</column>
        <column prop="sex">性别</column>
        <column prop="age">年龄</column>
        <column prop="flats">公寓</column>
        <column prop="room">房间</column>
        <column width="200" align="center" fixed="right">
          操作
          <template slot="format">
            <s-button type="info">查看</s-button>
            <s-button type="error">删除</s-button>
          </template>
        </column>
      </s-table>
  </div>
</template>
<script>
export default {
  data(){
    return{
      tableData: [{ name: "张玮", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
      { name: "曾小贤", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
      { name: "林宛瑜", sex: "女", age: 18, flats: "爱情公寓", room: "3605" },
      { name: "吕小布", sex: "男", age: 18, flats: "爱情公寓", room: "3606" }]
    }
  }
};
</script>`;

const tableAPI = [{
  name: "data",
  desc: "表格数据",
  type: "Array",
  default: "[]"
}, {
  name: "columns",
  desc: "表格列的配置",
  type: "Array",
  default: "[]"
}, {
  name: "bordered",
  desc: "是否显示纵向边框",
  type: "Boolean",
  default: "false"
}, {
  name: "width",
  desc: "表格宽度，单位 px",
  type: "Number | String",
  default: "自动"
}, {
  name: "height",
  desc: "表格高度，单位 px",
  type: "Number | String",
  default: "-"
}, {
  name: "row-class-name",
  desc: "行的 className 的回调方法",
  type: "Function",
  default: "-"
}, {
  name: "no-data-text",
  desc: "数据为空时显示的提示内容",
  type: "String",
  default: "-"
}];

const tableEvents = [{
  name: "on-check-change",
  desc: "多选下，选中或取消某一项触发",
  type: `<code>checked</code>:true为选中，flase为取消
         <br/> <code>row</code>:选中或取消的行数据
         <br/> <code>index</code>:选中或取消的行索引`
}, {
  name: "on-all-change",
  desc: "多选下，全选中或全取消触发",
  type: `<code>checked</code>:true为选中，flase为取消`
}, {
  name: "on-sort-change",
  desc: "排序时有效，当点击排序时触发",
  type: `<code>key</code>:排序的列字段<br/>
         <code>order</code>:排序的顺序，值为 asc 或 desc`
}, {
  name: "on-filter-change",
  desc: "筛选时有效，筛选条件发生变化时触发",
  type: `当前列数据`
}, {
  name: "on-row-click",
  desc: "单击某一行时触发",
  type: `<code>row</code>:单击的行数据
  <br/> <code>index</code>:单击的行索引`
}, {
  name: "on-row-dblclick",
  desc: "双击某一行时触发",
  type: `<code>row</code>:双击的行数据
  <br/> <code>index</code>:双击的行索引`
}, {
  name: "on-cell-click",
  desc: "点击单元格时触发",
  type: `<code>row</code>:单击单元格所在的行数据
  <br/> <code>column</code>:单击单元格所在的列字段`
}];

const tableSlots = [{
  name: "无",
  desc: "column组件设置表格列",
}];

const columnProps = [{
  name: "type",
  desc: "列类型，可选值：checkbox",
  type: "String",
  default: "-"
}, {
  name: "prop",
  desc: "对应列内容的字段名",
  type: "String",
  default: "-"
}, {
  name: "width",
  desc: "列宽",
  type: "Number",
  default: "-"
}, {
  name: "align",
  desc: "对齐方式，可选值为 left 左对齐、right 右对齐和 center 居中对齐",
  type: "String",
  default: "left"
}, {
  name: "render",
  desc: "自定义渲染列",
  type: "Function",
  default: "-"
}, {
  name: "class-name",
  desc: "列的样式名称",
  type: "String",
  default: "-"
}, {
  name: "fixed",
  desc: "列是否固定在左侧或者右侧，可选值为 left 左侧和 right 右侧",
  type: "String",
  default: "-"
}, {
  name: "sort",
  desc: "对应列是否可以排序",
  type: "String",
  default: "-"
}, {
  name: "sortMethod",
  desc: "自定义排序使用的方法",
  type: "Function",
  default: "-"
}, {
  name: "sortType",
  desc: "设置初始化排序。值为 asc 和 desc",
  type: "String",
  default: "-"
}, {
  name: "filters",
  desc: "过滤数据的选项，格式为数组，数组中每项包含 label 和 value 属性",
  type: "Array",
  default: "-"
}, {
  name: "filterMethod",
  desc: "数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示",
  type: "Function",
  default: "-"
}];

const columnSlots = [{
  name: "无",
  desc: "表格列名称",
},{
  name: "format",
  desc: "自定义渲染列",
}];
export default {
  tableBasc,
  tableBorder,
  tableRowClass,
  tableColClass,
  tableCellClass,
  tableCheckbox,
  tableSort,
  tableFilters,
  tableFormat,
  tableFixed,
  tableAPI,
  tableEvents,
  columnProps,
  tableSlots,
  columnSlots
}