<template>
  <article>
    <section>
      <h1>Checkbox 多选框</h1>
    </section>
    <section>
      <h2>代码示例</h2>
      <div class="starv-col">
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-checkbox label="简单的checkbox" />
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">基本用法</div>
            <p>
              简单的 checkbox。
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
                {{checkboxBasc}}
               </code>
            </pre>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-checkbox label="半选" half-checked />
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">半选状态</div>
            <p>
              <code>half-checked</code> 属性设置半选中状态，设置了半选中状态之后，v-model的选中状态就无效了
              <i
                :class="['star-icon','starv-icon','iconarrow-down-bold',{'anticond-up':show.num5}] "
                @click="show.num5=!show.num5"
                :title="show.num5?'隐藏代码':'显示代码'"
              ></i>
            </p>
          </section>
          <section :class="['starv-code__details',{'starv-code__details-sm--show':show.num5}]">
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{checkboxHalf}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-checkboxGroup v-model="phone">
                <s-checkbox label="苹果" />
                <s-checkbox label="华为" />
                <s-checkbox label="三星" />
                <s-checkbox label="小米" />
                <s-checkbox label="OPPO" />
                <s-checkbox label="VIVO" />
              </s-checkboxGroup>
              {{phone}}
              <br />
              <br />
              <s-checkboxGroup v-model="phoneCode">
                <s-checkbox label="苹果" label-value="IPHONE" />
                <s-checkbox label="华为" label-value="HUAWEI" />
                <s-checkbox label="三星" label-value="SAMSUNG" />
                <s-checkbox label="小米" label-value="MILLET" />
                <s-checkbox label="OPPO" />
                <s-checkbox label="VIVO" />
              </s-checkboxGroup>
              {{phoneCode}}
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">多选框组合</div>
            <p>
              使用
              <code>s-checkboxGroup</code>绑定数组生成多选框组合，默认
              <code>label</code>来判断是否选中，设置
              <code>label-value</code>属性就会这个属性值来判断是否选中
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
                {{checkboxGroup}}
               </code>  
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-checkbox label="简单的checkbox" backgroundColor="#A96AF7" fontColor="#FEFEFF" />
              <s-checkbox label="简单的checkbox" backgroundColor="#60BDFF" fontColor="#FEFEFF" />
              <s-checkbox label="简单的checkbox" backgroundColor="#FFD954" fontColor="#FF618A" />
              <s-checkbox label="简单的checkbox" backgroundColor="#F049BB" fontColor="#555557" />
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">自定义选中的背景色和图标样式</div>
            <p>
              <code>backgroundColor</code>属性可以设置选项选中后的背景颜色，
              <code>fontColor</code>属性可以设置选项选中后图标颜色。
              <i
                :class="['star-icon','starv-icon','iconarrow-down-bold',{'anticond-up':show.num9}] "
                @click="show.num9=!show.num9"
                :title="show.num9?'隐藏代码':'显示代码'"
              ></i>
            </p>
          </section>
          <section :class="['starv-code__details',{'starv-code__details--show':show.num9}]">
            <pre v-highlight>
               <code class="html"> 
                {{checkboxColor}}
               </code>
            </pre>
          </section>
        </section>
      </div>
      <div class="starv-col">
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-checkbox label="不可用状态" disabled />
              <br />
              <s-checkbox label="不可用勾选状态" :value="true" disabled />
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">不可用状态</div>
            <p>
              <code>disabled</code>属性设置为不可用状态。
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
                {{checkboxDisabled}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-checkbox label="动态控制组件" :disabled="disabled" v-model="checked" />
              <br />
              <br />
              <s-button type="primary" class="starv-btn" @click="checked = !checked">
                <span v-if="!checked">Checked</span>
                <span v-else>Unchecked</span>
              </s-button>
              <s-button type="primary" @click="disabled = !disabled">
                <span v-if="disabled">Usable</span>
                <span v-else>Disabled</span>
              </s-button>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">动态控制组件</div>
            <p>
              动态控制组件。
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
                {{checkboxMoving}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <s-checkbox label="半选" :half-checked="halfChecked" :value="checkAll" @on-change="change" />
            <br />
            <br />
            <div>
              <s-checkboxGroup v-model="checkList">
                <s-checkbox label="苹果" label-value="IPHONE" />
                <s-checkbox label="华为" label-value="HUAWEI" />
                <s-checkbox label="三星" label-value="SAMSUNG" />
              </s-checkboxGroup>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">全选</div>
            <p>
              实现全选效果。
              <i
                :class="['star-icon','starv-icon','iconarrow-down-bold',{'anticond-up':show.num8}] "
                @click="show.num8=!show.num8"
                :title="show.num8?'隐藏代码':'显示代码'"
              ></i>
            </p>
          </section>
          <section :class="['starv-code__details',{'starv-code__details-lger--show':show.num8}]">
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{checkboxAll}}
               </code>
            </pre>
            </div>
          </section>
        </section>
      </div>
    </section>
    <section class="starv-clear">
      <h2>API</h2>
      <h3>checkbox props</h3>
      <br />
      <table class="starv-table">
        <thead>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </thead>
        <tbody>
          <tr v-for="(item,index) in checkboxAPI" :key="index">
            <td v-html="item.name"></td>
            <td v-html="item.desc"></td>
            <td v-html="item.type"></td>
            <td v-html="item.default"></td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <h3>checkbox events</h3>
      <br />
      <table class="starv-table">
        <thead>
          <th>事件名</th>
          <th>说明</th>
          <th>返回值</th>
        </thead>
        <tbody>
          <tr v-for="(item,index) in checkboxEvents" :key="index">
            <td v-html="item.name"></td>
            <td v-html="item.desc"></td>
            <td v-html="item.type"></td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <h3>checkboxGroup props</h3>
      <br />
      <table class="starv-table">
        <thead>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </thead>
        <tbody>
          <tr v-for="(item,index) in checkboxGAPI" :key="index">
            <td v-html="item.name"></td>
            <td v-html="item.desc"></td>
            <td v-html="item.type"></td>
            <td v-html="item.default"></td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <h3>checkboxGroup events</h3>
      <br />
      <table class="starv-table">
        <thead>
          <th>事件名</th>
          <th>说明</th>
          <th>返回值</th>
        </thead>
        <tbody>
          <tr v-for="(item,index) in checkboxGEvents" :key="index">
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
  checkboxBasc,
  checkboxDisabled,
  checkboxHalf,
  checkboxMoving,
  checkboxGroup,
  checkboxAll,
  checkboxAPI,
  checkboxColor,
  checkboxEvents,
  checkboxGAPI,
  checkboxGEvents,
} from "../codeDemo/checkbox";
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
      },
      checked: true,
      disabled: false,
      checkboxBasc,
      checkboxDisabled,
      checkboxHalf,
      checkboxMoving,
      checkboxGroup,
      checkboxAll,
      checkboxAPI,
      checkboxColor,
      checkboxEvents,
      checkboxGAPI,
      checkboxGEvents,
      phone: ["华为"],
      phoneCode: ["IPHONE"],
      checkList: ["IPHONE"],
    };
  },
  computed: {
    halfChecked() {
      return this.checkList.length < 3 && this.checkList.length > 0;
    },
    checkAll() {
      return this.checkList.length === 3;
    },
  },
  methods: {
    change(val) {
      this.checkList = val ? ["IPHONE", "HUAWEI", "SAMSUNG"] : [];
    },
  },
};
</script>