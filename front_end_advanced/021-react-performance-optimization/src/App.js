import _ from "lodash"

function App() {
  console.log(_.chunk(["a", "b", "c", "d"], 2))
  // throw new Error('发生了错误')
  return <div>App works</div>
}

export default App
