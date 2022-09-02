import React, { useState, useMemo, memo } from "react";

function InnerComponent(params) {
  console.log("render inner component...");
  return <h3>Inner Component</h3>;
}

// 使用了memo函数以后内部没有发现改变不会重新渲染组件，优化性能
const MemoComponent = memo(InnerComponent)

// 性能优化, 如果本组件中的数据没有发⽣变化, 阻⽌组件更新. 类似类组件中的 PureComponent 和 shouldComponentUpdate
function Memo() {
  const [count, setCount] = useState(0);
  const result = useMemo(() => {
    console.log("Calculation count....");
    return count * 10;
  }, [count]);
  return (
    <>
      <h2>Memo</h2>
      <MemoComponent />
      <p>Number x 10: {result}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default Memo;
