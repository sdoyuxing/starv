<template>
   <i v-bind="$attrs" v-on="$listeners" :class="classes"></i>
</template>
<script>
const prefixCls = 'star'
export default {
    name: 'Icon',
    props: {
        type: {
            type: String
        }
    },
    computed: {
        classes() {
            return [
                `${this.type}`,
                `${prefixCls}-icon`
            ]
        }
    }

}
</script>

