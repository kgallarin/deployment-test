// temp sameple data
function categories() {
    return [
      { id: 0,
        title: 'Celebrity Category',
        desc:'You may not offer any nude or erotic content. For girls only!',
        dropdown: ['dropdown1', 'dropdown2']
      },
      {
        id: 1,
        title: 'Hot Flirt Category',
        desc:'Models decide if they want to offer erotic content. For girls only!',
        dropdown: ['dropdown1']
      },
      { id: 2,
        title: 'Nude Category',
        desc:'You must provide nude or erotic shows when requested.',
        dropdown: ['dropdown1']
      },
      {
        id: 3,
        title: 'Amateur Category',
        desc:'Same as "Nude" except with lower technical requirements.',
        dropdown: ['dropdown1', 'dropdown2']
      }
    ]
}

export default {
    namespaced: true,
    state: {
      categories: categories(),
      selected: null
    },
    getters: {
      // sample DATA
      GET_CATEGORY_DATA(state) {
        return state.categories
      },
      GET_SELECTED_DATA(state) {
        return state.selected
      }
    },
    mutations: {
      SET_CATEGORY_DATA(state, payload) {
        state.selected = payload
      }
    },
    actions: {
      FETCH_CATEGORY_DATA(context, commit) {
        context.commit('SET_CATEGORY_DATA')
      }
    }
};
