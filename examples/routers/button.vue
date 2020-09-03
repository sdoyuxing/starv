<template>
  <article>
    <section>
      <h1>Button 按钮</h1>
    </section>
    <section>
      <h2>代码示例</h2>
      <div class="starv-col">
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-button class="starv-btn">Default</s-button>
              <s-button class="starv-btn" type="dashed">Dashed</s-button>
              <s-button type="primary" class="starv-btn">Primary</s-button>
              <s-button type="info" class="starv-btn">Info</s-button>
              <s-button type="success" class="starv-btn">Success</s-button>
              <s-button type="warning" class="starv-btn">Warning</s-button>
              <s-button type="error" class="starv-btn">Error</s-button>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">按钮类型</div>
            <p>
              按钮类型有：主按钮、次按钮、虚线按钮以及四种颜色按钮，通过type设置不样式的按钮。
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
                {{buttonType}}
               </code>
            </pre>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-button class="starv-btn" type="primary" loading>Loading</s-button>
              <s-button
                class="starv-btn"
                type="primary"
                :loading="loading"
                @click="enterLoading"
              >Click me!</s-button>
              <s-button
                class="starv-btn"
                type="info"
                icon="iconplay"
                :loading="iconLoading"
                @click="enterIconLoading"
              >Click me!</s-button>
              <s-button
                class="starv-btn"
                type="primary"
                :loading="proLoading"
                loadType="progress"
                @click="enterProLoading"
              >Click me!</s-button>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">加载中状态</div>
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
                {{buttonLoading}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <h4>Basic</h4>
              <s-button-group class="starv-btn">
                <s-button>Cancel</s-button>
                <s-button>OK</s-button>
              </s-button-group>
              <s-button-group class="starv-btn">
                <s-button disabled>L</s-button>
                <s-button disabled>M</s-button>
                <s-button disabled>R</s-button>
              </s-button-group>
              <s-button-group class="starv-btn">
                <s-button>L</s-button>
                <s-button>M</s-button>
                <s-button>R</s-button>
              </s-button-group>

              <h4>With Icon</h4>
              <s-button-group class="starv-btn">
                <s-button type="primary">
                  <Icon slot="iconNode" type="iconarrow-double-left" />Go back
                </s-button>
                <s-button type="primary">
                  Go forward
                  <Icon slot="iconNode" type="iconarrow-double-right" />
                </s-button>
              </s-button-group>
              <s-button-group class="starv-btn">
                <s-button type="primary" icon="iconarrow-double-left" />
                <s-button type="primary" icon="iconarrow-double-right" />
              </s-button-group>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">按钮组合</div>
            <p>
              可以将多个 s-button 放入 s-button-group 的容器中。
              <i
                :class="['star-icon','starv-icon','iconarrow-down-bold',{'anticond-up':show.num7}] "
                @click="show.num7=!show.num7"
                :title="show.num7?'隐藏代码':'显示代码'"
              ></i>
            </p>
          </section>
          <section :class="['starv-code__details',{'starv-code__details-lger--show':show.num7}]">
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{buttonGroup}}
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
              <s-button type="primary" class="starv-btn" shape="circle" icon="iconsearch" />
              <s-button type="primary" class="starv-btn" icon="iconsearch">Search</s-button>
              <s-button shape="circle" class="starv-btn" icon="iconsearch" />
              <s-button icon="iconsearch" class="starv-btn">Search</s-button>
              <s-button class="starv-btn" type="dashed" shape="circle" icon="iconsearch" />
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">图标按钮</div>
            <p>
              当需要在 button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 button 内使用 Icon 组件。如果想控制 Icon 具体的位置，只能直接使用 Icon 组件，而非 icon 属性。
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
                {{buttonIcon}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-button class="starv-btn" type="primary">Primary</s-button>
              <s-button class="starv-btn" type="primary" disabled>Primary(disabled)</s-button>
              <br />
              <s-button class="starv-btn">Default</s-button>
              <s-button class="starv-btn" disabled>Default(disabled)</s-button>
              <br />
              <s-button class="starv-btn" type="dashed">Dashed</s-button>
              <s-button class="starv-btn" type="dashed" disabled>Dashed(disabled)</s-button>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">不可用状态</div>
            <p>
              添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。
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
                {{buttonDisabled}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-button class="starv-btn" backgroundColor="#A96AF7" fontColor="#FEFEFF">按钮</s-button>
              <s-button class="starv-btn" backgroundColor="#60BDFF" fontColor="#FEFEFF">按钮</s-button>
              <s-button class="starv-btn" backgroundColor="#FFD954" fontColor="#FEFEFF">按钮</s-button>
              <s-button class="starv-btn" backgroundColor="#FF618A" fontColor="#FEFEFF">按钮</s-button>
              <s-button class="starv-btn" backgroundColor="#555557" fontColor="#FEFEFF">按钮</s-button>
              <s-button class="starv-btn" backgroundColor="#F049BB" fontColor="#FEFEFF">按钮</s-button>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">自定义按钮背景颜色和字体颜色</div>
            <p>
              <code>backgroundColor</code> 属性设置按钮的背景颜色，<code>fontColor</code>属性可以设置按钮字体颜色。
              <i
                :class="['star-icon','starv-icon','iconarrow-down-bold',{'anticond-up':show.num8}] "
                @click="show.num8=!show.num8"
                :title="show.num8?'隐藏代码':'显示代码'"
              ></i>
            </p>
          </section>
          <section :class="['starv-code__details',{'starv-code__details--show':show.num8}]">
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{buttonColor}}
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
          <tr v-for="(item,index) in buttonAPI" :key="index">
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
import {
  buttonType,
  buttonIcon,
  buttonLoading,
  buttonDisabled,
  buttonGroup,
  buttonAPI,
  buttonColor
} from "../codeDemo/button";
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
      loading: false,
      iconLoading: false,
      proLoading: false,
      buttonType,
      buttonIcon,
      buttonLoading,
      buttonDisabled,
      buttonGroup,
      buttonAPI,
      buttonColor
    };
  },
  methods: {
    enterLoading() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 5000);
    },
    enterIconLoading() {
      this.iconLoading = true;
      setTimeout(() => {
        this.iconLoading = false;
      }, 5000);
    },
    enterProLoading() {
      this.proLoading = true;
      setTimeout(() => {
        this.proLoading = false;
      }, 2000);
    },
  },
};
</script>