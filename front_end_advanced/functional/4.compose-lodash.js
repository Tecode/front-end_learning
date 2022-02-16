const _ = require("lodash");
const value = "haoxuan lina lock";
const split = (value) => value.split(" ");
const first = (list) => list[0];
const toUpper = (value) => value.toUpperCase();
const fn = _.flowRight(toUpper, first, split);

console.log(fn(value));
// HAOXUAN
