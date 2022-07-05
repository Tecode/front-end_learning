const { sum, substract } = require("./caculater")

// 引入需要测试的函数
// 给函数一个输出
// 定义预期输出
// 检查函数是否返回了预期的结果

// const result = sum(1,2)
// const expexted = 3

test('sum(1,2) 的结果应该是3', () => {
    expect(sum(1, 2)).toBe(3)
})

test('substract(1,2) 的结果应该是-1', () => {
    expect(substract(1, 2)).toBe(-1)
})

// if (result !== expexted) {
//     throw new Error(`sum(1,2) 的结果应该是3，但是收到了${result}`)
// }

function expect(result) {
    return {
        toBe(expexted) {
            if (result !== expexted) {
                throw new Error(`sum(1,2) 的结果应该是3，但是收到了${result}`)
            }
        }
    }
}

function test(message, func) {
    try {
        func()
    } catch (error) {
        console.error(`${message} ${error.message}`);
    }
}