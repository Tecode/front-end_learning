define(['require'], (function (require) { 'use strict';

  const value = "amd打包多入口";

  new Promise(function (resolve, reject) { require(['./split-eb3a35e0'], resolve, reject); })
    .then((data) => console.log(data))
    .catch((error) => console.log(error, "错误信息"));

    console.log(value);

}));
