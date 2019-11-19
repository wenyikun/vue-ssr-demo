<template>
  <div class="wrap">
    <div class="menu">
      <h1 class="title">
        <img class="logo" src="@/assets/logo.svg" alt="一个燚的网站" />
        <span>{{ css.title }}</span>
      </h1>
      <div class="item" v-for="(item, key) in cssData" :key="key">
        <h2>{{ key }}</h2>
        <ul class="list">
          <li v-for="(list, index) in item" :key="index" :class="{ active: currentPath === css.path + '/' + list.path }">
            <router-link :to="css.path + '/' + list.path">{{ list.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import css from '@/router/css.js'

export default {
  data() {
    return {
      css,
      currentPath: ''
    }
  },
  computed: {
    cssData() {
      const cssData = {}
      this.css.children.forEach(item => {
        if (cssData[item.parentTitle]) {
          cssData[item.parentTitle].push(item)
        } else {
          cssData[item.parentTitle] = [item]
        }
      })
      return cssData
    }
  },
  mounted () {
    this.currentPath = this.$route.path
  },
  watch: {
    $route(to, from) {
      this.currentPath = to.path
    }
  }
}
</script>

<style scoped>
.wrap {
  display: flex;
}
.menu {
  width: 300px;
  height: 100vh;
  overflow-y: scroll;
}
.content {
  flex: 1;
}
.title {
  margin: 0;
  padding: 20px 10px;
  display: flex;
  color: #333;
  font-size: 20px;
}
.logo {
  width: 40px;
  height: 40px;
}
.title span {
  margin: auto 10px;
}
.item {
  box-sizing: border-box;
  padding: 0 10px;
}
.menu h2 {
  margin: 10px 0;
  font-size: 18px;
  color: #34495e;
}
.list {
  padding-left: 10px;
  list-style: none;
  font-size: 14px;
}
.list li {
  padding: 5px 0;
}
.list a {
  color: #505d6b;
  text-decoration: none;
}
.list a:hover {
  color: #3eaf7c;
}
.list .active a {
  color: #3eaf7c;
  font-weight: bold;
}
.content {
  height: 100vh;
  overflow-y: auto;
}
</style>
