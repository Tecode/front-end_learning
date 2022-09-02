import React, { useState, memo, useCallback } from "react";

// 性能优化, 缓存函数, 使组件重新渲染时得到相同的函数实例

function InnerComponent({ resetCount }) {
  console.log("InnerComponent Rerender....");
  return (
    <>
      <h3>Inner Component</h3>
      <button onClick={resetCount}>Reset Count</button>
    </>
  );
}

// 使用了memo函数以后内部没有发现改变不会重新渲染组件，优化性能
const MemoComponent = memo(InnerComponent);

function UseCallbackComponent() {
  const [count, setCount] = useState(0);
  // 不同函数实例会导致添加了memo方法的组件重新渲染
  // const resetCount = () => {
  //   setCount(0);
  // };
  // useCallback会保存这个方法不会重新创建实例
  const resetCount = useCallback(() => setCount(0), [setCount]);
  return (
    <>
      <h2>UseCallbackComponent</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 10)}>Increment 10</button>
      <MemoComponent resetCount={resetCount} />
    </>
  );
}

export default UseCallbackComponent;
