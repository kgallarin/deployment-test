function activeStatTab() {
  return [
    { id: 0, name: "total earning", icon_name: "earnings", desc: "total_earning", value: "$142" },
    { id: 1, name: "online hours", icon_name: "work", desc: "online_hours", value: "8H 22M"  },
    { id: 2, name: "average/hour", icon_name: "salary", desc: "average_hours", value: "$17" }
  ]
}

export default {
  namespaced: true,
  state: {
    overview_stat_data: {
      tab: {
        activeTab: { id: 0, name: "total earning", icon_name: "earnings", desc: "total_earning", value: "$142" },
        tabData: activeStatTab()
      }
    }
  },
  getters: {
    GET_ACTIVE_TAB(state) {
      return state.overview_stat_data.tab.activeTab
    },
    GET_TAB_DATA(state) {
      return state.overview_stat_data.tab.tabData
    }
  },
  mutations: {
    SET_ACTIVE_TAB(state, payload) {
      state.overview_stat_data.tab.activeTab = payload; 
    }
  },
  actions: {
    ON_CLICK_TAB(context, { tabData }) {
      context.commit('SET_ACTIVE_TAB', tabData)
    }
  }
};
