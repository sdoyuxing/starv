<template>
  <section class="starv-code">
    <div style="display: flex">
      <section class="starv-code__desc">
        <slot></slot>
      </section>
      <section class="starv-code__demo">
        <slot name="source"></slot>
      </section>
    </div>
    <section class="starv-code__describe">
      <div class="starv-code__describe--title">
        <a @click="show = !show">
          {{ show ? "隐藏代码" : "显示代码" }}
          <i
            :class="[
              'star-icon',
              'starv-icon',
              'iconarrow-down-bold',
              { 'anticond-up': show },
            ]"
          ></i>
        </a>
      </div>
    </section>
    <section
      :class="['starv-code__details', { 'starv-code__details--show': show }]"
    >
      <slot name="highlight"></slot>
    </section>
  </section>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>