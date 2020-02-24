export default {
  namespaced: true,
  state: {
    albumInfo: {
      albumName: "",
      albumDesc: "",
      files: [],
      captions: []
    }
  },
  getters: {
    GET_ALBUM_INFO(state) {
      return state.albumInfo
    },
    GET_ALBUM_NAME(state) {
      return state.albumInfo.albumName
    },
    GET_ALBUM_DESC(state) {
      return state.albumInfo.albumDesc
    },
    GET_PICTURES(state) {
      return state.albumInfo.files
    },
    GET_CAPTIONS(state) {
      return state.albumInfo.captions
    },
    GET_AMOUNT_FILES(state) {
      return state.albumInfo.files.length
    }
  },
  mutations: {
    SET_PICTURES(state, payload) {
      state.albumInfo.files = payload;
    },
    SET_ALL_CAPTIONS(state, payload) {
      state.albumInfo.captions = payload;
    },
    SET_ALBUM_NAME(state, payload) {
      state.albumInfo.albumName = payload;
    },
    SET_A_CAPTION(state, {newCaption, index}) {
      state.albumInfo.captions[index].caption = newCaption.caption;
    },
    SET_ALBUM_DESC(state, payload) {
      state.albumInfo.albumDesc = payload;
    },
    RESET_ALBUM() {
      state.albumInfo = {
          albumName: "",
          albumDesc: "",
          files: [],
          captions: []
      }
    }
  },
  actions: {
    //set array of captions for all photos
    setCaptions: ({ commit, state }, { newCaption }) => { 
      let all_captions = [ ...state.albumInfo.captions];

      let found = all_captions.some(
        el => el.fileid === newCaption.fileid
      );

      if (!found) {
        all_captions.push(newCaption);
      } else {
        let index = all_captions.findIndex(
          el => el.fileid === newCaption.fileid
        );
        commit('SET_A_CAPTION', {
          newCaption: newCaption,
          index: index
        })  
      }
      commit('SET_ALL_CAPTIONS', all_captions)
    },
    setFilesToUpload:({ commit }, { files }) => {
      commit('SET_PICTURES', files)
    },
    setAlbumName: ({commit}, { albumName }) => {
      commit('SET_ALBUM_NAME', albumName);
    },
    setAlbumDesc: ({commit}, { albumDesc }) => {
      commit('SET_ALBUM_DESC', albumDesc);
    },
    removeCaption:({ commit, state }, { fileid }) => { 
      let all_captions = [ ...state.albumInfo.captions];

      let found = all_captions.some(
        el => el.fileid === fileid
      );

      if (found) {
        let index = all_captions.findIndex(
          el => el.fileid === fileid
        );
        all_captions.splice(index, 1);
        commit('SET_ALL_CAPTIONS', all_captions)
      }
    },
    resetAlbum: ({commit}) => {
      commit('SET_ALBUM_DESC');
    }
  }
}
