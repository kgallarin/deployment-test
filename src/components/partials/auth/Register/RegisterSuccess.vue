<template>
  <div class="auth-form">
    <!-- @common header component -->
    <!-- <template v-if="type === 'model'"> -->
      <auth-headers :has-close="false" header-title="Complete your register" subs="Activate your email address" />
    <!-- </template> -->

    <div class="auth-form--register-success">
      <svg height="80" width="89" class="svg-icon">
        <use
          :xlink:href="require('@svg/sprites/auth.svg') + '#confirmed-email'"
        />
      </svg>

      <header>Confirm your email!</header>

      <p class="subs">
        Your account has been successfully registered.
        To complete the provess please check your email
        for a validation request.
      </p>

      <Button :pill="true" variant="light" class="auth-button">Activate Email</Button>
    </div>

  </div>
</template>

<script>
import Input from '@components/common/Input'
import Button from '@components/common/Button'
import AuthHeaders from '@components/common/Auth/AuthHeaders'

import { mapGetters } from "vuex"
  export default {
    name:'RegisterSuccess',
    props: {
      type: {
        type: String,
        default: ''
      }
    },
    components: {
      Input,
      Button,
      AuthHeaders
    }
  }
</script>
