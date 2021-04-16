# 表单

## 代码示例

:::demo
**行内表单**:设置属性 `inline`，表单元素可以水平排列.

```html
<template>
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
</template>
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
**表单控件**:在 `s-form` 组件中，每一个表单域由一个 `s-form-item` 组件构成，表单域中可以放置各种类型的表单控件，包括 `Input`、`Select`、`Checkbox`、`Radio`、`Switch`、`DatePicker`.

```html
<template>
<s-form :model="formData" :label-width="100">
  <s-form-item label="输入框">
    <s-input placeholder="请输入..." v-model="formData.input" />
  </s-form-item>
  <s-form-item label="下拉选择" v-model="formData.select">
    <s-select>
      <Option value="IPHONE">苹果</Option>
      <Option value="HUAWEI">华为</Option>
      <Option value="SAMSUNG">三星</Option>
      <Option value="MI">小米</Option>
      <Option value="OPPO">OPPO</Option>
      <Option value="VIVO">VIVO</Option>
    </s-select>
  </s-form-item>
  <s-form-item label="日期选择" v-model="formData.date">
    <s-date-picker placeholder="请选择日期" type="date" multiple style="width: 200px">
    </s-date-picker>
  </s-form-item>
  <s-form-item label="单选">
    <s-radio-group v-model="formData.radio">
      <s-radio label="1">单选A</s-radio>
      <s-radio label="2">单选B</s-radio>
      <s-radio label="3">单选C</s-radio>
    </s-radio-group>
  </s-form-item>
  <s-form-item label="多选">
    <s-checkbox-group v-model="formData.checkbox">
      <s-checkbox label="苹果" />
      <s-checkbox label="华为" />
      <s-checkbox label="三星" />
      <s-checkbox label="小米" />
      <s-checkbox label="OPPO" />
      <s-checkbox label="VIVO" />
    </s-checkbox-group>
  </s-form-item>
  <s-form-item label="开关">
    <s-switch v-model="formData.switch" />
  </s-form-item>
  <s-form-item>
    <s-button type="primary">提交</s-button>
    <s-button style="margin-left: 8px">取消</s-button>
  </s-form-item>
</s-form>
</template>
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
表单验证.
```html
<s-form :model="formData" :label-width="100" :rules="ruleValidate" ref="form">
  <s-form-item label="输入框" prop="input">
    <s-input placeholder="请输入..." v-model="formData.input" />
  </s-form-item>
  <s-form-item label="下拉选择" prop="select">
    <s-select v-model="formData.select">
      <Option value="IPHONE">苹果</Option>
      <Option value="HUAWEI">华为</Option>
      <Option value="SAMSUNG">三星</Option>
      <Option value="MI">小米</Option>
      <Option value="OPPO">OPPO</Option>
      <Option value="VIVO">VIVO</Option>
    </s-select>
  </s-form-item>
  <s-form-item label="日期选择" prop="date">
    <s-date-picker placeholder="请选择日期" type="date" v-model="formData.date" multiple
                    style="width: 200px">
    </s-date-picker>
  </s-form-item>
  <s-form-item label="单选" prop="radio">
    <s-radio-group v-model="formData.radio">
      <s-radio label="1">单选A</s-radio>
      <s-radio label="2">单选B</s-radio>
      <s-radio label="3">单选C</s-radio>
    </s-radio-group>
  </s-form-item>
  <s-form-item label="多选" prop="checkbox">
    <s-checkbox-group v-model="formData.checkbox">
      <s-checkbox label="苹果" />
      <s-checkbox label="华为" />
      <s-checkbox label="三星" />
      <s-checkbox label="小米" />
      <s-checkbox label="OPPO" />
      <s-checkbox label="VIVO" />
    </s-checkbox-group>
  </s-form-item>
  <s-form-item label="开关">
    <s-switch v-model="formData.switch" />
  </s-form-item>
  <s-form-item>
    <s-button type="primary" @click="handleSubmit('form')">提交</s-button>
    <s-button style="margin-left: 8px">取消</s-button>
  </s-form-item>
</s-form>
<script>
export default {
  data() {
    return {
      formData: {
        input: "",
        select: "",
        date: "",
        radio: "1",
        checkbox: [],
        switch: true,
      },
      ruleValidate: {
        input: [
          {
            required: true,
            message: "输入框不能为空！",
            trigger: "blur",
          },
        ],
        select: [
          {
            required: true,
            message: "选择框不能为空！",
            trigger: "change",
          },
        ],
        date: [
          {
            required: true,
            message: "日期选择框不能为空！",
            trigger: "change",
          },
        ],
        radio: [
          {
            required: true,
            message: "单选不能为空！",
            trigger: "change",
          },
        ],
        checkbox: [
          {
            required: true,
            type: "array",
            min: 1,
            message: "复选框不能为空！",
            trigger: "change",
          },
        ],
      },
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success("Success!");
        }
      });
   }
  }
}
</script>
```
:::

:::script
<script>
export default {
  data() {
    return {
      formValidate: { name: "", sex:"0",age:""},
      formData: {
        input: "",
        select: "",
        date: "",
        radio: "1",
        checkbox: [],
        switch: true,
      },
      ruleValidate: {
        input: [
          {
            required: true,
            message: "输入框不能为空！",
            trigger: "blur",
          },
        ],
        select: [
          {
            required: true,
            message: "选择框不能为空！",
            trigger: "change",
          },
        ],
        date: [
          {
            required: true,
            message: "日期选择框不能为空！",
            trigger: "change",
          },
        ],
        radio: [
          {
            required: true,
            message: "单选不能为空！",
            trigger: "change",
          },
        ],
        checkbox: [
          {
            required: true,
            type: "array",
            min: 1,
            message: "复选框不能为空！",
            trigger: "change",
          },
        ],
      },
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success("Success!");
        }
      });
   }
  }
}
</script>
:::