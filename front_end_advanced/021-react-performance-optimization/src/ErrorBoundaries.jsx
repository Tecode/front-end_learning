// ErrorBoundaries.js
import React from "react";
import App from "./App";

export default class ErrorBoundaries extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch(error) {
    console.log("componentDidCatch");
  }
  static getDerivedStateFromError() {
    console.log("getDerivedStateFromError");
    return {
      hasError: true,
    };
  }
  render() {
    if (this.state.hasError) {
      return <div>发生了错误</div>;
    }
    return <App />;
  }
}
