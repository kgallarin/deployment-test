<template>
   <Tile :class="[mode === 'dark' ? '' : 'light-mode', 'liveshow-custom-container']">
    <div class="liveshow-media-controller">

      <!--Earning dollar $  / minutes-->
      <div class="info">
        <div class="label-container">
          <svg :fill="mode === 'dark' ? '#fff' : '#374163'" class="svg-content" width="30" height="30">
            <use :xlink:href="require('@svg/sprites/liveshow.svg') + '#clock'" class="svg-icon" />
          </svg>
          <label class="stat">$0.98/min</label>
        </div>
      </div>
      
      <!-- VDO controller -->
      <video-and-audio-controller />

      <!-- Microphone controller -->
      <microphone-controller />

      <Button variant="light" :click="() => ''">vibratoy: active</Button>
    </div>
  </Tile>
</template>
<script>
import Tile from "@components/common/Tile"
import Button from "@components/common/Button"

import VideoAndAudioController from "@components/partials/liveshow/VideoAndAudioController"
import MicrophoneController from "@components/partials/liveshow/MicrophoneController"

import { mapGetters } from "vuex";

export default {
  components: { Tile, Button, VideoAndAudioController, MicrophoneController },
  computed: {
     ...mapGetters("liveshow_mode", {
      mode: "GET_MODE"
    })
  }
};
</script>
