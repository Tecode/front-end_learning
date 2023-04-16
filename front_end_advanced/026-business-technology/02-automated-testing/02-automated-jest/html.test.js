// DOM测试
// yarn jest --env=jsdom .\html.test.js
import Vue from 'vue/dist/vue'

function renderHtml() {
    const div = document.createElement('div')
    div.innerHTML = `<h1>Hello World</h1>`
    document.body.appendChild(div)
}

test('DOM Test', () => {
    renderHtml()
    // console.log(document.body.innerHTML)
    expect(document.body.querySelector('h1').innerHTML).toBe('Hello World')
 })

// 测试Vue组件
 function renderVueComponent(params) {
    document.body.innerHTML = `<div id='app'></div>`
    new Vue({
        template: `<div>{{message}}</div>`,
        data: {message: 'Hello World'}
    }).$mount('#app')
 }

 test('Vue DOM Test', () => {
    renderVueComponent()
    // console.log(document.body.innerHTML)
    expect(document.body.innerHTML).toMatch(/Hello World/)
 })
