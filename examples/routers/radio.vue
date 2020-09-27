<template>
    <article>
        <section>
            <h1>Radio 单选框</h1>
            <p>单选框。</p>
            <h2>何时使用</h2>
            <p>用于在多个备选项中选中单个状态。和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。</p>
            <h2>代码演示</h2>
        </section>
        <div>
            <div class="starv-col">
                <section class="starv-code">
                    <section class="starv-code__demo">
                        <div>
                            <s-radio>Radio</s-radio>
                        </div>
                    </section>

                    <section :class="['starv-code__describe',{'starv-code__describe--show':show.num1}]">
                        <div class="starv-code__describe--title">
                            基本
                        </div>
                        <p>最简单的用法。
                            <i :class="['star-icon','starv-icon','iconarrow-down-bold',{'anticond-up':show.num1}] " @click="show.num1=!show.num1" :title="show.num1?'隐藏代码':'显示代码'"></i>
                        </p>
                    </section>
                    <section :class="['starv-code__details',{'starv-code__details--show':show.num1}]">
                        <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
                            <pre class="html"><code class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
       <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span>&gt;</span>Radio<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {

}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre>
                        </div>
                    </section>
                </section>
                <section class="starv-code">
                    <section class="starv-code__demo">
                        <div>
                            <RadioGroup v-model="radioGroup">
                                <Radio label="1">A</Radio>
                                <Radio label="2">B</Radio>
                                <Radio label="3">C</Radio>
                                <Radio label="4">D</Radio>
                            </RadioGroup>
                        </div>
                    </section>

                    <section :class="['starv-code__describe',{'starv-code__describe--show':show.num3}]">
                        <div class="starv-code__describe--title">
                            单选组合
                        </div>
                        <p>一组互斥的 Radio 配合使用。
                            <i :class="['star-icon','starv-icon','iconarrow-down-bold',{'anticond-up':show.num3}] " @click="show.num3=!show.num3" :title="show.num3?'隐藏代码':'显示代码'"></i>
                        </p>
                    </section>
                    <section :class="['starv-code__details',{'starv-code__detailstow--show':show.num3}]">
                        <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
                            <pre class="html"><code class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">RadioGroup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"radioGroup"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"1"</span>&gt;</span>A<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"2"</span>&gt;</span>B<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"3"</span>&gt;</span>C<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"4"</span>&gt;</span>D<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">RadioGroup</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
   data(){
       <span class="hljs-keyword">return</span>{
          <span class="hljs-attr">radioGroup</span>: <span class="hljs-string">'1'</span>
       }
   }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre>
                        </div>
                    </section>
                </section>
                <section class="starv-code">
                    <section class="starv-code__demo">
                        <div>
                            <RadioGroup :options="plainOptions" v-model="value1" />
                            <RadioGroup :options="options" v-model="value2" />
                            <RadioGroup :options="optionsWithDisabled" v-model="value3" />
                        </div>
                    </section>

                    <section :class="['starv-code__describe',{'starv-code__describe--show':show.num5}]">
                        <div class="starv-code__describe--title">
                            基本
                        </div>
                        <p>最简单的用法。
                            <i :class="['star-icon','starv-icon','iconarrow-down-bold',{'anticond-up':show.num5}] " @click="show.num5=!show.num5" :title="show.num5?'隐藏代码':'显示代码'"></i>
                        </p>
                    </section>
                    <section :class="['starv-code__details',{'starv-code__detailsthess--show':show.num5}]">
                        <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
                            <pre class="html"><code class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">RadioGroup</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">"plainOptions"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value1"</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">RadioGroup</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">"options"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value2"</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">RadioGroup</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">"optionsWithDisabled"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value3"</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
   data(){
       <span class="hljs-keyword">return</span>{
            <span class="hljs-attr">value1</span>: <span class="hljs-string">'Apple'</span>,
            <span class="hljs-attr">value2</span>: <span class="hljs-string">'Apple'</span>,
            <span class="hljs-attr">value3</span>: <span class="hljs-string">'Apple'</span>,
            <span class="hljs-attr">plainOptions</span>: [<span class="hljs-string">'Apple'</span>, <span class="hljs-string">'Pear'</span>, <span class="hljs-string">'Orange'</span>],
            <span class="hljs-attr">options</span>: [
                { <span class="hljs-attr">label</span>: <span class="hljs-string">'Apple'</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">'Apple'</span> },
                { <span class="hljs-attr">label</span>: <span class="hljs-string">'Pear'</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">'Pear'</span> },
                { <span class="hljs-attr">label</span>: <span class="hljs-string">'Orange'</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">'Orange'</span> }],
            <span class="hljs-attr">optionsWithDisabled</span>: [
                { <span class="hljs-attr">label</span>: <span class="hljs-string">'Apple'</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">'Apple'</span> },
                { <span class="hljs-attr">label</span>: <span class="hljs-string">'Pear'</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">'Pear'</span> },
                { <span class="hljs-attr">label</span>: <span class="hljs-string">'Orange'</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">'Orange'</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">false</span> }
            ]
       }
   }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre>
                        </div>
                    </section>
                </section>
            </div>
            <div class="starv-col">
                <section class="starv-code">
                    <section class="starv-code__demo">
                        <div>
                            <Radio :disabled="disabled">Disabled</Radio>
                            <br />
                            <Radio v-model="checked" :disabled="disabled">Disabled</Radio>
                            <div style="marginTop: 20px">
                                <Button type="primary" @click="toggleDisabled">
                                    Toggle disabled
                                </Button>
                            </div>
                        </div>
                    </section>

                    <section :class="['starv-code__describe',{'starv-code__describe--show':show.num1}]">
                        <div class="starv-code__describe--title">
                            不可用
                        </div>
                        <p>Radio 不可用。
                            <i :class="['star-icon','starv-icon','iconarrow-down-bold',{'anticond-up':show.num2}] " @click="show.num2=!show.num2" :title="show.num2?'隐藏代码':'显示代码'"></i>
                        </p>
                    </section>
                    <section :class="['starv-code__details',{'starv-code__detailsthess--show':show.num2}]">
                        <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
                            <pre class="html"><code class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">"disabled"</span>&gt;</span>Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"checked"</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">"disabled"</span>&gt;</span>Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"marginTop: 20px"</span>&gt;</span>
               <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"toggleDisabled"</span>&gt;</span>
                  Toggle disabled
               <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
   data(){
       <span class="hljs-keyword">return</span>{
          <span class="hljs-attr">disabled</span>: <span class="hljs-literal">false</span>,
          <span class="hljs-attr">checked</span>: <span class="hljs-literal">true</span>
       }
   },
    <span class="hljs-attr">methods</span>: {
        toggleDisabled() {
            <span class="hljs-keyword">this</span>.disabled = !<span class="hljs-keyword">this</span>.disabled
        }
    }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre>
                        </div>
                    </section>
                </section>
                <section class="starv-code">
                    <section class="starv-code__demo">
                        <div>
                            <RadioGroup v-model="radioGroupd">
                                <Radio style=" display: block;height: 30px;line-height: 30px;" label="1">Option A</Radio>
                                <Radio style=" display:block;height: 30px;line-height: 30px;" label="2">Option B</Radio>
                                <Radio style=" display: block;height: 30px;line-height: 30px;" label="3">Option C</Radio>
                                <Radio style=" display: block;height: 30px;line-height: 30px;" label="4">
                                    More...
                                    <Input v-if="radioGroupd==='4'" style='width: 100; margin-left: 10' />
                                </Radio>
                            </RadioGroup>
                        </div>
                    </section>

                    <section :class="['starv-code__describe',{'starv-code__describe--show':show.num4}]">
                        <div class="starv-code__describe--title">
                            RadioGroup 垂直
                        </div>
                        <p>垂直的 RadioGroup，配合更多输入框选项。
                            <i :class="['star-icon','starv-icon','iconarrow-down-bold',{'anticond-up':show.num4}] " @click="show.num4=!show.num4" :title="show.num4?'隐藏代码':'显示代码'"></i>
                        </p>
                    </section>
                    <section :class="['starv-code__details',{'starv-code__detailsthess--show':show.num4}]">
                        <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
                            <pre class="html"><code class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">RadioGroup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"radioGroupd"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">style</span>=<span class="hljs-string">" display: block;height: 30px;line-height: 30px;"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"1"</span>&gt;</span>Option A<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">style</span>=<span class="hljs-string">" display:block;height: 30px;line-height: 30px;"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"2"</span>&gt;</span>Option B<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">style</span>=<span class="hljs-string">" display: block;height: 30px;line-height: 30px;"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"3"</span>&gt;</span>Option C<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">style</span>=<span class="hljs-string">" display: block;height: 30px;line-height: 30px;"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"4"</span>&gt;</span>
                More...
                <span class="hljs-tag">&lt;<span class="hljs-name">Input</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">"radioGroupd==='4'"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">'width: 100; margin-left: 10'</span> /&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">RadioGroup</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
   data(){
       <span class="hljs-keyword">return</span>{
          <span class="hljs-attr">radioGroupd</span>: <span class="hljs-string">'1'</span>
       }
   }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    </article>
</template>
<script>
export default {
    data() {
        return {
            show: {
                num1: false,
                num2: false,
                num3: false,
                num4: false,
                num5: false
            },
            disabled: false,
            checked: true,
            radioGroup: '1',
            radioGroupd: '1',
            value1: 'Apple',
            value2: 'Apple',
            value3: 'Apple',
            plainOptions: ['Apple', 'Pear', 'Orange'],
            options: [
                { label: 'Apple', value: 'Apple' },
                { label: 'Pear', value: 'Pear' },
                { label: 'Orange', value: 'Orange' }],
            optionsWithDisabled: [
                { label: 'Apple', value: 'Apple' },
                { label: 'Pear', value: 'Pear' },
                { label: 'Orange', value: 'Orange', disabled: false }
            ]
        }
    },
    methods: {
        toggleDisabled() {
            this.disabled = !this.disabled
        }
    }
}
</script>

