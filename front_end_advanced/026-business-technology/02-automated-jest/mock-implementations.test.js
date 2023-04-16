// 模拟实现
jest.mock('./foo')
import foo from './foo'

foo.mockImplementation(() => 42)
test('Mock Implementations', () => { 
    expect(foo()).toBe(42)
 })
