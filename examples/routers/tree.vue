<template>
  <article>
    <section>
      <h1>Tree 树形控件</h1>
    </section>
    <section>
      <h2>代码示例</h2>
      <div class="starv-col">
        <section class="starv-code">
          <section class="starv-code__demo">
            <s-tree :data="treeData"></s-tree>
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
              { 'starv-code__details-lger--show': show.num1 },
            ]"
          >
            <pre v-highlight>
               <code class="html"> 
                {{treeBasc}}
               </code>
            </pre>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <s-tree :data="treeData" :expand-node="false"></s-tree>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">点击标题不展开节点</div>
            <p>
              设置属性
              <code>expand-node</code>，在点击节点标题时，会展开/收起子节点。
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
                {{treeExpandNode}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <s-tree :data="expandData" checkbox></s-tree>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">
              默认展开、选中、勾选和禁用
            </div>
            <p>
              给节点设置 <code>expand</code>、<code>selected</code>、<code
                >checked</code
              >
              和 <code>disabled</code> 可以将节点设置为展开、选中、勾选和禁用。
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
                {{treeExpand}}
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
              <s-tree :data="treeData" checkbox></s-tree>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">可勾选</div>
            <p>
              设置属性 <code>checkbox</code> 可以对节点进行勾选。
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
              { 'starv-code__details-lger--show': show.num2 },
            ]"
          >
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{treeCheckbox}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <s-tree :data="lazyData" lazy :load-data="loadData"></s-tree>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">异步加载子节点</div>
            <p>
              <code>lazy</code>设置异步加载，<code>load-data</code>返回子节点
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
                {{treeLazy}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-tree :data="renderData"></s-tree>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">自定义节点内容</div>
            <p>
              <code>render</code>返回返回值为自定义的内容
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
                {{treeRender}}
               </code>  
            </pre>
            </div>
          </section>
        </section>
      </div>
    </section>
    <section class="starv-clear">
      <h2>API</h2>
      <h3>Tree props</h3>
      <br />
      <table class="starv-table">
        <thead>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in treeAPI" :key="index">
            <td v-html="item.name"></td>
            <td v-html="item.desc"></td>
            <td v-html="item.type"></td>
            <td v-html="item.default"></td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <h3>Tree events</h3>
      <br />
      <table class="starv-table">
        <thead>
          <th>事件名</th>
          <th>说明</th>
          <th>返回值</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in treeEvents" :key="index">
            <td v-html="item.name"></td>
            <td v-html="item.desc"></td>
            <td v-html="item.type"></td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <h3>Children</h3>
      <br />
      <table class="starv-table">
        <thead>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in treeChildren" :key="index">
            <td v-html="item.name"></td>
            <td v-html="item.desc"></td>
            <td v-html="item.type"></td>
            <td v-html="item.default"></td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <h3>Tree Methods</h3>
      <br />
      <table class="starv-table">
        <thead>
          <th>事件名</th>
          <th>说明</th>
          <th>返回值</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in treeMethods" :key="index">
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
import tree from "../codeDemo/tree";
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
        num8: false,
      },
      disabled: false,
      treeData: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1",
                },
              ],
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1",
                },
              ],
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1",
                },
              ],
            },
          ],
        },
      ],
      lazyData: [
        {
          label: "一级 1",
          children: [],
        },
      ],
      expandData: [
        {
          label: "一级 1",
          expand: true,
          children: [
            {
              label: "二级 1-1",
              expand: true,
              children: [
                {
                  label: "三级 1-1-1",
                  disabled: true,
                },
              ],
            },
          ],
        },
        {
          label: "一级 2",
          expand: true,
          children: [
            {
              label: "二级 2-1",
              expand: true,
              children: [
                {
                  label: "三级 2-1-1",
                  selected: true,
                },
              ],
            },
            {
              label: "二级 2-2",
              expand: true,
              children: [
                {
                  label: "三级 2-2-1",
                  checked: true,
                },
              ],
            },
          ],
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1",
                },
              ],
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1",
                },
              ],
            },
          ],
        },
      ],
      renderData: [
        {
          label: "一级 1",
          expand: true,
          render: (data) => `<s-tag :type="primary">${data.label}</s-tag>`,
          children: [
            {
              label: "二级 1-1",
              expand: true,
              render: (data) => `<s-tag :type="info">${data.label}</s-tag>`,
              children: [
                {
                  label: "三级 1-1-1",
                  expand: true,
                  render(data) {
                    return `<s-tag :type="warning">${data.label}</s-tag>`;
                  },
                },
              ],
            },
          ],
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1",
                },
              ],
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1",
                },
              ],
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1",
                },
              ],
            },
          ],
        },
      ],
      ...tree,
    };
  },
  methods: {
    loadData(item, resolve) {
      setTimeout(() => {
        const data = [
          {
            label: "子节点1",
            loading: false,
            children: [],
          },
          {
            label: "子节点2",
            loading: false,
            children: [],
          },
        ];
        resolve(data);
      }, 1000);
    },
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