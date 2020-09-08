<template>
  <article>
    <section>
      <h1>Message 全局提示</h1>
    </section>
    <section>
      <h2>代码示例</h2>
      <div class="starv-col">
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-button @click="handleClick">点击提示信息</s-button>
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
          <section :class="['starv-code__details',{'starv-code__details--show':show.num1}]">
            <pre v-highlight>
               <code class="html"> 
                {{messageBasc}}
               </code>
            </pre>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-button @click="subgClick">提示成功信息</s-button>
              <s-button @click="wabgClick">提示告警信息</s-button>
              <s-button @click="erbgClick">提示错误信息</s-button>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">背景样式</div>
            <p>
              设置属性
              <code>background</code> 后，通知提示会显示背景色。
              <i
                :class="['star-icon','starv-icon','iconarrow-down-bold',{'anticond-up':show.num5}] "
                @click="show.num5=!show.num5"
                :title="show.num5?'隐藏代码':'显示代码'"
              ></i>
            </p>
          </section>
          <section :class="['starv-code__details',{'starv-code__details-lger--show':show.num5}]">
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{messageBack}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-button @click="closableClick">提示可关闭信息</s-button>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">可关闭</div>
            <p>
              <code>closable</code>设置是否可手动关闭。
              <i
                :class="['star-icon','starv-icon','iconarrow-down-bold',{'anticond-up':show.num3}] "
                @click="show.num3=!show.num3"
                :title="show.num3?'隐藏代码':'显示代码'"
              ></i>
            </p>
          </section>
          <section :class="['starv-code__details',{'starv-code__details-lg--show':show.num3}]">
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{messageClose}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-button @click="iconClick">自定义图标</s-button>
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
                {{messageIcon}}
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
              <s-button @click="successClick">提示成功信息</s-button>
              <s-button @click="warnClick">提示告警信息</s-button>
              <s-button @click="errorClick">提示错误信息</s-button>
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
          <section :class="['starv-code__details',{'starv-code__details-lg--show':show.num2}]">
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{messageType}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-button @click="timeClick">显示5秒隐藏</s-button>
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
                {{messageTime}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-button @click="messageClick">自定义html内容</s-button>
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
                {{messageHtml}}
               </code>
            </pre>
            </div>
          </section>
        </section>
      </div>
    </section>
    <section class="starv-clear">
      <h2>API</h2>
      <h3>Message 调用方法</h3>
      <ul style="margin:10px 0 0 20px">
        <li style="line-height:40px">
          <code>this.$Message.info(config)</code>
        </li>
        <li style="line-height:40px">
          <code>this.$Message.success(config)</code>
        </li>
        <li style="line-height:40px">
          <code>this.$Message.warning(config)</code>
        </li>
        <li style="line-height:40px">
          <code>this.$Message.error(config)</code>
        </li>
        <li style="line-height:40px">
          <code>this.$Message.message(type,config)</code>
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
          <tr v-for="(item,index) in messageAPI" :key="index">
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
import message from "../codeDemo/message";
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
      ...message,
    };
  },
  methods: {
    handleClick() {
      this.$Message.info("消息提示！");
    },
    successClick() {
      this.$Message.success("操作成功！");
    },
    warnClick() {
      this.$Message.warning("该操作有丢失数据风险！");
    },
    errorClick() {
      this.$Message.error("操作失败，请联系网管！");
    },
    subgClick() {
      this.$Message.success({
        content: "操作成功！",
        background: true,
      });
    },
    wabgClick() {
      this.$Message.warning({
        content: "该操作有丢失数据风险！",
        background: true,
      });
    },
    erbgClick() {
      this.$Message.error({
        content: "操作失败，请联系网管！",
        background: true,
      });
    },
    timeClick() {
      this.$Message.info({
        content: "提示显示5秒",
        time: 5,
      });
    },
    closableClick() {
      this.$Message.info({
        content: "可关闭提示信息",
        closable: true,
      });
    },
    messageClick() {
      this.$Message.message("info", {
        template: "<span>这是一个自定义<code>html</code>内容</span>",
        style: { color: "#49C2BD" },
      });
    },
    iconClick() {
      this.$Message.message("info", {
        template:
          "<span><Icon :type='iconsmile-filling' style='color:#2db7f5;margin-right:5px;font-size:16px'/><span style='color:#19be6b'>这是一个自定义的笑脸</span></span>",
        showIcon: false,
      });
    },
  },
};
</script>