<template>
  <div class="component-wrapper">
    <div class="d-flex bd-highlight mt-3">
      <div class="p-2 period-stat progress-lable">Free Chat</div>
      <div class="p-2 w-100">
        <ProgressBar color="darkgreen" :value="90"/>
      </div>
      <div class="p-2 progress-lable-value">$ 10.99</div>
    </div>
    <div class="d-flex bd-highlight">
      <div class="p-2 period-stat progress-lable">Private Cam</div>
      <div class="p-2 w-100">
        <ProgressBar color="warm-pink" :value="75" />
      </div>
      <div class="p-2 progress-lable-value">$ 999.99</div>
    </div>
    <div class="d-flex bd-highlight">
      <div class="p-2 period-stat progress-lable">Group Chat</div>
      <div class="p-2 w-100">
        <ProgressBar color="tangerine" :value="55" />
      </div>
      <div class="p-2 progress-lable-value">$ 40.99</div>
    </div>
    <div class="d-flex bd-highlight">
      <div class="p-2 period-stat progress-lable">Message</div>
      <div class="p-2 w-100">
        <ProgressBar color="marigold" :value="20" />
      </div>
      <div class="p-2 progress-lable-value">$ 200</div>
    </div>
    <div class="d-flex bd-highlight">
      <div class="p-2 period-stat progress-lable">Vibratoy</div>
      <div class="p-2 w-100">
        <ProgressBar color="green-blue" />
      </div>
      <div class="p-2 progress-lable-value">$ 100</div>
    </div>
    <div class="d-flex bd-highlight">
      <div class="p-2 period-stat progress-lable">Cam2Cam</div>
      <div class="p-2 w-100">
        <ProgressBar color="bright-orange" :value="35" />
      </div>
      <div class="p-2 progress-lable-value">$ 350</div>
    </div>
    <div class="d-flex bd-highlight">
      <div class="p-2 period-stat progress-lable">2 Ways audio</div>
      <div class="p-2 w-100">
        <ProgressBar color="frog-green" :value="55" />
      </div>
      <div class="p-2 progress-lable-value">$ 400</div>
    </div>
    <div class="d-flex bd-highlight">
      <div class="p-2 period-stat progress-lable">Referral</div>
      <div class="p-2 w-100">
        <ProgressBar color="ocean-blue" :value="25" />
      </div>
      <div class="p-2 progress-lable-value">$ 499</div>
    </div>
  </div>
</template>

<script>
import ProgressBar from "@components/common/ProgressBar";

export default {
  components: { ProgressBar },
  mounted() {},
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss">
</style>
