var a = 1;
function foo() {
  var b = 2;
  return function (c) {
    console.log(c + b++);
  };
}

var f = foo();
f(5);
f(10);

/**
 * 01 闭包： 是一种机制：
 *  保护：当前上下文当中的变量与其它的上下文中变量互不干扰
 *  保存：当前上下文中的数据（堆内存）被当前上下文以外的上下文中的变量所引用，这个数据就保存下来了
 * 02 闭包：
 *  函数调用形成了一个全新的私有上下文，在函数调用之后当前上下文不被释放就是闭包（临时不被释放）
 */
