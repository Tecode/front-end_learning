const calculation = (number001, number002) => number001 + number002;
console.log(calculation(100, 200));

import("./split")
  .then((data) => console.log(data))
  .catch((error) => console.log(error, "错误信息"));
