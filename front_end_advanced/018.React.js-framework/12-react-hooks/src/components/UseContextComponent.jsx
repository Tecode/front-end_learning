import React from "react";
import { useContext } from "react";
import { createContext } from "react";

const countContext = createContext();

// 不使用useContext
function InnerComponent001() {
  return (
    <countContext.Consumer>
      {(value) => <div>不使用useContext: {value}</div>}
    </countContext.Consumer>
  );
}

// 使用useContext
function InnerComponent002() {
  const value = useContext(countContext);
  return <div>使用useContext,简化代码: {value}</div>;
}

// 在跨组件层级获取数据时简化获取数据的代码

function UseContextComponent(params) {
  return (
    <>
      <h2>UseContextComponent</h2>
      <countContext.Provider value={1024}>
        <InnerComponent001 />
        <InnerComponent002 />
      </countContext.Provider>
    </>
  );
}

export default UseContextComponent;
