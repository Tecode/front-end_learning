<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <MainComponent />
    <HelloWorld2 />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    MainComponent: () => import("auth/MainComponent"),
    HelloWorld2: () => import("product/HelloWorld"),
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
</style>
