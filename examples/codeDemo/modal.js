const modalBasc = `
<template>
  <div>
    <s-modal v-model="modal" title="话框标题" @on-cancel="cancel" @on-define="define">
    <p>对话框内容</p>
    </s-modal>
    <s-button @click="modal=true">点击弹窗</s-button>
  </div>
</template>
<script>
export default {
    data(){
        return {
            modal:false
        }
    },
    methods: {
        cancel() {
          this.$Message.info("点击取消！");
        },
        define() {
          this.$Message.info("点击确定！");
          this.modal = false;
        },
    }
};
</script>`;

const modalType = `
<template>
  <div>
    <s-modal v-model="titleModal">
    <p>对话框内容</p>
    </s-modal>
    <s-button @click="titleModal=true" class="starv-btn">没有标题弹窗</s-button>
    <s-modal v-model="widthModal" title="话框标题" width="300px">
    <p>对话框内容</p>
    </s-modal>
    <s-button @click="widthModal=true" class="starv-btn">设置弹窗宽度</s-button>
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
</template>
<script>
export default {
    data() {
        return {
            titleModal: false,
            widthModal: false,
            cusModal: false,
        }
    }
    methods: {
        cusClick() {
            this.$Message.info("自定义按钮点击！");
          } 
    }
};
</script>`;

const modalLoading = `
<template>
  <div>
    <s-modal v-model="loadModal" title="话框标题" :loading="loading" @on-define="defined">
    <p>对话框内容</p>
    </s-modal>
    <s-button @click="loadModal=true">loading弹窗</s-button>
  </div>
</template>
<script>
export default {
    data(){
       return{
         loadModal: false,
         loading:false
       }
    },
    methods:{
        defined() {
            this.loading = true;
            setTimeout(() => {
              this.loading = false;
              this.$Message.success("提交成功！");
              this.loadModal = false;
            }, 2000);
          },
    }
};
</script>`;

const modalStyles = `
<template>
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
</template>
<script>
export default {
    data(){
        return{
          maskModal: false
        }
     },
};
</script>`;

const modalAPI = [{
    name: "value",
    desc: "对话框是否显示",
    type: "Boolean",
    default: "false"
}, {
    name: "title",
    desc: "对话框标题，如果使用 slot 自定义了页头，则 title 无效",
    type: "String",
    default: "-"
}, {
    name: "mask-closable",
    desc: "是否允许点击遮罩层关闭",
    type: "Boolean",
    default: "true"
}, {
    name: "width",
    desc: "对话框宽度",
    type: "Number | String",
    default: "520"
}, {
    name: "styles",
    desc: "弹窗样式",
    type: "Object",
    default: "-"
}];

const modalEvents = [{
    name: "on-cancel",
    desc: "点击取消按钮触发",
    type: "-"
}, {
    name: "on-define",
    desc: "点击确定按钮触发",
    type: "-"
}];

const modalSlots = [{
    name: "title",
    desc: "自定义标题",
}, {
    name: "无",
    desc: "自定义内容",
}, {
    name: "footer",
    desc: "自定义按钮",
}];

export default {
    modalBasc,
    modalType,
    modalLoading,
    modalStyles,
    modalAPI,
    modalEvents,
    modalSlots,
}