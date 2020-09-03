<template>
    <div></div>
</template>
<script>
const prefixCls = 'ant-layout-sider'
export default {
    props: {
        breakpoint: {
            type: String,
            validator(value) {
                return oneOf(value, ['xs', 'sm', 'md', 'lg', 'xl']);
            }
        },
        collapsed: {
            type: Boolean
        },
        collapsedWidth: {
            type: Number,
            default: 64
        },
        collapsible: {
            type: Boolean,
            default: false
        },
        defaultCollapsed: {
            type: Boolean,
            default: false
        },
        reverseArrow: {
            type: Boolean,
            default: false
        },
        theme: {
            type: String,
            default: 'dark',
            validator(value) {
                return oneOf(value, ['light', 'dark']);
            }
        },
        width: {
            type: [Number, String]
        }

    },
    data() {
        return {
            stateCollapsed: this.collapsed
        }
    },
    computed: {
        classes() {
            return [
                prefixCls,
                `${prefixCls}-${this.theme}`,
                {
                    [`${prefixCls}-collapsed`]: this.stateCollapsed,
                }]
        }
    }
}
</script>

