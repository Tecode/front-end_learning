import React from "react";
import UseStateComponent from "./UseStateComponent";
import UseReducerComponent from "./UseReducerComponent";
import UseContextComponent from "./UseContextComponent";
import UseEffectComponent from "./UseEffectComponent";

function AppComponent(params) {
  return (
    <React.Fragment>
      <UseStateComponent />
      <UseReducerComponent />
      <UseContextComponent />
      <UseEffectComponent />
    </React.Fragment>
  );
}

export default AppComponent;
