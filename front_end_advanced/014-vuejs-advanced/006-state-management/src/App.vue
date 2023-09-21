<template>
  <div id="app">
    <h1>父给子传值</h1>
    <parent01></parent01>

    <hr />
    <h1>子给父传值</h1>
    <parent02></parent02>

    <hr />
    <h1>不相关组件传值</h1>
    <sibling01 :num="num"></sibling01>
    <sibling02></sibling02>

    <hr />
    <h1>父直接访问子组件：通过 ref 获取子组件</h1>
    <parent04></parent04>

    <hr />
    <h1>简易的状态管理</h1>
    <componentA></componentA>
    <componentB></componentB>
  </div>
</template>

<script>
import parent01 from './components/01-props-hand-down/parent.vue'
import parent02 from './components/02-event-hand-down/parent.vue'
import sibling01 from './components/03-event-bus/001-sibling.vue'
import sibling02 from './components/03-event-bus/002-sibling.vue'
import parent04 from './components/04-vue-ref/parent.vue'
import componentA from './components/05-easy-state/componentA.vue'
import componentB from './components/05-easy-state/componentB.vue'


export default {
	name: 'app-component',
	components: {
		parent01,
		parent02,
		sibling01,
		sibling02,
		parent04,
		componentA,
		componentB,
	},
  mounted(){
  },
	data() {
		return {
			num: 1,
		}
	},
}
</script>

<style>
</style>
