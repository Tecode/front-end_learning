# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite.

## 推荐的 IDE 设置

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"

# 使用 Vite 创建项目

## 使用 Vite 创建项目

参考 [Vite 官方指南](https://cn.vitejs.dev/guide/)。


```js
npm init vite@latest

√ Project name: ... lagou-shop-admin
√ Select a framework: » vue
√ Select a variant: » vue-ts

Scaffolding project in C:\Users\lpz\Projects\lagou-shop-admin...

Done. Now run:

  cd lagou-shop-admin
  npm install
  npm run dev
```


## 初始目录结构说明

```js
.
├── public
│   └── favicon.ico
├── src
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   └── HelloWorld.vue
│   ├── App.vue
│   ├── main.ts
│   ├── shims-vue.d.ts
│   └── vite-env.d.ts
├── .gitignore
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── tsconfig.json
└── vite.config.ts
```


在安装了 `Vite` 的项目中，可以在 npm scripts 中使用 vite 可执行文件，或者直接使用 npx vite 运行它。下面是通过脚手架创建的 Vite 项目中默认的 npm scripts：

```js
{
  "scripts": {
    "dev": "vite", // 启动开发服务器
    "build": "vite build", // 为生产环境构建产物
    "serve": "vite preview" // 本地预览生产构建产物
  }
}
```

可以指定额外的命令行选项，如 --port 或 --https。运行 npx vite --help 获得完整的命令行选项列表。


```js
git init

git add .

git commit -m "init"

git remote add origin 远程仓库地址

git push -u origin master
```

## 调整目录结构

```js
.
├── public                  # 不需要打包的静态资源
│   └── favicon.ico
├── src
│   ├── api                 # 后台 API 接口封装
│   ├── assets              # 需要打包的静态资源
│   ├── components          # 公共组件
│   ├── composables         # 通用的组合式 API
│   ├── layout              # 页面布局模板
│   ├── plugins             # 插件
│   ├── router              # 路由
│   ├── store               # Vuex 存储
│   ├── styles              # 样式
│     └── index.scss        # 全局通用样式
│   ├── utils               # 工具模块
│   ├── views               # 路由页面
│   ├── App.vue             # 根组件
│   ├── main.ts             # 入口模块
│   ├── shims-vue.d.ts      # 补充 .vue 模块类型声明
│   └── vite-env.d.ts       # 补充 vite 类型声明
├── .gitignore
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── tsconfig.json
└── vite.config.ts
```

# 代码规范和 ESLint

### 1、安装 ESLint 到项目中

```js
npm install eslint --save-dev
```

### 2、初始化 ESLint 配置

```js
npx eslint --init

? How would you like to use ESLint? ...
  To check syntax only
  To check syntax and find problems
> To check syntax, find problems, and enforce code style

? What type of modules does your project use? ...
> JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these
  
 ? Which framework does your project use? ...
  React
> Vue.js
  None of these
  
? Does your project use TypeScript? » No / Yes
  
? Where does your code run? ...  (Press <space> to select, <a> to toggle all, <i> to invert selection)
√ Browser
√ Node

? How would you like to define a style for your project? ...
> Use a popular style guide
  Answer questions about your style
  Inspect your JavaScript file(s)
  
? Which style guide do you want to follow? ...
  Airbnb: https://github.com/airbnb/javascript
> Standard: https://github.com/standard/standard
  Google: https://github.com/google/eslint-config-google
  XO: https://github.com/xojs/eslint-config-xo
  
 ? What format do you want your config file to be in? ...
> JavaScript
  YAML
  JSON
  
 Checking peerDependencies of eslint-config-standard@latest
The config that you've selected requires the following dependencies:

eslint-plugin-vue@latest @typescript-eslint/eslint-plugin@latest eslint-config-standard@latest eslint@^7.12.1 eslint-plugin-import@^2.22.1 eslint-plugin-node@^11.1.0 eslint-plugin-promise@^4.2.1 || ^5.0.0 @typescript-eslint/parser@latest
? Would you like to install them now with npm?

+ eslint-plugin-import@2.23.4
+ eslint-plugin-node@11.1.0
+ eslint-config-standard@16.0.3
+ eslint-plugin-vue@7.11.1
+ eslint@7.29.0
+ @typescript-eslint/parser@4.27.0
+ @typescript-eslint/eslint-plugin@4.27.0
+ eslint-plugin-promise@5.1.0
```

### 3、ESLint 配置文件

```js
// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    // 'plugin:vue/essential',
    
    // 使用 Vue 3 规则
    // https://eslint.vuejs.org/user-guide/#bundle-configurations
    'plugin:vue/vue3-strongly-recommended',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {}
}

```

### 4、在 npm scripts 中添加验证脚本

```js
"scripts": {
	...
  "lint": "eslint src/**/*.{js,jsx,vue,ts,tsx} --fix",
}
```

### [vue-eslint-plugin](https://eslint.vuejs.org/)

## 编译器宏和 defineProps、defineEmits、no-undef 规则警告

您需要定义全局变量 （打开新窗口）在您的 `ESLint` 配置文件中。

如果您不想定义全局变量，请使用 `import { defineProps, defineEmits } from 'vue'`.

示例 `.eslintrc.js`：

```js
module.exports = {
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly"
  }
}
```

另请参阅 [ESLint - 指定全局变量 > 使用配置文件](https://eslint.org/docs/latest/user-guide/configuring/language-options#using-configuration-files-1)。

## 编辑器集成

- 禁用 Vetur
- 安装 eslint 插件
- 安装 volar 插件

使用[dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) （打开新窗口）微软官方提供的扩展。

您必须配置`eslint.validate`扩展的选项来检查`.vue`文件，因为扩展默认只针对`*.js`或`*.jsx`文件。

示例`.vscode/settings.json`：


```js
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "vue"
  ]
}
```

如果您使用该 Vetur 插件，请设置 `"vetur.validation.template"`: false 为避免默认 Vetur 模板验证。查看[`vetur` 文档](https://vuejs.github.io/vetur/guide/linting-error.html#linting) （打开新窗口）了解更多信息。https://www.yuque.com/lipengzhou/dev/semn2f

## 配置 git commit hook

https://github.com/okonet/lint-staged

```js
npx mrm@2 lint-staged
```

```js
// package.json
{
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc --noEmit && vite build",
    "serve": "vite preview",
    "tsc": "vue-tsc --noEmit",
    "lint": "eslint ./src/**/*.ts ./src/**/*.vue --cache --fix",
    "prepare": "husky install"
  },
  "dependencies": {
    "@form-create/element-ui": "^2.5.7",
    "axios": "^0.21.1",
    "element-plus": "^1.0.2-beta.48",
    "nprogress": "^0.2.0",
    "path-to-regexp": "^6.2.0",
    "utility-types": "^3.10.0",
    "vue": "^3.1.1",
    "vue-router": "^4.0.8",
    "vuex": "^4.0.1",
    "vxe-table": "^4.0.22",
    "xe-utils": "^3.3.0"
  },
  "devDependencies": {
    "@types/node": "^15.12.2",
    "@types/nprogress": "^0.2.0",
    "@typescript-eslint/eslint-plugin": "^4.27.0",
    "@typescript-eslint/parser": "^4.27.0",
    "@vitejs/plugin-vue": "^1.2.3",
    "@vue/compiler-sfc": "^3.1.1",
    "eslint": "^7.29.0",
    "eslint-config-standard": "^16.0.3",
    "eslint-plugin-import": "^2.23.4",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-promise": "^5.1.0",
    "eslint-plugin-vue": "^7.11.1",
    "husky": "^6.0.0",
    "lint-staged": "^11.0.0",
    "sass": "^1.34.1",
    "typescript": "^4.1.3",
    "vite": "^2.3.5",
    "vue-tsc": "^0.0.24"
  },
  "lint-staged": {
    "*.{js,jsx,vue,ts,tsx}": [
      "npm run lint",
      // "git add" 之前的版本需要手动把 lint 过程中修改的代码手动 add，新版本不需要了
    ]
  }
}
```

## 在开发和构建中进行代码规范校验

- https://github.com/vitejs/awesome-vite#plugins
- https://github.com/gxmari007/vite-plugin-eslint

# Git commit 提交规范

统一团队 Git commit 日志标准，便于后续代码 review，版本发布以及日志自动化生成等等。

常用 commit 类型说明：

| 类型 | 说明 |
| --- | --- |
| build | 对构建系统或者外部依赖项进行了修改。 |
| ci | 对 CI 配置文件或脚本进行了修改。 |
| docs | 新增或修改文档。 |
| feat | 新功能，比如 feat: login。 |
| fix | 修补 bug。 |
| perf | 优化相关，比如提升性能、体验。 |
| refactor | 重构（即不是新增功能，也不是修改bug的代码变动）。 |
| revert | 回滚到上一个版本。 |
| style | 不影响代码含义的修改，比如空格、格式化、缺失的分号等，注意不是 css 修改。 |
| test | 增加测试代码或者修改已存在的测试。 |

### 相关工具：

- [commitlint](https://github.com/conventional-changelog/commitlint)：验证 git commit 日志是否符合规范
- [Commitizen](https://github.com/commitizen/cz-cli)：辅助编写符合 git commit 规范的工具

# TypeScript 相关

## Vite 中的 TS 环境说明

- TS 环境说明
- shimes-vue.d.ts 文件的作用
- vite-env.d.ts 文件的作用
- vue-tsc 和 tsc
  - tsc 只能验证 ts 代码类型
  - vue-tsc 可以验证 ts + Vue Template 中的类型（基于 Volar）

  建议在 `package.json` 中新增一个 scripts 脚本用来单独执行 TS 类型验证：

  ```js
  "scripts": {
      ...
      "build": "npm run tsc && vite build",
      "tsc": "vue-tsc -noEmit"
    },
  ```

  -noEmit 表示只验证类型，不输出编译结果。

## 跳过第三方包类型检查

```js
{
  "compilerOptions": {
    ...
    "baseUrl": "./",
    "skipLibCheck": true
  }
}
```

## Vue 3 中的 TS 支持

建议参考：
https://v3.cn.vuejs.org/guide/typescript-support.html

## Vue 3 中的 `<script setup>` 语法

Vue 3 支持三种写法：

- Option API
- Composition API
- `<script setup>`（Composition API 的语法糖）


## 渲染函数和 JSX/TSX

- 什么是渲染函数：[渲染函数](https://v3.cn.vuejs.org/guide/render-function.html)
- 在渲染函数中使用 JSX：在[渲染函数中使用 JSX](https://v3.cn.vuejs.org/guide/render-function.html#jsx)
- 在 Vite 中提供 jsx/tsx 支持：[@vitejs/plugin-vue-jsx](https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx)
- Vue 中的 JSX 语法：[Babel Plugin JSX for Vue 3.0](https://github.com/vuejs/babel-plugin-jsx)


提示：
编辑器中的 `ESLint` 需要配置 `"eslint.validate": ["typescriptreact"]` 才能验证和格式化 `.tsx` 文件。