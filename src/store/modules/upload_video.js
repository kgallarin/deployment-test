export default {
  namespaced: true,
  state: {
    vdoName: "",
    vdoCaption: "",
    vdoFile: []
  },
  getters: {
    GET_VIDEO_INFO(state) {
      return state
      
    },
    GET_VIDEO_NAME(state) {
      return state.vdoName
    },
    GET_VIDEO_CAPTION(state) {
      return state.vdoCaption
    },
    GET_VIDEO_FILE(state) {
      return state.vdoFile
    },
    GET_VIDEO_ISVALID_INFO(state) {
      if (state.vdoName !== "" 
        && state.vdoCaption !== "" 
        && state.vdoFile.length !== 0 )
      {
        return true
      }
      return false
    }
  },
  mutations: {
    SET_VIDEO_FILE(state, payload) {
      state.vdoFile = payload;
    },
    SET_CAPTION(state, payload) {
      state.vdoCaption = payload;
    },
    SET_VIDEO_NAME(state, payload) {
      state.vdoName = payload;
    },
    RESET_VIDEO_INFO(state) {
      state.vdoName = ""
      state.vdoCaption = ""
      state.vdoFile = []
    },
    RESET_VIDEO_FILE(state) {
      state.vdoFile = []
    }
  },
  actions: {
    setCaption: ({ commit }, { caption }) => {
      commit('SET_CAPTION', caption)
    },
    setFilesToUpload: ({ commit }, { file }) => {
      commit('SET_VIDEO_FILE', file)
    },
    setVideoName: ({ commit }, { videoName }) => {
      commit('SET_VIDEO_NAME', videoName);
    },
    resetVideoInfo: ({ commit }) => {
      commit('RESET_VIDEO_INFO');
    },
    resetVideoFile: ({ commit }) => {
      commit('RESET_VIDEO_FILE');
    }
  }
}
