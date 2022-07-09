// DOM测试
// yarn jest --env=jsdom .\html.test.js

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