// 生成器函数回顾

function* run() {
  console.log("13.generator start");
  try {
    const value = yield "OK";
    console.log("yield 接收参数", value);
  } catch (error) {
    console.log("yield Error", error);
  }
}
const generatorRun = run();
generatorRun.next();
generatorRun.next("Hello Generator");
// generatorRun.throw(new Error("出错了"));
