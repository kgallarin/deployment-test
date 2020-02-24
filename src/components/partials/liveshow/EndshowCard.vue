<template>
  <Tile :class="[mode === 'dark' ? 'dark-mode' : 'light-mode', 'end-show-card']">
    <div class="end-show-card-container">

      <div :class="[mode === 'dark' ? 'dark-mode' : 'light-mode', 'card-header']">
        <p class="title">Current Session</p>
      </div>

      <div class="content">
        <span>Time on private</span>
        <span class="bold">{{data.timeOnPrivate}}</span>
      </div>
      <div class="content">
        <span>Tokens you make:</span>
        <span class="bold">{{data.token}}</span>
      </div>
      
      <div class="content mb-3">
        <Button :click="() => ''" :pill="false" variant="light" class="btn-endshow">end the show</Button>
      </div>
    </div>
  </Tile>
</template>
<script>
import Tile from "@components/common/Tile";
import Button from "@components/common/Button";
import { mapGetters } from "vuex";
export default {
  components: { Tile, Button },
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    ...mapGetters("liveshow_mode", {
      mode: "GET_MODE"
    })
  }
};
</script>