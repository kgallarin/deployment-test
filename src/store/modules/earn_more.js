function offers() {
    return [
      { id: 0,
        title: 'Vibratoy',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        benefit: 'increase $2/min',
        img:'vibratoy.png'
      },
      {
        id: 1,
        title: 'cam2cam',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        benefit: 'increase $2/min',
        img:'cam2cam.png'
      },
      { id: 2,
        title: '2 ways audio',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        benefit: 'increase $2/min',
        img:'audio2way.png'
      },
      {
        id: 3,
        title: 'model referral',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        benefit: 'increase $2/min',
        img:'model_referral.png'
      }
    ]
}

export default {
    namespaced: true,
    state: {
      offers: offers()
    },
    getters: {
      GET_OFFERS(state) {
        return state.offers
      }
    },
    mutations: { },
    actions: { }
};
