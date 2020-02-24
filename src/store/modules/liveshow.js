function activeTab() {
  return [
    { id: 0, name: "USER" },
    { id: 1, name: "CHAT" }
  ]
}

export default {
  namespaced: true,
  state: {
    activeTab: { id: 0, name: "USER" }
  },
  getters: {
    GET_ACTIVE_TAB(state) {
      return state.activeTab
    }
  },
  mutations: {
    SET_ACTIVE_TAB(state, payload) {
      state.activeTab = payload;
    }
  },
  actions: {
    ON_CLICK_TAB(context, { tabData }) {
      context.commit('SET_ACTIVE_TAB', tabData)
    }
  }
};
