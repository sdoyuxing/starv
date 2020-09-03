const progressBasc = `
<template>
  <div>
    <s-button class="starv-btn" @click="progressStart">开始加载</s-button>
    <s-button class="starv-btn" @click="progressFinish">加载完成</s-button>
  </div>
</template>
<script>
export default {
    methods: {
        progressStart() {
          this.$progressBar.start();
        },
        progressFinish() {
          this.$progressBar.finish();
          this.$progressBar.reset();
        },
    }
};
</script>`;

const progresColor = `
<template>
  <div>
    <s-button class="starv-btn" @click="progressColor">开始加载</s-button>
    <s-button class="starv-btn" @click="progressFinish">加载完成</s-button>
  </div>
</template>
<script>
export default {
    methods: {
        progressFinish() {
          this.$progressBar.finish();
          this.$progressBar.reset();
        },
        progressColor() {
          this.$progressBar.config({ color: "red", height: 5 });
          this.$progressBar.start();
        },
      }
};
</script>`;

const progresSpeed = `
<template>
  <div>
    <s-button class="starv-btn" @click="progressSpeed">开始加载</s-button>
    <s-button class="starv-btn" @click="progressFinish">加载完成</s-button>
  </div>
</template>
<script>
export default {
    methods: {
        progressFinish() {
          this.$progressBar.finish();
          this.$progressBar.reset();
        },
        progressSpeed() {
          this.$progressBar.config({ speed: 500 });
          this.$progressBar.start();
        }
      }
};
</script>`;


const progressBarAPI = [{
    name: "color",
    desc: "进度条的颜色",
    type: "String",
    default: "primary"
}, {
    name: "height",
    desc: "进度条高度",
    type: "Number",
    default: "2"
}, {
    name: "speed",
    desc: "进度条的加载速度",
    type: "Number",
    default: "250"
}]

const progressBarEvents = [{
        name: "start",
        desc: "开始从 0 显示进度条，并自动加载进度",
        type: "无"
    },
    {
        name: "finish",
        desc: "结束进度条，自动补全剩余进度",
        type: "无"
    },
    {
        name: "update",
        desc: "精确加载到指定的进度，参数为0到1的小数",
        type: "无"
    }
]

export default {
    progressBasc,
    progresColor,
    progresSpeed,
    progressBarAPI,
    progressBarEvents,
}