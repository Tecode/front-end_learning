
import React, { render, Component } from './react'

const root = document.getElementById('root')
const jsx = (
  <div>
    <p>Hello React</p>
    <p>Hi Fiber</p>
  </div>
  )

// render(jsx, root)

class Greeting extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "张三"
    }
  }
  render() {
    return (
      <div>
        {this.props.title}haoxuan {this.state.name}
        <button onClick={() => this.setState({ name: "李四" })}>button</button>
      </div>
    )
  }
}

render(<Greeting title="奥利给" />, root)
