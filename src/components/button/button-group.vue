<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<script>
const prefixCls = 'sta-btn-group'
export default {
    name: 'ButtonGroup',
    props: {
        size: {
            type: String,
            default: 'default'
        }
    },
    computed: {
        sizeCls() {
            let sizeCls = ''
            switch (this.size) {
                case 'large':
                    sizeCls = 'lg'
                    break
                case 'small':
                    sizeCls = 'sm'
                default:
                    break
            }
            return sizeCls
        },
        classes() {
            return [
                prefixCls,
                { [`${prefixCls}-${this.sizeCls}`]:this.sizeCls}
            ]
        }
    }
}
</script>

