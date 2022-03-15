# container

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

```
app.js:29 Uncaught (in promise) ScriptExternalLoadError: Loading script failed.
(missing: http://localhost:9001/remoteEntry.js)
while loading "./HelloWorld" from webpack/container/reference/product
    at Object.webpack/container/reference/product (app.js:29:25)
    at __webpack_require__ (app.js:71:33)
    at initExternal (app.js:381:28)
    at Function.__webpack_require__.I (app.js:393:15)
    at app.js:867:47
    at Object.webpack/sharing/consume/default/vue/vue (app.js:921:76)
    at app.js:948:56
    at Array.forEach (<anonymous>)
    at Object.__webpack_require__.f.consumes (app.js:931:36)
    at app.js:186:40
```