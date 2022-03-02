// 声明变量时使用字面量执行效率会更高

var name = new String("haoxuan");
// 94852248.41 ops/s ± 3.45%
var name = "haoxuan";
// 856090213.93 ops/s ± 5.03% Fastest
console.log(name);

var obj = new Object();
obj.name = "haoxuan";
obj.age = 12;
// 332556531.59 ops/s ± 1.91%

var obj = {
  name: "haoxuan",
  age: 12,
};
// 370973764.78 ops/s ± 0.41% Fastest

console.log(obj);
