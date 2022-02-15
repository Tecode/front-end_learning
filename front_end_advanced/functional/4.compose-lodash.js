const _ = require("lodash");
const value = "haoxuan lina lock";
const fn = _.flowRight(_.toUpper, _.first);
console.log(fn(value));
