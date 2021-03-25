# Button 按钮

## 代码示例

:::demo
**按钮类型**：主按钮、次按钮、虚线按钮以及四种颜色按钮，通过`type`设置不样式的按钮.
```html
<template>
  <div>
    <s-button class="btn">Default</s-button>
    <s-button class="btn" type="dashed">Dashed</s-button>
    <s-button class="btn" type="primary">Primary</s-button>
    <s-button class="btn" type="info">Info</s-button>
    <s-button class="btn" type="success">Success</s-button>
    <s-button class="btn" type="warning">Warning</s-button>
    <s-button type="error">Error</s-button>
  </div>
</template>
<script>
export default {}
</script>
```
:::

:::demo
**图标按钮**：当需要在 `button` 内嵌入 `Icon` 时，可以设置 `icon` 属性，或者直接在 `button` 内使用 `Icon` 组件。如果想控制 Icon 具体的位置，只能直接使用 `Icon` 组件，而非 `icon` 属性.

```html
<template>
  <div>
      <s-button class="btn" type="primary" shape="circle" icon="iconsearch" />
      <s-button class="btn" type="primary" icon="iconsearch">Search</s-button>
      <s-button class="btn" shape="circle" icon="iconsearch" />
      <s-button class="btn" icon="iconsearch">Search</s-button>
      <s-button type="dashed" shape="iconsearch" icon="iconsearch" />
  </div>
</template>
<script>
export default {}
</script>
```
:::

:::demo
**加载中状态**：添加 `loading` 属性即可让按钮处于加载状态，最后三个按钮演示点击后进入加载状态，`loadType`设置进度条加载方式.

```html
<template>
  <div>
    <s-button class="btn" type="primary" loading>Loading</s-button>
    <s-button class="btn" type="primary" :loading="loading" @click="enterLoading">Click me!</s-button>
    <s-button class="btn" type="info" icon="iconplay" :loading="iconLoading" @click="enterIconLoading">Click me!</s-button>
    <s-button type="primary" :loading="proLoading" loadType="progress" @click="enterProLoading">Click me!</s-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      iconLoading: false,
      proLoading: false,
    };
  },
  methods: {
    enterLoading() {
      this.loading = true;
      setTimeout(() => { this.loading = false; }, 5000);
    },
    enterIconLoading() {
      this.iconLoading = true;
      setTimeout(() => { this.iconLoading = false; }, 5000);
    },
    enterProLoading() {
      this.proLoading = true;
      setTimeout(() => { this.proLoading = false;}, 2000);
    },
  },
}
</script>
```
:::

:::demo
**不可用状态**：添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变.

```html
<template>
  <div>
      <s-button class="btn" type="primary">Primary</s-button>
      <s-button class="btn" type="primary" disabled>Primary(disabled)</s-button>
      <s-button class="btn">Default</s-button>
      <s-button class="btn" disabled>Default</s-button>
      <s-button class="btn" type="dashed">Dashed</s-button>
      <s-button type="dashed" disabled>Dashed</s-button>
  </div>
</template>
<script>
export default {}
</script>
```
:::

:::demo
**按钮组合**：可以将多个 `s-button` 放入 `s-button-group` 的容器中.

```html
<template>
  <div>
    <h4>Basic</h4>
    <s-buttonGroup class="btn">
      <s-button>Cancel</s-button>
      <s-button>OK</s-button>
    </s-buttonGroup>
    <s-buttonGroup class="btn">
      <s-button disabled>L</s-button>
      <s-button disabled>M</s-button>
      <s-button disabled>R</s-button>
    </s-buttonGroup>
    <s-buttonGroup class="btn">
      <s-button>L</s-button>
      <s-button>M</s-button>
      <s-button>R</s-button>
    </s-buttonGroup>
    <br/>
    <h4>With Icon</h4>
    <s-buttonGroup class="btn">
      <s-button type="primary">
        <Icon slot="iconNode" type="iconarrow-double-left" />Go back
      </s-button>
      <s-button type="primary">
        Go forward
        <Icon slot="iconNode" type="iconarrow-double-right" />
      </s-button>
    </s-buttonGroup>
    <s-buttonGroup>
      <s-button type="primary" icon="iconarrow-double-left" />
      <s-button type="primary" icon="iconarrow-double-right" />
    </s-buttonGroup>
  </div>
</template>
<script>
export default {}
</script>
```
:::

:::demo
**自定义按钮背景颜色和字体颜色**：`background-color` 属性设置按钮的背景颜色，`font-color`属性可以设置按钮字体颜色.

```html
<template>
  <div>
      <s-button class="btn" background-color="#A96AF7" font-color="#FEFEFF">按钮</s-button>
      <s-button class="btn" background-color="#60BDFF" font-color="#FEFEFF">按钮</s-button>
      <s-button class="btn" background-color="#FFD954" font-color="#FEFEFF">按钮</s-button>
      <s-button class="btn" background-color="#FF618A" font-color="#FEFEFF">按钮</s-button>
      <s-button class="btn" background-color="#555557" font-color="#FEFEFF">按钮</s-button>
      <s-button background-color="#F049BB" font-color="#FEFEFF">按钮</s-button>
  </div>
</template>
<script>
export default {}
</script>
```
:::

## API
|  属性  | 说明  |  类型  |  默认值  |
|  ----  | ---- |  ----  |  ----   |
|  type  | 按钮类型，可选值为 `default`、`primary`、`dashed`、`text`、`info`、`success`、`warning`、`error`或者不设置  |  String  |  default  |
|  disabled  | 按钮失效状态  |  Boolean  |  false  |
|  background-color  | 设置按钮的背景色  |  String  |  -  |
|  font-color  | 设置按钮的字体颜色  |  String  |  -  |
|  icon  | 设置按钮的图标组件  |  Boolean  |  false  |
|  loading  | 设置按钮载入状态  |  Boolean  |  false  |
|  loadType  | 设置载入状态的样式，可选值为`circle`、`progress`  |  String  |  circle  |
|  shape  | 设置按钮形状，可选值为 `circle`、 `round` 或者不设  |  String  |  -  |
:::script
<script>
export default {
  data() {
    return {
      loading: false,
      iconLoading: false,
      proLoading: false,
    };
  },
  methods: {
    enterLoading() {
      this.loading = true;
      setTimeout(() => { this.loading = false; }, 5000);
    },
    enterIconLoading() {
      this.iconLoading = true;
      setTimeout(() => { this.iconLoading = false; }, 5000);
    },
    enterProLoading() {
      this.proLoading = true;
      setTimeout(() => { this.proLoading = false;}, 2000);
    },
  },
}
</script>
:::
