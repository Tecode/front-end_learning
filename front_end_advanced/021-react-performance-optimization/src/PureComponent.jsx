import React from "react"

// 1、什么是纯组件
// 纯组件会对组件输入数据进行浅层比较，如果当前输入数据和上次输入数据相同，组件不会重新渲染。
// 2、什么是浅层比较
// 比较引用数据类型在内存中的引用地址是否相同，比较基本数据类型的值是否相同。
// 3、如何实现纯组件
// 类组件继承 PureComponent 类，函数组件使用 memo 方法
// 4、为什么不直接进行 diff 操作, 而是要先进行浅层比较，浅层比较难道没有性能消耗吗
// 和进行 diff 比较操作相比，浅层比较将消耗更少的性能。diff 操作会重新遍历整颗 virtualDOM 树, 而浅层比较只操作当前组件的 state 和 props。
// 5、需求：在状态对象中存储 name 值为张三，组件挂载完成后将 name 属性的值再次更改为张三，然后分别将 name 传递给纯组件和非纯组件，查看结果。

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {name: "张三"}
  }
  updateName() {
    setInterval(() => this.setState({name: "张三"}), 1000)
  }
  componentDidMount() {
    this.updateName()
  }
  render() {
    return (
      <div>
        <RegularComponent name={this.state.name} />
        <PureChildComponent name={this.state.name} />
      </div>
    )
  }
}

class RegularComponent extends React.Component {
  render() {
    console.log("RegularComponent")
    return <div>{this.props.name}</div>
  }
}

class PureChildComponent extends React.PureComponent {
  render() {
    console.log("PureChildComponent")
    return <div>{this.props.name}</div>
  }
}