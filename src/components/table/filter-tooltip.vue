<template>
  <filter-drop
    :visible.sync="visibleFilter"
    :class="filtersClasses"
    @click.stop
    placement="bottom-end"
  >
    <div slot="content">
      <s-checkboxGroup v-model="filterSelect">
        <div
          v-for="(filter, index) in col.filters"
          :key="tableCode + '_filter_' + index"
          :class="filterClasses"
        >
          <s-checkbox :label-value="filter.value">{{ filter.text }}</s-checkbox>
        </div>
      </s-checkboxGroup>
      <div :class="footerBtnClasses">
        <s-button
          :class="changeClasses"
          :disabled="filterSelect.length === 0"
          @click="reset"
          >重置</s-button
        >
        <s-button type="primary" :class="defineClasses" @click="filterChange"
          >确定</s-button
        >
      </div>
    </div>
    <div>
      <Icon type="iconshaixuan" />
    </div>
  </filter-drop>
</template>
<script>
const prefixCls = "sta-table";
import sButton from "../button";
import sCheckbox from "../checkbox";
import filterDrop from "../base/filterDrop";
export default {
  props: {
    col: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    sCheckbox,
    filterDrop,
    sButton,
  },
  data() {
    return {
      visibleFilter: false,
      filterSelect: [],
    };
  },
  computed: {
    defineClasses() {
      return `${prefixCls}-filters-define`;
    },
    changeClasses() {
      return `${prefixCls}-filters-change`;
    },
    filtersClasses() {
      return `${prefixCls}-filters`;
    },
    tableCode() {
      return this.$parent.tableCode;
    },
    filterClasses() {
      return `${prefixCls}-filter`;
    },
    footerBtnClasses() {
      return `${prefixCls}-filters-footer`;
    },
  },
  methods: {
    reset() {
      this.filterSelect = [];
      this.filterChange();
    },
    filterChange() {
      this.$emit("filter-change", this.filterSelect, this.col.key);
      this.visibleFilter = false;
    },
  },
};
</script>