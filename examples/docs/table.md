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