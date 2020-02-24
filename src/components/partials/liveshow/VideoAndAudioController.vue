<template>
  <!-- <Tile :class="[mode === 'dark' ? 'dark-mode' : 'light-mode', 'liveshow-custom-container']"> -->
    <div class="video-and-audio-setting">
      <!-- Video Controller-->
      <div class="controller-container">
        <svg :fill="mode === 'dark' ? '#fff' : '#374163'" class="svg-content" width="30" height="30">
          <use :xlink:href="require('@svg/sprites/liveshow.svg') + '#video'" class="svg-icon" />
        </svg>

        <div :class="[mode === 'dark' ? '' : 'light-mode','static']">
          Video:
          <span class="rate">N\R</span>
          <div class="wrapper">
            <svg :fill="mode === 'dark' ? '#fff' : '#374163'" class="svg-content" width="48" height="43">
              <use :xlink:href="require('@svg/sprites/liveshow.svg') + '#balloon'" class="svg-icon" />
            </svg>
            <p class="rate-percentage">5%</p>
          </div>
        </div>
      </div>

      <!-- Audio Controller-->
      <div class="controller-container">
        <svg
          :fill="mode === 'dark' ? '#fff' : '#374163'"
          class="svg-content"
          width="30"
          height="30"
        >
          <use :xlink:href="require('@svg/sprites/liveshow.svg') + '#audio'" class="svg-icon" />
        </svg>
        <div :class="[mode === 'dark' ? '' : 'light-mode','static']">
          Audio:
          <span class="rate">N\R</span>
          <div class="wrapper">
            <svg
              :fill="mode === 'dark' ? '#fff' : '#374163'"
              class="svg-content"
              width="48"
              height="43"
            >
              <use :xlink:href="require('@svg/sprites/liveshow.svg') + '#balloon'" class="svg-icon" />
            </svg>
            <p class="rate-percentage">5%</p>
          </div>
        </div>
      </div>
    </div>
  <!-- </Tile> -->
</template>
<script>
import Tile from "@components/common/Tile";
import { mapGetters } from "vuex";

export default {
  components: {
    Tile
  },
  computed: {
    ...mapGetters("liveshow_mode", {
      mode: "GET_MODE"
    })
  }
};
</script>
