const { sum, subtract } = require("./calculator")

// 引入需要测试的函数
// 给函数一个输出
// 定义预期输出
// 检查函数是否返回了预期的结果

// const result = sum(1,2)
// const expected = 3


test('sum(1,2) 的结果应该是3', () => {
    expect(sum(1, 2)).toBe(3)
})

test('subtract(1,2) 的结果应该是-1', () => {
    expect(subtract(1, 2)).toBe(-1)
})

// if (result !== expected) {
//     throw new Error(`sum(1,2) 的结果应该是3，但是收到了${result}`)
// }

function expect(result) {
    return {
        toBe(expected) {
            if (result !== expected) {
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