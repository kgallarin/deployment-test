function members() {
  return [
    {
      id: 0, 
      name: "Lacara Jones", 
      stat: {
        token: "19,230",
        spent_on_you: "5,490",
        last_chat: "June 20th, 2019",
        time_on_private: "2:22:33"
      },
      note: `
        - a dog person
        - love to talk about pets
        - having a problem with family (don’t mention)
        - will go to see a doctor next month
        - live in LA
        - love to talk about movies and song
      `
    },
    {
      id: 1, 
      name: "Lilah Ioselev", 
      stat: {
        token: "230",
        spent_on_you: "490",
        last_chat: "-",
        time_on_private: "0"
      },
      note: ""
    },
    {
      id: 2, 
      name: "Rickie Baroch", 
      stat: {
        token: "1,230",
        spent_on_you: "90",
        last_chat: "August 21th, 2019",
        time_on_private: "1:02:03"
      },
      note: ""
    },
    {
      id: 3, 
      name: "Abayo Stevens", 
      stat: {
        token: "19,230",
        spent_on_you: "5,490",
        last_chat: "June 20th, 2019",
        time_on_private: "2:22:33"
      },
      note: ""
    },
    {
      id: 4, 
      name: "Matt Thompson", 
      stat: {
        token: "19,230",
        spent_on_you: "5,490",
        last_chat: "June 20th, 2019",
        time_on_private: "2:22:33"
      },
      note: `
        - a dog person
        - love to talk about pets
        - having a problem with family (don’t mention)
        - will go to see a doctor next month
        - live in LA
        - love to talk about movies and song
      `
    }
  ]
}

export default {
  namespaced: true,
  state: {
    members: members(),
    selectedMemberID: 0
  },
  getters: {
    GET_MEMBERS(state) {
      return state.members
    },
    GET_ACTIVE_MEMBER(state) {
      if(state.selectedMemberID === null) {
        return null;
      }
      return state.members.find(member => member.id === state.selectedMemberID);
    }
  },
  mutations: {
    SET_SELECTED_MEMBER(state, payload) {
      state.selectedMemberID = payload;
    },
    NEXT_MEMBER(state) {
      if(state.selectedMemberID !== null) {
        let active_member_index = state.members.indexOf(state.members.find(member => member.id === state.selectedMemberID));
        let lastIndex = state.members.length - 1;

        if(active_member_index !== -1 && active_member_index < lastIndex) {
          let next = active_member_index + 1;
          state.selectedMemberID = state.members[next].id;
        } else {
          state.selectedMemberID = state.members[lastIndex].id;
        }
      }
    },
    PREV_MEMBER(state) {
      if(state.selectedMemberID !== null) {
        let active_member_index = state.members.indexOf(state.members.find(member => member.id === state.selectedMemberID));

        if(active_member_index !== -1 && active_member_index > 0) {
          let next = active_member_index - 1;
          state.selectedMemberID = state.members[next].id;
        } else {
          state.selectedMemberID = state.members[0].id;
        }
      }
    }
  },
  actions: {
    SET_SELECTED_MEMBER(context, { memberid }) {
      context.commit('SET_SELECTED_MEMBER', memberid)
    },
    NEXT_MEMBER(context) {
      context.commit('NEXT_MEMBER')
    },
    PREV_MEMBER(context) {
      context.commit('PREV_MEMBER')
    },
  }
};
