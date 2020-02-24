<template>
  <footer class="models-footer">
    <div :class="[this.$route.name === 'Home' ? 'footer-wrapper' : '']">
      <Landing v-if="this.$route.name === 'Home'" />
      <Dashboard :isLightMode="isLightMode" v-else />
    </div>
  </footer>
</template>

<script>
  import Landing from './Landing'
  import Dashboard from './Dashboard'
  export default {
    props: {
      isLightMode: {
        type: Boolean,
        default: false
      }
    },
    components: { Landing, Dashboard }
  }
</script>
