# Checkbox 多选框

## 代码示例

:::demo
**基本用法**：简单的 checkbox.
```html
<template>
  <div>
     <s-checkbox label="简单的checkbox"/>
  </div>
</template>
<script>
export default {};
</script>
```
:::

:::demo
**不可用状态**：`disabled`属性设置为不可用状态.

```html
<template>
  <div>
    <s-checkbox label="不可用状态" disabled />
    <br />
    <s-checkbox label="不可用勾选状态" :value="true" disabled />
  </div>
</template>
<script>
export default {}
</script>
```
:::

:::demo
**半选状态**：`half-checked`属性设置半选中状态，设置了半选中状态之后，v-model的选中状态就无效了.
```html
<template>
  <div>
    <s-checkbox label="半选" half-checked/>
  </div>
</template>
<script>
export default {}
</script>
```
:::

:::demo
**动态控制组件**：动态控制组件.
```html
<template>
  <div>
    <s-checkbox label="动态控制组件" :disabled="disabled" v-model="checked" />
    <s-button type="primary" @click="checked = !checked">
      <span v-if="!checked">Checked</span>
      <span v-else>Unchecked</span>
    </s-button>
    <s-button type="primary" @click="disabled = !disabled">
      <span v-if="disabled">Usable</span>
      <span v-else>Disabled</span>
    </s-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      disabled: false,
      checked: false,
    };
  }
};
</script>
```
:::

:::demo
**多选框组合**:使用`s-checkboxGroup`绑定数组生成多选框组合，默认`label`来判断是否选中，设置`label-value`属性就会这个属性值来判断是否选中.

```html
<template>
  <div>
    <s-checkboxGroup v-model="phone">
      <s-checkbox label="苹果" />
      <s-checkbox label="华为" />
      <s-checkbox label="三星" />
      <s-checkbox label="小米" />
      <s-checkbox label="OPPO" />
      <s-checkbox label="VIVO" />
    </s-checkboxGroup>
    <span v-text="phone"></span>
    <s-checkboxGroup v-model="phoneCode">
      <s-checkbox label="苹果" label-value="IPHONE" />
      <s-checkbox label="华为" label-value="HUAWEI" />
      <s-checkbox label="三星" label-value="SAMSUNG" />
      <s-checkbox label="小米" label-value="MILLET" />
      <s-checkbox label="OPPO" />
      <s-checkbox label="VIVO" />
    </s-checkboxGroup>
    <span  v-text="phoneCode"></span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      phone: ["华为"],
      phoneCode: ["IPHONE"],
    };
  }
};
</script>
```
:::


:::demo
**全选**：实现全选效果.

```html
<template>
  <div>
   <s-checkbox label="半选" :half-checked="halfChecked" :value="checkAll" @on-change="change" />
    <div>
      <s-checkboxGroup v-model="checkList">
        <s-checkbox label="苹果" label-value="IPHONE" />
        <s-checkbox label="华为" label-value="HUAWEI" />
        <s-checkbox label="三星" label-value="SAMSUNG" />
      </s-checkboxGroup>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkList: ["IPHONE"],
    };
  },
  computed: {
    halfChecked() {
      return this.checkList.length < 3;
    },
    checkAll() {
      return this.checkList.length === 3;
    },
  },
  methods: {
    change(val) {
      this.checkList = val ? ["IPHONE", "HUAWEI", "SAMSUNG"] : [];
    },
  },
}
</script>
```
:::

:::script
<script>
export default {
  data() {
    return {
      disabled: false,
      checked: false,
      phone: ["华为"],
      phoneCode: ["IPHONE"],
      checkList: ["IPHONE"],
    };
  },
    computed: {
    halfChecked() {
      return this.checkList.length < 3 && this.checkList.length > 0;
    },
    checkAll() {
      return this.checkList.length === 3;
    },
  },
  methods: {
    change(val) {
      this.checkList = val ? ["IPHONE", "HUAWEI", "SAMSUNG"] : [];
    },
  },
};
</script>
:::