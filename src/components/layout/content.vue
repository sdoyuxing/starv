<template>
    <div :class="classes"><slot></slot></div>
</template>
<script>
    const prefixCls = 'ant-layout';
    export default {
        name: 'Content',
        computed: {
            classes () {
                return `${prefixCls}-content`;
            }
        }
    };
</script>