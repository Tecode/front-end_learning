import React from "react"

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {name: "张三", age: 20, job: "waiter"}
  }
  componentDidMount() {
    setTimeout(() => this.setState({ job: "chef" }), 1000)
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.name !== nextState.name || this.state.age !== nextState.age) {
      return true
    }
    return false
  }

  render() {
    console.log("rendering")
    let { name, age } = this.state
    return <div>{name} {age}</div>
  }
}