<template>
  <article>
    <section>
      <h1>Modal 对话框</h1>
    </section>
    <section>
      <h2>代码示例</h2>
      <div class="starv-col">
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-modal v-model="modal" title="话框标题" @on-cancel="cancel" @on-define="define">
                <p>对话框内容</p>
              </s-modal>
              <s-button @click="modal=true">点击弹窗</s-button>
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
                {{modalBasc}}
               </code>
            </pre>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-modal v-model="loadModal" title="话框标题" :loading="loading" @on-define="defined">
                <p>对话框内容</p>
              </s-modal>
              <s-button @click="loadModal=true">loading弹窗</s-button>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">loading弹窗</div>
            <p>
              <code>loading</code>设置确定按钮是否loading状态，
              <code>on-define</code>确定按钮触发事件。
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
                {{modalLoading}}
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
              <s-modal v-model="titleModal">
                <p>对话框内容</p>
              </s-modal>

              <s-button @click="titleModal=true" class="starv-btn">没有标题弹窗</s-button>
              <s-modal v-model="withModal" title="话框标题" width="300px">
                <p>对话框内容</p>
              </s-modal>
              <s-button @click="withModal=true" class="starv-btn">设置弹窗宽度</s-button>
              <s-modal v-model="cusModal" title="话框标题">
                <div slot="title" class="title">
                  <Icon type="iconsmile"></Icon>自定义标题
                </div>
                <p style="color:blue">自定义内容</p>
                <div slot="footer" style="text-align: center;">
                  <s-button style="width:300px" type="success" @click="cusClick">自定义按钮</s-button>
                </div>
              </s-modal>
              <s-button @click="cusModal=true" class="starv-btn">自定义弹窗内容</s-button>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">自定义弹窗</div>
            <p>
              <code>title</code>设置标题，
              <code>width</code>设置宽度
              <code>slot="title"</code>、
              <code>slot="footer"</code>可以自定义标题和按钮
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
                {{modalType}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-modal v-model="maskModal" title="对话框标题" :mask-closable="false">
                <p>对话框内容</p>
              </s-modal>
              <s-button @click="maskModal=true" class="starv-btn">禁用点击遮罩关闭</s-button>
              <s-modal v-model="stylesModal" title="对话框标题" :styles="{top:'10px'}">
                <p>对话框内容</p>
              </s-modal>
              <s-button @click="stylesModal=true" class="starv-btn">设置弹窗位置</s-button>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">设置弹窗位置和禁用点击遮罩关闭</div>
            <p>
              <code>mask-closable</code>属性禁用点击遮罩关闭，
              <code>styles</code>设置弹窗样式。
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
                {{modalStyles}}
               </code>
            </pre>
            </div>
          </section>
        </section>
      </div>
    </section>
    <section class="starv-clear">
      <h2>API</h2>
      <h3>Alert props</h3>
      <br />
      <table class="starv-table">
        <thead>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </thead>
        <tbody>
          <tr v-for="(item,index) in modalAPI" :key="index">
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
          <tr v-for="(item,index) in modalEvents" :key="index">
            <td v-html="item.name"></td>
            <td v-html="item.desc"></td>
            <td v-html="item.type"></td>
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
          <tr v-for="(item,index) in modalSlots" :key="index">
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
import modal from "../codeDemo/modal";
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
      loadModal: false,
      modal: false,
      titleModal: false,
      withModal: false,
      cusModal: false,
      loading: false,
      maskModal: false,
      stylesModal: false,
      ...modal,
    };
  },
  methods: {
    cancel() {
      this.$Message.info("点击取消！");
    },
    define() {
      this.$Message.info("点击确定！");
      this.modal = false;
    },
    defined() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$Message.success("提交成功！");
        this.loadModal = false;
      }, 2000);
    },
    cusClick() {
      this.$Message.info("自定义按钮点击！");
    },
  },
};
</script>
<style scoped>
.title {
  color: red;
  text-align: center;
}
</style>