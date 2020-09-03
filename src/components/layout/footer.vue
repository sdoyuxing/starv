<template>
    <div :class="classes"><slot></slot></div>
</template>
<script>
    const prefixCls = 'ant-layout';
    export default {
        name: 'Footer',
        computed: {
            classes () {
                return `${prefixCls}-footer`;
            }
        }
    };
</script>