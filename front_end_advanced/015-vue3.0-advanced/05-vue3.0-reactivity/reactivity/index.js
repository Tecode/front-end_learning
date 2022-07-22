const isObject = value => value !== null && typeof value === 'object'
const convert = target => isObject(target) ? reactive(target) : target
const hasOwnProperty = Object.prototype.hasOwnProperty
const  hasOwn = (target, key) => hasOwnProperty.call(target, key)


export function reactive(target) {
  if (!isObject(target)) return target
  
  const handler = {
    get(target, key, receiver) {
      // 收集依赖
      console.log('触发了get');
      const result = Reflect.get(target, key, receiver)
      // 判断result是否是对象，如果是对象转化为响应式对象
      return convert(result)
    },
    set(target, key, value, receiver) {
      console.log('触发了set');
      const oldValue = Reflect.get(target, key, receiver)
      let result =  true
      if (value !== oldValue) {
        result = Reflect.set(target, key, value, receiver)
      }
      return result
    },
    deleteProperty(target, key){
      const hadKey = hasOwn(target, key)
      const result = Reflect.deleteProperty(target, key)
      if (hadKey && result) {
        console.log('删除了属性成功');
      }
      return result
    }
  }

  return new Proxy(target, handler)
}