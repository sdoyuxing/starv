<template>
    <div :class="classes"><slot></slot></div>
</template>
<script>
    const prefixCls = 'ant-layout';
    export default {
        name: 'Header',
        computed: {
            classes () {
                return `${prefixCls}-header`;
            }
        }
    };
</script>