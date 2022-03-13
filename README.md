# front-end_learning
前端知识学习

## Javascript 性能优化

```js
// 变量局部化（全局、局部）
// 这样可以提高代码的执行效率（ 减少了数据访问时需要查找的路径 ）
// 数据的存储和读取

// https://jsbench.me/ 测试结果
var i,
  str = "";
function packageDom() {
  for (i = 0; i < 1000; i++) {
    str += i;
  }
}
packageDom();
// 90812.96 ops/s ± 0.34%
// Fastest

function packageDom() {
  let str = "";
  for (let i = 0; i < 1000; i++) {
    str += i;
  }
}

packageDom();
// 1014277249.2 ops/s ± 0.3%
// 99.99 % slower
```
