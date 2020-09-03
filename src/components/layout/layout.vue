<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<script>
const prefixCls = 'ant-layout'
export default {
    name: 'Layout',
    props: {
        hasSider: {
            type: Boolean
        }
    },
    computed: {
        classes() {
            return [
                prefixCls,
                {
                    [`${prefixCls}-has-sider`]: (this.hasSider || this.findSider())
                }
            ]
        }
    },
    methods: {
        findSider() {
            return this.$children.some(child => {
                return child.$options.name === 'Sider';
            });
        }
    }

}
</script>

