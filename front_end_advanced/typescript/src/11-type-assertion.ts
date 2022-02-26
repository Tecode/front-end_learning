// 类型断言

export {}; // 确保跟其它示例没有成员冲突

// 假定这个 numList 来自一个明确的接口
const numList = [110, 120, 119, 112];

const res = numList.find((i) => i > 0);

// const square = res * res

const num1 = res as number;

const num2 = <number>res; // JSX 下不能使用
