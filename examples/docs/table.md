# Table 表格

## 代码示例

:::demo
**基本用法**：最简单的用法.

```html
<s-table :data="tableData">
  <column prop="name">姓名</column>
  <column prop="sex">性别</column>
  <column prop="age">年龄</column>
  <column prop="flats">公寓</column>
  <column prop="room">房间</column>
</s-table>
<script>
export default {
    data() {
        tableData: [
            { name: "张玮", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
            { name: "曾小贤", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
            { name: "林宛瑜", sex: "女", age: 18, flats: "爱情公寓", room: "3605" },
            { name: "吕小布", sex: "男", age: 18, flats: "爱情公寓", room: "3606" }
        ]
    }
};
</script>
```
:::

:::demo
**带边框**：`bordered`可以设置带边框样式.

```html
<s-table :data="tableData" bordered>
  <column prop="name">姓名</column>
  <column prop="sex">性别</column>
  <column prop="age">年龄</column>
  <column prop="flats">公寓</column>
  <column prop="room">房间</column>
</s-table>
<script>
export default {
    data() {
        tableData: [
            { name: "张玮", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
            { name: "曾小贤", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
            { name: "林宛瑜", sex: "女", age: 18, flats: "爱情公寓", room: "3605" },
            { name: "吕小布", sex: "男", age: 18, flats: "爱情公寓", room: "3606" }
        ]
    }
};
</script>
```
:::

:::demo
**自定义行样式**：`row-class-name`属性对应函数的返回`class`值设置样式.

```html
<s-table class="customize" :data="tableData" :row-class-name="rowClassName">
  <column prop="name">姓名</column>
  <column prop="sex">性别</column>
  <column prop="age">年龄</column>
  <column prop="flats">公寓</column>
  <column prop="room">房间</column>
</s-table>
<script>
export default {
    data() {
        tableData: [
            { name: "张玮", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
            { name: "曾小贤", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
            { name: "林宛瑜", sex: "女", age: 18, flats: "爱情公寓", room: "3605" },
            { name: "吕小布", sex: "男", age: 18, flats: "爱情公寓", room: "3606" }
        ]
    }
};
</script>
<style lang="less" scoped>
.customize /deep/ .error {
  background-color: #ff6600;
  color: #fff;
}
</style>
```
:::

:::demo
**自定义列样式**：column组件的 `class-name`属性设置列的样式类.

```html
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
    tableData: [
        { name: "张玮", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
        { name: "曾小贤", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
        { name: "林宛瑜", sex: "女", age: 18, flats: "爱情公寓", room: "3605" },
        { name: "吕小布", sex: "男", age: 18, flats: "爱情公寓", room: "3606" }
    ]
  },
};
</script>
<style lang="less" scoped>
.customize /deep/ .info {
  background-color: #2db7f5;
  color: #fff;
}
</style>
```
:::

:::demo
**自定义单元格样式**：data数组对象中属性 `cellClassName`属性设置单元格的样式类.

```html
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
</style>
```
:::

:::demo
**固定表头**：通过设置属性 `height` 给表格指定高度后，会自动固定表头.

```html
<template>
  <div>
    <s-table height="200" :data="tableData">
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
    tableData: [
        { name: "张玮", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
        { name: "曾小贤", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
        { name: "林宛瑜", sex: "女", age: 18, flats: "爱情公寓", room: "3605" },
        { name: "吕小布", sex: "男", age: 18, flats: "爱情公寓", room: "3606" }
    ]
  },
};
</script>
```
:::

:::demo
**固定列**：`fixed`属性值为`left`、`right`设置列左固定或右固定.

```html
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
      tableData: [
        { name: "张玮", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
        { name: "曾小贤", sex: "男", age: 18, flats: "爱情公寓", room: "3606"},
        { name: "林宛瑜", sex: "女", age: 18, flats: "爱情公寓", room: "3605" },
        { name: "吕小布", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
        { name: "陈美嘉", sex: "女", age: 18, flats: "爱情公寓", room: "3605" }
      ]
    }
  }
};
</script>
```
:::

:::demo
**固定表头和列**：固定表头和列.
```html
<template>
  <div>
    <s-table :data="tableData" width="700" height="230">
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
      tableData: [
        { name: "张玮", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
        { name: "曾小贤", sex: "男", age: 18, flats: "爱情公寓", room: "3606"},
        { name: "林宛瑜", sex: "女", age: 18, flats: "爱情公寓", room: "3605" },
        { name: "吕小布", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
        { name: "陈美嘉", sex: "女", age: 18, flats: "爱情公寓", room: "3605" }
      ]
    }
  }
};
</script>
```
:::

