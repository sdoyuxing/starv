const tooltipBasc = `
<template>
  <div>
    <s-tooltip placement="top-start" class="starv-btn" content="Top Left 文字提示"><s-button>上左</s-button></s-tooltip>
    <s-tooltip placement="top" class="starv-btn" content="Top Center 文字提示"><s-button>上中</s-button></s-tooltip>
    <s-tooltip placement="top-end" class="starv-btn" content="Top Right 文字提示"><s-button>上右</s-button></s-tooltip>
    <div class="starv-center">
    <div class="float-left">
        <s-tooltip placement="left-start" class="starv-btn" content="Left Top 文字提示"><s-button>左上</s-button></s-tooltip>
        <s-tooltip placement="left" class="starv-btn" content="Left Center 文字提示"><s-button>左中</s-button></s-tooltip>
        <s-tooltip placement="left-end" class="starv-btn" content="Left Bottom 文字提示"><s-button>左下</s-button></s-tooltip>
    </div>
    <div class="float-right">
        <s-tooltip placement="right-start" class="starv-btn" content="Right Top 文字提示"><s-button>右上</s-button></s-tooltip>
        <s-tooltip placement="right" class="starv-btn" content="Right Center 文字提示"><s-button>右中</s-button></s-tooltip>
        <s-tooltip placement="right-end" class="starv-btn" content="Right Bottom 文字提示"><s-button>右下</s-button></s-tooltip>
    </div>
    </div>
    <s-tooltip placement="bottom-start" class="starv-btn" content="Bottom Left 文字提示"><s-button>下左</s-button></s-tooltip>
    <s-tooltip placement="bottom" class="starv-btn" content="Bottom Center 文字提示"><s-button>下中</s-button></s-tooltip>
    <s-tooltip placement="bottom-end" class="starv-btn" content="Bottom Right 文字提示"><s-button>下右</s-button></s-tooltip>
  </div>
</template>
<script>
export default {};
</script>`;

const tooltipContent = `
<template>
  <div>
    <s-tooltip placement="bottom" class="starv-btn">
    <s-button>多行</s-button>
    <div slot="content">
        <p>这个社会一直都在拿你和别人比。</p>
        <p>因为这是人的博弈竞争。</p>
    </div>
    </s-tooltip>
  </div>
</template>
<script>
export default {};
</script>`;

const tooltipDelay = `
<template>
  <div>
    <s-tooltip placement="bottom" class="starv-btn" content="延迟显示" :delay="1000">
    <s-button>延迟1秒显示</s-button>
    </s-tooltip>
  </div>
</template>
<script>
export default {};
</script>`;

const tooltipDisabled = `
<template>
  <div>
    <s-tooltip placement="bottom" :disabled="disabled" class="starv-btn" content="点击关闭提示">
    <s-button @click="disabled=!disabled">点击{{disabled?'显示':'关闭'}}提示</s-button>
    </s-tooltip>
  </div>
</template>
<script>
export default {
    data(){
      return {
        disabled:flase
      }
    }
};
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

const tooltipAPI = [{
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

const tooltipEvents = [{
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

const tooltipSlot = [{
    name: "无",
    desc: "主体内容"
  },
  {
    name: "content",
    desc: "提示框的内容，定义此 slot 时，会覆盖 props <code>content</code>。"
  }
]

export default {
  tooltipBasc,
  tooltipContent,
  tooltipDelay,
  tooltipDisabled,
  tooltipWidth,
  tooltipAPI,
  tooltipEvents,
  tooltipSlot
}