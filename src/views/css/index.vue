<template>
  <div class="wrap">
    <div class="menu">
      <h1 class="title">
        <img class="logo" src="@/assets/logo.svg" alt="一个燚的网站" />
        <span>标题标题</span>
      </h1>
      <div class="item">
        <h2>二级标题二级标题</h2>
        <ul class="list">
          <li>小标题小标题小标题小标题</li>
          <li>小标题小标题小标题小标题</li>
          <li>小标题小标题小标题小标题</li>
          <li>小标题小标题小标题小标题</li>
          <li>小标题小标题小标题小标题</li>
          <li>小标题小标题小标题小标题</li>
        </ul>
      </div>
      <div class="item">
        <h2>二级标题二级标题</h2>
        <ul class="list">
          <li>小标题小标题小标题小标题</li>
          <li>小标题小标题小标题小标题</li>
          <li>小标题小标题小标题小标题</li>
          <li>小标题小标题小标题小标题</li>
          <li>小标题小标题小标题小标题</li>
          <li>
            小标题小标题小标题小标题小标题小标题小标题小标题小标题小标题小标题小标题小标题小标题小标题小标题
          </li>
        </ul>
      </div>
      <div class="item">
        <h2>二级标题二级标题</h2>
        <ul class="list">
          <li>小标题小标题小标题小标题</li>
          <li>小标题小标题小标题小标题</li>
          <li>小标题小标题小标题小标题</li>
          <li>小标题小标题小标题小标题</li>
          <li>小标题小标题小标题小标题</li>
          <li>
            小标题小标题小标题小标题小标题小标题小标题小标题小标题小标题小标题小标题小标题小标题小标题小标题
          </li>
        </ul>
      </div>
      <div class="item">
        <h2>二级标题二级标题</h2>
        <ul class="list">
          <li>小标题小标题小标题小标题</li>
          <li>小标题小标题小标题小标题</li>
          <li>小标题小标题小标题小标题</li>
          <li>小标题小标题小标题小标题</li>
          <li>小标题小标题小标题小标题</li>
          <li>
            小标题小标题小标题小标题小标题小标题小标题小标题小标题小标题小标题小标题小标题小标题小标题小标题
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
export default {
}
</script>

<style>
:root {
  --scroll-write: 5px;
}
::-webkit-scrollbar {
  width: var(--scroll-write);
  height: 1px;
}
::-webkit-scrollbar-thumb {
  border-radius: var(--scroll-write);
  -webkit-box-shadow: inset 0 0 5px #999;
  background: #d8d8d8;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px #999;
  border-radius: var(--scroll-write);
}
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
  padding: 10px;
  display: flex;
  color: #333;
  font-size: 20px;
}
.logo {
  width: 40px;
  height: 40px;
}
.title span {
  margin: auto;
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
  color: #505d6b;
}
.list li {
  margin: 5px 0;
}
</style>
