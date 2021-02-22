# Tree 树形控件

## 代码示例

:::demo
**基本用法**：最简单的用法.

```html
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
</script>
```
:::

:::demo
**可勾选**：设置属性 `checkbox` 可以对节点进行勾选.

```html
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
</script>
```
:::

:::demo
**点击标题不展开节点**：设置属性 `expand-node`，在点击节点标题时，会展开/收起子节点.

```html
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
</script>
```
:::

:::demo
**异步加载子节点**：`lazy`设置异步加载，`load-data`返回子节点.

```html
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
</script>
```
:::

:::demo
**默认展开、选中、勾选和禁用**：给节点设置 `expand`、`selected`、`checked` 和 `disabled` 可以将节点设置为展开、选中、勾选和禁用.
```html
<template>
  <div>
    <s-tree :data="expandData" checkbox></s-tree>
  </div>
</template>
<script>
export default {
    data(){
      return{
        expandData: [
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
</script>
```
:::

:::demo
**自定义节点内容**：`render`返回返回值为自定义的内容.

```html
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
              render:(data) =>`<s-tag :type="primary">${data.label}</s-tag>`,
              expand: true,
              children: [{
                  label: "二级 1-1", 
                  expand: true, 
                  render:(data) =>`<s-tag :type="info">${data.label}</s-tag>`, 
                  children: [{ 
                      label: "三级 1-1-1",
                      disabled: true,
                      render:(data) =>`<s-tag :type="warning">${data.label}</s-tag>`
                    }]
                }],
            }
          ]
      }
    }
};
</script>
```
:::

## API

### Tree props

<br/>

|  属性  | 说明  |  类型  |  默认值  |
|  ----  | ---- |  ----  |  ----   |
|  data  | 对话框是否显示 |  Array  |  []  |
|  multiple  | 是否支持多选 |  Boolean  |  false  |
|  checkbox  | 是否显示多选框  |  Boolean  |  false  |
|  load-data  | 异步加载数据的方法  |  Function  |  - |
|  expand-node  | 开启后，点击节点将使用展开/收起子节点效果  |  Boolean  |  false  |

<br/>

### Tree events

<br/>

|  事件  | 说明  | 返回值  |
|  ----  | ---- | ---- |
|   on-node-click   | 节点被点击时的回调 |  当前已选中的节点数据  |
|   on-check-change  | 点击复选框状态发生变化时的回调 |  当前已选中的节点数据  |
|   on-expand-change  | 展开和收起子列表时触发 |  当前已选中的节点数据、是否展开的布尔值  |

<br/>

### Tree Children



<br/>

|  属性  | 说明  |  类型  |  默认值  |
|  ----  | ---- |  ----  |  ----   |
|  label  | 指定节点标签为节点对象的某个属性值 |  string  |  -  |
|  expand  | 是否展开直子节点 |  Boolean  |  false  |
|  disabled  | 禁掉响应  |  Boolean  |  false  |
|  checked  | 是否勾选  |  Boolean  |  false |
|  children  | 子节点属性数组  |  Array  |  -  |
|  render  | 自定义当前节点渲染内容  |  Function  |  -  |

<br/>

### Tree Methods

<br/>

|  方法名  | 说明  |  参数  |  返回值  |
|  ----  | ---- |  ----  |  ----   |
|  getSelectedNodes  | 获取被选中的节点 |  无  |
|  setSelectedNodes  | 设置节点被选中 |  数组，数组中的项可以是node也可以是node-key值  |
|  getSelectedNodes  | 获取被勾选的节点  |  无  |
|  setCheckedNodes  | 设置节点被勾选  |  数组，数组中的项可以是node也可以是node-key值 |
|  getHalfCheckedNodes  | 获取选中及半选节点  |  无  |

:::script
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
          ],
          lazyData: [{label: "一级 1",children: []}],
          expandData: [
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
          ],
         renderData: [
            {
              label: "一级 1",
              render:(data) =>`<s-tag :type="primary">${data.label}</s-tag>`,
              expand: true,
              children: [{
                  label: "二级 1-1", 
                  expand: true, 
                  render:(data) =>`<s-tag :type="info">${data.label}</s-tag>`, 
                  children: [{ 
                      label: "三级 1-1-1",
                      disabled: true,
                      render:(data) =>`<s-tag :type="warning">${data.label}</s-tag>`
                    }]
                }],
            }
          ]
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
</script>
:::