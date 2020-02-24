export default {
  namespaced: true,
  state: {
    fontsize: '14px',
  },
  getters: {
    GET_FONT_SIZE(state) {
      return state.fontsize
    }
  },
  mutations: {
    SET_FONT_SIZE(state, payload) {
      state.fontsize = payload + "px";
    },
    RESET_FONT_SIZE(state) {
      state.fontsize = '14px';
    }
  },
  actions: {
    SET_FONT_SIZE(context, { size }) {
      context.commit('SET_FONT_SIZE', size)
    },
    RESET_FONT_SIZE(context) {
      context.commit('RESET_FONT_SIZE')
    }
  }
};
