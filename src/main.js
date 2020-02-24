import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store';
import router from './routes';
import BootstrapVue from 'bootstrap-vue'
import { ClickOutside, EventBus, ScrollTo } from './plugins';
import Transitions from 'vue2-transitions'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueTextareaAutosize from "vue-textarea-autosize";
import babelPolyfill from 'babel-polyfill'

import './styles/app.scss';


/**
  Vue Textarea resize
**/

Vue.use(VueTextareaAutosize)


/**
  Bootstrap
**/


Vue.use(BootstrapVue)

/**
  Scroll to element
**/

Vue.use(ScrollTo);

/**
  Clicking Outside event directive
**/

Vue.use(ClickOutside);

/**
  Event bus
**/

Vue.use(EventBus);

/**
  Routing
**/

Vue.use(VueRouter);

/**
  Vue Transitions
**/

Vue.use(Transitions)


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
