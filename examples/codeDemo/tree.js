const treeBasc = `
<template>
  <div>
    <s-tree :data="treeData"></s-tree>
  </div>
</template>
<script>
export default {
    data(){
      return{
        treeData: [
            {
              label: "一级 1",
              children: [{label: "二级 1-1", children: [{ label: "三级 1-1-1" }]}],
            },
            {
              label: "一级 2",
              children: [
                { label: "二级 2-1",children: [{ label: "三级 2-1-1" }]},
                { label: "二级 2-2", children: [{ label: "三级 2-2-1" }]},
              ],
            },
            {
              label: "一级 3",
              children: [
                { label: "二级 3-1", children: [{ label: "三级 3-1-1" }]},
                { label: "二级 3-2",children: [{ label: "三级 3-2-1" }]},
              ],
            },
          ]
      }
    }
};
</script>`;

const treeCheckbox = `
<template>
  <div>
    <s-tree :data="treeData" checkbox></s-tree>
  </div>
</template>
<script>
export default {
    data(){
      return{
        treeData: [
            {
              label: "一级 1",
              children: [{label: "二级 1-1", children: [{ label: "三级 1-1-1" }]}],
            },
            {
              label: "一级 2",
              children: [
                { label: "二级 2-1",children: [{ label: "三级 2-1-1" }]},
                { label: "二级 2-2", children: [{ label: "三级 2-2-1" }]},
              ],
            },
            {
              label: "一级 3",
              children: [
                { label: "二级 3-1", children: [{ label: "三级 3-1-1" }]},
                { label: "二级 3-2",children: [{ label: "三级 3-2-1" }]},
              ],
            },
          ]
      }
    }
};
</script>`;

const treeExpandNode = `
<template>
  <div>
    <s-tree :data="treeData" :expand-node="false"></s-tree>
  </div>
</template>
<script>
export default {
    data(){
      return{
        treeData: [
            {
              label: "一级 1",
              children: [{label: "二级 1-1", children: [{ label: "三级 1-1-1" }]}],
            },
            {
              label: "一级 2",
              children: [
                { label: "二级 2-1",children: [{ label: "三级 2-1-1" }]},
                { label: "二级 2-2", children: [{ label: "三级 2-2-1" }]},
              ],
            },
            {
              label: "一级 3",
              children: [
                { label: "二级 3-1", children: [{ label: "三级 3-1-1" }]},
                { label: "二级 3-2",children: [{ label: "三级 3-2-1" }]},
              ],
            },
          ]
      }
    }
};
</script>`;

const treeLazy = `
<template>
  <div>
    <s-tree :data="lazyData" lazy :load-data="loadData"></s-tree>
  </div>
</template>
<script>
export default {
    data(){
      return {
        lazyData: [{label: "一级 1",children: []}]
      }
    },
    methods: {
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
          }
    }
};
</script>`;

const treeExpand = `
<template>
  <div>
    <s-tree :data="expandData" checkbox></s-tree>
  </div>
</template>
<script>
export default {
    data(){
      return{
        treeData: [
            {
              label: "一级 1",
              expand: true,
              children: [{label: "二级 1-1", expand: true,children: [{ label: "三级 1-1-1",disabled: true}]}],
            },
            {
              label: "一级 2",
              expand: true,
              children: [
                { label: "二级 2-1",expand: true,children: [{ label: "三级 2-1-1",selected: true }]},
                { label: "二级 2-2",expand: true, children: [{ label: "三级 2-2-1",checked: true }]},
              ],
            },
            {
              label: "一级 3",
              children: [
                { label: "二级 3-1", children: [{ label: "三级 3-1-1" }]},
                { label: "二级 3-2",children: [{ label: "三级 3-2-1" }]},
              ],
            },
          ]
      }
    }
};
</script>`;

const treeRender = `
<template>
  <div>
     <s-tree :data="renderData"></s-tree>
  </div>
</template>
<script>
export default {
    data(){
      return{
        renderData: [
            {
              label: "一级 1",
              render:(data) =>\`<s-tag :type="primary">\${data.label}</s-tag>\`,
              expand: true,
              children: [{
                  label: "二级 1-1", 
                  expand: true, 
                  render:(data) =>\`<s-tag :type="info">\${data.label}</s-tag>\`, 
                  children: [{ 
                      label: "三级 1-1-1",
                      disabled: true,
                      render:(data) =>\`<s-tag :type="warning">\${data.label}</s-tag>\`
                    }]
                }],
            }
          ]
      }
    }
};
</script>
`

const treeAPI = [{
  name: "data",
  desc: "生成 tree 的数据",
  type: "Array",
  default: "[]"
}, {
  name: "multiple",
  desc: "是否支持多选",
  type: "Boolean",
  default: "false"
}, {
  name: "checkbox",
  desc: "是否显示多选框",
  type: "Boolean",
  default: "false"
}, {
  name: "load-data",
  desc: "异步加载数据的方法",
  type: "Function",
  default: "-"
}, {
  name: "expand-node",
  desc: "开启后，点击节点将使用展开/收起子节点效果",
  type: "Boolean",
  default: "false"
}]

const treeEvents = [{
    name: "on-node-click",
    desc: "节点被点击时的回调",
    type: "当前已选中的节点数据"
  },
  {
    name: "on-check-change",
    desc: "点击复选框状态发生变化时的回调",
    type: "当前已选中的节点数据"
  },
  {
    name: "on-expand-change",
    desc: "展开和收起子列表时触发",
    type: "当前已选中的节点数据、是否展开的布尔值"
  }
]

const treeMethods = [{
    name: "getSelectedNodes",
    desc: "获取被选中的节点",
    type: "无"
  },
  {
    name: "setSelectedNodes",
    desc: "设置节点被选中",
    type: "数组，数组中的项可以是node也可以是node-key值"
  },
  {
    name: "getSelectedNodes",
    desc: "获取被勾选的节点",
    type: "无"
  },
  {
    name: "getSelectedNodes",
    desc: "获取被勾选的节点",
    type: "无"
  },
  {
    name: "setCheckedNodes",
    desc: "设置节点被勾选",
    type: "数组，数组中的项可以是node也可以是node-key值"
  },
  {
    name: "getHalfCheckedNodes",
    desc: "获取选中及半选节点",
    type: "无"
  }
]

const treeChildren = [{
  name: "label",
  desc: "指定节点标签为节点对象的某个属性值",
  type: "string",
  default: "-"
}, {
  name: "expand",
  desc: "是否展开直子节点",
  type: "Boolean",
  default: "false"
}, {
  name: "disabled",
  desc: "禁掉响应",
  type: "Boolean",
  default: "false"
}, {
  name: "checked",
  desc: "是否勾选",
  type: "Boolean",
  default: "false"
}, {
  name: "children",
  desc: "子节点属性数组",
  type: "Array",
  default: "-"
}, {
  name: "render",
  desc: "自定义当前节点渲染内容",
  type: "Function",
  default: "-"
}]

export default {
  treeBasc,
  treeCheckbox,
  treeExpandNode,
  treeLazy,
  treeExpand,
  treeRender,
  treeAPI,
  treeEvents,
  treeChildren,
  treeMethods
}