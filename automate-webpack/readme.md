## Webpack打包优化d代码

1. 移除js中没有被使用的代码，例如没有被调用的函数使用([sideEffects](https://webpack.docschina.org/configuration/optimization/#optimizationsideeffects)/[useExport](https://webpack.docschina.org/configuration/optimization/#optimizationusedexports))；
2. 移除css中没有被使用的代码[mini-css-extract-plugin](https://webpack.docschina.org/plugins/mini-css-extract-plugin#root)
3. 打包时就先进行服务器类型的压缩