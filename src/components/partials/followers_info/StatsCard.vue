<template>
  <Tile :class="[mode === 'dark' ? 'dark-mode' : 'light-mode', 'd-flex','flex-column', 'pb-3']">
    
    <!-- Slot for dynamic header -->
    <slot />

    <!-- Statistics -->
    <div class="d-flex justify-content-between px-3">
      <span>User Token:</span>
      <span class="bold">{{member.stat.token}}</span>
    </div>

    <div class="d-flex justify-content-between px-3">
      <span>Spent on you:</span>
      <span class="bold">{{member.stat.spent_on_you}}</span>
    </div>

    <div class="d-flex justify-content-between px-3">
      <span>Last chat</span>
      <span class="bold">{{member.stat.last_chat}}</span>
    </div>

    <div class="d-flex justify-content-between px-3" v-if="timeOnPrivate">
      <span>Time on private:</span>
      <span class="bold">{{member.stat.time_on_private}}</span>
    </div>

  </Tile>
</template>

<script>
import Tile from "@components/common/Tile";
import { mapGetters } from "vuex";
export default {
  components: { Tile },
  props: {
    member: {
      type: Object,
      default: () => {}
    },
    timeOnPrivate: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters("liveshow_mode", {
      mode: "GET_MODE"
    })
  }
};
</script>