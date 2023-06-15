/**
 * @param {number[]} array 传入数组
 * @param {number} k 滑动窗口宽度
 * @return {number[]} 
 */
var maxSlidingWindow = function(array, k) {
  if (k <= 1) {
    return array
  }
  const result = []
  const deque = []
  // 1 将窗口第一个位置的数据添加到 deque 中，保持递减
  deque.push(array[0])
  let i = 1
  for (; i < k; i++) {
    // - 存在数据
    // - 当前数据大于队尾值
    //   - 出队，再重复比较
    while (deque.length && array[i] > deque[deque.length - 1]) {
      deque.pop()
    }
    deque.push(array[i])
  }
  // 将第一个位置的最大值添加到 result
  result.push(deque[0])

  // 2 遍历后续的数据
  const len = array.length
  for (; i < len; i++) {
    // 同上进行比较
    while (deque.length && array[i] > deque[deque.length - 1]) {
      deque.pop()
    }
    deque.push(array[i])
    // 检测当前最大值是否位于窗口外
    if (deque[0] === array[i - k]) {
      deque.shift()
    }
    // 添加最大值到 result
    result.push(deque[0])
  }

  return result
};