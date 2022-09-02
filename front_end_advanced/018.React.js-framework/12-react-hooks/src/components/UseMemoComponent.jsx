import React from "react";
import { useMemo } from "react";
import { useState } from "react";

// useMemo 的⾏为类似Vue中的计算属性, 可以监测某个值的变化, 根据变化值计算新值.
// useMemo 会缓存计算结果. 如果监测值没有发⽣变化, 即使组件重新渲染, 也不会重新计算. 此⾏为可以有助于避免在每个渲染上进⾏昂贵的计算.

function UseMemoComponent() {
  const [data, setName] = useState({ name: "haoxuan", language: "English" });
  const [count, setCount] = useState(0);
  const result = useMemo(() => {
    console.log('Calculation count....');
    return count * 10;
  }, [count]);
  return (
    <>
      <h2>UseMemoComponent</h2>
      <p>
        {data.name} {data.language}
      </p>
      <p>Number x 10: {result}</p>
      <button onClick={() => setName({ ...data, name: "1009" })}>
        ChangeName
      </button>
      丨
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default UseMemoComponent;
