<template>
  <div class="component-wrapper">
    <p :class="[{ 'active' : active }, { 'username' : true }]">{{name}}</p>
    <span v-if="statusText !== ''" class="state-text">{{ active === true ? 'active' : statusText }}</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'UserStatus',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    statusText: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ""
    }
  },
  computed: {
    ...mapGetters("liveshow_mode", {
      mode: "GET_MODE"
    })
  }
};
</script>
