const selectBasc = `
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
</script>`;

const selectDisabled = `
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
</script>`;

const selectClear = `
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
</script>`;

const selectTem = `
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
</script>`;

const selectIcon = `
<template>
  <div>
    <s-select prefix="iconuser" style="width:200px">
      <Option value="IPHONE">苹果</Option>
      <Option value="HUAWEI">华为</Option>
      <Option label="SAMSUNG">三星</Option>
      <Option label="MI">小米</Option>
    </s-select>
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
</script>`;

const selectFilter = `
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
</script>`;

const selectLoading = `
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
</script>`;

const selectlazyload = `
<template>
  <div>
    <s-select
      placeholder="请选择"
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
</script>`;

const selectAPI = [{
  name: "value",
  desc: "指定选中项目的 value 值，可以使用 v-model 双向绑定数据",
  type: "String | Number | Array",
  default: "-"
}, {
  name: "disabled",
  desc: "是否禁用",
  type: "Boolean",
  default: "false"
}, {
  name: "clearable",
  desc: "是否可以清空选项，只在单选时有效",
  type: "Boolean",
  default: "false"
}, {
  name: "filterable",
  desc: "是否支持搜索",
  type: "Boolean",
  default: "false"
}, {
  name: "label",
  desc: "设置选项的显示文本",
  type: "String | Number | Array",
  default: "-"
}, {
  name: "placeholder",
  desc: "选择框默认文字",
  type: "String",
  default: "-"
}];

const alertEvents = [
  {
    name: "on-close",
    desc: "关闭时触发",
    type: "event"
  }];

const alertSlots = [{
  name: "无",
  desc: "警告提示内容",
}, {
  name: "icon",
  desc: "自定义图标内容",
}];

export default {
  selectBasc,
  selectDisabled,
  selectClear,
  selectTem,
  selectAPI,
  alertEvents,
  alertSlots,
  selectIcon,
  selectFilter,
  selectLoading,
  selectlazyload
}