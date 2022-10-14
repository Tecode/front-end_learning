# front-end_learning
前端知识学习

## Javascript 性能优化

```js
// 变量局部化（全局、局部）
// 这样可以提高代码的执行效率（ 减少了数据访问时需要查找的路径 ）
// 数据的存储和读取

// https://jsbench.me/ 测试结果
var i,
  str = "";
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

## 后期优化方向

❎ 目前在样式列表中看到很多重复覆盖的样式需要优化，以及冗余的javascript代码（例如全局的样式多次覆盖）\
❎ 优化图片大小\
❎ javascript文件包过大，优化包大小\
❎ 加强代码规范化处理不必要的语法错误（例如上线发生console.debug问题）\
❎ 公共组件不要写业务逻辑\
❎ 优化代码逻辑\
❎ 代码错误收集统计，及时错误代码报错问题\
❎ 避免使用全局变量，最好要在文件中定义全局变量避免造成样式冲突\
