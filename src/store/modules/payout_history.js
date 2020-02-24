function history() {
  return [
    { id: 0, date: "12 / 11 / 2019", amount: 200, gateway: "Payento", status: "Success", type: "Normal payout" },
    { id: 1, date: "12 / 11 / 2019", amount: 200, gateway: "Visa", status: "Failed", type: "Normal payout" },
    { id: 2, date: "11 / 11 / 2019", amount: 400, gateway: "Payento", status: "Success", type: "Normal payout" },
    { id: 3, date: "9 / 11 / 2019", amount: 500, gateway: "Visa", status: "Success", type: "Normal payout" },
    { id: 4, date: "12 / 11 / 2019", amount: 600, gateway: "Payento", status: "Success", type: "Normal payout" },
    { id: 5, date: "12 / 11 / 2019", amount: 200, gateway: "Payento", status: "Failed", type: "Normal payout" },
    { id: 6, date: "8 / 11 / 2019", amount: 2700, gateway: "Mastercard", status: "Success", type: "Normal payout" },
    { id: 7, date: "12 / 11 / 2019", amount: 12200, gateway: "Payento", status: "Failed", type: "Normal payout" },
    { id: 8, date: "12 / 11 / 2019", amount: 4500, gateway: "Payento", status: "Failed", type: "Normal payout" },
    { id: 9, date: "12 / 11 / 2019", amount: 3200, gateway: "Payento", status: "Success", type: "Normal payout" },
    { id: 10, date: "12 / 11 / 2019", amount: 89200, gateway: "Mastercard", status: "Success", type: "Normal payout" },
    { id: 11, date: "12 / 11 / 2019", amount: 200, gateway: "Visa", status: "Failed", type: "Normal payout" },
    { id: 12, date: "11 / 11 / 2019", amount: 400, gateway: "Payento", status: "Success", type: "Normal payout" },
    { id: 13, date: "9 / 11 / 2019", amount: 500, gateway: "Visa", status: "Success", type: "Normal payout" },
    { id: 14, date: "12 / 11 / 2019", amount: 600, gateway: "Payento", status: "Success", type: "Normal payout" },
    { id: 15, date: "12 / 11 / 2019", amount: 200, gateway: "Payento", status: "Failed", type: "Normal payout" },
    { id: 16, date: "8 / 11 / 2019", amount: 2700, gateway: "Mastercard", status: "Success", type: "Normal payout" },
    { id: 17, date: "12 / 11 / 2019", amount: 12200, gateway: "Payento", status: "Failed", type: "Normal payout" },
    { id: 18, date: "12 / 11 / 2019", amount: 4500, gateway: "Payento", status: "Failed", type: "Normal payout" },
    { id: 19, date: "12 / 11 / 2019", amount: 3200, gateway: "Payento", status: "Success", type: "Normal payout" },
    { id: 20, date: "12 / 11 / 2019", amount: 89200, gateway: "Mastercard", status: "Success", type: "Normal payout" },
    { id: 21, date: "12 / 11 / 2019", amount: 200, gateway: "Visa", status: "Failed", type: "Normal payout" },
    { id: 22, date: "11 / 11 / 2019", amount: 400, gateway: "Payento", status: "Success", type: "Normal payout" },
    { id: 23, date: "9 / 11 / 2019", amount: 500, gateway: "Visa", status: "Success", type: "Normal payout" },
    { id: 24, date: "12 / 11 / 2019", amount: 600, gateway: "Payento", status: "Success", type: "Normal payout" },
    { id: 25, date: "12 / 11 / 2019", amount: 200, gateway: "Payento", status: "Failed", type: "Normal payout" },
    { id: 26, date: "8 / 11 / 2019", amount: 2700, gateway: "Mastercard", status: "Success", type: "Normal payout" },
    { id: 27, date: "12 / 11 / 2019", amount: 12200, gateway: "Payento", status: "Failed", type: "Normal payout" },
    { id: 28, date: "12 / 11 / 2019", amount: 4500, gateway: "Payento", status: "Failed", type: "Normal payout" },
    { id: 29, date: "12 / 11 / 2019", amount: 3200, gateway: "Payento", status: "Success", type: "Normal payout" },
    { id: 30, date: "12 / 11 / 2019", amount: 89200, gateway: "Mastercard", status: "Success", type: "Normal payout" }
  ]
}

export default {
  namespaced: true,
  state: {
    payout_history: history(),

    pagination: {
      per_page: 8,
      current_page: 1,
    }
  },
  getters: {
    GET_PAYOUT_HISTORY(state) {
      return state.payout_history
    },
    GET_PER_PAGE(state) {
      return state.pagination.per_page
    },
    GET_CURRENT_PAGE(state) {
      return state.pagination.current_page
    }
  },
  mutations: {
    SET_CURRENT_PAGE(state, payload) {
      state.pagination.current_page = payload
    }
  },
  actions: {
  }
};
