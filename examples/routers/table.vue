<template>
  <article>
    <section>
      <h1>Table 表格</h1>
    </section>
    <section>
      <h2>代码示例</h2>
      <div class="starv-col">
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-table :data="tableData">
                <column prop="name">姓名</column>
                <column prop="sex">性别</column>
                <column prop="age">年龄</column>
                <column prop="flats">公寓</column>
                <column prop="room">房间</column>
              </s-table>
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
              { 'starv-code__details-lg--show': show.num1 },
            ]"
          >
            <pre v-highlight>
               <code class="html"> 
                {{tableBasc}}
               </code>
            </pre>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-table
                class="customize"
                :data="tableData"
                :row-class-name="rowClassName"
              >
                <column prop="name">姓名</column>
                <column prop="sex">性别</column>
                <column prop="age">年龄</column>
                <column prop="flats">公寓</column>
                <column prop="room">房间</column>
              </s-table>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">自定义行样式</div>
            <p>
              <code>row-class-name</code>属性对应函数的返回class值设置样式
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
              { 'starv-code__details-lger--show': show.num5 },
            ]"
          >
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{tableRowClass}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-table class="customize" :data="cellStyleData">
                <column prop="name">姓名</column>
                <column prop="sex">性别</column>
                <column prop="age">年龄</column>
                <column prop="flats">公寓</column>
                <column prop="room">房间</column>
              </s-table>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">自定义单元格样式</div>
            <p>
              data数组对象中属性
              <code>cellClassName</code>属性设置单元格的样式类
              <i
                :class="[
                  'star-icon',
                  'starv-icon',
                  'iconarrow-down-bold',
                  { 'anticond-up': show.num3 },
                ]"
                @click="show.num3 = !show.num3"
                :title="show.num3 ? '隐藏代码' : '显示代码'"
              ></i>
            </p>
          </section>
          <section
            :class="[
              'starv-code__details',
              { 'starv-code__details-lger--show': show.num3 },
            ]"
          >
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{tableCellClass}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-table :data="tableData" width="700">
                <column prop="name" width="100" fixed="left">姓名</column>
                <column prop="sex" width="200">性别</column>
                <column prop="age" width="200">年龄</column>
                <column prop="flats" width="200">公寓</column>
                <column prop="room" fixed="right" width="100">房间</column>
              </s-table>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">固定列</div>
            <p>
              <code>fixed</code
              >属性值为<code>left</code>、<code>right</code>设置列左固定或右固定
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
              { 'starv-code__details-lger--show': show.num7 },
            ]"
          >
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{tableFixed}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-table :data="tableData">
                <column type="checkbox"></column>
                <column prop="name">姓名</column>
                <column prop="sex">性别</column>
                <column prop="age">年龄</column>
                <column prop="flats">公寓</column>
                <column prop="room">房间</column>
              </s-table>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">多选</div>
            <p>
              通过给 columns 数据设置一项，指定
              <code>type: 'checkbox'</code>，即可自动开启多选功能
              <i
                :class="[
                  'star-icon',
                  'starv-icon',
                  'iconarrow-down-bold',
                  { 'anticond-up': show.num9 },
                ]"
                @click="show.num9 = !show.num9"
                :title="show.num9 ? '隐藏代码' : '显示代码'"
              ></i>
            </p>
          </section>
          <section
            :class="[
              'starv-code__details',
              { 'starv-code__details-lger--show': show.num9 },
            ]"
          >
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{tableCheckbox}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-table :data="tableData">
                <column prop="name">姓名</column>
                <column prop="sex" :filters="filters">性别</column>
                <column prop="age">年龄</column>
                <column prop="flats">公寓</column>
                <column prop="room">房间</column>
              </s-table>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">筛选</div>
            <p>
              column组件或者columns数组对象中添加<code>filters</code>属性开启筛选，filters值是你要筛选值的数组。
              <i
                :class="[
                  'star-icon',
                  'starv-icon',
                  'iconarrow-down-bold',
                  { 'anticond-up': show.num11 },
                ]"
                @click="show.num11 = !show.num11"
                :title="show.num11 ? '隐藏代码' : '显示代码'"
              ></i>
            </p>
          </section>
          <section
            :class="[
              'starv-code__details',
              { 'starv-code__details-lger--show': show.num11 },
            ]"
          >
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{tableFilters}}
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
              <s-table :data="tableData" bordered>
                <column prop="name">姓名</column>
                <column prop="sex">性别</column>
                <column prop="age">年龄</column>
                <column prop="flats">公寓</column>
                <column prop="room">房间</column>
              </s-table>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">带边框</div>
            <p>
              <code>bordered</code>可以设置带边框样式。
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
              { 'starv-code__details-lg--show': show.num2 },
            ]"
          >
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{tableBorder}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-table class="customize" :data="tableData">
                <column prop="name" class-name="info">姓名</column>
                <column prop="sex">性别</column>
                <column prop="age">年龄</column>
                <column prop="flats">公寓</column>
                <column prop="room">房间</column>
              </s-table>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">自定义列样式</div>
            <p>
              column组件的 <code>class-name</code>属性设置列的样式类。
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
              { 'starv-code__details-lger--show': show.num4 },
            ]"
          >
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{tableColClass}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-table height="250" :data="tableData">
                <column prop="name" class-name="info">姓名</column>
                <column prop="sex">性别</column>
                <column prop="age">年龄</column>
                <column prop="flats">公寓</column>
                <column prop="room">房间</column>
              </s-table>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">固定表头</div>
            <p>
              通过设置属性
              <code> height </code> 给表格指定高度后，会自动固定表头
              <i
                :class="[
                  'star-icon',
                  'starv-icon',
                  'iconarrow-down-bold',
                  { 'anticond-up': show.num8 },
                ]"
                @click="show.num8 = !show.num8"
                :title="show.num8 ? '隐藏代码' : '显示代码'"
              ></i>
            </p>
          </section>
          <section
            :class="[
              'starv-code__details',
              { 'starv-code__details-lg--show': show.num8 },
            ]"
          >
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{alertStyle}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-table :data="tableData" width="700" height="300">
                <column prop="name" width="100" fixed="left">姓名</column>
                <column prop="sex" width="200">性别</column>
                <column prop="age" width="200">年龄</column>
                <column prop="flats" width="200">公寓</column>
                <column prop="room" fixed="right" width="100">房间</column>
              </s-table>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">固定表头和列</div>
            <p>
              固定表头和列
              <i
                :class="[
                  'star-icon',
                  'starv-icon',
                  'iconarrow-down-bold',
                  { 'anticond-up': show.num6 },
                ]"
                @click="show.num6 = !show.num6"
                :title="show.num6 ? '隐藏代码' : '显示代码'"
              ></i>
            </p>
          </section>
          <section
            :class="[
              'starv-code__details',
              { 'starv-code__details-lger--show': show.num6 },
            ]"
          >
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{tableFixed}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-table :data="tableData">
                <column prop="name">姓名</column>
                <column prop="sex">性别</column>
                <column prop="age">年龄</column>
                <column prop="flats">公寓</column>
                <column prop="room" sort>房间</column>
              </s-table>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">排序</div>
            <p>
              column组件或者columns数组对象中添加<code>sort</code>属性开启排序
              <i
                :class="[
                  'star-icon',
                  'starv-icon',
                  'iconarrow-down-bold',
                  { 'anticond-up': show.num10 },
                ]"
                @click="show.num10 = !show.num10"
                :title="show.num10 ? '隐藏代码' : '显示代码'"
              ></i>
            </p>
          </section>
          <section
            :class="[
              'starv-code__details',
              { 'starv-code__details-lger--show': show.num10 },
            ]"
          >
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{tableSort}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-table :data="tableData">
                <column prop="name">姓名</column>
                <column prop="sex">性别</column>
                <column prop="age">年龄</column>
                <column prop="flats">公寓</column>
                <column prop="room">房间</column>
                <column width="200" align="center" fixed="right">
                  操作
                  <template slot="format">
                    <s-button type="info">查看</s-button>
                    <s-button type="error">删除</s-button>
                  </template>
                </column>
              </s-table>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">自定义列模板</div>
            <p>
              <code>slot="format"</code>自定义列模板
              <i
                :class="[
                  'star-icon',
                  'starv-icon',
                  'iconarrow-down-bold',
                  { 'anticond-up': show.num12 },
                ]"
                @click="show.num12 = !show.num12"
                :title="show.num12 ? '隐藏代码' : '显示代码'"
              ></i>
            </p>
          </section>
          <section
            :class="[
              'starv-code__details',
              { 'starv-code__details-lger--show': show.num12 },
            ]"
          >
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{tableFormat}}
               </code>
            </pre>
            </div>
          </section>
        </section>
      </div>
    </section>
    <section class="starv-clear">
      <h2>API</h2>
      <h3>Table props</h3>
      <br />
      <table class="starv-table">
        <thead>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tableAPI" :key="index">
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
          <tr v-for="(item, index) in tableEvents" :key="index">
            <td v-html="item.name"></td>
            <td v-html="item.desc"></td>
            <td v-html="item.type"></td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <h3>Column props</h3>
      <br />
      <table class="starv-table">
        <thead>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in columnProps" :key="index">
            <td v-html="item.name"></td>
            <td v-html="item.desc"></td>
            <td v-html="item.type"></td>
            <td v-html="item.default"></td>
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
          <tr v-for="(item, index) in alertSlots" :key="index">
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
import table from "../codeDemo/table";
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
        num6: false,
        num8: false,
        num9: false,
        num10: false,
        num11: false,
        num12: false,
      },
      filters: [
        {
          text: "男",
          value: "男",
        },
        {
          text: "女",
          value: "女",
        },
      ],
      ...table,
      tableData: [
        {
          name: "张玮",
          sex: "男",
          age: 18,
          flats: "爱情公寓",
          room: "3606",
        },
        {
          name: "曾小贤",
          sex: "男",
          age: 18,
          flats: "爱情公寓",
          room: "3606",
        },
        {
          name: "林宛瑜",
          sex: "女",
          age: 18,
          flats: "爱情公寓",
          room: "3605",
        },
        {
          name: "吕小布",
          sex: "男",
          age: 18,
          flats: "爱情公寓",
          room: "3606",
        },
        {
          name: "陈美嘉",
          sex: "女",
          age: 18,
          flats: "爱情公寓",
          room: "3605",
        },
      ],
      cellStyleData: [
        {
          name: "张玮",
          sex: "男",
          age: 18,
          flats: "爱情公寓",
          room: "3606",
        },
        {
          name: "曾小贤",
          sex: "男",
          age: 18,
          flats: "爱情公寓",
          room: "3606",
          cellClassName: {
            room: "error",
            name: "info",
          },
        },
        {
          name: "林宛瑜",
          sex: "女",
          age: 18,
          flats: "爱情公寓",
          room: "3605",
        },
        {
          name: "吕小布",
          sex: "男",
          age: 18,
          flats: "爱情公寓",
          room: "3606",
        },
        {
          name: "陈美嘉",
          sex: "女",
          age: 18,
          flats: "爱情公寓",
          room: "3605",
        },
      ],
    };
  },
  methods: {
    rowClassName(row, index) {
      if (row.name === "林宛瑜") {
        return "error";
      }
      return "";
    },
  },
};
</script>
<style lang="less" scoped>
.customize /deep/ .error {
  background-color: #ff6600;
  color: #fff;
}
.customize /deep/ .info {
  background-color: #2db7f5;
  color: #fff;
}
</style>