<template>
  <header>
    <!-- landing header -->
    <div v-if="type === 'landing' " class="navbar-wrapper">
      <Landing />
    </div>
    <!-- dashboard header -->
    <div
      v-if="type === 'dashboard' "
      :class="[mode === 'dark' ? 'dark-mode' : 'light-mode' , 'navbar-wrapper','studio-header']"
    >
      <Dashboard v-if="windowWidth > 1050" />
      <DashboardMobile v-else />
    </div>

    <!-- dashboard header liveshow-->
    <div
      v-if="type === 'dashboard-liveshow' "
      :class="[mode === 'dark' ? 'dark-mode' : 'light-mode' , 'navbar-wrapper','studio-header']"
    >
      <DashboardLiveshow />
    </div>

  </header>
</template>

<script>
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import DashboardMobile from "./DashboardMobile";
import DashboardLiveshow from "./DashboardLiveshow";

import { mapGetters } from "vuex";
export default {
  props: {
    type: {
      type: String,
      default: ""
    }
  },
  computed: {
    ...mapGetters("app", {
      windowWidth: "GET_WINDOW_WIDTH"
    }),
    ...mapGetters("liveshow_mode", {
      mode: "GET_MODE"
    })
  },
  components: {
    Landing,
    Dashboard,
    DashboardMobile,
    DashboardLiveshow
  }
};
</script>
