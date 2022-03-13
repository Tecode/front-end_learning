// javascript在解决异步方法的时候往往会出现回调嵌套，造成回调地狱
function run(func) {
  setTimeout(() => {
    func.call();
  }, 300);
}

run(function (params) {
  console.log("这就是一个回调函数");
  console.log("调用者定义这个函数，执行者执行这个函数");
  console.log("其实就是调用者告诉执行者异步任务结束后应该做什么");
});

// 回调地狱，只是示例，不能运行
$.get("/url1", function (data1) {
  $.get("/url2", data1, function (data2) {
    $.get("/url3", data2, function (data3) {
      $.get("/url4", data3, function (data4) {
        $.get("/url5", data4, function (data5) {
          $.get("/url6", data5, function (data6) {
            $.get("/url7", data6, function (data7) {
              // 略微夸张了一点点
            });
          });
        });
      });
    });
  });
});
