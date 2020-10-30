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
    {{ selected }}
    <br />
    <!-- <s-select style="width:200px">
        <Option v-for="item in 9000" :key="item">选项标配{{item}}</Option>
    </s-select>-->
    <!-- <s-tooltip placement="top" content="提示框">asdasda</s-tooltip>
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
    <br />
    <s-button @click="modal = !modal">点击弹窗</s-button>
    <br />
    <br />
    <s-table
      ref="table"
      @on-all-change="allChange"
      @on-check-change="checkChange"
      :data="data"
      height="300"
      width="900"
    >
      <column type="checkbox"></column>
      <column type="index" width="60" align="center">#</column>
      <column prop="name" class-name="demo-table-info-row" fixed="left"
        >姓名</column
      >
      <column prop="sex" :render="render" :filters="filters" width="200"
        >性别</column
      >
      <column prop="age" sort width="200">年龄</column>
      <column prop="nian" width="200">年级</column>
      <column prop="ban" width="200">班级</column>
      <column width="200" align="center" fixed="right">
        操作
        <template slot="format">
          <s-button type="info">查看</s-button>
          <s-button type="error">删除</s-button>
        </template>
      </column>
    </s-table>
    <br />
    <br />
    <s-button @click="selectAll">{{
      isSelectAll ? "全取消" : "全选中"
    }}</s-button>
    <s-button @click="getCheck">获取选中的数据</s-button>
    <s-button @click="setCheck">{{
      checkRow ? "取消选中第4、5行" : "选中第4、5行"
    }}</s-button>
    <br />
    <br /> -->
    {{ tabsIndex }}
    <s-tabs v-model="tabsIndex" type="card">
      <s-tab-pane label="标签一" name="name1" disabled>标签一的内容</s-tab-pane>
      <s-tab-pane label="标签二" name="name2">标签二的内容</s-tab-pane>
      <s-tab-pane label="标签三" name="name3" icon="iconmeh" closable
        >标签三的内容</s-tab-pane
      >
    </s-tabs>
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
      isSelectAll: false,
      checkRow: false,
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
      columns: [
        {
          title: "姓名",
          key: "name",
          className: "demo-table-info-row",
        },
        {
          title: "性别",
          key: "sex",
          render: (val) =>
            val === "女"
              ? `<s-tag :background-color="#fff0f6" :border-color="#ffadd2" :font-color="#eb2f96">${val}</s-tag>`
              : `<s-tag :background-color="#e6fffb" :border-color="#87e8de" :font-color="#13c2c2">${val}</s-tag>`,
        },
        { title: "年龄", key: "age" },
        { title: "年级", key: "nian" },
        { title: "班级", key: "ban" },
      ],
      data: [
        {
          name: "小明",
          sex: "男",
          age: 11,
          nian: "高一",
          ban: "三班",
          cellClassName: {
            name: "demo-table-error-row",
            ban: "demo-table-error-row",
          },
          check: true,
        },
        {
          name: "小星",
          sex: "男",
          age: 12,
          nian: "高一",
          ban: "二班",
          disabled: true,
        },
        { name: "小红", sex: "女", age: 12, nian: "高一", ban: "二班" },
        { name: "小红", sex: "女", age: 15, nian: "高一", ban: "二班" },
        { name: "小红", sex: "女", age: 13, nian: "高一", ban: "二班" },
        { name: "小红", sex: "女", age: 14, nian: "高一", ban: "二班" },
        { name: "小红", sex: "女", age: 16, nian: "高一", ban: "二班" },
      ],
      tabsIndex: "name2",
    };
  },
  mounted() {
    setInterval(() => {
      this.loading = !this.loading;
    }, 2000);
  },
  methods: {
    onFilter(value, record) {
      return record.address.indexOf(value) === 0;
    },
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
    rowClassName(row, index) {
      if (index === 1) {
        return "demo-table-info-row";
      } else if (index === 3) {
        return "demo-table-error-row";
      }
      return "";
    },
    render(val) {
      return val === "女"
        ? `<s-tag :background-color="#fff0f6" :border-color="#ffadd2" :font-color="#eb2f96">${val}</s-tag>`
        : `<s-tag :background-color="#e6fffb" :border-color="#87e8de" :font-color="#13c2c2">${val}</s-tag>`;
    },
    allChange(val) {
      this.$Message.info(val ? "全部选中" : "全部取消");
    },
    selectAll() {
      this.isSelectAll = !this.isSelectAll;
      this.$refs.table.checkAll(this.isSelectAll);
    },
    checkChange(val, row, index) {
      this.$Message.info(
        val ? `选中了第${index}行数据` : `取消选中第${index}行数据`
      );
    },
    getCheck() {
      this.$Message.info(JSON.stringify(this.$refs.table.getCheckRow()));
    },
    setCheck() {
      if (this.checkRow) {
        this.$refs.table.uncheckRow([4, 5]);
      } else {
        this.$refs.table.checkRow([4, 5]);
      }
      this.checkRow = !this.checkRow;
    },
  },
};
</script>
<style>
.red {
  color: blue;
}
.demo-table-info-row {
  background-color: #2db7f5;
  color: #fff;
}
.demo-table-error-row {
  background-color: #ff6600;
  color: #fff;
}
</style>