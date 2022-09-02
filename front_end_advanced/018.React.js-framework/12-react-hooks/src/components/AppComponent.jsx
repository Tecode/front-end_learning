import React from "react";
import UseStateComponent from "./UseStateComponent";
import UseReducerComponent from "./UseReducerComponent";
import UseContextComponent from "./UseContextComponent";
import UseEffectComponent from "./UseEffectComponent";
import App from "../App";
import UseMemoComponent from "./UseMemoComponent";
import Memo from "./memo";
import UseCallbackComponent from "./UseCallbackComponent";
import UseRefComponent from "./UseRefComponent";

function AppComponent(params) {
  return (
    <React.Fragment>
      <UseStateComponent />
      <UseReducerComponent />
      <UseContextComponent />
      <UseEffectComponent />
      <UseMemoComponent />
      <Memo />
      <UseCallbackComponent />
      <UseRefComponent />
      <App />
    </React.Fragment>
  );
}

export default AppComponent;
