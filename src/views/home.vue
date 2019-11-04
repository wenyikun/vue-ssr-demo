<template>
  <div>
    {{ title }} : {{ path }}
    <p>
      <router-link to="/test">测试页2222</router-link>
    </p>
  </div>
</template>

<script>
export default {
  asyncData({ route, store }) {
    store.commit("setTitle", "首页");
    store.commit("setPath", route.path);
  },
  computed: {
    title() {
      return this.$store.state.title;
    },
    path() {
      return this.$store.state.path;
    }
  },
  mounted() {
    this.$store.commit("setTitle", "首页");
    this.$store.commit("setPath", this.$route.path);
  }
};
</script>

<style>
div {
  color: #f00;
}
</style>