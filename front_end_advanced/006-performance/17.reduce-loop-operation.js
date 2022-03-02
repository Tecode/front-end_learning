// 减少循环体操作，把重复使用的值放到外面缓存起来

var run = () => {
  var languageList = ["Go", "Swift", "JavaScript", "Java", "C", "Kotlin"];
  for (let index = 0; index < languageList.length; index++) {
    console.log(languageList[index]);
  }
};
// 331188841.54 ops/s ± 1.82%

var run = () => {
  var languageList = ["Go", "Swift", "JavaScript", "Java", "C", "Kotlin"];
  var len = languageList.length;
  for (let index = 0; index < len; index++) {
    console.log(languageList[index]);
  }
};
// 353546500.54 ops/s ± 0.38%

// 修改循环的方式从多到少
var run = () => {
  var languageList = ["Go", "Swift", "JavaScript", "Java", "C", "Kotlin"];
  var len = languageList.length;
  while (len > 0) {
    console.log(languageList[len - 1]);
    len--;
  }
};
// 379093594.9 ops/s ± 0.46% Fastest

run();
