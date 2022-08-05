<template>
  <div>
    <p>Vue 组件 {{ value }}</p>
    <button @click="value++">点我+1</button>
    <button @click="value--">点我-1</button>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: 'VueComponent',
  setup() {
    return { value: ref(0) };
  },
});
</script>
