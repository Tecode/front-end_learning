// function getData(callback) {
//   setTimeout(() => {
//     callback({ foo: 'bar'})
//   }, 2000);
// }

// 错误做法
// test('async test', () => {
//   getData(data => {
//     expect(data).toEqual({ foo: 'bar'})
//   })
// })

// 测试回掉函数的异步
// test('async test', (done) => {
//   getData(data => {
//     done()
//     expect(data).toEqual({ foo: 'bar'})
//   })
// })

// Promise方式
function getData(callback) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve({ foo: 'bar'})
    }, 2000);
  })
}

// test('async test', () => {
//   return getData().then(data => {
//     expect(data).toEqual({ foo: 'bar'})
//   })
// })

test('async resolves', () => {
 return expect(getData()).resolves.toEqual({ foo: 'bar'})
//  return expect(getData()).rejects.toEqual({ foo: 'bar'})
})

// async await
test('async await', async () => {
  try {
    const data = await getData()
    expect(data).toEqual({ foo: 'bar'})
  } catch (error) {
    expect(error).toEqual({ foo: 'bar'})
  }
 })