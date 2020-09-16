const poptipBasc = `
<template>
  <div>
    <s-poptip placement="top-start" class="starv-btn" title="文字提示" content="Top Left 文字提示"><s-button>上左</s-button></s-poptip>
    <s-poptip placement="top" class="starv-btn" title="文字提示" content="Top Center 文字提示"><s-button>上中</s-button></s-poptip>
    <s-poptip placement="top-end" class="starv-btn" title="文字提示" content="Top Right 文字提示"><s-button>上右</s-button></s-poptip>
    <div class="starv-center">
    <div class="float-left">
        <s-poptip placement="left-start" class="starv-btn" title="文字提示" content="Left Top 文字提示"><s-button>左上</s-button></s-poptip>
        <s-poptip placement="left" class="starv-btn" title="文字提示" content="Left Center 文字提示"><s-button>左中</s-button></s-poptip>
        <s-poptip placement="left-end" class="starv-btn" title="文字提示" content="Left Bottom 文字提示"><s-button>左下</s-button></s-poptip>
    </div>
    <div class="float-right">
        <s-poptip placement="right-start" class="starv-btn" title="文字提示" content="Right Top 文字提示"><s-button>右上</s-button></s-poptip>
        <s-poptip placement="right" class="starv-btn" title="文字提示" content="Right Center 文字提示"><s-button>右中</s-button></s-poptip>
        <s-poptip placement="right-end" class="starv-btn" title="文字提示" content="Right Bottom 文字提示"><s-button>右下</s-button></s-poptip>
    </div>
    </div>
    <s-poptip placement="bottom-start" class="starv-btn" title="文字提示" content="Bottom Left 文字提示"><s-button>下左</s-button></s-poptip>
    <s-poptip placement="bottom" class="starv-btn" title="文字提示" content="Bottom Center 文字提示"><s-button>下中</s-button></s-poptip>
    <s-poptip placement="bottom-end" class="starv-btn" title="文字提示" content="Bottom Right 文字提示"><s-button>下右</s-button></s-poptip>
  </div>
</template>
<script>
export default {};
</script>`;

const poptipTrigger = `
<template>
  <div>
      <s-poptip placement="bottom" class="starv-btn" trigger="hover">
      <s-button>hover触发</s-button>
      <div slot="title">
        <p>标题</p>
      </div>
      <div slot="content">
        <p>hover触发提示</p>
      </div>
    </s-poptip>
    <s-poptip placement="bottom" class="starv-btn" trigger="click">
      <s-button>click触发</s-button>
      <div slot="title">
        <p>标题</p>
      </div>
      <div slot="content">
        <p>click触发提示</p>
      </div>
    </s-poptip>
    <s-poptip placement="bottom" class="starv-btn" trigger="focus">
      <s-button>focus触发</s-button>
      <div slot="title">
        <p>标题</p>
      </div>
      <div slot="content">
        <p>focus触发提示</p>
      </div>
    </s-poptip>
  </div>
</template>
<script>
export default {};
</script>`;

const poptipContent = `
<template>
  <div>
      <s-poptip :visible="visible">
      <a>Click</a>
      <div slot="title">
        <i>标题</i>
      </div>
      <div slot="content">
        <a @click="close">close</a>
      </div>
    </s-poptip>
  </div>
</template>
<script>
export default {
  data(){
    return{
      visible:false,
    }
  }
};
</script>`;

const poptipDelay = `
<template>
  <div>
    <s-poptip placement="bottom" class="starv-btn" content="延迟显示" :delay="1000">
      <s-button>延迟1秒显示</s-button>
    </s-poptip>
  </div>
</template>
<script>
export default {};
</script>`;

const tooltipWidth = `
<template>
  <div>
      <s-tooltip
      placement="bottom"
      class="starv-btn"
      max-width="200"
      content="余秋雨，1946年8月23日出生于浙江省余姚县桥头镇（今属浙江省慈溪市），中国著名文化学者，理论家、文化史学家、散文家。"
    >
      <s-button>长文本</s-button>
    </s-tooltip>
  </div>
</template>
<script>
export default {};
</script>`;

const poptipAPI = [{
  name: "content",
  desc: "显示的内容",
  type: "String",
  default: "-"
}, {
  name: "placement",
  desc: "提示框出现的位置，可选值为<code>top</code>、<code>top-start</code>、<code>top-end</code>、<code>bottom</code>、<code>bottom-start</code>、<code>bottom-end</code>、<code>left</code>、<code>left-start</code>、<code>left-end</code>、<code>right</code>、<code>right-start</code>、<code>right-end</code>",
  type: "String",
  default: "bottom"
}, {
  name: "trigger",
  desc: "设置触发方式，可选值为<code>hover</code>、<code>click</code>、<code>focus</code>",
  type: "String",
  default: "click"
}, {
  name: "title",
  desc: "设置标题",
  type: "String",
  default: "-"
}, {
  name: "disabled",
  desc: "是否禁用提示框",
  type: "Boolean",
  default: "false"
}, {
  name: "delay",
  desc: "延迟显示，单位毫秒",
  type: "Number",
  default: "0"
}, {
  name: "max-width",
  desc: "最大宽度，超出最大值后，文本将自动换行，并两端对齐",
  type: "String | Number",
  default: "-"
}]

const poptipEvents = [{
    name: "on-popper-show",
    desc: "在提示框显示时触发",
    type: "无"
  },
  {
    name: "on-popper-hide",
    desc: "在提示框消失时触发",
    type: "无"
  }
]

const poptipSlot = [{
    name: "无",
    desc: "主体内容"
  },
  {
    name: "content",
    desc: "提示框的内容，定义此 slot 时，会覆盖 props <code>content</code>。"
  },
  {
    name: "title",
    desc: "提示框的标题，定义此 slot 时，会覆盖 props <code>title</code>。"
  }
]

export default {
  poptipBasc,
  poptipTrigger,
  poptipContent,
  poptipDelay,
  tooltipWidth,
  poptipAPI,
  poptipEvents,
  poptipSlot
}