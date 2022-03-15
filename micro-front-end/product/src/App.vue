<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <Parcel :config="parcelConfig" :mountParcel="mountParcel" /> -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <router-view></router-view>
  </div>
</template>

<script>
// import Parcel from "single-spa-vue/dist/esm/parcel";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    // Parcel,
  },
  // data() {
  //   return {
  //     parcelConfig: window.System.import("@study/navbar"),
  //     mountParcel: mountRootParcel,
  //   };
  // },
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
