import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

// 让函数型组件拥有处理副作⽤的能⼒. 类似⽣命周期函数

// 1. useEffect 执⾏时机
// 可以把 useEffect 看做 componentDidMount, componentDidUpdate 和 componentWillUnmount 这三个函数的组合.
// useEffect(() => {}) => componentDidMount, componentDidUpdate
// useEffect(() => {}, []) => componentDidMount
// useEffect(() => () => {}) => componentWillUnMount

// 2. useEffect 使⽤⽅法
// a. 为window对象添加滚动事件
// b. 设置定时器让count数值每隔⼀秒增加1

// 3. useEffect 解决的问题
// a. 按照⽤途将代码进⾏分类 (将⼀组相⼲的业务逻辑归置到了同⼀个副作⽤函数中)
// b. 简化重复代码, 使组件内部代码更加清晰

// 4. 只有指定数据发⽣变化时触发effect
// 5. useEffect 结合异步函数
// useEffect中的参数函数不能是异步函数, 因为useEffect函数要返回清理资源的函数, 如果是异步函数就变成了返回Promise

// 自定义Input Hooks
function useUpdateInput(initValue) {
  const [value, setValue] = useState(initValue);
  return { value, onChange: (event) => setValue(event.target.value) };
}

// 自定义异步请求hooks
function useGetData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://api.github.com/users/Tecode/repos"
      );
      console.log(response.data);
      setData(response.data);
    })();
  }, []);
  return [data, setData];
}

function UseEffectComponent() {
  const [count, setCount] = useState(0);
  // 设置定时器让count数值每隔⼀秒增加1
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((value) => {
        document.title = value + 1;
        return value + 1;
      });
    }, 1000);
    return () => {
      console.log("UseEffectComponent组件销毁");
      clearInterval(timer);
    };
  }, []);
  // 自定义Input Hooks
  const userNameInput = useUpdateInput("");
  const passwordInput = useUpdateInput("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userNameInput.value, passwordInput.value, "---useUpdateInput");
  };
  // 自定义请求Hooks
  const [data] = useGetData();
  return (
    <>
      <h2>UseEffectComponent</h2>
      <p>setInterval {count}</p>
      <button
        onClick={() =>
          ReactDOM.unmountComponentAtNode(document.getElementById("root"))
        }
      >
        Umount Component
      </button>
      <h3>自定义Input Hooks</h3>
      <form onSubmit={handleSubmit}>
        <input name="userName" type="text" {...userNameInput} />丨
        <input
          name="password"
          type="password"
          autoComplete="on"
          {...passwordInput}
        />
        丨<button>Submit</button>
      </form>
      <h3>自定义异步请求 Hooks</h3>
      {data
        .filter((item, index) => index < 5)
        .map((item) => (
          <p key={item.id}>{item.full_name}</p>
        ))}
    </>
  );
}

export default UseEffectComponent;
