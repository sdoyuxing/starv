<template>
  <div>
    <Button type="primary" loading>Loading</Button>
    <Button type="primary" :loading="loading" @click="enterLoading">Click me!</Button>
    <Button type="info" icon="iconplay" :loading="iconLoading" @click="enterIconLoading">Click me!</Button>
    <Button
      type="primary"
      :loading="proLoading"
      loadType="progress"
      @click="enterProLoading"
    >Click me!</Button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
      iconLoading: false,
      proLoading: false,
    };
  },
  methods: {
    enterLoading() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 5000);
    },
    enterIconLoading() {
      this.iconLoading = true;
      setTimeout(() => {
        this.iconLoading = false;
      }, 5000);
    },
    enterProLoading() {
      this.proLoading = true;
      setTimeout(() => {
        this.proLoading = false;
      }, 2000);
    },
  },
};
</script>

