<template>
  <article>
    <section>
      <h1>DatePicker 日期选择器</h1>
    </section>
    <section>
      <h2>代码示例</h2>
      <div class="starv-col">
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-date-picker
                placeholder="请选择日期"
                type="date"
                multiple
                style="width: 200px"
              ></s-date-picker>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">基本用法</div>
            <p>
              设置属性 type 为 <code>date</code> 显示选择日期。
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
                {{datepickerBasc}}
               </code>
            </pre>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-date-picker type="daterange" placeholder="请选择范围" style="width: 200px"></s-date-picker>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">选择范围</div>
            <p>
              设置属性 type 为 <code>daterange</code> 显示选择范围。
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
              { 'starv-code__details--show': show.num5 },
            ]"
          >
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{daterange}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-date-picker
                placeholder="请选择日期"
                type="date"
                style="width: 200px"
                :disabledDate="disabledfn1"
              ></s-date-picker>
              <s-date-picker
                placeholder="请选择日期"
                type="date"
                style="width: 200px"
                :disabledDate="disabledfn"
              ></s-date-picker>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">不可选日期</div>
            <p>
              设置属性
              <code>disabledDate</code> 是函数，参数为当前的日期，需要返回
              Boolean 是否禁用这天。
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
              { 'starv-code__details-lg--show': show.num7 },
            ]"
          >
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{datepickerDisable}}
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
              <s-date-picker
                placeholder="请选择周"
                type="week"
                style="width: 200px"
              ></s-date-picker>
              <s-date-picker
                placeholder="请选择月份"
                type="month"
                style="width: 200px; margin-left: 30px"
              ></s-date-picker>
              <s-date-picker
                placeholder="请选择年份"
                type="year"
                style="width: 200px; margin-left: 30px"
              ></s-date-picker>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">周、月和年</div>
            <p>
              设置属性 type 为 <code>year</code> 或
              <code>month</code> 可以使用选择年或月的功能。
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
              { 'starv-code__details-sm--show': show.num2 },
            ]"
          >
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{datepickerType}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-date-picker type="date" format="yyyy年MM月dd日" placeholder="yyyy年MM月dd日" style="width: 200px"></s-date-picker>
              <s-date-picker type="date" format="yyyy/MM/dd" placeholder="yyyy/MM/dd" style="width: 200px; margin-left: 30px"></s-date-picker>
              <br />
              <s-date-picker type="daterange" format="yyyy/MM/dd" placeholder="yyyy/MM/dd" style="width: 200px"></s-date-picker>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">日期格式</div>
            <p>
              设置属性 format 可以设置显示的日期格式。
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
                {{dateFormat}}
               </code>
            </pre>
            </div>
          </section>
        </section>
      </div>
    </section>
    <section class="starv-clear">
      <h2>API</h2>
      <h3>DatePicker props</h3>
      <br />
      <table class="starv-table">
        <thead>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in datepickerAPI" :key="index">
            <td v-html="item.name"></td>
            <td v-html="item.desc"></td>
            <td v-html="item.type"></td>
            <td v-html="item.default"></td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <h3>DatePicker events</h3>
      <br />
      <table class="starv-table">
        <thead>
          <th>事件名</th>
          <th>说明</th>
          <th>返回值</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in datepickerEvents" :key="index">
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
import datepicker from "../codeDemo/datepicker";
export default {
  data() {
    return {
      show: {
        num1: false,
        num2: false,
        num4: false,
        num5: false,
        num7: false,
        num6: false,
        num8: false,
      },
      ...datepicker,
      index: 15,
    };
  },
  methods: {
    disabledfn(date) {
      const disabledDay = date.getDate();
      return disabledDay === 15;
    },
    disabledfn1(date) {
      return date && date.valueOf() < Date.now() - 86400000;
    },
  },
};
</script>