// Task处理异步
const { task } = require("folktale/concurrency/task");
const { split, find } = require("lodash/fp");
const fs = require("fs");

function readFile(filename) {
  return task((resolver) => {
    fs.readFile(filename, "utf-8", (error, data) => {
      if (error) resolver.reject(error);
      resolver.resolve(data);
    });
  });
}

readFile("package.json")
  .map(split("\n"))
  .map(find((value) => value.includes("version")))
  .run()
  .listen({
    onResolved: (data) => {
      console.log(data);
    },
    onRejected: (err) => {
      console.log(err);
    },
  });
