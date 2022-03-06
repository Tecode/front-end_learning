# yeoman-node [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Study Yeoman

## Installation

```sh
$ yarn global add yo
$ yarn global add gennerator-node
$ yo node
```
## Sub Generator

```shell script
$ yo node:cli
$ yanr link // 链接到global

D:\project\front-end_learning\front_end_advanced\007.front-end-engineering\yeoman-node>yeoman-node --help

  Study Yeoman

  Usage
    $ yeoman-node [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ yeoman-node
    unicorns
    $ yeoman-node rainbows
    unicorns & rainbows

```

## Usage

```js
const yeomanNode = require('yeoman-node');

yeomanNode('Rainbow');
```
## License

Apache-2.0 © [haoxuan]()


[npm-image]: https://badge.fury.io/js/yeoman-node.svg
[npm-url]: https://npmjs.org/package/yeoman-node
[travis-image]: https://travis-ci.com/Tecode/yeoman-node.svg?branch=master
[travis-url]: https://travis-ci.com/Tecode/yeoman-node
[daviddm-image]: https://david-dm.org/Tecode/yeoman-node.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Tecode/yeoman-node
