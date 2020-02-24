<template>
  <Tile size="sm" class="mt-3 p-4 flex-column">
    <p class="title-xd d-flex m-1 mb-3">REQUEST PAYOUT</p>
    <div class="flex-row w-100 m-1 pr-2">
      <div class="d-flex justify-content-between mb-n2">
        <p class="progress-label">Monthly income</p>
        <p class="progress-label">620 min</p>
      </div>
      <ProgressBar color="weird-green" size="fullwidth" :value="100" :max="100" />
    </div>

    <p class="subtitle-pale d-flex mt-3 ml-1 mr-1 mb-2">Next normal payout</p>
    <!-- <div class="custom-normal-payout m-1">
      <SignBoard size="sm" class="flex-column justify-content-center p-1 mr-2">
        <p class="m-0 p-0 title">14</p>
        <p>days</p>
      </SignBoard>
      <SignBoard size="sm" class="flex-column justify-content-center p-1 mr-2">
        <p class="m-0 p-0 title">11</p>
        <p>hours</p>
      </SignBoard>
      <SignBoard size="sm" class="flex-column justify-content-center p-1 mr-2">
        <p class="m-0 p-0 title">23</p>
        <p>minutes</p>
      </SignBoard>
      <SignBoard size="sm" class="flex-column justify-content-center p-1">
        <p class="m-0 p-0 title">10</p>
        <p>seconds</p>
      </SignBoard>
    </div> -->

    <Timer :end-time="nextweek" />

    <!-- Request Payout Button Container -->
    <div class="button-container">
      <Button :click="() => ''" :pill="false" variant="dark" class="mr-3 btn-dark" disabled>
        <strong>NORMAL PAYOUT</strong>
      </Button>
      <Button :click="() => ''" :pill="false" variant="light">
        <strong>QUICK PAYOUT</strong>
      </Button>
    </div>
  </Tile>
</template>
<script>
import Button from "@components/common/Button";
import Tile from "@components/common/Tile";
import SignBoard from "@components/common/SignBoard";
import ProgressBar from "@components/common/ProgressBar";

import Timer from "@components/partials/payout/Timer"

export default {
  components: { Button, Tile, SignBoard, ProgressBar, Timer },
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
  computed: {
    nextweek() {
          // just a sample date function (next week)
          var today = new Date();
          var nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate()+7);
          return nextweek;
      }
  },
  data() {
    return {
      userInput: false
    };
  }
};
</script>
