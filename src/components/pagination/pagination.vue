<template>
  <ul class="sta-page">
    <span v-if="showTotal" :class="totalClasses">共 {{total}} 条</span>

    <li :class="prevClasses" @click="prevClick" title="上一页">
      <Icon type="iconarrow-left-bold" />
    </li>
    <li :class="itemClasses(1)" @click="currentPage=1">1</li>
    <li
      class="sta-page-item sta-page-jump"
      v-show="currentPage>4&&allPages[0]>2"
      @click="currentPage-5>0?currentPage-=5:currentPage=1"
    >
      <Icon type="iconelipsis" data-icon="iconelipsis" />
      <Icon type="iconarrow-double-left" data-icon="double-right" />
    </li>
    <li
      v-for="item in allPages"
      :class="itemClasses(item)"
      @click="currentPage=item"
      :key="'page-'+item"
    >{{item}}</li>
    <li
      class="sta-page-item sta-page-jump"
      v-show="currentPage<pageNum-3&&allPages[allPages.length-1]<pageNum-1"
      @click="currentPage+5>pageNum?currentPage=pageNum:currentPage+=5"
    >
      <Icon type="iconelipsis" data-icon="iconelipsis" />
      <Icon type="iconarrow-double-right" data-icon="double-right" />
    </li>
    <li :class="itemClasses(pageNum)" @click="currentPage=pageNum">{{pageNum}}</li>
    <li :class="nextClasses" @click="nextClick" title="下一页">
      <Icon type="iconarrow-right-bold" />
    </li>
    <s-select
      :class="selectClasses"
      v-if="sizeOptions"
      v-model="currentSize"
      :options="sizeOptions"
    ></s-select>
    <span :class="pageNumClasses" v-if="showJumper">
      跳至
      <input
        :class="inputClasses"
        :value="currentPage"
        autocomplete="off"
        spellcheck="false"
        type="text"
        @keyup.enter="changePage"
      /> 页
    </span>
  </ul>
</template>
<script>
import { getNumArray, typeOf } from "../../utils/assist";
import { sSelect } from "../select";
const prefixCls = "sta-page";
export default {
  name: "sPagination",
  components: { sSelect },
  props: {
    pageSize: {
      type: Number || Array || String,
      default: 10,
    },
    current: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    showTotal: {
      type: Boolean,
      default: false,
    },
    showJumper: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentPage: this.current,
      currentSize:
        typeOf(this.pageSize) === "array" ? this.pageSize[0] : this.pageSize,
    };
  },
  computed: {
    allPages() {
      if (this.currentPage < 4 || this.pageNum <= 5) {
        return getNumArray(this.pageNum <= 5 ? this.pageNum - 1 : 5);
      } else if (this.currentPage <= this.pageNum - 3) {
        return [
          this.currentPage - 2,
          this.currentPage - 1,
          this.currentPage,
          this.currentPage + 1,
          this.currentPage + 2,
        ];
      } else if (this.currentPage > this.pageNum - 3) {
        return [
          this.pageNum - 4,
          this.pageNum - 3,
          this.pageNum - 2,
          this.pageNum - 1,
        ];
      }
    },
    pageNum() {
      return Math.ceil(this.total / this.currentSize);
    },
    prevClasses() {
      return [
        `${prefixCls}-item`,
        { [`${prefixCls}-disabled`]: this.currentPage === 1 },
      ];
    },
    nextClasses() {
      return [
        `${prefixCls}-item`,
        { [`${prefixCls}-disabled`]: this.currentPage === this.pageNum },
      ];
    },
    totalClasses() {
      return `${prefixCls}-total`;
    },
    inputClasses() {
      return `${prefixCls}-input`;
    },
    pageNumClasses() {
      return `${prefixCls}-num`;
    },
    selectClasses() {
      return `${prefixCls}-select`;
    },
    sizeOptions() {
      let result = [];
      if (typeOf(Number(this.pageSize)) === "number") {
        return false;
      } else if (typeOf(this.pageSize) === "array") {
        for (let i = 0; i < this.pageSize.length; i++) {
          if (typeOf(Number(this.pageSize[i])) === "number") {
            result.push({
              label: `${this.pageSize[i]} 条/页`,
              value: this.pageSize[i],
            });
          } else {
            throw new TypeError("The phase in pageSize is not a number");
            return false;
          }
        }
      } else {
        throw new TypeError("pageSize must be an array or array");
        return false;
      }
      return result;
    },
  },
  methods: {
    itemClasses(index) {
      return [
        `${prefixCls}-item`,
        { [`${prefixCls}-selected`]: this.currentPage === index },
      ];
    },
    prevClick() {
      if (this.currentPage > 1) this.currentPage -= 1;
    },
    nextClick() {
      if (this.currentPage < this.pageNum) this.currentPage += 1;
    },
    changePage(event) {
      let val = event.target.value.trim();
      let page = 0;
      val = Number(val);
      if (isNaN(val) || val === 0) {
        page = 1;
      } else if (val > pageNum) {
        page = pageNum;
      } else {
        page = val;
      }
      if (page) {
        this.$emit("on-change", page);
      }
    },
  },
  watch: {
    current(val) {
      this.currentPage = val;
    },
    currentPage(val) {
      this.$emit("on-change", val);
    },
    pageSize(val) {
      this.currentSize = typeOf(val) === "array" ? val[0] : val;
    },
    currentSize(){
      this.$emit("on-page-change", val);
    }
  },
};
</script>