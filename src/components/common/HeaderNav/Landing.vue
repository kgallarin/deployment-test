<template>
  <b-navbar class="navbar-main" toggleable="lg" type="dark">
    <b-navbar-brand href="#" click.prevent="">
      <b-img :src="require('@svg/candycams.svg')" alt="Candycammers Models"></b-img>
    </b-navbar-brand>

    <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-nav-item href="#" @click.prevent="showAuthPop('OPTION_TYPE_POP')">Join us</b-nav-item>
      <b-nav-item href="#" @click.prevent="showAuthPop('LOGIN_POP')">Login</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
    methods: {
      showAuthPop(type) {
        this.$store.dispatch('auth_pop_control/ON_SELECT_AUTH', {
          show: true,
          type: type
        })
      }
    },
  }
</script>
