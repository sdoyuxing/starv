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
      return this.checkList.length < 3 && this.checkList.length;
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

## API

### Checkbox props
<br/>

|  属性  | 说明  |  类型  |  默认值  |
|  ----  | ---- |  ----  |  ----   |
|  value  | 指定当前是否选中，可以使用 `v-model` 双向绑定数据 |  Boolean  |  false  |
|  disabled  | 设置 `checkbox` 为禁用状态  |  Boolean   |  false  |
|  label  | 设置<code>checkbox</code>选项描述，在组合的下也是默认也是<code>value</code>值  |  String \| Number \| Boolean  |  -  |
|  half-checked  | 设置`checkbox`半选状态  |  Boolean  |  false  |
|  label-value  | 设置`checkbox`选项选中是对应的`value`值  |  String \| Number \| Boolean  |  -  |
|  background-color  | 可以设置选项选中后的背景颜色  |  String  |  -  |
|  font-color  | 可以设置选项选中后图标颜色  |  Boolean  |  false  |
|  name  | `checkbox`选项的原生`name`属性  |  String  |  -  |
|  checkbox原生属性  | 支持`checkbox`原生属性  |  -  |  -  |

<br/>

### Input events
<br/>

|  事件名 | 说明 |  返回值 |
|  ----   | ----  |  ----   |
| on-change  | 选项状态发生改变时触发 |  true \| flase \| labelValue \| ''  |
|  checkbox原生事件  | 支持`checkbox`原生事件  |  -  |

<br/>

### CheckboxGroup props
<br/>

|  属性  | 说明  |  类型  |  默认值  |
|  ----  | ---- |  ----  |  ----   |
|  value  | 指定选项组中选中的项，可以使用 `v-model` 双向绑定数据 |  Boolean  |  false  |

<br/>

### CheckboxGroup events
<br/>

|  事件名 | 说明 |  返回值 |
|  ----   | ----  |  ----   |
| on-change  | 选项状态发生改变时触发 | [] |

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