import React, { useState } from "react";

function UseStateComponent(params) {
  // 1. 接收唯⼀的参数即状态初始值. 初始值可以是任意数据类型.
  // 2. 返回值为数组. 数组中存储状态值和更改状态值的⽅法. ⽅法名称约定以set开头, 后⾯加上状态名称.
  // 3. ⽅法可以被调⽤多次. ⽤以保存不同状态值.
  // 4. 参数可以是⼀个函数, 函数返回什么, 初始状态就是什么, 函数只会被调⽤⼀次, ⽤在初始值是动态值的情况.

  // 设置状态值⽅法的参数可以是⼀个值也可以是⼀个函数
  // 设置状态值⽅法的⽅法本身是异步的
  const [count, setCount] = useState(() => {
    console.log("useState-初始化");
    return 20;
  });

  const handelChange = (value) => {
    // 设置状态值⽅法的⽅法本身是异步的
    setCount(value);
    document.title = count;
  };
  // console.log("UseStateComponent");
  return (
    <>
      <h2>UseStateComponent</h2>
      <p>{count}</p>
      <button onClick={() => handelChange(count + 10)}>Increment 10</button>
      丨
      <button onClick={() => handelChange(count - 10)}>Reducer 10</button>
    </>
  );
}

export default UseStateComponent;
