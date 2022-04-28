const value = "amd打包多入口";

import("./split")
  .then((data) => console.log(data))
  .catch((error) => console.log(error, "错误信息"));

  console.log(value);