// ECMAScript 2017

const obj = { name: "haoxuan", work: "developer" };

// Object.values
// [ 'haoxuan', 'developer' ]
console.log(Object.values(obj));

// Object.entries 可以将对象转为数组形式
// [ [ 'name', 'haoxuan' ], [ 'work', 'developer' ] ]
console.log(Object.entries(obj));
console.log(new Map(Object.entries(obj)));
// Map(2) { 'name' => 'haoxuan', 'work' => 'developer' }

for (const [key, value] of Object.entries(obj)) {
  console.log(key, value);
}

// Object.assign 会将fullText当成普通属性赋值
const obj002 = {
  name: "haoxuan",
  work: "developer",
  get fullText() {
    return this.name + " is " + this.work;
  },
};
const obj005 = Object.assign({}, obj002);
obj005.name = "haoxuan1009";
// fullText此时是一个属性不是方法，改变name输出的结果还是之前的结果
console.log("obj005", obj005.fullText);
// obj005 haoxuan is developer

// 解决当作普通属性赋值的问题
const obj003 = Object.getOwnPropertyDescriptors(obj002);
// 将fullText当成方法
const obj004 = Object.defineProperties({}, obj003);
obj004.name = "haoxuan1009";
console.log("obj004", obj004.fullText);
// obj004 haoxuan1009 is developer

// 数字补充
const numList = [0, 4, 9, 90, 100];
// 补充维三位数，不够的前面加0
for (const value of numList) {
  console.log("numList结果：", value.toString().padStart(3, "0"));
}
// numList结果： 000
// numList结果： 004
// numList结果： 009
// numList结果： 090
// numList结果： 100
