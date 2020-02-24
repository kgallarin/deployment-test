<template>
  <Tile :class="[mode === 'dark' ? '' : 'light-mode','camlive']">
    <!-- Video -->
    <div class="embed-responsive embed-responsive-16by9 fitscreen">
      <video
        id="video"
        :class="[mode === 'dark' ? '' : 'video-light-mode', 'embed-responsive-item']"
      ></video>
    </div>

    <!-- Mobile guide view -->
    <div :class="[mode === 'dark' ? '' : 'light-guide','mobile-guide']"></div>
    <label class="mobile-view-lable">Mobile view</label>
  </Tile>
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
      message: "",
      warning: false
    };
  },
  methods: {
    accessCamera() {
      // Grab elements, create settings, etc.
      let video = document.getElementById("video");

      //make video 21:9 aspect ratio
      const hdConstraints = {
        video: { width: { min: 1280 }, height: { min: 720 } }
      };

      // Get access to the camera
      if (
        navigator.mediaDevices &&
        navigator.mediaDevices.getUserMedia(hdConstraints)
      ) {
        navigator.mediaDevices
          .getUserMedia({ video: true })
          .then(function(stream) {
            video.srcObject = stream;
            video.play();
          });
      }
    }
  },
  mounted() {
    this.accessCamera();
  },
  computed: {
    ...mapGetters("liveshow_mode", {
      mode: "GET_MODE"
    })
  }
};
</script>