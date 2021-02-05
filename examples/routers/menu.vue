<template>
  <article>
    <section>
      <h1>Menu 导航菜单</h1>
    </section>
    <section>
      <h2>代码示例</h2>
      <div class="starv-col">
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-menu>
                <s-menu-item name="1">
                  <Icon type="iconuser" />用户管理</s-menu-item
                >
                <s-menu-item name="2"
                  ><Icon type="icondata-view" />统计管理</s-menu-item
                >
                <s-submenu name="3"
                  ><template slot="title"
                    ><Icon type="iconsetting" />权限管理</template
                  >
                  <s-menu-item name="3">统计管理</s-menu-item>
                </s-submenu>
              </s-menu>
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
                {{menuBasc}}
               </code>
            </pre>
          </section>
        </section>
      </div>
      <div class="starv-col">
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <div style="width: 250px">
                <s-menu mode="vertical">
                  <s-menu-item name="1">
                    <Icon type="iconuser" />用户管理</s-menu-item
                  >
                  <s-submenu name="3"
                    ><template slot="title"
                      ><Icon type="iconsetting" />权限管理</template
                    >
                    <s-menu-item name="3">统计管理</s-menu-item>
                  </s-submenu>
                  <s-menu-item name="2"
                    ><Icon type="icondata-view" />统计管理</s-menu-item
                  >
                </s-menu>
              </div>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">侧栏导航</div>
            <p>
              不同的提示状态：成功、警告、错误。
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
                {{menuVertical}}
               </code>
            </pre>
            </div>
          </section>
        </section>
      </div>
    </section>
    <section class="starv-clear">
      <h2>API</h2>
      <h3>Menu props</h3>
      <br />
      <table class="starv-table">
        <thead>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in menuAPI" :key="index">
            <td v-html="item.name"></td>
            <td v-html="item.desc"></td>
            <td v-html="item.type"></td>
            <td v-html="item.default"></td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <h3>Menu events</h3>
      <br />
      <table class="starv-table">
        <thead>
          <th>事件名</th>
          <th>说明</th>
          <th>返回值</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in menuEvents" :key="index">
            <td v-html="item.name"></td>
            <td v-html="item.desc"></td>
            <td v-html="item.type"></td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <h3>MenuItem props</h3>
      <br />
      <table class="starv-table">
        <thead>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in menuItemAPI" :key="index">
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
import menu from "../codeDemo/menu";
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
        num9: false,
      },
      ...menu,
    };
  },
  methods: {
    handleClick() {
      this.$Message.info("消息提示！");
    },
    successClick() {
      this.$Message.success("操作成功！");
    },
    warnClick() {
      this.$Message.warning("该操作有丢失数据风险！");
    },
    errorClick() {
      this.$Message.error("操作失败，请联系网管！");
    },
    subgClick() {
      this.$Message.success({
        content: "操作成功！",
        background: true,
      });
    },
    wabgClick() {
      this.$Message.warning({
        content: "该操作有丢失数据风险！",
        background: true,
      });
    },
    erbgClick() {
      this.$Message.error({
        content: "操作失败，请联系网管！",
        background: true,
      });
    },
    timeClick() {
      this.$Message.info({
        content: "提示显示5秒",
        time: 5,
      });
    },
    closableClick() {
      this.$Message.info({
        content: "可关闭提示信息",
        closable: true,
      });
    },
    messageClick() {
      this.$Message.message("info", {
        template: "<span>这是一个自定义<code>html</code>内容</span>",
        style: { color: "#49C2BD" },
      });
    },
    iconClick() {
      this.$Message.message("info", {
        template:
          "<span><Icon :type='iconsmile-filling' style='color:#2db7f5;margin-right:5px;font-size:16px'/><span style='color:#19be6b'>这是一个自定义的笑脸</span></span>",
        showIcon: false,
      });
    },
  },
};
</script>