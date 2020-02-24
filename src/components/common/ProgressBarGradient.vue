<template>
  <div class="progressbar-wrapper">
    <div class="progressbar-background" :style="`width:${value}%`">
      <label class="progress-label">{{value}}%</label>
    </div>
    <div class="progressbar-strip"></div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 100
    }
  }
};
</script>

<style lang="scss">
.progressbar-wrapper {
  background-color: #fff;
  width: 100%;
  max-width: 255px;
  display: flex;
  position: relative;
  height: 16px;
  border-color: #fff;
  border: 1px solid white;
  border-radius: 4px;
}

.progressbar-background {
  background-image: linear-gradient(to left, #61e2fa, #5e77ff);
  position: relative;
  border-radius: 4px;
  padding: 0;
  margin: 0;
}

.progressbar-strip {
  position: absolute;
  height: 16px;
  width: 100%;
  border-radius: 4px;
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.2) 0%,
    transparent 5%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.2) 0%,
    transparent 56%
  );
  z-index: 1;
  background-size: 11px 11px;
  animation: move 2s linear infinite;
  overflow: hidden;
  margin-top: -1px;
}

.progress-label {
  float: right;
  color: #fff;
  font-weight: bold;
  font-size: 14px !important;
  z-index: 9;
  margin-top: -2px;
  margin-right: 2px;
}
</style>
