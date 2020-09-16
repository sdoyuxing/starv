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
              <s-poptip
                placement="top-start"
                class="starv-btn"
                title="文字提示"
                content="Top Left 文字提示"
              >
                <s-button>上左</s-button>
              </s-poptip>
              <s-poptip placement="top" class="starv-btn" title="文字提示" content="Top Center 文字提示">
                <s-button>上中</s-button>
              </s-poptip>
              <s-poptip placement="top-end" class="starv-btn" title="文字提示" content="Top Right 文字提示">
                <s-button>上右</s-button>
              </s-poptip>
              <div class="starv-center">
                <div class="float-left">
                  <s-poptip
                    placement="left-start"
                    class="starv-btn"
                    title="文字提示"
                    content="Left Top 文字提示"
                  >
                    <s-button>左上</s-button>
                  </s-poptip>
                  <s-poptip
                    placement="left"
                    class="starv-btn"
                    title="文字提示"
                    content="Left Center 文字提示"
                  >
                    <s-button>左中</s-button>
                  </s-poptip>
                  <s-poptip
                    placement="left-end"
                    class="starv-btn"
                    title="文字提示"
                    content="Left Bottom 文字提示"
                  >
                    <s-button>左下</s-button>
                  </s-poptip>
                </div>
                <div class="float-right">
                  <s-poptip
                    placement="right-start"
                    class="starv-btn"
                    title="文字提示"
                    content="Right Top 文字提示"
                  >
                    <s-button>右上</s-button>
                  </s-poptip>
                  <s-poptip
                    placement="right"
                    class="starv-btn"
                    title="文字提示"
                    content="Right Center 文字提示"
                  >
                    <s-button>右中</s-button>
                  </s-poptip>
                  <s-poptip
                    placement="right-end"
                    class="starv-btn"
                    title="文字提示"
                    content="Right Bottom 文字提示"
                  >
                    <s-button>右下</s-button>
                  </s-poptip>
                </div>
              </div>
              <s-poptip
                placement="bottom-start"
                class="starv-btn"
                title="文字提示"
                content="Bottom Left 文字提示"
              >
                <s-button>下左</s-button>
              </s-poptip>
              <s-poptip
                placement="bottom"
                class="starv-btn"
                title="文字提示"
                content="Bottom Center 文字提示"
              >
                <s-button>下中</s-button>
              </s-poptip>
              <s-poptip
                placement="bottom-end"
                class="starv-btn"
                title="文字提示"
                content="Bottom Right 文字提示"
              >
                <s-button>下右</s-button>
              </s-poptip>
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
                {{poptipBasc}}
               </code>
            </pre>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-poptip :visible="visible">
                <a>Click</a>
                <div slot="title">
                  <i>标题</i>
                </div>
                <div slot="content">
                  <a @click="close">close</a>
                </div>
              </s-poptip>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">自定义内容和内容关闭提示</div>
            <p>
              <code>slot="content"</code>自定义内容
              <code>visible</code>设置提示的显示和隐藏
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
                {{poptipContent}}
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
              <s-poptip placement="bottom" class="starv-btn" trigger="hover">
                <s-button>hover触发</s-button>
                <div slot="title">
                  <p>标题</p>
                </div>
                <div slot="content">
                  <p>hover触发提示</p>
                </div>
              </s-poptip>
              <s-poptip placement="bottom" class="starv-btn" trigger="click">
                <s-button>click触发</s-button>
                <div slot="title">
                  <p>标题</p>
                </div>
                <div slot="content">
                  <p>click触发提示</p>
                </div>
              </s-poptip>
              <s-poptip placement="bottom" class="starv-btn" trigger="focus">
                <s-button>focus触发</s-button>
                <div slot="title">
                  <p>标题</p>
                </div>
                <div slot="content">
                  <p>focus触发提示</p>
                </div>
              </s-poptip>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">触发方式</div>
            <p>
              可以通过<code>trigger</code>设置<code>hover</code><code>click</code><code>focus</code>设置触发方式
              <code>slot="content"</code>定义内容和样式
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
                {{poptipTrigger}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-poptip placement="bottom" class="starv-btn" content="延迟显示" :delay="1000">
                <s-button>延迟1秒显示</s-button>
              </s-poptip>
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
                {{poptipDelay}}
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
          <tr v-for="(item,index) in poptipAPI" :key="index">
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
          <tr v-for="(item,index) in poptipEvents" :key="index">
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
          <tr v-for="(item,index) in poptipSlot" :key="index">
            <td v-html="item.name"></td>
            <td v-html="item.desc"></td>
          </tr>
        </tbody>
      </table>
    </section>
  </article>
</template>
<script>
import poptip from "../codeDemo/poptip";
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
      visible:false,
      ...poptip,
    };
  },
  methods: {
    close(){
      this.visible=false
    }
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