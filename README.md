# front-end_learning
前端知识学习

## Javascript 性能优化

```js
// 变量局部化（全局、局部）
// 这样可以提高代码的执行效率（ 减少了数据访问时需要查找的路径 ）
// 数据的存储和读取

// https://jsbench.me/ 测试结果
var i,str = "";
function packageDom() {
  for (i = 0; i < 1000; i++) {
    str += i;
  }
}
packageDom();
// 90812.96 ops/s ± 0.34%
// Fastest

function packageDom() {
  let str = "";
  for (let i = 0; i < 1000; i++) {
    str += i;
  }
}

packageDom();
// 1014277249.2 ops/s ± 0.3%
// 99.99 % slower
```
## Typescript自定义.d.ts类型（tsconfig.json types/**/*.d.ts）

```js
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "strict": true,
    "jsx": "preserve",
    "moduleResolution": "node",
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "useDefineForClassFields": true,
    "sourceMap": true,
    "baseUrl": ".",
    "types": [
      "webpack-env",
      "jest"
    ],
    "paths": {
      "@/components/*": [
        "./src/components/*"
      ],
      "@/pages/*": [
        "./src/pages/*"
      ],
      "@/apis/*": [
        "./src/apis/*"
      ],
      "@/hooks/*": [
        "./src/hooks/*"
      ],
      "@/utils/*": [
        "./src/utils/*"
      ],
      "@/router/*": [
        "./src/router/*"
      ],
      "@/view/*": [
        "./src/view/*"
      ],
      "@/types/*": [
        "./src/types/*"
      ],
    },
    "lib": [
      "esnext",
      "dom",
      "dom.iterable",
      "scripthost"
    ]
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "tests/**/*.ts",
    "tests/**/*.tsx",
    "types/**/*.d.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

## 存在问题
❎ 编码优化：代码耦合度很高复用性很差，往往相同代码可以复用编写时为了方便前期开全部写在一个文件内不好抽离，特别是写在`vue`或`jsx`文件内无法引用。目前支持 `hooks`建议将页面和逻辑分离开。\
❎ 性能优化：渲染DOM节点要避免无效节点的挂载，例如使用`popper`作为提示渲染列表页面会挂载很多隐藏节点，当展示的时候也会追加DOM节点，很多冗余节点会造成卡顿。利用虚拟DOM渲染快的特点直接追加节点。\
❎ 加载优化：直接加载新项目打包文件，移除 `js`判断后挂载`script`标签加载的过程\
❎ 加载优化：减少`js` `css` 图片体积，针对`js`处理全量引入包问题改为按需引入，`css` 文件包含很多重复代码全局覆盖代码居多。例如覆盖element样式的代多个文件项目引用。

## 后期优化方向

❎ 目前在样式列表中看到很多重复覆盖的样式需要优化，以及冗余的javascript代码（例如全局的样式多次覆盖）\
❎ 优化图片大小\
❎ javascript文件包过大，优化包大小\
❎ 加强代码规范化处理不必要的语法错误（例如上线发生console.debug问题）\
❎ 公共组件不要写业务逻辑\
❎ 优化代码逻辑\
❎ 代码错误收集统计，及时错误代码报错问题\
❎ 避免使用全局变量，最好要在文件中定义全局变量避免造成样式冲突\
❎ 增加错误收集和统计，及时发现代码错误

## 程序员节1024
