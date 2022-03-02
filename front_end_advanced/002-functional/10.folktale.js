const { curry, compose } = require("folktale/core/lambda");
const { toUpper, first, split } = require("lodash/fp");

// folktale的使用
const func = curry(2, (x, y) => x + y);
console.log(func(10, 20));
console.log(func(10)(20));
// 30
// 30

const func002 = compose(first, split(" "), toUpper);
console.log(func002("haoxua haha"));