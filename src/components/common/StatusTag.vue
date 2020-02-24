<template>
  <div :class="`status-tag ${color}`">{{status}}</div>
</template>
<script>
export default {
  props: {
    status: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    }
  }
};
</script>