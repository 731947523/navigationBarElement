let Vue;
class Store {
  constructor(options) {
    this._mutations = options.mutations;
    this._actions = options.actions;
    this._wrappendGetters = options.getters;

    // 定义computed属性
    this.getters = {};
    const computed = {};
    const store = this;
    Object.keys(this._wrappendGetters).forEach(key => {
      // 获取用户自定义的getter
      console.log(computed, 1, key);
      const fn = store._wrappendGetters[key];
      console.log(store);
      // 转换为computed的无参数形式
      computed[key] = function() {
        return fn(store.state);
      };
      // getters 为只读属性
      Object.defineProperty(store.getters, key, {
        get: () => {
          console.log(key, store._vm._data, "store._vm[key]------12");
          // return 1;
          return store._vm[key];
        }
      });
      console.log(store.getters, "store.getters---2");
    });
    this._vm = new Vue({
      data: {
        $$state: options.state
      },
      // data: options.state,
      computed
    });
    console.log(this._vm, "this._vm");
    this.commit = this.commit.bind(this);
    this.dispatch = this.dispatch.bind(this);
  }

  // 存取器
  get state() {
    return this._vm._data.$$state;
  }
  get a() {
    // 设置读取后的值 给当前store
    return this._vm._data.$$state;
  }

  set state(v) {}
  /*
   * type：mutation的类型
   * payload 提交过来的参数
   */
  commit(type, payload) {
    const entry = this._mutations[type];
    if (entry) {
      entry(this.state, payload);
    }
  }

  dispatch(type, payload) {
    const entry = this._actions[type];
    if (entry) {
      entry(this, payload);
    }
  }
}
function install(_vue) {
  Vue = _vue;
  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
    }
  });
}
export default {
  Store,
  install
};
