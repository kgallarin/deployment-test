<template>
  <b-navbar :class="[isLightMode === true ? 'light-mode' : 'dark-mode navbar-main full-width studio-header h-100 mobile-header']" toggleable="lg" type="dark">
    <div class="main w-100 align-items-center justify-content-between d-flex h-100 w-100">
      <div class="cams-brand">
        <Button
          :click="toggleSidenav"
          variant="iconLink"
          :icon_url="activeSidenav ? 'common.svg#close' : 'common.svg#hamburger'"
          :iconH="activeSidenav ? '16' : '12'"
          iconW="16" />
      </div>

      <router-link :to="{ name: 'Home' }">
        <b-img height="30" width="136" :src="require('@svg/candycams-md.svg')" alt="Candycammers Models"></b-img>
      </router-link>

      <div class="studio-header--right-container d-flex align-items-center">
        <b-img v-bind="mainProps" src="https://picsum.photos/200" rounded="circle" alt="Cams models user"></b-img>
      </div>
    </div>
  </b-navbar>
</template>

<script>
import Input from '@components/common/Input'
import Button from '@components/common/Button'
import { mapGetters } from "vuex"

export default {
    props: {
      isLightMode: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        searchVal: '',
        mainProps: { blank: false, blankColor: '#777', width: 75, height: 75, class: 'm1' },
        activeSidenav: false
      }
    },
    components: {Input, Button},
    computed: {
      ...mapGetters("app", {
        windowWidth: "GET_WINDOW_WIDTH",
      })
    },
    methods: {
    toggleSidenav() {
        this.activeSidenav = !this.activeSidenav
        this.$EventBus.$emit('toggleSidebar', this.activeSidenav)
      },
      handleClose() {
        this.activeSidenav = false
        this.$EventBus.$emit('toggleSidebar', false)
      }
    },
    created() {
      this.$EventBus.$on('closeSidebar', this.handleClose)
    },
    beforeDestroy() {
      this.$EventBus.$off('closeSidebar', this.handleClose)
    },

  }
</script>
