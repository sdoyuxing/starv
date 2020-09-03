<template>
  <article>
    <section>
      <h1>Input 输入框</h1>
    </section>
    <section>
      <h2>代码示例</h2>
      <div class="starv-col">
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-Input placeholder="Enter email" style="width:300px" />
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
          <section :class="['starv-code__details',{'starv-code__details-sm--show':show.num1}]">
            <pre v-highlight>
               <code class="html"> 
                {{inputBasc}}
               </code>
            </pre>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <h4>前后缀图标</h4>
              <br />
              <s-Input prefix="iconsmile-filling" placeholder="请输入..." style="width: 300px" />
              <br />
              <s-input suffix="iconsearch" placeholder="请输入..." style="width: 300px" />
              <h4>前后缀图标以及清空按钮</h4>
              <br />
              <s-input
                prefix="iconsmile-filling"
                clearable
                placeholder="请输入..."
                style="width: 300px"
              />
              <br />
              <s-input suffix="iconsearch" clearable placeholder="请输入..." style="width: 300px" />
              <h4>
                <code>slot</code>自定义前后缀，可以是图标也可以是文字
              </h4>
              <br />
              <s-input placeholder="请输入..." style="width: 300px">
                <Icon type="iconemail" slot="prefix" />
                <i slot="suffix" style="font-size:14px">RMB</i>
              </s-input>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">前后缀图标</div>
            <p>
              通过设置
              <code>prefix</code> 和
              <code>suffix</code> 及同名
              <code>slot</code> 设置前缀及后缀图标，
              <code>slot</code>可以自定义显示文字或其他元素。
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
                {{inputIcon}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <!-- <s-input placeholder="请输入名称" clearable style="width:300px" labelText="名称" /> -->
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">输入框内容说明</div>
            <p>
              属性
              <code>labelText</code>设置输入框内容说明。
              <i
                :class="['star-icon','starv-icon','iconarrow-down-bold',{'anticond-up':show.num7}] "
                @click="show.num7=!show.num7"
                :title="show.num7?'隐藏代码':'显示代码'"
              ></i>
            </p>
          </section>
          <section :class="['starv-code__details',{'starv-code__details-sm--show':show.num7}]">
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{inputLabelText}}
               </code>  
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-input placeholder="请输入..." readonly style="width:300px" />
              <br />
              <s-input placeholder="请输入..." autofocus style="width:300px" />
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">
              支持
              <code>input</code>的原生属性
            </div>
            <p>
              支持
              <code>input</code>原生属性，
              <code>readonly</code>设置输入框只读;
              <code>autofocus</code>设置自动获取焦点。
              <i
                :class="['star-icon','starv-icon','iconarrow-down-bold',{'anticond-up':show.num10}] "
                @click="show.num10=!show.num10"
                :title="show.num10?'隐藏代码':'显示代码'"
              ></i>
            </p>
          </section>
          <section :class="['starv-code__details',{'starv-code__details-sm--show':show.num10}]">
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{inputAttr}}
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
              <s-input placeholder="请输入..." clearable style="width:300px" />
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">可清空</div>
            <p>
              使用
              <code>clearable</code>属性即可得到一个可清空的输入框。
              <i
                :class="['star-icon','starv-icon','iconarrow-down-bold',{'anticond-up':show.num2}] "
                @click="show.num2=!show.num2"
                :title="show.num2?'隐藏代码':'显示代码'"
              ></i>
            </p>
          </section>
          <section :class="['starv-code__details',{'starv-code__details-sm--show':show.num2}]">
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{inputClear}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-input placeholder="请输入..." maxlength="10" clearable style="width:300px" />
              <br />
              <s-input
                placeholder="请输入..."
                show-word-limit
                maxlength="10"
                clearable
                style="width:300px"
              />
              <div>
                <s-input
                  placeholder="请输入..."
                  show-word-limit
                  maxlength="20"
                  clearable
                  style="width:300px"
                />
              </div>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">输入长度限制</div>
            <p>
              属性
              <code>show-word-limit</code>显示数字统计，配合
              <code>maxlength</code>使用。
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
                {{inputMaxlength}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-input placeholder="请输入..." style="width:300px" disabled />
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">不可用状态</div>
            <p>
              <code>disabled</code>属性设置为不可用状态。
              <i
                :class="['star-icon','starv-icon','iconarrow-down-bold',{'anticond-up':show.num8}] "
                @click="show.num8=!show.num8"
                :title="show.num8?'隐藏代码':'显示代码'"
              ></i>
            </p>
          </section>
          <section :class="['starv-code__details',{'starv-code__details-sm--show':show.num8}]">
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{inputDisabled}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-input placeholder="请输入..." style="width:300px" type="password" />
              <br />
              <s-input placeholder="请输入..." style="width:300px" type="password" show-password />
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">密码框</div>
            <p>
              <code>type="password"</code>设置为密码框,
              <code>show-password</code>属性设置切换显示隐藏密码。
              <i
                :class="['star-icon','starv-icon','iconarrow-down-bold',{'anticond-up':show.num9}] "
                @click="show.num9=!show.num9"
                :title="show.num9?'隐藏代码':'显示代码'"
              ></i>
            </p>
          </section>
          <section :class="['starv-code__details',{'starv-code__details-sm--show':show.num9}]">
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{inputDisabled}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              {{inputEventsText}}
              <br />
              <s-input
                placeholder="请输入..."
                style="width:300px"
                @focus="handleFocus"
                @blur="handleBlur"
              />
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">
              支持
              <code>input</code>原生事件
            </div>
            <p>
               支持
              <code>input</code>原生事件
              <code>focus</code>获取焦点事件,
              <code>blur</code>失去焦点事件。
              <i
                :class="['star-icon','starv-icon','iconarrow-down-bold',{'anticond-up':show.num11}] "
                @click="show.num11=!show.num11"
                :title="show.num11?'隐藏代码':'显示代码'"
              ></i>
            </p>
          </section>
          <section :class="['starv-code__details',{'starv-code__details-lg--show':show.num11}]">
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{inputEventsCode}}
               </code>
            </pre>
            </div>
          </section>
        </section>
      </div>
    </section>
    <section class="starv-clear">
      <h2>API</h2>
      <h3>Input props</h3>
      <br />
      <table class="starv-table">
        <thead>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </thead>
        <tbody>
          <tr v-for="(item,index) in inputAPI" :key="index">
            <td v-html="item.name"></td>
            <td v-html="item.desc"></td>
            <td v-html="item.type"></td>
            <td v-html="item.default"></td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <h3>Input events</h3>
      <br />
      <table class="starv-table">
        <thead>
          <th>事件名</th>
          <th>说明</th>
          <th>返回值</th>
        </thead>
        <tbody>
          <tr v-for="(item,index) in inputEvents" :key="index">
            <td v-html="item.name"></td>
            <td v-html="item.desc"></td>
            <td v-html="item.type"></td>
          </tr>
        </tbody>
      </table>
       <br />
      <br />
      <h3>Input methods</h3>
      <br />
          <table class="starv-table">
        <thead>
          <th>事件名</th>
          <th>说明</th>
          <th>参数</th>
        </thead>
        <tbody>
          <tr v-for="(item,index) in inputMethods" :key="index">
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
import {
  inputBasc,
  inputClear,
  inputIcon,
  inputMaxlength,
  inputDisabled,
  inputLabelText,
  inputAPI,
  inputAttr,
  inputEvents,
  inputEventsCode,
  inputMethods
} from "../codeDemo/input";
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
        num9: false,
        num10: false,
        num11: false,
      },
      inputBasc,
      inputClear,
      inputIcon,
      inputMaxlength,
      inputDisabled,
      inputLabelText,
      inputAPI,
      inputAttr,
      inputEvents,
      inputEventsCode,
      inputMethods,
      inputEventsText: "",
    };
  },
  methods: {
    handleFocus() {
      this.inputEventsText = "获取焦点";
    },
    handleBlur() {
      this.inputEventsText = "失去焦点";
    },
  },
};
</script>