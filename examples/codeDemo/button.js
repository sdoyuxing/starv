export const buttonType = `
<template>
  <div>
      <s-button>Default</s-button>
      <s-button type="dashed">Dashed</s-button>
      <s-button type="primary">Primary</s-button>
      <s-button type="info">Info</s-button>
      <s-button type="success">Success</s-button>
      <s-button type="warning">Warning</s-button>
      <s-button type="error">Error</s-button>
  </div>
</template>
<script>
export default {};
</script>`;
export const buttonIcon = `
<template>
  <div>
      <s-button type="primary" shape="circle" icon="iconsearch" />
      <s-button type="primary" icon="iconsearch">Search</s-button>
      <s-button shape="circle" icon="iconsearch" />
      <s-button icon="iconsearch">Search</s-button>
      <s-button type="dashed" shape="iconsearch" icon="iconsearch" />
  </div>
</template>
<script>
export default {};
</script>`;

export const buttonLoading = `
<template>
  <div>
    <s-button type="primary" loading>Loading</s-button>
    <s-button type="primary" :loading="loading" @click="enterLoading">Click me!</s-button>
    <s-button type="info" icon="iconplay" :loading="iconLoading" @click="enterIconLoading">Click me!</s-button>
    <s-button type="primary" :loading="proLoading" loadType="progress" @click="enterProLoading">Click me!</s-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
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
};
</script>`;

export const buttonDisabled = `
<template>
  <div>
      <s-button class="starv-btn" type="primary">Primary</s-button>
      <s-button class="starv-btn" type="primary" disabled>Primary(disabled)</s-button>
      <br />
      <s-button class="starv-btn">Default</s-button>
      <s-button class="starv-btn" disabled>Default(disabled)</s-button>
      <br />
      <s-button class="starv-btn" type="dashed">Dashed</s-button>
      <s-button class="starv-btn" type="dashed" disabled>Dashed(disabled)</s-button>
  </div>
</template>
<script>
export default {};
</script>`;

export const buttonGroup = `
<template>
  <div>
      <h4>Basic</h4>
      <s-buttonGroup>
        <s-button>Cancel</s-button>
        <s-button>OK</s-button>
      </s-buttonGroup>
      <s-buttonGroup>
        <s-button disabled>L</s-button>
        <s-button disabled>M</s-button>
        <s-button disabled>R</s-button>
      </s-buttonGroup>
      <s-buttonGroup>
        <s-button>L</s-button>
        <s-button>M</s-button>
        <s-button>R</s-button>
      </s-buttonGroup>

      <h4>With Icon</h4>
      <s-buttonGroup>
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
export default {};
</script>`;

export const buttonColor = `
<template>
  <div>
      <s-button backgroundColor="#A96AF7" fontColor="#FEFEFF">按钮</s-button>
      <s-button backgroundColor="#60BDFF" fontColor="#FEFEFF">按钮</s-button>
      <s-button backgroundColor="#FFD954" fontColor="#FEFEFF">按钮</s-button>
      <s-button backgroundColor="#FF618A" fontColor="#FEFEFF">按钮</s-button>
      <s-button backgroundColor="#555557" fontColor="#FEFEFF">按钮</s-button>
      <s-button backgroundColor="#F049BB" fontColor="#FEFEFF">按钮</s-button>
  </div>
</template>
<script>
export default {};
</script>`;

export const buttonAPI = [{
  name: "type",
  desc: "按钮类型，可选值为 <code>default</code>、<code>primary</code>、<code>dashed</code>、<code>text</code>、<code>info</code>、<code>success</code>、<code>warning</code>、<code>error</code>或者不设置",
  type: "String",
  default: "default"
}, {
  name: "disabled",
  desc: "按钮失效状态",
  type: "Boolean",
  default: "false"
}, {
  name: "backgroundColor",
  desc: "设置按钮的背景色",
  type: "String",
  default: "-"
}, {
  name: "fontColor",
  desc: "设置按钮的字体颜色",
  type: "String",
  default: "button"
}, {
  name: "icon",
  desc: "设置按钮的图标组件",
  type: "Boolean",
  default: "false"
}, {
  name: "loading",
  desc: "设置按钮载入状态",
  type: "String",
  default: "default"
}, {
  name: "loadType",
  desc: "设置载入状态的样式，可选值为circle、progress",
  type: "String",
  default: "circle"
}, {
  name: "shape",
  desc: "设置按钮形状，可选值为 <code>circle</code>、 <code>round</code> 或者不设",
  type: "String",
  default: "-"
}]