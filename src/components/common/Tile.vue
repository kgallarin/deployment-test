<template>
  <div :class="[dark === true ? 'dark' : '', 'tile', `${size}`]" >
   <slot />
  </div>
</template>
<script>
export default {
  name: "tile",
  props: {
    size: {
      type: String,
      default: "default"
    },
    dark: {
      type: Boolean,
      default: false
    }
  }
};
</script>
