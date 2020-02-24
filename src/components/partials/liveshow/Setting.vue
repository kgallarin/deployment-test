<template>
  <Tile :class="[mode === 'dark' ? '' : 'light-mode', 'liveshow-custom-container']">
    <div class="liveshow-setting">
      <div class="info">
        <svg :fill="mode === 'dark' ? '#fff' : '#374163'" class="svg-content" width="14" height="14">
          <use :xlink:href="require('@svg/sprites/liveshow.svg') + '#user'" class="svg-icon" />
        </svg>
        <p class="ml-2">Setting will be here</p>
      </div>

      <div class="control">
        <p class="control">Darkmode</p>
        <CustomSwitch class="mx-auto" @input="$emit('input', buffer)"/>
      </div>
    </div>
  </Tile>
</template>
<script>
import Tile from "@components/common/Tile";
import CustomSwitch from "@components/common/CustomSwitch2";
import { mapGetters } from "vuex";

export default {
  components: { Tile, CustomSwitch },
  methods: {
    toggleMode(event) {
      console.log(event)
    }
  },
  computed: {
    ...mapGetters("liveshow_mode", {
      mode: "GET_MODE"
    })
  }
};
</script>
