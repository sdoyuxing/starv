# Select 选择器

## 代码示例

:::demo
**基本用法**：基本用法。可以使用 `v-model` 双向绑定数据.

```html
<template>
  <div>
    <s-select v-model="selected" style="width:200px">
    <Option value="IPHONE">苹果</Option>
    <Option value="HUAWEI">华为</Option>
    <Option value="SAMSUNG">三星</Option>
    <Option value="MI">小米</Option>
    <Option value="OPPO">OPPO</Option>
    <Option value="VIVO">VIVO</Option>
    </s-select>
    {{selected}}
  </div>
</template>
<script>
export default {
    data(){
        return{
            selected:"IPHONE"
        }
    }
};
</script>
```
:::

:::demo
**禁用**：设置属性 `disabled`禁用整个选择器<br>option设置属性 `disabled`可以禁用当前项.

```html
<template>
  <div>
    <s-select disabled v-model="selected" style="width:200px">
      <Option value="IPHONE">苹果</Option>
      <Option value="HUAWEI">华为</Option>
      <Option value="SAMSUNG">三星</Option>
      <Option value="MI">小米</Option>
    </s-select>
    <s-select style="width:200px">
      <Option value="IPHONE">苹果</Option>
      <Option value="HUAWEI">华为</Option>
      <Option value="SAMSUNG" disabled>三星</Option>
      <Option value="MI">小米</Option>
    </s-select>
  </div>
</template>
<script>
export default {
  data(){
    return{
        selected:"IPHONE"
    }
  }
};
</script>
```
:::

:::demo
**加载状态**：`loading`设置加载状态， `loading-text`设置加载状态文字提示.

```html
<template>
  <div>
    <s-select style="width:200px" loading loading-text="loading...">
      <Option value="IPHONE">苹果</Option>
      <Option value="HUAWEI">华为</Option>
      <Option value="SAMSUNG">三星</Option>
      <Option value="MI">小米</Option>
    </s-select>
  </div>
</template>
<script>
export default {};
</script>
```
:::

:::demo
**自定义模板**：对选项内容可以进行自定义.

```html
<template>
  <div>
    <s-select style="width:200px">
      <Option value="IPHONE" label="苹果">
        苹果<span style="float:right;color:#ccc">iPhone</span>
      </Option>
      <Option value="HUAWEI" label="华为">
        华为<span style="float:right;color:#ccc">huawei</span>
      </Option>
      <Option value="SAMSUNG" label="三星">
        三星<span style="float:right;color:#ccc">samsung</span>
      </Option>
      <Option value="MI" label="小米">
        小米<span style="float:right;color:#ccc">mi</span>
      </Option>
    </s-select>
  </div>
</template>
<script>
export default {};
</script>
```
:::

:::demo
**可清空**：`clearable`设置是否可清空.

```html
<template>
  <div>
    <s-select clearable style="width:200px">
      <Option value="IPHONE">苹果</Option>
      <Option value="HUAWEI">华为</Option>
      <Option value="SAMSUNG">三星</Option>
      <Option value="MI">小米</Option>
    </s-select>
  </div>
</template>
<script>
export default {};
</script>
```
:::

:::demo
**搜索**：`filterable`属性设置可搜索.

```html
<template>
  <div>
    <s-select filterable style="width:200px">
      <Option value="IPHONE">苹果</Option>
      <Option value="HUAWEI">华为</Option>
      <Option value="SAMSUNG">三星</Option>
      <Option value="MI">小米</Option>
    </s-select>
  </div>
</template>
<script>
export default {};
</script>
```
:::

:::demo
**前缀图标**：设置 `prefix` 属性或 `slot` 可以在 s-select 内显示前缀图标.

```html
<template>
  <div>
    <s-select prefix="iconuser" style="width:200px">
      <Option value="IPHONE">苹果</Option>
      <Option value="HUAWEI">华为</Option>
      <Option label="SAMSUNG">三星</Option>
      <Option label="MI">小米</Option>
    </s-select>
    <br/>
    <s-select style="width:200px">
      <Icon slot="prefix" type="iconsmile" />
      <Option value="IPHONE">苹果</Option>
      <Option value="HUAWEI">华为</Option>
      <Option label="SAMSUNG">三星</Option>
      <Option label="MI">小米</Option>
    </s-select>
  </div>
</template>
<script>
export default {};
</script>
```
:::

:::demo
**懒加载**：`lazyload`设置开启懒加载，在 `on-lazyload`触发的事件中请求数据赋值到 `options`属性中.

```html
<template>
  <div>
    <s-select
      placeholder="请选择"
      style="width:200px"
      :options="options"
      :loading="selectLoading"
      lazyload
      @on-lazyload="onLazyload"
    ></s-select>
  </div>
</template>
<script>
export default {
  data(){
    selectLoading: false,
    options: [],
  },
  methods: {
    onLazyload() {
      this.selectLoading = true;
      setTimeout(() => {
        this.options = ["苹果", "华为", "三星"];
        this.selectLoading = false;
      }, 2000);
    },
  },
};
</script>
```
:::

## API

### Select props

<br/>

|  属性  | 说明  |  类型  |  默认值  |
|  ----  | ---- |  ----  |  ----   |
|  value  |指定选中项目的 `value` 值，可以使用 `v-model` 双向绑定数据 |  String \| Number \| Array  |  -  |
|  disabled  | 是否禁用  |  Boolean  |  false  |
|  clearable  | 是否可以清空选项，只在单选时有效  |  Boolean  |  false  |
|  filterable  | 是否支持搜索  |  Boolean  |  false  |
|  label  | 设置选项的显示文本  |  String \| Number \| Array  |  -  |
|  placeholder  | 选择框默认文字  |  String  |  -  |

<br/>

### Select slots

<br/>

|  名称  | 说明  |
|  ----  | ---- |
|   无   | 警告提示内容 |
|   icon   | 自定义图标内容 |

<br/>

### Select events

<br/>

|  事件  | 说明  | 返回值  |
|  ----  | ---- | ---- |
|   on-close   | 关闭时触发 |event |

:::script
<script>
export default {
    data(){
        return{
            selected:"IPHONE",
            selectLoading: false,
            options: [],
        }
    },
    methods: {
        onLazyload() {
            this.selectLoading = true;
            setTimeout(() => {
                this.options = ["苹果", "华为", "三星"];
                this.selectLoading = false;
            }, 2000);
        },
  },
};
</script>
:::
