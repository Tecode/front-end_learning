let _Vue = null
class VueRouter {
  static install (Vue) {
    // 1、插件只需要注册一次，这里判断插件是否已经注册
    if (VueRouter.install.installed) {
      return
    }
    VueRouter.install.installed = true
    // 2、把Vue的构造函数记录到全局，方便之后调用
    _Vue = Vue
    // 3、创建Vue实例并传入router注入到Vue实例
    // this目前指向的是VueRouter这样写会报错
    // _Vue.prototype.$router = this.$options.router;
    _Vue.mixin({
      beforeCreate () {
        if (this.$options.router) {
          _Vue.prototype.$router = this.$options.router
          console.log(this, '-----this')
        }
      }
    })
  }

  constructor (options) {
    this.options = options
    this.routeMap = {}
    // 定义可观察的对象
    this.data = _Vue.observable({ current: '/' })
    this.init()
  }

  init () {
    this.createRouteMap()
    this.initComponent(_Vue)
    this.initEvent()
  }

  createRouteMap () {
    this.options.routes.forEach(route => {
      this.routeMap[route.path] = route.component
    })
  }

  // 传入参数减少context向上查找
  initComponent (Vue) {
    Vue.component('router-link', {
      props: {
        to: String
      },
      render (h) {
        return h('a', {
          attrs: {
            href: this.to
          },
          on: {
            click: this.handleClick
          }
        }, this.$slots.default)
      },
      methods: {
        handleClick (event) {
          history.pushState({}, '', this.to)
          this.$router.data.current = this.to
          event.preventDefault()
        }
      }
    })
    const _this = this
    // 挂载组件
    Vue.component('router-view', {
      render (h) {
        // 将对应的组建通过h方法渲染
        const vm = _this.routeMap[_this.data.current]
        return h(vm)
      }
    })
  }

  // 监听路由回退
  initEvent () {
    window.addEventListener('popstate', () => {
      this.data.current = window.location.pathname
    })
  }
}

export default VueRouter
