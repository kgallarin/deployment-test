<template>
  <div class="status-bar">
    <user-status :active="isActive" :status-text="lastSeen" :name="userName" />

    <route-options v-if="windowWidth < 1280" />
  </div>
</template>

<script>
import UserStatus from '@components/common/UserStatus'
import RouteOptions from './RouteOptions'
import { mapGetters } from "vuex"

  export default {
    name:'StatusBar',
    props: {
      isActive: {
        type: Boolean,
        default: false
      },
      lastSeen: {
        type: String,
        default: ''
      },
      userName: {
        type: String,
        default: ''
      }
    },
    components: {
      UserStatus,
      RouteOptions
    },
    computed: {
      ...mapGetters("app", {
        windowWidth: "GET_WINDOW_WIDTH"
      })
    }
  }
</script>
