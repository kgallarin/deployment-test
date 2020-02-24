import sampleService from "@services/sample";

export default {
    namespaced: true,
    state: {
      isModal: false,
      auth: {
        pop_type: '',
        selected_registration: 'model'
      }
    },
    getters: {
      GET_AUTH_TYPE(state) {
        return state.auth.pop_type
      },
      GET_MODAL_STATE(state) {
        return state.isModal
      },
      GET_REGISTRATION_TYPE(state) {
        return state.auth.selected_registration
      }
      //   auth popups end
    },
    mutations: {
      SET_AUTH_NAME(state, payload) {
        state.auth.pop_type = payload
      },
      SET_MODAL_STATE(state, payload) {
        state.isModal = payload
      },
      SET_REGISTRATION_TYPE(state, payload) {
        state.auth.selected_registration = payload
      }
    //   auth popups end
    },
    actions: {
      ON_SELECT_AUTH(context, { type, show, registration_type }) {
        context.commit('SET_AUTH_NAME',type)
        context.commit('SET_MODAL_STATE',show)
        context.commit('SET_REGISTRATION_TYPE', registration_type)
      }
    }
};
