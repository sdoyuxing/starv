<template>
  <div>
    <!-- <ebutton>asdasdas</ebutton>
    <ebutton type="primary">Primary</ebutton>
    <ebutton type="info">Info</ebutton>
    <ebutton type="success">Success</ebutton>
    <ebutton type="warning">Warning</ebutton>
    <ebutton type="error" @click="click">Error</ebutton>
    <div style="margin-top:10px">loading-progress :</div>
    <div>
      <ebutton :loading="loading" loadType="progress">asdasdas</ebutton>
      <ebutton type="info" :loading="loading" loadType="progress">Info</ebutton>
    </div>
    <div style="margin-top:10px">loading-circle :</div>
    <div>
      <ebutton :loading="true" loadType="circle">asdasdas</ebutton>
      <ebutton type="info" :loading="true" loadType="circle">Info</ebutton>
    </div>
    {{text}}
    <br />
    <s-input placeholder="请输入名称" v-model="text" clearable style="width:300px" labelText="名称" />
    <br />
    <s-checkbox label="火车" />
    <s-checkbox label="汽车" />
    <s-checkbox label="轮船" disabled />
    <s-checkbox label="飞机" v-model="check" disabled />
    <br />
    <s-checkbox label="半选" half-checked />
    <br />
    <s-switch v-model="switchd" disabled>
      <span slot="checkName">ON</span>
      <span slot="uncheckName">OFF</span>
    </s-switch>
    <s-alert show-icon>详情</s-alert>
    <s-alert type="success" show-icon closable>成功</s-alert>
    <s-alert type="warning" show-icon>警告</s-alert>
    <s-alert
      bordercolor="#BD8EF6"
      backgroundColor="#E6D8F6"
      iconColor="#F049BB"
      show-icon
      iconType="iconsmile"
      fontColor="#048D48"
    >自定义样式</s-alert>
    {{switchd}}
    <br />
    <s-tag></s-tag>
    <br />
    <div style="width:200px">
      <s-select
        placeholder="请选择"
        :options="options"
        :loading="selectLoading"
        lazyload
        @on-lazyload="onLazyload"
      ></s-select>
    </div>-->
    <br />
    {{selected}}
    <br />
    <!-- <s-select style="width:200px">
        <Option v-for="item in 9000" :key="item">选项标配{{item}}</Option>
    </s-select>-->
    <s-tooltip placement="top" content="提示框">asdasda</s-tooltip>
    <br />
    <s-pagination :total="100"></s-pagination>
    <br />
    <s-button @click="messageClick">提示</s-button>
    <br />
    <br />
    <s-poptip trigger="focus" title="标题" content="这是内容">
      <s-button>focus</s-button>
    </s-poptip>
    <s-modal v-model="modal" title="普通的Modal对话框标题">
      <p>对话框内容</p>
      <p>对话框内容</p>
      <p>对话框内容</p>
    </s-modal>
    <br />
    <s-button @click="modal=!modal">点击弹窗</s-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      text: "",
      check: true,
      switchd: false,
      selected: "VIVO",
      selectLoading: false,
      options: [],
      modal: false,
    };
  },
  mounted() {
    setInterval(() => {
      this.loading = !this.loading;
    }, 2000);
  },
  methods: {
    click() {
      alert(222);
    },
    onLazyload(val) {
      this.selectLoading = true;
      setTimeout(() => {
        this.options = ["苹果", "华为", "三星"];
        this.selectLoading = false;
      }, 2000);
    },
    messageClick() {
      // this.$Message.message("error", {
      //   content: "这是一个普通的提示",
      //   background: true,
      //   time: 20,
      //   closable: true,
      // });
      this.$Notice.show({
        title: "亚当·斯密",
        content:
          "亚当·斯密（1723年6月5日—1790年7月17日），出生在苏格兰法夫郡（County Fife）的寇克卡迪（Kirkcaldy），英国经济学家、哲学家、作家，经济学的主要创立者。亚当·斯密是现代资本主义经济制度的创立者，强调自由市场、自由贸易以及劳动分工，被誉为“古典经济学之父”。",
      });
    },
  },
};
</script>
<style>
.red {
  color: blue;
}
</style>