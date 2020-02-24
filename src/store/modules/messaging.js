function conversation() {
  return[
  {
    type: 'public',
    public: true,
    private: false,
    group: false,
    channel: '0f7cad43-3325-4214-94c3-871d6cdbacef',
    messages: [
      {
        id: 23,
        message: 'test',
        credits: null,
        created_at: 1581062721,
        user: {
          id: 52,
          name: 'tester',
          username: 'tester',
          type: 'customer',
          vip: true,
          channel: 'customer.tester'
        }
      },
      {
        id: 24,
        message: 'hello',
        credits: null,
        created_at: 1581062785,
        user: {
          id: 52,
          name: 'tester',
          username: 'tester',
          type: 'customer',
          vip: true,
          channel: 'customer.tester'
        }
      },
      {
        id: 25,
        message: 'here',
        credits: null,
        created_at: 1581062791,
        user: {
          id: 2,
          name: 'Jaclyn Schmitt',
          username: 'sexy',
          type: 'performer',
          channel: 'performer.sexy'
        }
      },
      {
        id: 26,
        message: 'Hello~~~~~ Honey',
        credits: '10.00',
        created_at: 1581062795,
        user: {
          id: 52,
          name: 'tester',
          username: 'tester',
          type: 'customer',
          vip: false,
          channel: 'customer.tester'
        }
      },
      {
        id: 27,
        message: 'Thank you for 10 credits',
        credits: null,
        created_at: 1581062795,
        user: {
          id: 2,
          name: 'Jaclyn Schmitt',
          username: 'sexy',
          type: 'performer',
          channel: 'performer.sexy'
        }
      }
    ],
    kings: [
      {
        username: 'tester',
        credits: '10.00'
      }
    ]
  }
]
}

export default {
  namespaced: true,
  state: {
    conversation: conversation(),
    newMessage: null
  },
  getters: {
    GET_MESSAGE(state) {
      return state.conversation[0].messages;
    },
    GET_CONVERSATION(state) {
      return state.conversation[0];
    }
  },
  mutations: {
    COMPOSE_MESSAGE(state, payload) {
      //set the new message;
      state.newMessage = payload;

      //put it in an conversation
      state.conversation[0].messages.push(payload)
    }
  },
  actions: {
    COMPOSE_MESSAGE(context, { message }) {
      context.commit('COMPOSE_MESSAGE', message)
    }
  }
};
