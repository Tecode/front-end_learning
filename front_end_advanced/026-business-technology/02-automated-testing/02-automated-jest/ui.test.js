import Vue from 'vue/dist/vue'

function renderVueComponent(params) {
    document.body.innerHTML = `<div id='app'></div>`
    new Vue({
        template: `<div id='#app1'><div>{{message}}</div></div>`,
        data: {message: 'Hello World'}
    }).$mount('#app')
 }


test('Snapshot Test', () => {
    renderVueComponent()
    // 第一次运行会生成快照文件字符串
    // 下一次会对它和快照文件对比
    expect(document.body.innerHTML).toMatchSnapshot()
 })

//  yarn jest --env=jsdom --updateSnapshot 更新快照