<template>
  <div>
    <router-link class="link" to="/product/home">产品列表首页</router-link>
    <router-link class="link" to="/product/list">产品列表</router-link>
    <router-link class="link" to="/product/detail">产品详情</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#product-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.link {
  margin: 0 10px;
}
</style>
