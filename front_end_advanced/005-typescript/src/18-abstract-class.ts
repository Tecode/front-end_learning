// 抽像类
// 抽象类和接口的区别在于抽象类可以包含具体方法的实现，接口没有具体的实现方法
// 抽象类只能继承不能实例化
export {}; // 确保跟其它示例没有成员冲突

abstract class Animal {
  eat(food: string): void {
    console.log(`呼噜呼噜的吃: ${food}`);
  }

  abstract run(distance: number): void;
}

class Dog extends Animal {
  run(distance: number): void {
    console.log("四脚爬行", distance);
  }
}

const d = new Dog();
d.eat("嗯西马");
d.run(100);
