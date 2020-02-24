<template>
  <div class="component-wrapper">
    <div class="d-flex bd-highlight mt-3">
      <div class="p-2 period-stat progress-lable">Free Chat</div>
      <div class="p-2 w-100">
        <ProgressBar color="darkgreen" :value="90" />
      </div>
      <div class="p-2 progress-lable-value"> 10H 22M</div>
    </div>
    <div class="d-flex bd-highlight">
      <div class="p-2 period-stat progress-lable">Private Cam</div>
      <div class="p-2 w-100">
        <ProgressBar color="warm-pink" :value="20" />
      </div>
      <div class="p-2 progress-lable-value">9H 10M</div>
    </div>
    <div class="d-flex bd-highlight">
      <div class="p-2 period-stat progress-lable">Group Chat</div>
      <div class="p-2 w-100">
        <ProgressBar color="tangerine" :value="20"/>
      </div>
      <div class="p-2 progress-lable-value">9H 10M</div>
    </div>
    <div class="d-flex bd-highlight">
      <div class="p-2 period-stat progress-lable">Message</div>
      <div class="p-2 w-100">
        <ProgressBar color="marigold" :value="20"/>
      </div>
      <div class="p-2 progress-lable-value">9H 10M</div>
    </div>
    <div class="d-flex bd-highlight">
      <div class="p-2 period-stat progress-lable">Vibratoy</div>
      <div class="p-2 w-100">
        <ProgressBar color="green-blue" :value="20"/>
      </div>
      <div class="p-2 progress-lable-value">9H 10M</div>
    </div>
    <div class="d-flex bd-highlight">
      <div class="p-2 period-stat progress-lable">Cam2Cam</div>
      <div class="p-2 w-100">
        <ProgressBar color="bright-orange" :value="20"/>
      </div>
      <div class="p-2 progress-lable-value">9H 10M</div>
    </div>
    <div class="d-flex bd-highlight">
      <div class="p-2 period-stat progress-lable">2 Ways audio</div>
      <div class="p-2 w-100">
        <ProgressBar color="frog-green" :value="20"/>
      </div>
      <div class="p-2 progress-lable-value">9H 10M</div>
    </div>
    <div class="d-flex bd-highlight">
      <div class="p-2 period-stat progress-lable">Referral</div>
      <div class="p-2 w-100">
        <ProgressBar color="ocean-blue" :value="20"/>
      </div>
      <div class="p-2 progress-lable-value">9H 10M</div>
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
