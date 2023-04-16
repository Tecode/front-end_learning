function timerGame() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve({ foo: 'bar'})
      // timerGame()
    }, 2000);
  })
}

//  mock 定时器
jest.useFakeTimers();


test('timer mock', () => {
  expect.assertions(1)
  timerGame().then(data => {
    expect(data).toEqual({ foo: 'bar'})
  })
// 快进1秒
  jest.advanceTimersByTime(1000)
  console.log(100);
  // 快进1秒
  jest.advanceTimersByTime(1000)
  
  // 快速所有定时器结束
  // jest.runAllTimers()

  // 快进当前的定时器结束，不等待其它的
  // jest.runOnlyPendingTimers()
});