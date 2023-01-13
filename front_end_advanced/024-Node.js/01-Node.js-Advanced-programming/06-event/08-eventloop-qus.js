// setTimeout(() => {
//   console.log('timeout')
// }, 0)

// setImmediate(() => {
//   console.log('immdieate')
// })

// 1.timers 阶段：这个阶段执行timer（setTimeout、setInterval）的回调
// 2.I/O callbacks 阶段：执行一些系统调用错误，比如网络通信的错误回调
// 3.idle, prepare 阶段：仅node内部使用
// 4.poll 阶段：获取新的I/O事件, 适当的条件下node将阻塞在这里
// 5.check 阶段：执行 setImmediate() 的回调
// 6.close callbacks 阶段：执行 socket 的 close 事件回调

const fs = require('fs')

fs.readFile('./m1.js', () => {
  setTimeout(() => {
    console.log('timeout')
  }, 0)

  setImmediate(() => {
    console.log('immdieate')
  })
})