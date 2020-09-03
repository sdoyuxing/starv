<template>
  <article>
    <section>
      <h1>ProgressBar 加载进度条</h1>
    </section>
    <section>
      <h2>代码示例</h2>
      <div class="starv-col">
        <section class="starv-code">
          <section class="starv-code__demo">
            <s-button class="starv-btn" @click="progressStart">开始加载</s-button>
            <s-button class="starv-btn" @click="progressFinish">加载完成</s-button>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">基本用法</div>
            <p>
              调用
              <code>start()</code>开始，调用
              <code>finish()</code>完成,可通过
              <code>this.$progressBar</code>或者
              <code>starUI.progressBar</code>获取进度条对象。
              <i
                :class="['star-icon','starv-icon','iconarrow-down-bold',{'anticond-up':show.num1}] "
                @click="show.num1=!show.num1"
                :title="show.num1?'隐藏代码':'显示代码'"
              ></i>
            </p>
          </section>
          <section :class="['starv-code__details',{'starv-code__details-lg--show':show.num1}]">
            <pre v-highlight>
               <code class="html"> 
                {{progressBasc}}
               </code>
            </pre>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-button class="starv-btn" @click="progressSpeed">开始加载</s-button>
              <s-button class="starv-btn" @click="progressFinish">加载完成</s-button>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">设置加载速度</div>
            <p>
              可以通过
              <code>config</code>方法传参<code>{ speed: 500 }</code>对象设置速度，速度的范围是100到500
              <i
                :class="['star-icon','starv-icon','iconarrow-down-bold',{'anticond-up':show.num5}] "
                @click="show.num5=!show.num5"
                :title="show.num5?'隐藏代码':'显示代码'"
              ></i>
            </p>
          </section>
          <section :class="['starv-code__details',{'starv-code__details-lg--show':show.num5}]">
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{progresSpeed}}
               </code>
            </pre>
            </div>
          </section>
        </section>
      </div>
      <div class="starv-col">
        <section class="starv-code">
          <section class="starv-code__demo">
            <s-button class="starv-btn" @click="progressColor">开始加载</s-button>
            <s-button class="starv-btn" @click="progressFinish">加载完成</s-button>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">设置加载进度条的颜色和高度</div>
            <p>
              可以通过
              <code>config</code>方法传参<code>{ color: "red", height: 5 }</code>对象设置颜色和高度
              <i
                :class="['star-icon','starv-icon','iconarrow-down-bold',{'anticond-up':show.num2}] "
                @click="show.num2=!show.num2"
                :title="show.num2?'隐藏代码':'显示代码'"
              ></i>
            </p>
          </section>
          <section :class="['starv-code__details',{'starv-code__details-lg--show':show.num2}]">
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{progresColor}}
               </code>
            </pre>
            </div>
          </section>
        </section>
      </div>
    </section>
    <section class="starv-clear">
      <h2>API</h2>
      <h3>progressBar 配置对象属性</h3>
      <br />
      <table class="starv-table">
        <thead>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </thead>
        <tbody>
          <tr v-for="(item,index) in progressBarAPI" :key="index">
            <td v-html="item.name"></td>
            <td v-html="item.desc"></td>
            <td v-html="item.type"></td>
            <td v-html="item.default"></td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <h3>Tooltip 方法</h3>
      <br />
      <table class="starv-table">
        <thead>
          <th>事件名</th>
          <th>说明</th>
          <th>返回值</th>
        </thead>
        <tbody>
          <tr v-for="(item,index) in progressBarEvents" :key="index">
            <td v-html="item.name"></td>
            <td v-html="item.desc"></td>
            <td v-html="item.type"></td>
          </tr>
        </tbody>
      </table>
    </section>
  </article>
</template>
<script>
import progressBar from "../codeDemo/progressBar";
export default {
  data() {
    return {
      show: {
        num1: false,
        num2: false,
        num4: false,
        num5: false,
        num7: false,
        num8: false,
      },
      disabled: false,
      ...progressBar,
    };
  },
  methods: {
    progressStart() {
      this.$progressBar.start();
    },
    progressFinish() {
      this.$progressBar.finish();
      this.$progressBar.reset();
    },
    progressColor() {
      this.$progressBar.config({ color: "red", height: 5 });
      this.$progressBar.start();
    },
    progressSpeed() {
      this.$progressBar.config({ speed: 500 });
      this.$progressBar.start();
    },
  },
};
</script>
<style scoped>
.starv-center {
  width: 360px;
  height: 140px;
  margin: auto;
  overflow: hidden;
}
.float-left {
  float: left;
  height: 140px;
  width: 62px;
}
.float-right {
  float: right;
  height: 140px;
  width: 62px;
}
</style>