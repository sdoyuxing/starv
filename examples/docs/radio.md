# Radio 单选框

## 代码演示

:::demo
**基本用法**:最简单的用法.
```html
<s-radio>Radio</s-radio>
```
:::

:::demo
**不可用**:Radio 不可用.
```html
<s-radio :disabled="disabled">Disabled</s-radio>
<br />
<s-radio v-model="checked" :disabled="disabled">Disabled</s-radio>
<div style="marginTop: 20px">
    <s-button type="primary" @click="toggleDisabled">
        Toggle disabled
    </s-button>
</div>
<script>
export default {
    data() {
        return {
            disabled: false, 
            checked: true
        }
    },
    methods: {
       toggleDisabled() {
        this.disabled = !this.disabled
       }
    }
}
</script>
```
:::

:::demo
**单选组合**:一组互斥的 Radio 配合使用.
```html
<s-radio-group v-model="checkedA">
    <s-radio label="1">A</s-radio>
    <s-radio label="2">B</s-radio>
    <s-radio label="3">C</s-radio>
    <s-radio label="4">D</s-radio>
</s-radio-group>
<script>
export default {
    data() {
        return {
            checkedA: '1', 
        }
    }
}
</script>
```
:::

:::demo
**sRadioGroup 垂直**:垂直的 sRadioGroup，配合更多输入框选项.
```html
<s-radio-group v-model="radioGroupd">
    <s-radio style=" display: block;height: 30px;line-height: 30px;" label="1">Option A</s-radio>
    <s-radio style=" display:block;height: 30px;line-height: 30px;" label="2">Option B</s-radio>
    <s-radio style=" display: block;height: 30px;line-height: 30px;" label="3">Option C</s-radio>
    <s-radio style=" display: block;height: 30px;line-height: 30px;" label="4">
        More...
        <s-input v-if="radioGroupd==='4'" style='width: 100px; margin-left: 10px' />
    </s-radio>
</s-radio-group>
```
:::

<br/>

## API

### Radio props

<br/>

|  属性  | 说明  |  类型  |  默认值  |
|  ----  | ---- |  ----  |  ----   |
|  value  | 指定当前是否选中，可以使用 `v-model` 双向绑定数据 |  Boolean  |  false  |
|  disabled  | 设置 `radio` 为禁用状态  |  Boolean   |  false  |
|  label  | 设置<code>radio</code>选项描述，在组合的下也是默认也是<code>value</code>值  |  String \| Number \| Boolean  |  -  |
|  name  | `radio`选项的原生`name`属性  |  String  |  -  |

<br/>

### Radio events

<br/>

|  事件名 | 说明 |  返回值 |
|  ----   | ----  |  ----   |
| on-change  | 选项状态发生改变时触发 |  true \| flase \| labelValue \| ''  |

<br/>

### RadioGroup props

<br/>

|  属性  | 说明  |  类型  |  默认值  |
|  ----  | ---- |  ----  |  ----   |
|  value  | 指定当前是否选中，可以使用 `v-model` 双向绑定数据 |  Boolean  |  false  |
|  vertical  | 是否垂直排列，按钮样式下无效  |  Boolean   |  false  |

<br/>

### RadioGroup  events

<br/>

|  事件名 | 说明 |  返回值 |
|  ----   | ----  |  ----   |
| on-change  | 选项状态发生改变时触发 |  true \| flase \| labelValue \| ''  |

:::script
<script>
export default {
    data() {
        return {
          disabled: false, 
          checked: true,
          checkedA: '1', 
          radioGroupd:'1'
        }
    },
    methods: {
       toggleDisabled() {
        this.disabled = !this.disabled
       }
    }
}
</script>
:::