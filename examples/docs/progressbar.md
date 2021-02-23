# ProgressBar 加载进度条

## 代码示例

:::demo
**基本用法**：调用 `start()`开始，调用 `finish()`完成,可通过 `$progressBar`或者 `progressBar`获取进度条对象.

```html
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
</script>
```
:::

:::demo
**设置加载进度条的颜色和高度**：可以通过 `config`方法传参`{ color: "red", height: 5 }`对象设置颜色和高度.

```html
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
</script>
```
:::

:::demo
**设置加载速度**：可以通过 `config`方法传参`{ speed: 500 }`对象设置速度，速度的范围是100到500.

```html
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
</script>
```
:::


## API

### progressBar 配置对象属性

<br/>

|  属性  | 说明  |  类型  |  默认值  |
|  ----  | ---- |  ----  |  ----   |
|  color  | 进度条的颜色 |  String  |  primary  |
|  height  | 进度条高度 |  Number  |  2  |
|  speed  | 进度条的加载速度  |  Number  |  250  |

<br/>

### Tooltip 方法

<br/>

|  事件名  | 说明  |  返回值  |
|  ----  | ---- |  ----  |
|  start  | 开始从 0 显示进度条，并自动加载进度 |  String  |  primary  |
|  height  | 进度条高度 |  Number  |  2  |
|  speed  | 进度条的加载速度  |  Number  |  250  |

:::script
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
</script>
:::