// 将MD文件转换为html的loader
// 参考：https://webpack.docschina.org/api/loaders/#synchronous-loaders
const marked = require("marked");

module.exports = function (content, map, meta) {
  return `module.exports = ${JSON.stringify(marked.parse(content))}`;
  // 当调用 callback() 函数时，总是返回 undefined
};
