import { sum, subtract } from './calculator'

// 引入需要测试的函数
// 给函数一个输出
// 定义预期输出
// 检查函数是否返回了预期的结果

test('sum(1,2) 的结果应该是3', () => {
    expect(sum(1, 2)).toBe(3)
})

test('subtract(1,2) 的结果应该是-1', () => {
    expect(subtract(1, 2)).toBe(-1)
})