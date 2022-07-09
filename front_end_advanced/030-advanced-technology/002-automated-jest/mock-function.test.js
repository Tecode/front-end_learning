function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
      callback(items[index])
    }
}

test('Mock function', () => { 
    const mockCallback = jest.fn((value) => value + 1)
    // 返回的value都是99
    // mockCallback.mockReturnValue(99)
    // 第一个返回99
    mockCallback.mockReturnValueOnce(99)
    const items = [1,2,3]
    forEach(items, mockCallback)
    console.log(mockCallback.mock)
    // {
    //     calls: [ [ 1 ], [ 2 ], [ 3 ] ],
    //     contexts: [ undefined, undefined, undefined ],
    //     instances: [ undefined, undefined, undefined ],
    //     invocationCallOrder: [ 1, 2, 3 ],
    //     results: [
    //       { type: 'return', value: 2 },
    //       { type: 'return', value: 3 },
    //       { type: 'return', value: 4 }
    //     ],
    //     lastCall: [ 3 ]
    //   }
    // 断言执行次数
    expect(mockCallback.mock.calls.length).toBe(items.length)
    expect(mockCallback.mock.calls[0][0]).toBe(1)
    expect(mockCallback.mock.calls[2][0]).toBe(3)
 })