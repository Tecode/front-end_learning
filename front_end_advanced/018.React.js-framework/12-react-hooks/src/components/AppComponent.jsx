import React from "react";
import UseStateComponent from "./UseStateComponent";
import UseReducerComponent from "./UseReducerComponent";
import UseContextComponent from "./UseContextComponent";

function AppComponent(params) {
  return (
    <React.Fragment>
      <UseStateComponent />
      <UseReducerComponent />
      <UseContextComponent />
    </React.Fragment>
  );
}

export default AppComponent;
