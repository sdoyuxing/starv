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
    <!-- {{ tabsIndex }}
    <s-tabs v-model="tabsIndex" type="card">
      <s-tab-pane
        :label="'标签' + item"
        :name="'name' + item"
        v-for="item in index"
        :key="item"
        >标签{{ item }}的内容</s-tab-pane
      >
    </s-tabs> -->
    <!-- <s-date-picker
      v-model="datePicker"
      :type="type"
      format="yyyy/MM/dd"
      style="width: 200px"
      value-format="yyyy年MM月dd日"
    ></s-date-picker>
    <s-button @click="type = 'date'">日期</s-button>
    <s-button @click="type = 'week'">周</s-button>
    <s-button @click="type = 'month'">月</s-button>
    <s-button @click="type = 'year'">年</s-button>
    <s-button @click="type = 'daterange'">时间段</s-button>

    {{ datePicker }} -->
    <!-- <s-tree :data="treeData" checkbox></s-tree>
    异步：
    <s-tree :data="lazyData" checkbox lazy :load-data="loadData"></s-tree> -->
    <!-- <s-menu>
      <s-menu-item name="1"> <Icon type="iconuser" />用户管理</s-menu-item>
      <s-menu-item name="2"><Icon type="icondata-view" />统计管理</s-menu-item>
      <s-submenu name="3"
        ><template slot="title"><Icon type="iconsetting" />权限管理</template>
        <s-menu-item name="3">统计管理</s-menu-item>
      </s-submenu>
    </s-menu> -->
    <!-- <br />
    侧栏
    <div style="width: 300px">
      <s-menu mode="vertical">
        <s-menu-item name="1"> <Icon type="iconuser" />用户管理</s-menu-item>
        <s-menu-item name="2"
          ><Icon type="icondata-view" />统计管理</s-menu-item
        >
        <s-submenu name="3"
          ><template slot="title"><Icon type="iconsetting" />权限管理</template>
          <s-menu-item name="3">统计管理</s-menu-item>
        </s-submenu>
      </s-menu>
    </div> -->
    <s-form style="width: 400px" inline :model="formValidate" :rules="ruleValidate"
            :label-width="180">
      <s-form-item label="姓名asdad" prop="name">
        <s-input placeholder="请输入..." v-model="formValidate.name" />
      </s-form-item>
      <s-form-item label="性别">
        <s-select>
          <Option value="IPHONE">苹果</Option>
          <Option value="HUAWEI">华为</Option>
          <Option value="SAMSUNG">三星</Option>
          <Option value="MI">小米</Option>
          <Option value="OPPO">OPPO</Option>
          <Option value="VIVO">VIVO</Option>
        </s-select>
      </s-form-item>
      <s-form-item label="年龄">
        <s-input placeholder="请输入..." />
      </s-form-item>
    </s-form>

    <s-form :model="formData" :label-width="100" :rules="ruleValidate" ref="form">
      <s-form-item label="输入框" prop="input">
        <s-input placeholder="请输入..." v-model="formData.input" />
      </s-form-item>
      <s-form-item label="下拉选择" prop="select">
        <s-select v-model="formData.select">
          <Option value="IPHONE">苹果</Option>
          <Option value="HUAWEI">华为</Option>
          <Option value="SAMSUNG">三星</Option>
          <Option value="MI">小米</Option>
          <Option value="OPPO">OPPO</Option>
          <Option value="VIVO">VIVO</Option>
        </s-select>
      </s-form-item>
      <s-form-item label="日期选择" prop="date">
        <s-date-picker placeholder="请选择日期" type="date" v-model="formData.date" multiple
                       style="width: 200px">
        </s-date-picker>
      </s-form-item>
      <s-form-item label="单选" prop="radio">
        <s-radio-group v-model="formData.radio">
          <s-radio label="1">单选A</s-radio>
          <s-radio label="2">单选B</s-radio>
          <s-radio label="3">单选C</s-radio>
        </s-radio-group>
      </s-form-item>
      <s-form-item label="多选" prop="checkbox">
        <s-checkbox-group v-model="formData.checkbox">
          <s-checkbox label="苹果" />
          <s-checkbox label="华为" />
          <s-checkbox label="三星" />
          <s-checkbox label="小米" />
          <s-checkbox label="OPPO" />
          <s-checkbox label="VIVO" />
        </s-checkbox-group>
      </s-form-item>
      <s-form-item label="开关">
        <s-switch v-model="formData.switch" />
      </s-form-item>
      <s-form-item>
        <s-button type="primary" @click="handleSubmit('form')">提交</s-button>
        <s-button style="margin-left: 8px">取消</s-button>
      </s-form-item>
    </s-form>

    <s-form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
      <s-form-item label="姓名" prop="name">
        <s-input placeholder="请输入..." v-model="formCustom.name" />
      </s-form-item>
      <s-form-item label="年龄" prop="age">
        <s-input placeholder="请输入..." v-model="formCustom.age" />
      </s-form-item>
      <s-form-item>
        <s-button type="primary" @click="handleSubmit('formCustom')">提交</s-button>
        <s-button style="margin-left: 8px">取消</s-button>
      </s-form-item>
    </s-form>
  </div>
</template>
<script>
export default {
  data() {
    const validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入名字！"));
      }
      callback();
    };
    const validateAge = (rule, value, callback) => {
      if (value && value < 18) {
        callback(new Error("年龄要大于18！"));
      }
      callback();
    };
    return {
      formValidate: { name: "" },
      formData: { input: "" },
      formData: {
        input: "",
        select: "",
        date: "",
        radio: "",
        checkbox: [],
        switch: true,
      },
      formCustom: {
        name: "",
        age: "",
      },
      ruleCustom: {
        name: [{ validator: validateName, trigger: "blur" }],
        age: [{ validator: validateAge, trigger: "blur" }],
      },
      ruleValidate: {
        input: [
          {
            required: true,
            message: "输入框不能为空！",
            trigger: "blur",
          },
        ],
        select: [
          {
            required: true,
            message: "选择框不能为空！",
            trigger: "change",
          },
        ],
        date: [
          {
            required: true,
            message: "日期选择框不能为空！",
            trigger: "change",
          },
        ],
        radio: [
          {
            required: true,
            message: "单选不能为空！",
            trigger: "change",
          },
        ],
        checkbox: [
          {
            required: true,
            type: "array",
            min: 1,
            message: "复选框不能为空！",
            trigger: "change",
          },
        ],
      },
      loading: false,
      text: "",
      check: true,
      switchd: false,
      index: 10,
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
      datePicker: "2020-11-24",
      type: "date",
      treeData: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
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
              children: [
                {
                  label: "三级 2-1-1",
                  selected: true,
                },
              ],
            },
            {
              label: "二级 2-2",
              checked: true,
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
    };
  },
  mounted() {
    setInterval(() => {
      this.loading = !this.loading;
    }, 2000);
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    onFilter(value, record) {
      return record.address.indexOf(value) === 0;
    },
    loadData(item, resolve) {
      setTimeout(() => {
        const data = [
          {
            label: "children",
            loading: false,
            children: [],
          },
          {
            label: "children",
            loading: false,
            children: [],
          },
        ];
        resolve(data);
      }, 1000);
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