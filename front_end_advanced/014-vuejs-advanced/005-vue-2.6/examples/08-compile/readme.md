## 模板编译的作用
- Vue 2.x 使用 VNode 描述视图以及各种交互，用户自己编写 VNode 比较复杂
- 用户只需要编写类似 HTML 的代码 - Vue 模板，通过编译器将模板转换为返回 VNode 的
render 函数
- vue 文件会被 webpack 在构建的过程中转换成 render 函数


