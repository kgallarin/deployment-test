function getVdoAlbums() {
  return [{
    id: 0,
    name: "Vdo name goes here",
    image: "https://i.picsum.photos/id/237/200/300.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
    vdo: "https://player.vimeo.com/video/135335257?autoplay=false"
  },
  {
    id: 2,
    name: "Vdo name goes here 2",
    image: "https://i.picsum.photos/id/1025/4951/3301.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
    vdo: "https://www.youtube.com/embed/yn0_6T4HwHs"
  },
  {
    id: 3,
    name: "Grand Maison Tokyo",
    image: "https://i.picsum.photos/id/1011/5472/3648.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
    vdo: "https://www.youtube.com/embed/hf9vhPz6zOw"
  }]
}

export default {
  namespaced: true,
  state: {
    vdo_albums: getVdoAlbums()
  },
  getters: {
    GET_VDO_ALBUMS(state) {
      return state.vdo_albums
    }
  },
  mutations: {},
  actions: {}
};
