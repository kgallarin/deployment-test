<template>
  <Tile size="lg" :class="[{ 'mb-3' : windowWidth <= 767 }]" >
    <div class="tile-inner">
      <p class="headers">Request payout</p>

      <div class="block">
        <div class="d-flex justify-content-between">
          <p class="block-ttl">Monthly income</p>
          <p class="block-ttl">$ 480</p>
        </div>
        <ProgressBar bordered color="weird-green" size="fullwidth" :value="100" :max="100" />
      </div>

      <div class="block mb-0">
        <div class="d-flex justify-content-between">
          <p class="block-ttl">Next normal payout</p>
        </div>
        <Timer :end-time="nextweek" />
      </div>
      <!-- Request Payout Button Container -->
      <div class="button-container">
        <Button :click="() => ''" :pill="false" class="mr-3 btn-dark" :variant="normalPayout ? 'light' : 'dark'" :disabled="normalPayout ? false : true">
          <strong>NORMAL PAYOUT</strong>
        </Button>
        <Button :click="() => ''" :pill="false" :variant="quickPayout ? 'light' : 'dark'" :disabled="quickPayout ? false : true">
          <strong>QUICK PAYOUT</strong>
        </Button>
      </div>
    </div>
  </Tile>
</template>

<script>
import Tile from "@components/common/Tile"
import Button from "@components/common/Button"



import ProgressBar from "@components/common/ProgressBar"
import Timer from "./Timer"

import { mapGetters } from "vuex"

  export default {
    data() {
      return {
        normalPayout: true,
        quickPayout: false
      }
    },
    components: { Tile, Timer, ProgressBar, Button },
    methods: { },
    computed: {
      ...mapGetters("app", {
        windowWidth: "GET_WINDOW_WIDTH"
      }),
      nextweek() {
        // just a sample date function (next week)
          var today = new Date();
          var nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate()+7);
          return nextweek;
      }
    },
    created() {
      // this.$store.dispatch('models/FETCH_MODEL_DATA')
    }

  }
</script>
