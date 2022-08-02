import { createTaskQueue } from '../misc'


/**
 * 任务队列
 */
 const taskQueue = createTaskQueue()
 /**
  * 要执行的子任务
  */
 let subTask = null

 const getFirstTask = () => {
  /**
   * 从任务队列中获取任务
   */
  const task = taskQueue.pop()

  if (task.from === "class_component") {
    const root = getRoot(task.instance)
    task.instance.__fiber.partialState = task.partialState
    return {
      props: root.props,
      stateNode: root.stateNode,
      tag: "host_root",
      effects: [],
      child: null,
      alternate: root
    }
  }

  /**
   * 返回最外层节点的fiber对象
   */
  return {
    props: task.props,
    stateNode: task.dom,
    tag: "host_root",
    effects: [],
    child: null,
    alternate: task.dom.__rootFiberContainer
  }
}

const executeTask = fiber => {
  /**
   * 构建子级fiber对象
   */
  if (fiber.tag === "class_component") {
    if (fiber.stateNode.__fiber && fiber.stateNode.__fiber.partialState) {
      fiber.stateNode.state = {
        ...fiber.stateNode.state,
        ...fiber.stateNode.__fiber.partialState
      }
    }

    reconcileChildren(fiber, fiber.stateNode.render())
  } else if (fiber.tag === "function_component") {
    reconcileChildren(fiber, fiber.stateNode(fiber.props))
  } else {
    reconcileChildren(fiber, fiber.props.children)
  }
  /**
   * 如果子级存在 返回子级
   * 将这个子级当做父级 构建这个父级下的子级
   */
  if (fiber.child) {
    return fiber.child
  }

  /**
   * 如果存在同级 返回同级 构建同级的子级
   * 如果同级不存在 返回到父级 看父级是否有同级
   */
  let currentExcitedlyFiber = fiber

  while (currentExcitedlyFiber.parent) {
    currentExcitedlyFiber.parent.effects = currentExcitedlyFiber.parent.effects.concat(
      currentExcitedlyFiber.effects.concat([currentExcitedlyFiber])
    )
    if (currentExcitedlyFiber.sibling) {
      return currentExcitedlyFiber.sibling
    }
    currentExcitedlyFiber = currentExcitedlyFiber.parent
  }
  pendingCommit = currentExcitedlyFiber
}

 const workLoop = deadline => {
  /**
   * 如果子任务不存在 就去获取子任务
   */
  if (!subTask) {
    subTask = getFirstTask()
  }
  /**
   * 如果任务存在并且浏览器有空余时间就调用
   * executeTask 方法执行任务 接受任务 返回新的任务
   */
  while (subTask && deadline.timeRemaining() > 1) {
    subTask = executeTask(subTask)
  }

  if (pendingCommit) {
    commitAllWork(pendingCommit)
  }
}

 const performTask = deadline => {
  /**
   * 执行任务
   */
  workLoop(deadline)
  /**
   * 判断任务是否存在
   * 判断任务队列中是否还有任务没有执行
   * 再一次告诉浏览器在空闲的时间执行任务
   */
  if (subTask || !taskQueue.isEmpty()) {
    requestIdleCallback(performTask)
  }
}

export const render = (element, dom) => {
  /**
   * 1. 向任务队列中添加任务
   * 2. 指定在浏览器空闲时执行任务
   */
  /**
   * 任务就是通过 vdom 对象 构建 fiber 对象
   */
   taskQueue.push({
    dom,
    props: { children: element }
  })

  console.log(taskQueue.pop(), '--taskQueue');
  /**
   * 指定在浏览器空闲的时间去执行任务
   */
  requestIdleCallback(performTask)
}