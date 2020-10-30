<template>
  <article>
    <section>
      <h1>Tabs 标签页</h1>
    </section>
    <section>
      <h2>代码示例</h2>
      <div class="starv-col">
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-tabs v-model="tabsIndex">
                <s-tab-pane label="标签一" name="name1"
                  >标签一的内容</s-tab-pane
                >
                <s-tab-pane label="标签二" name="name2"
                  >标签二的内容</s-tab-pane
                >
                <s-tab-pane label="标签三" name="name3"
                  >标签三的内容</s-tab-pane
                >
              </s-tabs>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">基本用法</div>
            <p>
              最简单的用法。
              <i
                :class="[
                  'star-icon',
                  'starv-icon',
                  'iconarrow-down-bold',
                  { 'anticond-up': show.num1 },
                ]"
                @click="show.num1 = !show.num1"
                :title="show.num1 ? '隐藏代码' : '显示代码'"
              ></i>
            </p>
          </section>
          <section
            :class="[
              'starv-code__details',
              { 'starv-code__details-sm--show': show.num1 },
            ]"
          >
            <pre v-highlight>
               <code class="html"> 
                {{tagBasc}}
               </code>
            </pre>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-tabs>
                <s-tab-pane label="标签一" name="name1" icon="iconsmile"
                  >标签一的内容</s-tab-pane
                >
                <s-tab-pane label="标签二" name="name2" icon="iconmeh"
                  >标签二的内容</s-tab-pane
                >
                <s-tab-pane label="标签三" name="name3" icon="iconcry"
                  >标签三的内容</s-tab-pane
                >
              </s-tabs>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">标签样式</div>
            <p>
              <code>type</code>可以设置 <code>default</code>、
              <code>primary</code>、 <code>info</code>、 <code>warning</code>、
              <code>error</code>五种样式，默认是
              <code>default</code>
              <i
                :class="[
                  'star-icon',
                  'starv-icon',
                  'iconarrow-down-bold',
                  { 'anticond-up': show.num5 },
                ]"
                @click="show.num5 = !show.num5"
                :title="show.num5 ? '隐藏代码' : '显示代码'"
              ></i>
            </p>
          </section>
          <section
            :class="[
              'starv-code__details',
              { 'starv-code__details-lg--show': show.num5 },
            ]"
          >
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{tagTpye}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-tabs type="card">
                <s-tab-pane label="标签一" name="name1" closable 
                  >标签一的内容</s-tab-pane
                >
                <s-tab-pane label="标签二" name="name2" closable 
                  >标签二的内容</s-tab-pane
                >
                <s-tab-pane label="标签三" name="name3" closable 
                  >标签三的内容</s-tab-pane
                >
              </s-tabs>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">可选择</div>
            <p>
              <code>checkable</code
              >设置是否可选择，<code>checked</code>设置是否选中状态。
              <i
                :class="[
                  'star-icon',
                  'starv-icon',
                  'iconarrow-down-bold',
                  { 'anticond-up': show.num7 },
                ]"
                @click="show.num7 = !show.num7"
                :title="show.num7 ? '隐藏代码' : '显示代码'"
              ></i>
            </p>
          </section>
          <section
            :class="[
              'starv-code__details',
              { 'starv-code__details--show': show.num7 },
            ]"
          >
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{tagCheck}}
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
              <s-tabs>
                <s-tab-pane label="标签一" name="name1" disabled
                  >标签一的内容</s-tab-pane
                >
                <s-tab-pane label="标签二" name="name2"
                  >标签二的内容</s-tab-pane
                >
                <s-tab-pane label="标签三" name="name3" icon="iconmeh"
                  >标签三的内容</s-tab-pane
                >
              </s-tabs>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">禁用</div>
            <p>
              <code>closable</code>可以设置关闭标签。
              <i
                :class="[
                  'star-icon',
                  'starv-icon',
                  'iconarrow-down-bold',
                  { 'anticond-up': show.num2 },
                ]"
                @click="show.num2 = !show.num2"
                :title="show.num2 ? '隐藏代码' : '显示代码'"
              ></i>
            </p>
          </section>
          <section
            :class="[
              'starv-code__details',
              { 'starv-code__details--show': show.num2 },
            ]"
          >
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{tagClose}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-tabs type="card">
                <s-tab-pane label="标签一" name="name1"
                  >标签一的内容</s-tab-pane
                >
                <s-tab-pane label="标签二" name="name2"
                  >标签二的内容</s-tab-pane
                >
                <s-tab-pane label="标签三" name="name3"
                  >标签三的内容</s-tab-pane
                >
              </s-tabs>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">
              自定义背景颜色、字体颜色、边框颜色
            </div>
            <p>
              <code>background-color</code>属性设置背景颜色、
              <code>borderColor</code>属性设置边框颜色、
              <code>fontColor</code>属性设置字体颜色、
              <code>closedColor</code>属性设置删除图标字体颜色。
              <i
                :class="[
                  'star-icon',
                  'starv-icon',
                  'iconarrow-down-bold',
                  { 'anticond-up': show.num4 },
                ]"
                @click="show.num4 = !show.num4"
                :title="show.num4 ? '隐藏代码' : '显示代码'"
              ></i>
            </p>
          </section>
          <section
            :class="[
              'starv-code__details',
              { 'starv-code__details--show': show.num4 },
            ]"
          >
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{tagColor}}
               </code>
            </pre>
            </div>
          </section>
        </section>
      </div>
    </section>
    <section class="starv-clear">
      <h2>API</h2>
      <h3>Tag props</h3>
      <br />
      <table class="starv-table">
        <thead>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tagAPI" :key="index">
            <td v-html="item.name"></td>
            <td v-html="item.desc"></td>
            <td v-html="item.type"></td>
            <td v-html="item.default"></td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <h3>Tag events</h3>
      <br />
      <table class="starv-table">
        <thead>
          <th>事件名</th>
          <th>说明</th>
          <th>返回值</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tagEvents" :key="index">
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
import tag from "../codeDemo/tag";
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
      ...tag,
    };
  },
  methods: {},
};
</script>