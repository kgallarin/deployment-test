<template>
  <b-progress :class="`custom-progress ${size} ${bordered ? 'bordered' : ''}`" :value="value" :max="max" :animated="animated">
    <b-progress-bar :value="value" :class="`custom-progressbar ${color}`" ></b-progress-bar>
  </b-progress>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    color: {
      type: String,
      default: "frog-green"
    },
    size: {
      type: String,
      default: "large"
    },
    value: {
      type: Number,
      default: 45
    },
    max: {
      type: Number,
      default: 100
    },
    bordered: {
      type: Boolean,
      default: false
    },
    animated: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    randomValue() {
      this.value = Math.random() * this.max;
    }
  }
};
</script>
