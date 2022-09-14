import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

// 组件卸载前进行清理操作
const App = () => {
  let [index, setIndex] = useState(0);
  useEffect(() => {
    let timer = setInterval(() => {
      setIndex((prev) => prev + 1);
      console.log("timer is running...");
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <button
      onClick={() =>
        ReactDOM.unmountComponentAtNode(document.getElementById("root"))
      }
    >
      {index}
    </button>
  );
};

export default App;
