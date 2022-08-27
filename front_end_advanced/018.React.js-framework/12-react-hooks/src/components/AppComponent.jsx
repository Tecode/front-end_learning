import React from "react";
import UseStateComponent from "./UseStateComponent";
import UseReducerComponent from "./UseReducerComponent";

function AppComponent(params) {
  return (
    <React.Fragment>
      <UseStateComponent />
      <UseReducerComponent />
    </React.Fragment>
  );
}

export default AppComponent;
