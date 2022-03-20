<template>
  <div ref="product-app"></div>
</template>

<script>
import { mount } from "product/ProductApp";

export default {
  name: "ProductComponent",
  mounted() {
    console.log(this.$router);
    mount(this.$refs["product-app"]);
  },
  watch: {
    $route(to, from) {
      console.log(to, from, "56565");
    },
  },
};
</script>