<template>
  <div class="dashboard-layout">
    <HeaderNav type="dashboard-liveshow" :isLightMode="isLight" />
    <Sidebar v-show="visibleSidebar" :sbState="visibleSidebar" />
    <slot />
    <Footer :isLightMode="isLight" />
  </div>
</template>

<script>
import HeaderNav from '@components/common/HeaderNav'
import Sidebar from '@components/common/Sidebar'
import Footer from '@components/common/Footer'
import { mapGetters } from "vuex";

export default {
  name: 'page',
  components: {HeaderNav, Footer, Sidebar},
  data() {
    return {
      visibleSidebar: false,
    }
  },
  computed: {
    ...mapGetters("app", {
      isLight: "GET_THEME_COLOR",
      windowWidth: "GET_WINDOW_WIDTH"
    })
  },
  methods: {
    handleSidebar() {
      this.visibleSidebar = !this.visibleSidebar
    },
  },
  created() {
    this.$EventBus.$on('toggleSidebar', this.handleSidebar)
  },

  beforeDestroy() {
    this.$EventBus.$off('toggleSidebar', this.handleSidebar)
  }
};
</script>
