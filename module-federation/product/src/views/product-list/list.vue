<template>
  <ul class="list-wrap">
    <li v-for="(item, index) in listData.prdLst" :key="index">
      {{ item.nme }}
    </li>
  </ul>
</template>

<script>
import { listData } from "./tempData";
console.log(listData.prdLst, "----listData");
export default {
  name: "product-list",
  data: () => ({ listData }),
};
</script>

<style scoped>
.list-wrap li {
  padding: 10px;
}
</style>