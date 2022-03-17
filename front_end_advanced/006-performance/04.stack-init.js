var x = 100;
var y = x;
y = 200;
console.log(x);

/**
 * 01 基本数据类型是按值进行操作
 * 02 基本数据类型值是存放在 栈区的
 * 03 无论我们当前看到的栈内存，还是后续引用数据类型会使用的堆内存都属于计算机内存
 * 04 GO(全局对象)
 */

// GO Global Object）全局对象，全局执行上下文
// VO（Variable Object）变量对象
// AO（Activation Object）包括了函数执行上下文