import React from "react";
import UseStateComponent from "./UseStateComponent";
import UseReducerComponent from "./UseReducerComponent";
import UseContextComponent from "./UseContextComponent";
import UseEffectComponent from "./UseEffectComponent";
import App from "../App";
import UseMemoComponent from "./UseMemoComponent";
import Memo from "./memo";

function AppComponent(params) {
  return (
    <React.Fragment>
      <UseStateComponent />
      <UseReducerComponent />
      <UseContextComponent />
      <UseEffectComponent />
      <UseMemoComponent />
      <Memo />
      <App />
    </React.Fragment>
  );
}

export default AppComponent;
