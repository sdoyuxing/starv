<template>
  <article>
    <section>
      <h1>Tooltip 文字提示</h1>
    </section>
    <section>
      <h2>代码示例</h2>
      <div class="starv-col">
        <section class="starv-code">
          <section class="starv-code__demo">
            <div style="text-align: center;">
              <s-tooltip placement="top-start" class="starv-btn" content="Top Left 文字提示">
                <s-button>上左</s-button>
              </s-tooltip>
              <s-tooltip placement="top" class="starv-btn" content="Top Center 文字提示">
                <s-button>上中</s-button>
              </s-tooltip>
              <s-tooltip placement="top-end" class="starv-btn" content="Top Right 文字提示">
                <s-button>上右</s-button>
              </s-tooltip>
              <div class="starv-center">
                <div class="float-left">
                  <s-tooltip placement="left-start" class="starv-btn" content="Left Top 文字提示">
                    <s-button>左上</s-button>
                  </s-tooltip>
                  <s-tooltip placement="left" class="starv-btn" content="Left Center 文字提示">
                    <s-button>左中</s-button>
                  </s-tooltip>
                  <s-tooltip placement="left-end" class="starv-btn" content="Left Bottom 文字提示">
                    <s-button>左下</s-button>
                  </s-tooltip>
                </div>
                <div class="float-right">
                  <s-tooltip placement="right-start" class="starv-btn" content="Right Top 文字提示">
                    <s-button>右上</s-button>
                  </s-tooltip>
                  <s-tooltip placement="right" class="starv-btn" content="Right Center 文字提示">
                    <s-button>右中</s-button>
                  </s-tooltip>
                  <s-tooltip placement="right-end" class="starv-btn" content="Right Bottom 文字提示">
                    <s-button>右下</s-button>
                  </s-tooltip>
                </div>
              </div>
              <s-tooltip placement="bottom-start" class="starv-btn" content="Bottom Left 文字提示">
                <s-button>下左</s-button>
              </s-tooltip>
              <s-tooltip placement="bottom" class="starv-btn" content="Bottom Center 文字提示">
                <s-button>下中</s-button>
              </s-tooltip>
              <s-tooltip placement="bottom-end" class="starv-btn" content="Bottom Right 文字提示">
                <s-button>下右</s-button>
              </s-tooltip>
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
          <section :class="['starv-code__details',{'starv-code__details-lger--show':show.num1}]">
            <pre v-highlight>
               <code class="html"> 
                {{tooltipBasc}}
               </code>
            </pre>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-tooltip placement="bottom" :disabled="disabled" class="starv-btn" content="点击关闭提示">
                <s-button @click="disabled=!disabled">点击{{disabled?'显示':'关闭'}}提示</s-button>
              </s-tooltip>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">禁用</div>
            <p>
              <code>disabled</code>可以不提示
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
                {{tooltipDisabled}}
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
              <s-tooltip placement="bottom" class="starv-btn">
                <s-button>多行</s-button>
                <div slot="content">
                  <p>这个社会一直都在拿你和别人比。</p>
                  <p>因为这是人的博弈竞争。</p>
                </div>
              </s-tooltip>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">多行</div>
            <p>
              可以通过
              <code>slot="content"</code>定义内容和样式
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
                {{tooltipContent}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-tooltip placement="bottom" class="starv-btn" content="延迟显示" :delay="1000">
                <s-button>延迟1秒显示</s-button>
              </s-tooltip>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">延时</div>
            <p>
              <code>delay</code>设置延迟时间，单位是毫秒
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
                {{tooltipDelay}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
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
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">自动换行</div>
            <p>
              设置属性
              <code>max-width</code>，当超出最大值后，文本将自动换行，并两端对齐。
              <i
                :class="['star-icon','starv-icon','iconarrow-down-bold',{'anticond-up':show.num7}] "
                @click="show.num7=!show.num7"
                :title="show.num7?'隐藏代码':'显示代码'"
              ></i>
            </p>
          </section>
          <section :class="['starv-code__details',{'starv-code__details-lg--show':show.num7}]">
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{tooltipWidth}}
               </code>  
            </pre>
            </div>
          </section>
        </section>
      </div>
    </section>
    <section class="starv-clear">
      <h2>API</h2>
      <h3>Tooltip props</h3>
      <br />
      <table class="starv-table">
        <thead>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </thead>
        <tbody>
          <tr v-for="(item,index) in tooltipAPI" :key="index">
            <td v-html="item.name"></td>
            <td v-html="item.desc"></td>
            <td v-html="item.type"></td>
            <td v-html="item.default"></td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <h3>Tooltip events</h3>
      <br />
      <table class="starv-table">
        <thead>
          <th>事件名</th>
          <th>说明</th>
          <th>返回值</th>
        </thead>
        <tbody>
          <tr v-for="(item,index) in tooltipEvents" :key="index">
            <td v-html="item.name"></td>
            <td v-html="item.desc"></td>
            <td v-html="item.type"></td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <h3>Tooltip slot</h3>
      <br />
      <table class="starv-table">
        <thead>
          <th>事件名</th>
          <th>说明</th>
        </thead>
        <tbody>
          <tr v-for="(item,index) in tooltipSlot" :key="index">
            <td v-html="item.name"></td>
            <td v-html="item.desc"></td>
          </tr>
        </tbody>
      </table>
    </section>
  </article>
</template>
<script>
import tooltip from "../codeDemo/tooltip";
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
      ...tooltip,
    };
  },
  methods: {},
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