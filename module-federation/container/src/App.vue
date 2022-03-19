<template>
  <div id="app">
    <router-link class="link" to="/">Auth模块</router-link>
    <router-link class="link" to="/bar">Product模块</router-link>
    <router-link class="link" to="/product/home">Auth页面</router-link>
    <router-view></router-view>
    <!-- <MainComponent />
    <HelloWorld2 /> -->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    // MainComponent: () => import("auth/MainComponent"),
    // HelloWorld2: () => import("product/HelloWorld"),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.link {
  margin: 0 10px;
}
</style>
