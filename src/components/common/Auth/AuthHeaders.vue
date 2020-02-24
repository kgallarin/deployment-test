<template>
  <header class="auth-form--header content-spacing">
    <div class="auth-form--navigation d-flex align-items-center justify-content-between">
      <!-- close slot -->
      <span 
        :class="[hasClose ? 'opacity-1' : 'opacity-0 cursor-none', 'close cursor-pointer']" 
        @click.stop="hasClose ? hideAuthPop('SET_LOGIN_POP_STATE') : null"
      >
        <svg height="20" width="20">
          <use
            :xlink:href="require('@svg/sprites/auth.svg') + '#close'"
            class="svg-icon"
          />
        </svg>
      </span>


      <!-- mid starts -->

      <div class="d-flex flex-column justify-content-center">
        <h3>
          <strong>{{ headerTitle }}</strong>
        </h3>
      </div>

      <!-- todo: router link -->
      <a href="#" @click.prevent="goToFAQ">
        <svg height="20" width="20">
          <use
            :xlink:href="require('@svg/sprites/auth.svg') + '#support'"
            class="svg-icon"
          />
        </svg>
      </a>
    </div>

    <div class="auth-form--subs">
      <p class="text-center">{{ subs }}</p>
      <!-- <p class="text-center">Manage your studio</p> -->
    </div>
  </header>
</template>

<script>
  export default {
    name: 'AuthHeaders',
    props: {
      headerTitle: {
        type: String,
        default: ''
      },
      subs: {
        type: String,
        default: ''
      },
      hasClose: {
        type: Boolean,
        default: true
      }
    },
    mounted() { },
    methods: {
      hideAuthPop(type) {
       this.$store.dispatch('auth_pop_control/ON_SELECT_AUTH', {
         show: false,
         type: '',
         registration_type: null
       })
      },
      goToFAQ() {
        this.$router.push({ name: 'Help' })
        this.hideAuthPop()
      }
    }
  }
</script>
