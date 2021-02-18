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
        tableData: [{ name: "张玮", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
            { name: "曾小贤", sex: "男", age: 18, flats: "爱情公寓", room: "3606" },
            { name: "林宛瑜", sex: "女", age: 18, flats: "爱情公寓", room: "3605" },
            { name: "吕小布", sex: "男", age: 18, flats: "爱情公寓", room: "3606" }]
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
```
:::

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
      ]
    };
  },
  methods: {
    rowClassName(row, index) {
      if (row.name === "林宛瑜") {
        return "error";
      }
      return "";
    }
  }
}
</script>
:::