class Compiler {
  constructor(vm) {
    this.el = vm.$el;
    this.vm = vm;
    this.compiler(this.el);
  }
  // 编译模版处理文本节点和对象节点
  compiler(el) {
    const childNodes = el.childNodes;
    Array.from(childNodes).forEach((node) => {
      // 处理文本节点
      if (this.isTextNode(node)) {
        this.compilerText(node);
      }
      // 处理元素节点,处理指令
      if (this.isElementNode(node)) {
        this.compilerElement(node);
      }
      // 判断node节点，是否有子节点，如果有子节点，要递归调用compile
      if (node.childNodes && node.childNodes.length) {
        this.compiler(node);
      }
    });
  }

  // 编译元素节点，处理指令
  compilerElement(node) {
    // 处理元素节点例如v-model v-text
    // console.log(node.attributes);
    // 遍历所有的属性节点
    Array.from(node.attributes).forEach((attr) => {
      // 判断是否是指令
      let attrName = attr.name;
      console.dir(attr);
      if (this.isDirection(attrName)) {
        attrName = attrName.substr(2);
        const func = this[attrName + "Updater"];
        const key = attr.value;
        // 取保this指向的是Compiler
        func.call(this, node, this.vm[key], key);
      }
    });
  }
  // 处理v-text
  textUpdater(node, value, key) {
    node.textContent = value;
    new Watcher(this.vm, key, (newValue) => {
      node.textContent = newValue;
    });
  }
  // 处理v-model
  modelUpdater(node, value, key) {
    node.value = value;
    new Watcher(this.vm, key, (newValue) => {
      node.value = newValue;
    });
    node.addEventListener("input", (event) => {
      this.vm[key] = event.target.value;
    });
  }

  // 编译文本节点，处理插值表达式
  compilerText(node) {
    const reg = /\{\{(.+?)\}\}/;
    if (reg.test(node.textContent)) {
      // RegExp.$1是RegExp的一个属性,指的是与正则表达式匹配的第一个 子匹配(以括号为标志)字符串
      const key = RegExp.$1.trim();
      node.textContent = this.vm[key];
      new Watcher(this.vm, key, (newValue) => {
        node.textContent = newValue;
      });
    }
  }

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
