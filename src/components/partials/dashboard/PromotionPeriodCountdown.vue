<template>
  <Tile class="d-flex flex-column justify-content-between p-4">
    <div class="d-flex justify-content-between w-100">
      <p class="title m-1">PROMOTION PERIOD COUNTDOWN</p>
    </div>
    <div class="promotion-period-custom m-2">
      <div class="flex-row w-100 mt-2 mr-3">
        <div class="d-flex justify-content-between mb-n2">
          <p class="progress-label">Free chat</p>
          <p class="progress-label">620 min</p>
        </div>
        <ProgressBar color="warm-pink" size="fullwidth" :value="90" :max="100" />
      </div>

      <div class="flex-row w-100 mt-2">
        <div class="d-flex justify-content-between mb-n2">
          <p class="progress-label">Private chat</p>
          <p class="progress-label">320 min</p>
        </div>
        <ProgressBar color="green-chat" size="fullwidth" :value="45" :max="100" />
      </div>
    </div>
  </Tile>
</template>
<script>
import Button from "@components/common/Button";
import Tile from "@components/common/Tile";
import SignBoard from "@components/common/SignBoard";
import ProgressBar from "@components/common/ProgressBar";

export default {
  components: { Button, Tile, SignBoard, ProgressBar },
  props: {
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      userInput: false
    };
  }
};
</script>