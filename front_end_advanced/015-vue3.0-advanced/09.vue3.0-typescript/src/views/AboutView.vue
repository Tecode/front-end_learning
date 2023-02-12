<template>
  <div class="about">
    <button @click="handleClick">Load List Data</button>
    <h2>{{ data.list.length }}</h2>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue'

export default {
  setup () {
    const data = reactive<{list: number[]}>({ list: [] })
    const handleClick = () => {
      const list = []
      for (let index = 0; index < 10000; index++) {
        list.push(index)
      }
      data.list = Object.freeze(list) as number[]
    }
    return { data, handleClick }
  }
}
</script>
