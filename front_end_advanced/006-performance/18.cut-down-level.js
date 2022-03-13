// 减少代码条件判断嵌套
function runCode(part, chapter) {
  var languageList = ["Go", "Swift", "JavaScript", "Java", "C", "Kotlin"];
  if (part) {
    if (part > 2) {
      console.log("需要VIP");
    } else {
      if (languageList.includes(chapter)) {
        console.log("属于当前课程");
      } else {
        console.log("没有该章节！");
      }
    }
  } else {
    console.log("未选择模块，请确认！");
  }
}
// 319385522.88 ops/s ± 1.74%

function runCode(part, chapter) {
  var languageList = ["Go", "Swift", "JavaScript", "Java", "C", "Kotlin"];
  if (!part) {
    console.log("未选择模块，请确认！");
    return;
  }
  if (!languageList.includes(chapter)) {
    return;
  }
  if (part > 2) {
    console.log("需要VIP");
    return;
  }
  console.log("属于当前课程");
}
// 338733789.79 ops/s ± 0.71% Fastest
runCode(2, "Kotlin");
