<template>
  <div :class="`signboard ${size} ${pointer}`">
    <slot />
  </div>
</template>
<script>
export default {
  name: "SignBoard",
  props: {
    size: {
      type: String,
      default: "default"
    },
    pointer: {
      type: String,
      default: "none"
    }
  }
};
</script>
