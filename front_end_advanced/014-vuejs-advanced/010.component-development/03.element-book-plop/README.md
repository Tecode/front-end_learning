## 安装测试依赖

```bash
yarn add jest @vue/test-utils vue-jest babel-jest -D -W
```

## Jest 的配置

jest.config.js

```js
module.exports = {
  "testMatch": ["**/__tests__/**/*.[jt]s?(x)"],
  "moduleFileExtensions": [
    "js",
    "json",
    // 告诉 Jest 处理 `*.vue` 文件
    "vue"
  ],
  "transform": {
    // 用 `vue-jest` 处理 `*.vue` 文件
    ".*\\.(vue)$": "vue-jest",
    // 用 `babel-jest` 处理 js
    ".*\\.(js)$": "babel-jest" 
  }
}
```

## Babel 的配置

babel.config.js

```js
module.exports = {
  presets: [
    [
      '@babel/preset-env'
    ]
  ]
}
```

## Babel 的桥接

```bash
yarn add babel-core@bridge -D -W
```

## 安装 Rollup 以及所需的插件

```bash
yarn add rollup rollup-plugin-terser rollup-plugin-vue@5.1.9 vue-template-compiler -D -W
```

## Rollup 配置文件

在 button 目录中创建 rollup.config.js

```js
import { terser } from 'rollup-plugin-terser'
import vue from 'rollup-plugin-vue'

module.exports = [
  {
    input: 'index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'es'
      }
    ],
    plugins: [
      vue({
        // Dynamically inject css as a <style> tag
        css: true, 
        // Explicitly convert template to render function
        compileTemplate: true
      }),
      terser()
    ]
  }
]
```

## 工作区添加依赖

```bash
yarn workspace lg-button add -D lodash@4
```

## 配置 build 脚本并运行

找到 button 包中的 package.json 的 scripts 配置
```js
"build": "rollup -c"
```

运行打包

```bash
yarn workspace lg-button run build
```

## 打包所有组件

### 安装依赖

```bash
yarn add @rollup/plugin-json rollup-plugin-postcss @rollup/plugin-node-resolve -D -W
```

### 配置文件

项目根目录创建 rollup.config.js

```js
import fs from 'fs'
import path from 'path'
import json from '@rollup/plugin-json'
import vue from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'

const isDev = process.env.NODE_ENV !== 'production'

// 公共插件配置
const plugins = [
  vue({
    // Dynamically inject css as a <style> tag
    css: true,
    // Explicitly convert template to render function
    compileTemplate: true
  }),
  json(),
  nodeResolve(),
  postcss({
    // 把 css 插入到 style 中
    // inject: true,
    // 把 css 放到和js同一目录
    extract: true
  })
]

// 如果不是开发环境，开启压缩
isDev || plugins.push(terser())

// packages 文件夹路径
const root = path.resolve(__dirname, 'packages')

module.exports = fs.readdirSync(root)
  // 过滤，只保留文件夹
  .filter(item => fs.statSync(path.resolve(root, item)).isDirectory())
  // 为每一个文件夹创建对应的配置
  .map(item => {
    const pkg = require(path.resolve(root, item, 'package.json'))
    return {
      input: path.resolve(root, item, 'index.js'),
      output: [
        {
          exports: 'auto',
          file: path.resolve(root, item, pkg.main),
          format: 'cjs'
        },
        {
          exports: 'auto',
          file: path.join(root, item, pkg.module),
          format: 'es'
        },
      ],
      plugins: plugins
    }
  })
```

### 在每一个包中设置 package.json 中的 main 和 module 字段

```js
"main": "dist/cjs/index.js",
"module": "dist/es/index.js"
```

### 根目录的 package.json 中配置 scripts

```js
"build": "rollup -c"
```

## Lerna使用

```bash
yarn global add lerna
lerna init
lerna publish
```
lerna publish会同时将包发布到npm以及将代码提交到GitHub

### Lerna publish

```bash
npm whoami // 查看是否登录
npm config get registry // 发布到npm要检查registry是npm的镜像源
```

## 执行工作区内部的命令

```bash
yarn workspaces run del // 执行packages内部的del命令
```

