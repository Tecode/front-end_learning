class Compiler {
  constructor(vm) {
    this.el = vm.$el;
    this.vm = vm;
  }
  // 编译模版处理文本节点和对象节点
  compiler(el) {}

  // 编译元素节点，处理指令
  compilerElement(node) {}

  // 编译文本节点，处理插值表达式
  compilerText(node) {}

  // 判断是否是指令
  isDirection(attrName) {
    return attrName.startsWith("v-");
  }

  // 判断是否是文本节点
  isTextNode(node) {
    return node.nodeType === 3;
  }

  // 判断节点是否是元素节点
  isElementNode(node) {
    return node.nodeType === 1;
  }
}
