function contacts() {
  return [
    { id: 0, name: "Amelia Cabal", active: true, vip: true },
    { id: 1, name: "Amish Shiravadakar", active: false, vip: false },
    { id: 2, name: "Awaatif Al Sadek", active: false, vip: true },
    { id: 3, name: "Bonginkosi Mdladlana", active: true, vip: false },
    { id: 5, name: "Chiemeka Yobachukwu", active: false, vip: false },
    { id: 6, name: "Diane Lansdowne", active: false, vip: false },
    { id: 7, name: "Jagat Shahidullah", active: false, vip: false },
    { id: 8, name: "Karlien Nijhuis", active: false, vip: false },
    { id: 9, name: "Klavdia Dedova", active: false, vip: false },
    { id: 10, name: "Lacara Jones", active: false, vip: false },
    { id: 11, name: "Lucy Miller", active: false, vip: false },
    { id: 12, name: "Marama Petera", active: false, vip: false },
    { id: 13, name: "Nombeko Mabandla", active: false, vip: false },
    { id: 14, name: "Oscar de la Cavallería", active: false, vip: false },
    { id: 15, name: "Pan Hyuk", active: false, vip: false },
    { id: 16, name: "Peter Taylor", active: false, vip: false },
    { id: 17, name: "Roelof Bekkenenks", active: false, vip: false },
    { id: 18, name: "Roman Kutepov", active: false, vip: false },
    { id: 19, name: "Saami Al Samad", active: false, vip: false },
    { id: 20, name: "Somun Ae-Ri", active: false, vip: false },
    { id: 21, name: "Sophie Asveld", active: false, vip: false },
    { id: 22, name: "Thenjiwe Msutu", active: false, vip: false },
    { id: 23, name: "Thoma Fulloway", active: false, vip: false },
    { id: 24, name: "Udom Paowsong", active: false, vip: false },
    { id: 25, name: "Vladěna Klímková", active: false, vip: false },
    { id: 26, name: "Winny Rearie", active: false, vip: false },
    { id: 27, name: "Xenie Doleželová", active: false, vip: false },
    { id: 28, name: "Xuan Jingyi", active: false, vip: false },
    { id: 28, name: "Yolanda Barrueco", active: false, vip: false },
    { id: 28, name: "Zhan Huo", active: false, vip: false }
  ]
}

export default {
  namespaced: true,
  state: {
    contacts: contacts()
  },
  getters: {
    GET_CONTACTS(state) {
      return state.contacts
    },
    GET_VIP_CONTACT(state) {
      return state.contacts.filter(contact => contact.vip === true)
    }
  },
  mutations: {

  },
  actions: {

  }
};
