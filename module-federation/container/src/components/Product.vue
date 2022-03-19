<template>
  <div ref="product-app"></div>
</template>

<script>
import { mount } from "product/ProductApp";

export default {
  name: "ProductComponent",
  mounted() {
    console.log(this.$refs["product-app"], mount);
    mount(this.$refs["product-app"])
  },
};
</script>