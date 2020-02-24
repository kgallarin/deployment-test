import sampleService from "@services/sample";

function inActiveUserNav() {
    return [
      { id: 0, description: 'edit' },
      { id: 1, description: 'cancel' }
    ]
}

function activeUserNav() {
    return [
      { id: 0, description: 'status_info' },
      { id: 1, description: 'report' },
      { id: 2, description: 'settings' },
      { id: 3, description: 'find' }
    ]
}

// temp sameple data
function modelsData() {
    return [
      { id: 0, username:'user1', status: 'active', sex: 'boy', img: 'https://picsum.photos/200' },
      { id: 1, username:'user2', status: 'inactive', sex: 'boy', img: 'https://picsum.photos/200' },
      { id: 2, username:'user3', status: 'closed', sex: 'boy', img: 'https://picsum.photos/200' },
      { id: 3, username:'user4', status: 'closed', sex: 'boy', img: 'https://picsum.photos/200' },
      { id: 4, username:'user5', status: 'active', sex: 'boy', img: 'https://picsum.photos/200' },
      { id: 5, username:'user3', status: 'closed', sex: 'boy', img: 'https://picsum.photos/200' },
      { id: 6, username:'user4', status: 'closed', sex: 'boy', img: 'https://picsum.photos/200' },
      { id: 7, username:'user5', status: 'active', sex: 'boy', img: 'https://picsum.photos/200' },
      { id: 8, username:'user3', status: 'closed', sex: 'boy', img: 'https://picsum.photos/200' },
      { id: 9, username:'user4', status: 'closed', sex: 'boy', img: 'https://picsum.photos/200' },
      { id: 10, username:'user5', status: 'active', sex: 'boy', img: 'https://picsum.photos/200' },
      { id: 11, username:'user3', status: 'closed', sex: 'boy', img: 'https://picsum.photos/200' },
      { id: 12, username:'user4', status: 'closed', sex: 'boy', img: 'https://picsum.photos/200' },
      { id: 13, username:'user5', status: 'active', sex: 'boy', img: 'https://picsum.photos/200' },
      { id: 14, username:'user3', status: 'closed', sex: 'boy', img: 'https://picsum.photos/200' },
      { id: 15, username:'user4', status: 'closed', sex: 'boy', img: 'https://picsum.photos/200' },
      { id: 16, username:'user5', status: 'active', sex: 'boy', img: 'https://picsum.photos/200' },
      { id: 17, username:'user3', status: 'closed', sex: 'boy', img: 'https://picsum.photos/200' },
      { id: 18, username:'user4', status: 'closed', sex: 'boy', img: 'https://picsum.photos/200' },
      { id: 19, username:'user5', status: 'active', sex: 'boy', img: 'https://picsum.photos/200' },
      { id: 22, username:'user3', status: 'closed', sex: 'boy', img: 'https://picsum.photos/200' },
      { id: 23, username:'user4', status: 'closed', sex: 'boy', img: 'https://picsum.photos/200' },
      { id: 44, username:'user5', status: 'active', sex: 'boy', img: 'https://picsum.photos/200' },
    ]
}

function sampleTop10Models() {
  return [
    { id: 0, username:'user1', name: 'active', sex: 'boy', img: 'https://picsum.photos/200', earning: '$ 142', onlineHours: '100H 22M', averagePerHour: '$ 89' },
    { id: 1, username:'user2', name: 'inactive', sex: 'boy', img: 'https://picsum.photos/200', earning: '$ 132', onlineHours: '100H 22M', averagePerHour: '$ 29'  },
    { id: 2, username:'user3', name: 'closed', sex: 'boy', img: 'https://picsum.photos/200', earning: '$ 122', onlineHours: '100H 22M', averagePerHour: '$ 49'  },
    { id: 3, username:'user4', name: 'closed', sex: 'boy', img: 'https://picsum.photos/200', earning: '$ 112', onlineHours: '100H 22M', averagePerHour: '$ 69'  },
    { id: 4, username:'user5', name: 'active', sex: 'boy', img: 'https://picsum.photos/200', earning: '$ 102', onlineHours: '100H 22M', averagePerHour: '$ 79'  },
    { id: 5, username:'user6', name: 'closed', sex: 'boy', img: 'https://picsum.photos/200', earning: '$ 99', onlineHours: '100H 22M', averagePerHour: '$ 67'  },
    { id: 6, username:'user7', name: 'closed', sex: 'boy', img: 'https://picsum.photos/200', earning: '$ 80', onlineHours: '100H 22M', averagePerHour: '$ 30'  },
    { id: 7, username:'user8', name: 'active', sex: 'boy', img: 'https://picsum.photos/200', earning: '$ 10', onlineHours: '100H 22M', averagePerHour: '$ 12'  },
    { id: 8, username:'user9', name: 'closed', sex: 'boy', img: 'https://picsum.photos/200', earning: '$ 4', onlineHours: '100H 22M', averagePerHour: '$ 12'  },
    { id: 9, username:'user10', name: 'closed', sex: 'boy', img: 'https://picsum.photos/200', earning: '$ 2', onlineHours: '100H 22M', averagePerHour: '$ 32'  }
  ]
}

export default {
    namespaced: true,
    state: {
      navigation: {
        inActiveUserNav: inActiveUserNav(),
        activeUserNav: activeUserNav(),
        elementID: null
      },
      sampleData: modelsData(),
      sampleTop10Models: sampleTop10Models()
    },
    getters: {
      GET_ACT_USERNAV(state) {
          return state.navigation.activeUserNav
      },
      GET_INACT_USERNAV(state) {
          return state.navigation.inActiveUserNav
      },
      GET_ACTIVE_ELEM(state) {
        return state.navigation.elementID
      },

      // sample DATA
      GET_SAMPLE_DATA(state) {
        return state.sampleData
      },

      // sample DATA : Top 10 models
      GET_SAMPLE_DATA_TOP10_MODELS(state) {
        return state.sampleTop10Models
      }
    },
    mutations: {
      SET_ELEMENT(state, payload) {
        state.navigation.elementID = payload
      }
    },
    actions: {
      ON_CLICK_NAV(context, { element }) {
        context.commit('SET_ELEMENT', element)
      }
    }
};
