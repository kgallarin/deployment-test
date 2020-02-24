function getNote() {
  return `- a dog person
- love to talk about pets
- having a problem with family (don’t mention)
- will go to see a doctor next month
- live in LA
- love to talk about movies and song`;
}

export default {
  namespaced: true,
  state: {
    note: getNote()
  },
  getters: {
    GET_NOTE(state) {
      return state.note
    }
  },
  mutations: {
    SET_NOTE(state, payload) {
      if(payload)
        state.note = payload
      else
        state.note = 'Write someting about your follower'
    }
  },
  actions: {
    SET_NOTE(context, { note }) {
      context.commit('SET_NOTE', note)
    }
  }
};
