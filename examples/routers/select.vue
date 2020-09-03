<template>
  <article>
    <section>
      <h1>Select 选择器</h1>
    </section>
    <section>
      <h2>代码示例</h2>
      <div class="starv-col">
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-select v-model="selected" style="width:200px">
                <Option value="IPHONE">苹果</Option>
                <Option value="HUAWEI">华为</Option>
                <Option value="SAMSUNG">三星</Option>
                <Option value="MI">小米</Option>
                <!-- <Option value="OPPO">OPPO</Option>
                <Option value="VIVO">VIVO</Option>-->
              </s-select>
              <br />
              <br />
              {{selected}}
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">基本用法</div>
            <p>
              基本用法。可以使用 v-model 双向绑定数据。
              <i
                :class="['star-icon','starv-icon','iconarrow-down-bold',{'anticond-up':show.num1}] "
                @click="show.num1=!show.num1"
                :title="show.num1?'隐藏代码':'显示代码'"
              ></i>
            </p>
          </section>
          <section :class="['starv-code__details',{'starv-code__details-lg--show':show.num1}]">
            <pre v-highlight>
               <code class="html"> 
                {{selectBasc}}
               </code>
            </pre>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-select style="width:200px" loading loading-text="loading...">
                <Option value="IPHONE">苹果</Option>
                <Option value="HUAWEI">华为</Option>
                <Option value="SAMSUNG">三星</Option>
                <Option value="MI">小米</Option>
              </s-select>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">加载状态</div>
            <p>
              <code>loading</code>设置加载状态，
              <code>loading-text</code>设置加载状态文字提示
              <i
                :class="['star-icon','starv-icon','iconarrow-down-bold',{'anticond-up':show.num7}] "
                @click="show.num7=!show.num7"
                :title="show.num7?'隐藏代码':'显示代码'"
              ></i>
            </p>
          </section>
          <section :class="['starv-code__details',{'starv-code__details--show':show.num7}]">
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{selectLoading}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-select clearable style="width:200px">
                <Option value="IPHONE">苹果</Option>
                <Option value="HUAWEI">华为</Option>
                <Option value="SAMSUNG">三星</Option>
                <Option value="MI">小米</Option>
              </s-select>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">可清空</div>
            <p>
              <code>clearable</code>设置是否可清空。
              <i
                :class="['star-icon','starv-icon','iconarrow-down-bold',{'anticond-up':show.num5}] "
                @click="show.num5=!show.num5"
                :title="show.num5?'隐藏代码':'显示代码'"
              ></i>
            </p>
          </section>
          <section :class="['starv-code__details',{'starv-code__details--show':show.num5}]">
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{selectClear}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-select prefix="iconuser" style="width:200px">
                <Option value="IPHONE">苹果</Option>
                <Option value="HUAWEI">华为</Option>
                <Option label="SAMSUNG">三星</Option>
                <Option label="MI">小米</Option>
              </s-select>
              <br />
              <s-select style="width:200px">
                <Icon slot="prefix" type="iconsmile" />
                <Option value="IPHONE">苹果</Option>
                <Option value="HUAWEI">华为</Option>
                <Option label="SAMSUNG">三星</Option>
                <Option label="MI">小米</Option>
              </s-select>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">前缀图标</div>
            <p>
              设置
              <code>prefix</code> 属性或
              <code>slot</code> 可以在 Select 内显示前缀图标。。
              <i
                :class="['star-icon','starv-icon','iconarrow-down-bold',{'anticond-up':show.num3}] "
                @click="show.num3=!show.num3"
                :title="show.num3?'隐藏代码':'显示代码'"
              ></i>
            </p>
          </section>
          <section :class="['starv-code__details',{'starv-code__details-lg--show':show.num3}]">
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{selectIcon}}
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
              <s-select disabled v-model="selected" style="width:200px">
                <Option value="IPHONE">苹果</Option>
                <Option value="HUAWEI">华为</Option>
                <Option value="SAMSUNG">三星</Option>
                <Option value="MI">小米</Option>
              </s-select>
              <s-select style="width:200px">
                <Option value="IPHONE">苹果</Option>
                <Option value="HUAWEI">华为</Option>
                <Option value="SAMSUNG" disabled>三星</Option>
                <Option value="MI">小米</Option>
              </s-select>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">禁用</div>
            <p>
              <code>Select</code>设置属性
              <code>disabled</code>禁用整个选择器
              <br />
              <code>Option</code>设置属性
              <code>disabled</code>可以禁用当前项。
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
                {{selectDisabled}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-select style="width:200px">
                <Option value="IPHONE" label="苹果">
                  苹果
                  <span style="float:right;color:#ccc">iPhone</span>
                </Option>
                <Option value="HUAWEI" label="华为">
                  华为
                  <span style="float:right;color:#ccc">huawei</span>
                </Option>
                <Option value="SAMSUNG" label="三星">
                  三星
                  <span style="float:right;color:#ccc">samsung</span>
                </Option>
                <Option value="MI" label="小米">
                  小米
                  <span style="float:right;color:#ccc">mi</span>
                </Option>
              </s-select>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">自定义模板</div>
            <p>
              对选项内容可以进行自定义。
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
                {{selectTem}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-select filterable style="width:200px">
                <Option value="IPHONE">苹果</Option>
                <Option value="HUAWEI">华为</Option>
                <Option value="SAMSUNG">三星</Option>
                <Option value="MI">小米</Option>
              </s-select>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">搜索</div>
            <p>
              <code>filterable</code>属性设置可搜索。
              <i
                :class="['star-icon','starv-icon','iconarrow-down-bold',{'anticond-up':show.num8}] "
                @click="show.num8=!show.num8"
                :title="show.num8?'隐藏代码':'显示代码'"
              ></i>
            </p>
          </section>
          <section :class="['starv-code__details',{'starv-code__details--show':show.num8}]">
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{selectFilter}}
               </code>
            </pre>
            </div>
          </section>
        </section>
        <section class="starv-code">
          <section class="starv-code__demo">
            <div>
              <s-select
                placeholder="请选择"
                :options="options"
                :loading="selectLoading"
                lazyload
                @on-lazyload="onLazyload"
                style="width:200px"
              ></s-select>
            </div>
          </section>
          <section class="starv-code__describe">
            <div class="starv-code__describe--title">懒加载</div>
            <p>
              <code>lazyload</code>设置开启懒加载，在
              <code>on-lazyload</code>触发的事件中请求数据赋值到
              <code>options</code>属性中。
              <i
                :class="['star-icon','starv-icon','iconarrow-down-bold',{'anticond-up':show.num6}] "
                @click="show.num6=!show.num6"
                :title="show.num6?'隐藏代码':'显示代码'"
              ></i>
            </p>
          </section>
          <section :class="['starv-code__details',{'starv-code__details-lger--show':show.num6}]">
            <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
              <pre v-highlight>
               <code class="html"> 
                {{selectlazyload}}
               </code>
            </pre>
            </div>
          </section>
        </section>
      </div>
    </section>
    <section class="starv-clear">
      <h2>API</h2>
      <h3>Select props</h3>
      <br />
      <table class="starv-table">
        <thead>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </thead>
        <tbody>
          <tr v-for="(item,index) in selectAPI" :key="index">
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
          <tr v-for="(item,index) in alertEvents" :key="index">
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
          <tr v-for="(item,index) in alertSlots" :key="index">
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
import select from "../codeDemo/select";
export default {
  data() {
    return {
      show: {
        num1: false,
        num2: false,
        num3: false,
        num4: false,
        num5: false,
        num6: false,
        num7: false,
        num8: false,
      },
      selected: "IPHONE",
      selectLoading: false,
      options: [],
      ...select,
    };
  },
  methods: {
    onLazyload() {
      this.selectLoading = true;
      setTimeout(() => {
        this.options = ["苹果", "华为", "三星"];
        this.selectLoading = false;
      }, 2000);
    },
  },
};
</script>