import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import * as Cookies from "js-cookie";

// module(s)
import app from "./modules/app.js";
import auth_pop_control from "./modules/auth_pop_control.js";
import models from "./modules/models.js";
import overview_stat from "./modules/overview_stat.js";
import create_model from "./modules/create_model.js";
import payout_history from "./modules/payout_history.js";
import referral from "./modules/referral.js";
import earn_more from "./modules/earn_more.js";
import photo_albums from "./modules/photo_albums.js";
import vdo_albums from "./modules/vdo_albums.js"
import upload_pictures from "./modules/upload_picture.js";
import upload_video from "./modules/upload_video.js";
import help from "./modules/help.js";
import font_size from "./modules/font_size.js";
import liveshow from "./modules/liveshow.js";
import contacts from "./modules/contacts.js";
import messaging from  "./modules/messaging.js";
import liveshow_mode from "./modules/liveshow_mode.js";
import note from "./modules/note.js";
import member_info from "./modules/member_info.js";

Vue.use(Vuex);

window.Cookies = Cookies;
const debug = process.env.NODE_ENV !== "production";

const store = new Vuex.Store({
  modules: {
    app,
    auth_pop_control,
    models,
    overview_stat,
    create_model,
    payout_history,
    referral,
    earn_more,
    photo_albums,
    vdo_albums,
    upload_pictures,
    upload_video,
    help,
    font_size,
    liveshow,
    contacts,
    messaging,
    liveshow_mode,
    note,
    member_info
  },
  strict: debug,
  // cookies if you want to persist data on page refresh
  plugins: [
    createPersistedState({
      paths: [""],
      storage: {
        getItem: key => Cookies.get(key),
        setItem: (key, value) =>
          Cookies.set(key, value, { expires: 3, secure: !debug }),
        removeItem: key => Cookies.remove(key)
      }
    })
  ]
});

export default store;
