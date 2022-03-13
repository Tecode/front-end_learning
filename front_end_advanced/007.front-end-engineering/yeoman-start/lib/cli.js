#!/usr/bin/env node
"use strict";
const meow = require("meow");
const yeomanNode = require("./");

const cli = meow(`
Usage
  $ yeoman-node [input]

Options
  --foo  Lorem ipsum. [Default: false]

Examples
  $ yeoman-node
  unicorns
  $ yeoman-node rainbows
  unicorns & rainbows
`);

console.log(yeomanNode, cli);
