const fp = require("lodash/fp");
const value = "haoxuan lina lock";

const func = fp.flowRight(
  fp.join("-"),
  fp.map((value) => fp.toUpper(value)),
  fp.split(" ")
);

console.log(func(value));
// HAOXUAN-LINA-LOCK
