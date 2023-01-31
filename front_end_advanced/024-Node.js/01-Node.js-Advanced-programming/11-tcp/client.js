const net = require('net')
const MyTransform = require('./myTransform.js')

let overageBuffer = null
let ts = new MyTransform()

const client = net.createConnection({
  host: 'localhost',
  port: 1234
})

client.write(ts.encode('测试数据加载001'))
client.write(ts.encode('测试数据加载002'))
client.write(ts.encode('测试数据加载003'))
client.write(ts.encode('测试数据加载004'))
client.write(ts.encode('测试数据加载005'))

// <Buffer 00 05 00 0d e6 8b 89 e5 8b be e6 95 99 e8 82 b2 31>
client.on('data', (chunk) => {
  if (overageBuffer) {
    chunk = Buffer.concat([overageBuffer, chunk])
  }
  let packageLen = 0
  while (packageLen = ts.getPackageLen(chunk)) {
    const packageCon = chunk.slice(0, packageLen)
    chunk = chunk.slice(packageLen)

    const ret = ts.decode(packageCon)
    console.log(ret)
  }
  overageBuffer = chunk
})