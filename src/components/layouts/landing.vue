<template>
  <div class="landing-layout">
    <HeaderNav type="landing" />
      <slot />
    <Footer />
  </div>
</template>

<script>
import HeaderNav from '@components/common/HeaderNav'
import Footer from '@components/common/Footer'
import { mapGetters } from "vuex"
export default {
  name: 'page',
  components: {HeaderNav, Footer},
  computed: {
    ...mapGetters("app", {
      isLight: "GET_THEME_COLOR"
    })
  }
};
</script>
