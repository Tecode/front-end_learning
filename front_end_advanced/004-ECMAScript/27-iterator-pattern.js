// 迭代器设计模式，实现一个迭代去方法

// 场景：你我协同开发一个任务清单应用

const bookList = {
  javascript: ["ECMA Script 2015", "Node js", "Javascript 高级程序设计"],
  swift: ["iOS程序设计", "swift汇编内存分析"],
  java: ["Java程序设计", "Java多线程"],
  go: ["Go语言高并发"],
  [Symbol.iterator]: function () {
    let index = 0;
    const all = [...this.javascript, ...this.java, ...this.go, ...this.swift];
    return {
      next: function () {
        const result = {
          value: all[index],
          done: index >= all.length - 1,
        };
        index++;
        return result;
      },
    };
  },
};

for (const value of bookList) {
  console.log("书籍名称：", value);
}
