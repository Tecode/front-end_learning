import { init } from 'snabbdom/src/package/init';
import { h } from 'snabbdom/src/package/h';


const patch = init([])

const app = document.querySelector('#app')

// 第一个参数：标签+选择器
// 第二个参数：如果是字符串就是标签中的文本内容
const v_node001 = h('div#container.name', [
    h('h1', 'Hello Snabbdom')
])

const patch001 = patch(app, v_node001)

const v_node002 = h('h1#title.wrap_box', 'Edit Snabbdom')

let patch002 = null;
setTimeout(() => {
    patch002 = patch(patch001, v_node002)
}, 2000)

// 清空div的内容
const v_node003 = h('!')
setTimeout(() => {
    patch(patch002, v_node003)
}, 4000)