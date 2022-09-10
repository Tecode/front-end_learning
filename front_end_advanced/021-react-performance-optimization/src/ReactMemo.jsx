import React, { memo, useEffect, useState } from "react";

// 1、memo 基本使用
// 将函数组件变为纯组件，将当前 props 和上一次的 props 进行浅层比较，如果相同就阻止组件重新渲染。
// 需求：父组件维护两个状态，index 和 name，开启定时器让 index 不断发生变化，name 传递给子组件，查看父组件更新子组件是否也更新了。

function ShowName({ person }) {
  console.log("showName render...");
  return (
    <div>
      {person.name}
      丨
      {person.job}
    </div>
  );
}

// 2、为 memo 传递比较逻辑
// 使用 memo方法自定义比较逻辑，用于执行深层比较。
// 比较函数的第一个参数为上一次的 props, 比较函数的第二个参数为下一次的 props, 比较函数返回 true, 不进行渲染, 比较函数返回 false, 组件重新渲染.

function comparePerson(prevProps, nextProps) {
  if (
    prevProps.person.name !== nextProps.person.name ||
    prevProps.person.age !== nextProps.person.age
  ) {
    return false
  }
  return true
}

const ShowNameMemo = memo(ShowName, comparePerson);

function App() {
  const [person, setPerson] = useState({ name: "张三", job: "developer" });
  useEffect(() => {
    setInterval(() => {
      setPerson((data) => ({ ...data, name: "haoxuan" }));
    }, 1000);
  }, []);
  return (
    <div>
      <ShowNameMemo person={person} />
    </div>
  );
}

export default App;