:::demo
**多选**：通过给 columns 数据设置一项，指定 `type: 'checkbox'`，即可自动开启多选功能.

```html
<template>
  <div>
    <s-table :data="tableData" ref="table">
      <column type="checkbox"></column>
      <column prop="name">姓名</column>
      <column prop="sex">性别</column>
      <column prop="age">年龄</column>
      <column prop="flats">公寓</column>
      <column prop="room">房间</column>
    </s-table>
    <br />
    <s-button @click="selectAll">{{
      isSelectAll ? "全取消" : "全选中"
    }}</s-button>
    <s-button @click="getCheck">获取选中的数据</s-button>
    <s-button @click="setCheck">{{
      checkRow ? "取消选中第1、4行" : "选中第1、4行"
    }}</s-button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      tableData: [
        { name: "张玮", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
        { name: "曾小贤", sex: "男", age: 18, flats: "爱情公寓", room: "3606"},
        { name: "林宛瑜", sex: "女", age: 18, flats: "爱情公寓", room: "3605" },
        { name: "吕小布", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
        { name: "陈美嘉", sex: "女", age: 18, flats: "爱情公寓", room: "3605" }
      ],
      isSelectAll: false,
      checkRow: false,
    }
  },
  methods: {
    selectAll() {
      this.isSelectAll = !this.isSelectAll;
      this.$refs.table.checkAll(this.isSelectAll);
    },
    getCheck() {
      this.$Message.info(JSON.stringify(this.$refs.table.getCheckRow()));
    },
    setCheck() {
      if (this.checkRow) {
        this.$refs.table.uncheckRow([1, 4]);
      } else {
        this.$refs.table.checkRow([1, 4]);
      }
      this.checkRow = !this.checkRow;
    },
  }
};
</script>
```
:::

:::demo
**排序**：column组件或者columns数组对象中添加`sort`属性开启排序.

```html
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
      tableData: [
      { name: "张玮", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
      { name: "曾小贤", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
      { name: "林宛瑜", sex: "女", age: 18, flats: "爱情公寓", room: "3605" },
      { name: "吕小布", sex: "男", age: 18, flats: "爱情公寓", room: "3606" }
      ]
    }
  }
};
</script>
```
:::

:::demo
**筛选**：column组件或者columns数组对象中添加`filters`属性开启筛选，filters值是你要筛选值的数组.

```html
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
      tableData: [
      { name: "张玮", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
      { name: "曾小贤", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
      { name: "林宛瑜", sex: "女", age: 18, flats: "爱情公寓", room: "3605" },
      { name: "吕小布", sex: "男", age: 18, flats: "爱情公寓", room: "3606" }
      ]
    }
  }
};
</script>
```
:::

:::demo
**自定义列模板**：`slot="format"`自定义列模板.

```html
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
      tableData: [
      { name: "张玮", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
      { name: "曾小贤", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
      { name: "林宛瑜", sex: "女", age: 18, flats: "爱情公寓", room: "3605" },
      { name: "吕小布", sex: "男", age: 18, flats: "爱情公寓", room: "3606" }
      ]
    }
  }
};
</script>
```
:::

## API

### Table props
<br/>

|  属性  | 说明  |  类型  |  默认值  |
|  ----  | ---- |  ----  |  ----   |
|  data  | 表格数据 |  Array  |  []  |
|  columns  | 表格列的配置  |  Array  |  []  |
|  bordered  | 是否显示纵向边框  |  Boolean  |  false  |
|  width  | 表格宽度，单位 px  |  Number \| String  |  自动 |
|  height  | 表格高度，单位 px  |  Number \| String  |  -  |
|  row-class-name  | 行的 className 的回调方法  |  Function  |  -  |
|  no-data-text  | 数据为空时显示的提示内容  |  String  |  -  |

<br/>

### Table slots

<br/>

|  名称  | 说明  |
|  ----  | ---- |
|   无   | column组件设置表格列 |

<br/>

### Table events

<br/>

