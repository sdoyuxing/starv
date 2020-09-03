export const checkboxBasc = `
<template>
  <div>
     <s-checkbox label="简单的checkbox"/>
  </div>
</template>
<script>
export default {};
</script>`;

export const checkboxDisabled = `
<template>
  <div>
    <s-checkbox label="不可用状态" disabled />
    <br />
    <s-checkbox label="不可用勾选状态" :value="true" disabled />
  </div>
</template>
<script>
export default {};
</script>`;

export const checkboxHalf = `
<template>
  <div>
    <s-checkbox label="半选" half-checked/>
  </div>
</template>
<script>
export default {};
</script>`;

export const checkboxMoving = `
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
</script>`;

export const checkboxGroup = `
<template>
  <div>
    <s-checkboxGroup v-model="phone">
      <s-checkbox label="苹果" />
      <s-checkbox label="华为" />
      <s-checkbox label="三星" />
      <s-checkbox label="小米" />
      <s-checkbox label="OPPO" />
      <s-checkbox label="VIVO" />
    </CheckboxGroup>
    {{phone}}
    <s-checkboxGroup v-model="phoneCode">
      <s-checkbox label="苹果" label-value="IPHONE" />
      <s-checkbox label="华为" label-value="HUAWEI" />
      <s-checkbox label="三星" label-value="SAMSUNG" />
      <s-checkbox label="小米" label-value="MILLET" />
      <s-checkbox label="OPPO" />
      <s-checkbox label="VIVO" />
    </CheckboxGroup>
    {{phoneCode}}
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
</script>`;

export const checkboxAll = `
<template>
  <div>
    <s-checkbox label="半选" :half-checked="halfChecked" :value="checkAll" @on-change="change" />
    <div>
      <s-checkboxGroup v-model="checkList">
        <s-checkbox label="苹果" label-value="IPHONE" />
        <s-checkbox label="华为" label-value="HUAWEI" />
        <s-checkbox label="三星" label-value="SAMSUNG" />
      </CheckboxGroup>
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
</script>`;

export const checkboxColor = `
<template>
  <div>
    <s-checkbox label="简单的checkbox" backgroundColor="#A96AF7" fontColor="#FEFEFF" />
    <s-checkbox label="简单的checkbox" backgroundColor="#60BDFF" fontColor="#FEFEFF" />
    <s-checkbox label="简单的checkbox" backgroundColor="#FFD954" fontColor="#FF618A" />
    <s-checkbox label="简单的checkbox" backgroundColor="#F049BB" fontColor="#555557" />
  </div>
</template>
<script>
export default {};
</script>`;

export const checkboxAPI = [{
  name: "value",
  desc: "指定当前是否选中，可以使用 <code>v-model</code> 双向绑定数据",
  type: "Boolean",
  default: "false"
}, {
  name: "disabled",
  desc: "设置<code>checkbox</code>为禁用状态",
  type: "Boolean",
  default: "false"
}, {
  name: "label",
  desc: "设置<code>checkbox</code>选项描述，在组合的下也是默认也是<code>value</code>值",
  type: "String | Number | Boolean",
  default: "-"
}, {
  name: "half-checked",
  desc: "设置<code>checkbox</code>半选状态",
  type: "Boolean",
  default: "false"
}, {
  name: "label-value",
  desc: "设置<code>checkbox</code>选项选中是对应的<code>value</code>值",
  type: "String | Number | Boolean",
  default: "-"
}, {
  name: "backgroundColor",
  desc: "可以设置选项选中后的背景颜色",
  type: "String",
  default: "-"
}, {
  name: "fontColor",
  desc: "可以设置选项选中后图标颜色",
  type: "String",
  default: "-"
}, {
  name: "name",
  desc: "<code>checkbox</code>选项的原生<code>name</code>属性",
  type: "String",
  default: "-"
}, {
  name: "checkbox原生属性",
  desc: "支持<code>checkbox</code>原生属性",
  type: "-",
  default: "-"
}];

export const checkboxEvents = [
  {
    name: "on-change",
    desc: "选项状态发生改变时触发",
    type: "true | flase | labelValue | ''"
  },
  {
    name: "checkbox原生事件",
    desc: "支持<code>checkbox</code>原生事件",
    type: "-"
  }
];

export const checkboxGAPI = [{
  name: "value",
  desc: "指定选项组中选中的项，可以使用 <code>v-model</code> 双向绑定数据",
  type: "Boolean",
  default: "false"
}];

export const checkboxGEvents =[
  {
    name: "on-change",
    desc: "选项状态发生改变时触发",
    type: "[ ]"
  }
];
