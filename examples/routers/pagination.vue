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
            <s-pagination :total="50"></s-pagination>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">基本用法</div>
            <p>
              基本的分页，页数过多时会自动折叠。
              <i
                :class="['star-icon','starv-icon','iconarrow-down-bold',{'anticond-up':show.num1}] "
                @click="show.num1=!show.num1"
                :title="show.num1?'隐藏代码':'显示代码'"
              ></i>
            </p>
          </section>
          <section :class="['starv-code__details',{'starv-code__details--show':show.num1}]">
            <pre v-highlight>
               <code class="html"> 
                {{paginationBasc}}
               </code>
            </pre>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-pagination :total="100" show-total></s-pagination>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">显示总数</div>
            <p>
              可以通过
              <code>show-total</code>设置是否显示总数
              <i
                :class="['star-icon','starv-icon','iconarrow-down-bold',{'anticond-up':show.num5}] "
                @click="show.num5=!show.num5"
                :title="show.num5?'隐藏代码':'显示代码'"
              ></i>
            </p>
          </section>
          <section :class="['starv-code__details',{'starv-code__details--show':show.num5}]">
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{paginationTotal}}
               </code>
            </pre>
            </div>
          </section>
        </section>
      </div>
      <div class="starv-col">
        <section class="starv-code">
          <section class="starv-code__demo">
            <s-pagination :total="100" :page-size="[10,20,30]"></s-pagination>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">每页数量</div>
            <p>
              可以通过
              <code>page-size</code>值为数组设置每页数量
              <i
                :class="['star-icon','starv-icon','iconarrow-down-bold',{'anticond-up':show.num2}] "
                @click="show.num2=!show.num2"
                :title="show.num2?'隐藏代码':'显示代码'"
              ></i>
            </p>
          </section>
          <section :class="['starv-code__details',{'starv-code__details--show':show.num2}]">
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{paginationSize}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-pagination :total="100" show-jumper></s-pagination>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">快速跳转到某一页</div>
            <p>
              可以通过
              <code>show-jumper</code>来显示快速跳转到某一页。
              <i
                :class="['star-icon','starv-icon','iconarrow-down-bold',{'anticond-up':show.num4}] "
                @click="show.num4=!show.num4"
                :title="show.num4?'隐藏代码':'显示代码'"
              ></i>
            </p>
          </section>
          <section :class="['starv-code__details',{'starv-code__details--show':show.num4}]">
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{paginationJumper}}
               </code>
            </pre>
            </div>
          </section>
        </section>
      </div>
    </section>
    <section class="starv-clear">
      <h2>API</h2>
      <h3>Pagination props</h3>
      <br />
      <table class="starv-table">
        <thead>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </thead>
        <tbody>
          <tr v-for="(item,index) in paginationAPI" :key="index">
            <td v-html="item.name"></td>
            <td v-html="item.desc"></td>
            <td v-html="item.type"></td>
            <td v-html="item.default"></td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <h3>Pagination events</h3>
      <br />
      <table class="starv-table">
        <thead>
          <th>事件名</th>
          <th>说明</th>
          <th>返回值</th>
        </thead>
        <tbody>
          <tr v-for="(item,index) in paginationEvents" :key="index">
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
import pagination from "../codeDemo/pagination";
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
      ...pagination,
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