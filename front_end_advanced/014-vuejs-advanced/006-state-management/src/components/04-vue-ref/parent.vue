<template>
  <div>
    <h1>ref Parent</h1>

    <child ref="c"></child>
  </div>
</template>

<script>
import child from './child.vue'

export default {
	name: 'parent-component',
	components: {
		child,
	},
	mounted() {
		console.log(window.token.data.name)
		this.$refs.c.focus()
		this.$refs.c.value = 'hello input'
	},
}
</script>

<style>
</style>