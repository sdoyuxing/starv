<template>
  <article>
    <section>
      <h1>s-button 按钮</h1>
    </section>
    <section>
      <h2>代码示例</h2>
      <div class="starv-col">
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-switch v-model="checked" />
              <br />
              {{checked}}
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">基本用法</div>
            <p>
              基本用法。
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
                {{switchBasc}}
               </code>
            </pre>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-switch large>
                <span slot="check">ON</span>
                <span slot="uncheck">OFF</span>
              </s-switch>
              <s-switch check="开启" uncheck="关闭" large />
              <s-switch>
                <Icon slot="check" type="iconselect-bold" />
                <Icon slot="uncheck" type="iconclose-bold" />
              </s-switch>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">文字和图标</div>
            <p>
              添加 loading 属性即可让按钮处于加载状态，最后三个按钮演示点击后进入加载状态，loadType设置进度条加载方式。
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
                <!-- {{buttonLoading}} -->
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
              <s-switch v-model="dChecked" :disabled="disabled" />
              <s-switch v-model="nChecked" :disabled="disabled" large>
                <span slot="check">ON</span>
                <span slot="uncheck">OFF</span>
              </s-switch>
              <br />
              <br />
              <s-button type="primary" @click="disabled=!disabled">{{disabled?'Usable':'Disabled'}}</s-button>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">不可用状态</div>
            <p>
              添加 disabled 属性即可处于不可用状态。
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
                {{switchDisabled}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-switch check-color="#13ce66" uncheck-color="#ff4949" />
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">自定义背景样式</div>
            <p>
              <code>check-color</code>设置选中的背景颜色，<code>uncheck-color</code>设置未选择的背景颜色。
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
                {{switchColor}}
               </code>
            </pre>
            </div>
          </section>
        </section>
      </div>
    </section>
    <section class="starv-clear">
      <h2>API</h2>
      <table class="starv-table">
        <thead>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </thead>
        <tbody>
          <tr v-for="(item,index) in switchAPI" :key="index">
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
import switchCode from "../codeDemo/switch";

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
      checked: false,
      dChecked: false,
      disabled: false,
      nChecked: false,
      ...switchCode,
    };
  },
  methods: {},
};
</script>