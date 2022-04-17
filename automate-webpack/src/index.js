import "javascript/createElement";
import "javascript/createSubtitle";
import "javascript/createImage";
import "./hello.ts";
import "./javascript/lazyLoad";
// 动态导入模块
import(/*webpackChunkName: "title"*/ "./log");

const title = "babel";
const runBabel = () => {
  console.log("run babel", title);
};
runBabel();
