<template>
  <div class='d-flex m-3'>
    <!-- Mics ON -->
    <svg fill="#fff" class="svg-content mr-2" width="40" height="40" @click.prevent="micsHandler(true)">
      <use
        :xlink:href="require('@svg/sprites/liveshow.svg') + `#microphone-on-${isActive ? 'active' : 'inactive'}`"
        class="svg-icon"
      />
    </svg>
    
    <!-- Mics OFF -->
    <svg
      fill="#fff"
      class="svg-content"
      width="40"
      height="40"
      @click.prevent="micsHandler(false)"
    >
      <use
        :xlink:href="require('@svg/sprites/liveshow.svg') + `#microphone-off-${!isActive ? 'active' : 'inactive'}`"
        class="svg-icon"
      />
    </svg>
  </div>
</template>
<script>
import Tile from "@components/common/Tile";
import { mapGetters } from "vuex";

export default {
  components: {
    Tile
  },
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    micsHandler(isMuted) {
      //turn microphone onn / off
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
          .getUserMedia({ audio: true })
          .then(function(stream) {
            stream.getAudioTracks()[0].enabled = isMuted;
          });
      }
      this.isActive = isMuted
    }
  },
  computed: {
    ...mapGetters("liveshow_mode", {
      mode: "GET_MODE"
    })
  },
  mounted() {
    this.micsHandler(true);
  }
};
</script>
