let _Vue = null

class Vuex {
  constructor (options) {
    const { state = {}, getters = {}, mutations = {}, actions = {} } = options
    this.state = _Vue.observable(state)
    this.getters = Object.create(null)

    console.log(this, '9090')

    Object.keys(getters).forEach((key) => {
      Object.defineProperty(this.getters, key, {
        get: () => getters[key](state)
      })
    })

    this._mutations = mutations
    console.log(mutations, '--mutations')
    this._actions = actions
  }

  static install (Vue) {
    _Vue = Vue
    _Vue.mixin({
      beforeCreate () {
        if (this.$options.store) {
          _Vue.prototype.$store = this.$options.store
        }
      }
    })
  }

  commit (type, playLoad) {
    this._mutations[type](this.state, playLoad)
  }

  dispatch (type, playLoad) {
    this._actions[type](this, playLoad)
  }
}

export default Vuex
