```html
<template>
    <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
    </div>
</template>
<script>
export default {

}
</script>
```

```html
<template>
    <div>
        <Button type="primary"  shape="circle" icon="search" />
        <Button type="primary"  icon="search">Search</Button>
        <Button shape="circle"  icon="search" />
        <Button icon="search">Search</Button>
        <br />
        <Button  shape="circle" icon="search" />
        <Button  icon="search">Search</Button>
        <Button  type="dashed" shape="circle" icon="search" />
        <Button  type="dashed" icon="search">Search</Button>
    </div>
</template>
<script>
export default {

}
</script>
```

```html
<template>
    <div>
        <Button class="antv-btn" type="primary">Primary</Button>
        <Button class="antv-btn" type="primary" disabled>Primary(disabled)</Button>
        <br />
        <Button class="antv-btn">Default</Button>
        <Button class="antv-btn" disabled>Default(disabled)</Button>
        <br />
        <Button class="antv-btn" type="dashed">Dashed</Button>
        <Button class="antv-btn" type="dashed" disabled>Dashed(disabled)</Button>
        <div style="padding:8px 8px 8px 8px;background:rgb(190, 200, 200);margin-top:15px">
            <Button  ghost>Ghost</Button>
            <Button  ghost disabled>Ghost(disabled)</Button>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
```

```html
<template>
    <div>
      <Button class="antv-btn" type="primary" loading>Loading</Button>
      <Button class="antv-btn" type="primary" size="small" loading>Loading</Button>
      <br />
      <Button class="antv-btn" type="primary" :loading="loading" @click="enterLoading">
        Click me!
      </Button>
      <Button class="antv-btn" type="primary" icon="poweroff" :loading="iconLoading" @click="enterIconLoading">
        Click me!
      </Button>
      <br />
      <Button class="antv-btn" shape="circle" loading />
      <Button class="antv-btn" type="primary" shape="circle" loading />
    </div>
</template>
<script>
export default {
     data() {
        return {
            loading: false,
            iconLoading: false
        }
    }
    methods: {
        enterLoading() {
            this.loading = true
        },
        enterIconLoading() {
            this.iconLoading = true
        }
    }
}
</script>
```

```html
<template>
    <div style="background: rgb(190, 200, 200); padding: 26px 16px 16px">
        <Button type="primary" ghost>Primary</Button>
        <Button ghost>Default</Button>
        <Button type="dashed" ghost>Dashed</Button>
        <Button type="danger" ghost>danger</Button>
    </div>
</template>
<script>
export default {

}
</script>
```

```html
<template>
    <div>
        <h4>Basic</h4>
        <ButtonGroup class="antv-btn">
            <Button>Cancel</Button><Button>OK</Button>
        </ButtonGroup>
        <ButtonGroup class="antv-btn">
            <Button disabled>L</Button><Button disabled>M</Button><Button disabled>R</Button>
        </ButtonGroup>
        <ButtonGroup class="antv-btn">
            <Button>L</Button><Button>M</Button><Button>R</Button>
        </ButtonGroup>
        <h4>With Icon</h4>
        <ButtonGroup class="antv-btn">
            <Button type="primary">
                <Icon slot="ico nNode" type="left" />Go back
            </Button><Button type="primary">Go forward
                <Icon slot="iconNode" type="right" />
            </Button>
        </ButtonGroup>
        <ButtonGroup class="antv-btn">
            <Button type="primary" icon="cloud" /><Button type="primary" icon="cloud-download" />
        </ButtonGroup>
    </div>
</template>
<script>
export default {

}
</script>
```

```html
<template>
    <div>
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
    </div>
</template>
<script>
export default {
   data(){
       return{
          disabled: false,
          checked: true
       }
   },
    methods: {
        toggleDisabled() {
            this.disabled = !this.disabled
        }
    }
}
</script>
```

```html
<template>
    <div>
        <RadioGroup v-model="radioGroup">
            <Radio label="1">A</Radio>
            <Radio label="2">B</Radio>
            <Radio label="3">C</Radio>
            <Radio label="4">D</Radio>
        </RadioGroup>
    </div>
</template>
<script>
export default {
   data(){
       return{
          radioGroup: '1'
       }
   }
}
</script>
```


```html
<template>
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
</template>
<script>
export default {
   data(){
       return{
          radioGroupd: '1'
       }
   }
}
</script>
```


```html
<template>
    <div>
        <RadioGroup :options="plainOptions" v-model="value1" />
        <RadioGroup :options="options" v-model="value2" />
        <RadioGroup :options="optionsWithDisabled" v-model="value3" />
    </div>
</template>
<script>
export default {
   data(){
       return{
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
   }
}
</script>
```