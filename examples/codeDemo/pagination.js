const paginationBasc = `
<template>
  <div>
    <s-pagination :total="100"></s-pagination>
  </div>
</template>
<script>
export default {};
</script>`;

const paginationTotal = `
<template>
  <div>
    <s-pagination :total="100" show-total></s-pagination>
  </div>
</template>
<script>
export default {};
</script>`;

const paginationSize = `
<template>
  <div>
    <s-pagination :total="100" :page-size="[10,20,30]"></s-pagination>
  </div>
</template>
<script>
export default {};
</script>`;

const paginationJumper = `
<template>
  <div>
   <s-pagination :total="100" show-jumper></s-pagination>
  </div>
</template>
<script>
export default {};
</script>`;

const paginationAPI = [{
  name: "current",
  desc: "当前页码",
  type: "Number",
  default: "1"
}, {
  name: "total",
  desc: "数据总数",
  type: "Number",
  default: "0"
}, {
  name: "page-size",
  desc: "每页条数",
  type: "Number|Array",
  default: "10"
}, {
  name: "show-total",
  desc: "显示总数",
  type: "Boolean",
  default: "false"
}, {
  name: "show-jumper",
  desc: "显示快速跳转到某一页",
  type: "Boolean",
  default: "false"
}]

const paginationEvents = [{
    name: "on-change",
    desc: "页码改变的回调，返回改变后的页码",
    type: "页码"
  },
  {
    name: "on-page-change",
    desc: "切换每页条数时的回调，返回切换后的每页条数",
    type: "page-size"
  }
]

export default {
  paginationBasc,
  paginationTotal,
  paginationSize,
  paginationJumper,
  paginationAPI,
  paginationEvents,
}