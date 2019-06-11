<template>
  <div id="app" @click="handleClick">
    <a href="javascript:;">{{content}}</a>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      content: '测试测试'
    }
  },
  mounted () {
    this.content = 'vue 服务器端渲染'
  },
  methods: {
    handleClick () {
      console.log(1111)
    }
  }
}
</script>

<style scoped>
#app a {
  text-decoration: none;
}
</style>
