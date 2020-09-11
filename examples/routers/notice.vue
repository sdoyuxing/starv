<template>
  <article>
    <section>
      <h1>Notice 通知提醒</h1>
    </section>
    <section>
      <h2>代码示例</h2>
      <div class="starv-col">
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-button type="primary" @click="noticeShow">点击提醒</s-button>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">基本用法</div>
            <p>
              最简单的用法。
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
                {{noticeBasc}}
               </code>
            </pre>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-button @click="inbgClick" class="starv-btn">提示详情信息</s-button>
              <s-button @click="subgClick" class="starv-btn">提示成功信息</s-button>
              <s-button @click="wabgClick" class="starv-btn">提示告警信息</s-button>
              <s-button @click="erbgClick" class="starv-btn">提示错误信息</s-button>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">只有内容提醒的图标</div>
            <p>
              只有内容提醒的图标。
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
                {{noticeBack}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-button @click="iconClick" class="starv-btn">自定义图标</s-button>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">自定义图标和内容</div>
            <p>
              <code>showIcon</code>设置不显示默认图标。
              <code>template</code>自定义图标，注：在给vue组件props传参时，
              属性名前面加个:
              <i
                :class="['star-icon','starv-icon','iconarrow-down-bold',{'anticond-up':show.num9}] "
                @click="show.num9=!show.num9"
                :title="show.num9?'隐藏代码':'显示代码'"
              ></i>
            </p>
          </section>
          <section :class="['starv-code__details',{'starv-code__details-lg--show':show.num9}]">
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{noticeIcon}}
               </code>
            </pre>
            </div>
          </section>
        </section>
      </div>
      <div class="starv-col">
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-button @click="infoClick" class="starv-btn">提示详情信息</s-button>
              <s-button @click="successClick" class="starv-btn">提示成功信息</s-button>
              <s-button @click="warnClick" class="starv-btn">提示告警信息</s-button>
              <s-button @click="errorClick" class="starv-btn">提示错误信息</s-button>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">提示类型</div>
            <p>
              不同的提示状态：成功、警告、错误。
              <i
                :class="['star-icon','starv-icon','iconarrow-down-bold',{'anticond-up':show.num2}] "
                @click="show.num2=!show.num2"
                :title="show.num2?'隐藏代码':'显示代码'"
              ></i>
            </p>
          </section>
          <section :class="['starv-code__details',{'starv-code__details-lger--show':show.num2}]">
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{noticeType}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-button @click="timeClick" class="starv-btn">显示5秒隐藏</s-button>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">自定义时长</div>
            <p>
              <code>titme</code>属性设置是时长。
              <i
                :class="['star-icon','starv-icon','iconarrow-down-bold',{'anticond-up':show.num4}] "
                @click="show.num4=!show.num4"
                :title="show.num4?'隐藏代码':'显示代码'"
              ></i>
            </p>
          </section>
          <section :class="['starv-code__details',{'starv-code__details-lg--show':show.num4}]">
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{noticeTime}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-button @click="noticeClick" class="starv-btn">自定义html内容</s-button>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">自定义带标签或者组件内容</div>
            <p>
              <code>template</code>属性设置自定义的html内容，
              <code>style</code>设置内容样式。
              <i
                :class="['star-icon','starv-icon','iconarrow-down-bold',{'anticond-up':show.num8}] "
                @click="show.num8=!show.num8"
                :title="show.num8?'隐藏代码':'显示代码'"
              ></i>
            </p>
          </section>
          <section :class="['starv-code__details',{'starv-code__details-lg--show':show.num8}]">
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{noticeHtml}}
               </code>
            </pre>
            </div>
          </section>
        </section>
      </div>
    </section>
    <section class="starv-clear">
      <h2>API</h2>
      <h3>Notice 调用方法</h3>
      <ul style="margin:10px 0 0 20px">
        <li style="line-height:40px">
          <code>this.$Notice.info(config)</code>
        </li>
        <li style="line-height:40px">
          <code>this.$Notice.success(config)</code>
        </li>
        <li style="line-height:40px">
          <code>this.$Notice.warning(config)</code>
        </li>
        <li style="line-height:40px">
          <code>this.$Notice.error(config)</code>
        </li>
        <li style="line-height:40px">
          <code>this.$Notice.show(config)</code>
        </li>
      </ul>
      <br />
      <h3>config 对象说明</h3>
      <br />
      <table class="starv-table">
        <thead>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </thead>
        <tbody>
          <tr v-for="(item,index) in noticeAPI" :key="index">
            <td v-html="item.name"></td>
            <td v-html="item.desc"></td>
            <td v-html="item.type"></td>
            <td v-html="item.default"></td>
          </tr>
        </tbody>
      </table>
    </section>
  </article>
</template>
<script>
import notice from "../codeDemo/notice";
export default {
  data() {
    return {
      show: {
        num1: false,
        num2: false,
        num3: false,
        num4: false,
        num5: false,
        num7: false,
        num8: false,
        num9: false,
      },
      ...notice,
    };
  },
  methods: {
    noticeShow() {
      this.$Notice.show({
        title: "提醒标题",
        content: "您正在看StarUI的提醒文档",
      });
    },
    successClick() {
      this.$Notice.success({
        title: "提醒标题",
        content: "成功提醒；成功提醒；成功提醒；成功提醒；",
      });
    },
    infoClick() {
      this.$Notice.info({
        title: "提醒标题",
        content: "详情提醒；详情提醒；详情提醒；详情提醒；",
      });
    },
    warnClick() {
      this.$Notice.warning({
        title: "提醒标题",
        content: "告警提醒；告警提醒；告警提醒；告警提醒；",
      });
    },
    errorClick() {
      this.$Notice.error({
        title: "提醒标题",
        content: "失败提醒；失败提醒；失败提醒；失败提醒；",
      });
    },
    subgClick() {
      this.$Notice.success({
        content: "成功提醒；成功提醒；成功提醒；成功提醒；",
      });
    },
    wabgClick() {
      this.$Notice.warning({
        content: "告警提醒；告警提醒；告警提醒；告警提醒；",
      });
    },
    erbgClick() {
      this.$Notice.error({
        content: "失败提醒；失败提醒；失败提醒；失败提醒；",
      });
    },
    inbgClick() {
      this.$Notice.info({
        content: "详情提醒；详情提醒；详情提醒；详情提醒；",
      });
    },
    timeClick() {
      this.$Notice.show({
        content: "提示显示5秒",
        time: 5,
      });
    },
    noticeClick() {
      this.$Notice.show({
        template: "<span>这是一个自定义<code>html</code>内容</span>",
        style: { color: "#49C2BD" },
      });
    },
    iconClick() {
      this.$Notice.info({
        template:
          "<span><Icon :type='iconsmile-filling' style='color:#2db7f5;margin-right:5px;font-size:16px'/><span style='color:#19be6b'>这是一个自定义的笑脸</span></span>",
        showIcon: false,
      });
    },
  },
};
</script>