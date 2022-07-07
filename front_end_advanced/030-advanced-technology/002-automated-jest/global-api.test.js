// test('should first', () => {
//     console.log("Test Api")
// })

//  test别名
// it('It Api', () => {
//     console.log('It Api')
// })

// 当前模块只运行test.only
// test.only('should first', () => {
//     console.log(" test.only 1")
// })


// test('global api test', () => {
//     expect(2 + 2).toBe(4)
//     expect({ name: 'haoxuan' }).toEqual({ name: 'haoxuan' })
//     expect('funny day').toMatch('day')
//     expect(4).toBeGreaterThan(2)
//     expect(4).toBeLessThan(6)
// })

beforeAll(() => {
    console.log('beforeAll')
})

beforeEach(() => {
    console.log('beforeEach')
})


// describe函数
describe('A 组件', () => {
    test('功能 001', () => {
        expect(5).toBe(1)
        console.log("Test Api 功能 001")
    })

    test('功能 002', () => {
        console.log("Test Api 功能 002")
    })
})

describe('B 组件', () => {
    test('功能 003', () => {
        console.log("Test Api 功能 003")
    })

    test('功能 004', () => {
        console.log("Test Api 功能 004")
    })
})

// test('A 组件 功能 001', () => {
//     console.log("Test Api 功能 001")
// })

// test('A 组件 功能 002', () => {
//     console.log("Test Api 功能 002")
// })


// test('B 组件 功能 003', () => {
//     console.log("Test Api 功能 003")
// })

// test('B 组件 功能 004', () => {
//     console.log("Test Api 功能 004")
// })