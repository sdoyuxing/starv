# 表单

## 代码示例

:::demo
**行内表单**:设置属性 `inline`，表单元素可以水平排列.

```html
<s-form style="width: 100%" inline :model="formValidate" :label-width="80">
    <s-form-item label="姓名" prop="name">
    <s-input placeholder="请输入..." v-model="formValidate.name" />
    </s-form-item>
    <s-form-item label="性别"  v-model="formValidate.sex">
    <s-select style="width:194px">
        <Option value="0">男</Option>
        <Option value="1">女</Option>
    </s-select>
    </s-form-item>
    <s-form-item label="年龄" v-model="formValidate.age">
    <s-input placeholder="请输入..." />
    </s-form-item>
</s-form>
<script>
export default {
  data() {
    return {
        formValidate: { name: "", sex:"0",age:""},
    }
  }
}
</script>
```
:::

:::demo
**表单控件**:在 `s-form` 组件中，每一个表单域由一个 `s-form-item` 组件构成，表单域中可以放置各种类型的表单控件，包括 `Input`、`Select`、`Checkbox`、`Radio`、`Switch`、`DatePicker`、`TimePicker`.

```html
```
:::


:::script
<script>
export default {
  data() {
    return {
        formValidate: { name: "", sex:"0",age:""},
    }
  }
}
</script>
:::