|  事件  | 说明  | 返回值  |
|  ----  | ---- | ---- |
|   on-check-change   | 多选下，选中或取消某一项触发 |`checked`:true为选中，flase为取消<br>`row`:选中或取消的行数据<br>`index`:选中或取消的行索引  |
|   on-all-change   | 多选下，全选中或全取消触发 |`checked`:true为选中，flase为取消  |
|   on-sort-change   | 排序时有效，当点击排序时触发 |`key`:排序的列字段<br>`order`:排序的顺序，值为 asc 或 desc  |
|   on-filter-change   | 筛选时有效，筛选条件发生变化时触发 |`key`:排序的列字段<br>`order`:排序的顺序，值为 asc 或 desc  |
|   on-row-click   | 单击某一行时触发 |`row`:单击的行数据<br>`index`:单击的行索引  |
|   on-row-dblclick   | 双击某一行时触发 |`row`:双击的行数据<br>`index`:双击的行索引  |
|   on-cell-click   | 点击单元格时触发 |`row`:单击单元格所在的行数据<br>`index`:单击单元格所在的列字段  |

<br/>

### Column props

<br/>

|  属性  | 说明  |  类型  |  默认值  |
|  ----  | ---- |  ----  |  ----   |
|  type  | 列类型，可选值：`checkbox` |  String  |  -  |
|  prop  | 对应列内容的字段名  |  String  |  -  |
|  width  | 列宽  |  Number  |  -  |
|  align  | 对齐方式，可选值为 `left` 左对齐、`right` 右对齐和 `center` 居中对齐  |  String  |  left |
|  render  | 自定义渲染列  |  Function  |  -  |
|  class-name  | 列的样式名称  |  String  |  -  |
|  fixed  | 列是否固定在左侧或者右侧，可选值为 `left` 左侧和 `right` 右侧  |  String  |  -  |
|  sort  | 对应列是否可以排序  |  String  |  -  |
|  sortMethod  | 自定义排序使用的方法  |  Function  |  - |
|  sortType  | 设置初始化排序。值为 `asc` 和 `desc`  |  String  |  -  |
|  filters  | 列的样式名称  |  String  |  -  |
|  fixed  | 过滤数据的选项，格式为数组，数组中每项包含 `label` 和 `value` 属性  |  Array  |  -  |
|  filterMethod  | 数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 `true` 就会显示  |  Function  |  -  |

<br/>

### Column slots

<br/>

|  名称  | 说明  |
|  ----  | ---- |
|   无   | 表格列名称 |
|   format  |  自定义渲染列  |


:::script
<script>
export default {
  data() {
    return {
      tableData: [{
          name: "张玮",
          sex: "男",
          age: 18,
          flats: "爱情公寓",
          room: "3606",
        },
        {
          name: "曾小贤",
          sex: "男",
          age: 18,
          flats: "爱情公寓",
          room: "3606",
        },
        {
          name: "林宛瑜",
          sex: "女",
          age: 18,
          flats: "爱情公寓",
          room: "3605",
        },
        {
          name: "吕小布",
          sex: "男",
          age: 18,
          flats: "爱情公寓",
          room: "3606",
        },
      ],
      cellStyleData: [
        { name: "张玮", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
        { name: "曾小贤", sex: "男", age: 18, flats: "爱情公寓", room: "3606", cellClassName: { room: "error", name: "info" } },
        { name: "林宛瑜", sex: "女", age: 18, flats: "爱情公寓", room: "3605" },
        { name: "吕小布", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
        { name: "陈美嘉", sex: "女", age: 18, flats: "爱情公寓", room: "3605" }
      ],
      isSelectAll: false,
      checkRow: false,
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
    };
  },
  methods: {
    rowClassName(row, index) {
      if (row.name === "林宛瑜") {
        return "error";
      }
      return "";
    },
    selectAll() {
      this.isSelectAll = !this.isSelectAll;
      this.$refs.table.checkAll(this.isSelectAll);
    },
    getCheck() {
      this.$Message.info(JSON.stringify(this.$refs.table.getCheckRow()));
    },
    setCheck() {
      if (this.checkRow) {
        this.$refs.table.uncheckRow([1, 4]);
      } else {
        this.$refs.table.checkRow([1, 4]);
      }
      this.checkRow = !this.checkRow;
    },
  }
}
</script>
:::

:::style
<style lang="less" scoped>
.customize /deep/ .error {
  background-color: #ff6600;
  color: #fff;
}
.customize /deep/ .info {
  background-color: #2db7f5;
  color: #fff;
}
</style>
:::