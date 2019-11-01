<template>
  <div>
    {{ title }} : {{ path }}
    <p>
      <router-link to="/test">测试页</router-link>
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
  }
};
</script>