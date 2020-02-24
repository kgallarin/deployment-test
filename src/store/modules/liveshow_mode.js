export default {
  namespaced: true,
  state: {
    mode: 'dark',
  },
  getters: {
    GET_MODE(state) {
      return state.mode
    }
  },
  mutations: {
    SET_MODE(state, payload) {
      state.mode = payload;
    }
  },
  actions: {
    SET_MODE(context, { mode }) {
      context.commit('SET_MODE', mode)
    }
  }
};
