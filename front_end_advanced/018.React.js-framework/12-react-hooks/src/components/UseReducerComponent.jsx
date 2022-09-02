import React from "react";
import { useReducer } from "react";

// useReducer是另⼀种让函数组件保存状态的⽅式
function reducer(state, action) {
  switch (action.type) {
    case "Increment":
      return state + 10;
    case "Reducer":
      return state - 10;
    default:
      return state;
  }
}

function UseReducerComponent(params) {
  const [count, dispatch] = useReducer(reducer, 100);
  return (
    <>
      <h2>UseReducerComponent</h2>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: "Increment" })}>
        Increment 10
      </button>
      丨
      <button onClick={() => dispatch({ type: "Reducer" })}>Reducer 10</button>
    </>
  );
}

export default UseReducerComponent;
