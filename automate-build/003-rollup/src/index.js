import { name, version } from "../package.json";
import _ from "lodash-es";
import commonJs from "./common";


const calculation = (number001, number002) => number001 + number002;
console.log(calculation(100, 200));
// 代码拆分
import("./split")
  .then((data) => console.log(data))
  .catch((error) => console.log(error, "错误信息"));
console.log(name, version);
console.log(_.capitalize("hello_world"));
console.log(commonJs);
