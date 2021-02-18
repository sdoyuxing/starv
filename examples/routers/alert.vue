<template>
  <article>
    <section>
      <h1>Alert 警告提示</h1>
    </section>
    <section>
      <h2>代码示例</h2>
      <div class="starv-col">
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-alert>提示信息</s-alert>
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
          <section :class="['starv-code__details',{'starv-code__details-sm--show':show.num1}]">
            <pre v-highlight>
               <code class="html"> 
                {{alertBasc}}
               </code>
            </pre>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-alert show-icon>详情</s-alert>
              <s-alert type="success" show-icon>成功</s-alert>
              <s-alert type="warning" show-icon>警告</s-alert>
              <s-alert type="error" show-icon>错误</s-alert>
              <s-alert show-icon icon-type="iconmeh-filling">详情</s-alert>
              <s-alert show-icon type="success">
                成功
                <Icon type="iconsmile-filling" slot="icon" />
              </s-alert>
              <s-alert type="error" icon-type="iconcry-filling" show-icon>错误</s-alert>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">显示图标</div>
            <p>
              <code>show-icon</code>设置显示图标，
              <code>slot="icon"</code>或
              <code>icon-type</code>属性自定义图标。
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
                {{alertIcon}}
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
              <s-alert type="info">详情</s-alert>
              <s-alert type="success">成功</s-alert>
              <s-alert type="warning">警告</s-alert>
              <s-alert type="error">错误</s-alert>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">四种样式</div>
            <p>
              <code>type</code>可以设置
              <code>info</code>、
              <code>success</code>、
              <code>warning</code>、
              <code>error</code>四种样式，默认是
              <code>info</code>样式。
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
                {{alertType}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-alert type="success" show-icon closable>成功</s-alert>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">关闭</div>
            <p>
              <code>closable</code>属性设置是否可关闭。
              <i
                :class="['star-icon','starv-icon','iconarrow-down-bold',{'anticond-up':show.num4}] "
                @click="show.num4=!show.num4"
                :title="show.num4?'隐藏代码':'显示代码'"
              ></i>
            </p>
          </section>
          <section :class="['starv-code__details',{'starv-code__details-sm--show':show.num4}]">
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{alertClose}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-alert
                borderColor="#BD8EF6"
                backgroundColor="#E6D8F6"
                iconColor="#F049BB"
                show-icon
                iconType="iconsmile"
                fontColor="#048D48"
              >自定义样式</s-alert>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">自定义背景颜色、字体颜色、边框颜色</div>
            <p>
              <code>backgroundColor</code>属性设置背景颜色，
              <code>fontColor</code>属性可以设置字体颜色,
              <code>bordercolor</code>属性可以设置边框颜色,
              <code>iconColor</code>属性可以设置图标颜色。
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
                {{alertStyle}}
               </code>
            </pre>
            </div>
          </section>
        </section>
      </div>
    </section>
    <section class="starv-clear">
      <h2>API</h2>
      <h3>Alert props</h3>
      <br />
      <table class="starv-table">
        <thead>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </thead>
        <tbody>
          <tr v-for="(item,index) in alertAPI" :key="index">
            <td v-html="item.name"></td>
            <td v-html="item.desc"></td>
            <td v-html="item.type"></td>
            <td v-html="item.default"></td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <h3>Alert events</h3>
      <br />
      <table class="starv-table">
        <thead>
          <th>事件名</th>
          <th>说明</th>
          <th>返回值</th>
        </thead>
        <tbody>
          <tr v-for="(item,index) in alertEvents" :key="index">
            <td v-html="item.name"></td>
            <td v-html="item.desc"></td>
            <td v-html="item.type"></td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <h3>Alert slots</h3>
      <br />
      <table class="starv-table">
        <thead>
          <th>名称</th>
          <th>说明</th>
        </thead>
        <tbody>
          <tr v-for="(item,index) in alertSlots" :key="index">
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

import alert from "../codeDemo/alert";
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
      ...alert,
    };
  },
  methods: {},
};
</script>