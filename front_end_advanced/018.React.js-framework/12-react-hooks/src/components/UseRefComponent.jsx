import React from "react";
import { useEffect, useRef, useState } from "react";


// 即使组件重新渲染, 保存的数据仍然还在. 保存的数据被更改不会触发组件重新渲染.
function UseRefComponent(params) {
  // 重新渲染会丢失timer，渲染时一直会是null
  // let timer = null;
  let timer = useRef()
  // useRef可以获DOM元素
  const domRef = useRef()
  const [count, setCount] = useState(0);
  useEffect(() => {
    timer.current = setInterval(() => setCount((count) => count + 1), 1000);
    console.log(domRef.current, '---------ref');
  }, []);
  const stopInterval = () => {
    clearInterval(timer.current);
  };
  return (
    <>
      <h2 ref={domRef}>UseRefComponent</h2>
      <p>Interval Count : {count}</p>
      <button onClick={stopInterval}>Clear Interval</button>
    </>
  );
}

export default UseRefComponent;
