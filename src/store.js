import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter(state) {
      return state.counter * 2;
    }
  },
  mutations: {
    add(state) {
      state.counter++;
    },
    asyncTe(state) {
      state.counter--;
    }
  },
  actions: {
    // 可进行异步提交
    addAction({ commit }) {
      commit("add");
    },
    asyncTest({ commit }) {
      setTimeout(() => {
        commit("asyncTe");
      }, 2000);
    }
  }
});
