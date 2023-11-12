import { createStore } from 'vuex'

export default createStore({
  state: {
    default_home: 'Главная',
  },
  getters: {
  },
  mutations: {
    changeDefaultHome (state, value) {
      state.default_home = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
