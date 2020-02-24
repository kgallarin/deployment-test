<template>
  <div class="auth-form">

    <!-- common header component -->
    <auth-headers :header-title="headerTitle" :subs="subHeaderText" />

    <div class="auth-form--form content-spacing">
      <div v-if="successFlag" class="success-flag">
        <header>
          Register Complete!
        </header>

        <p>Please loging to access your model account</p>
      </div>
      <form @submit.prevent="validate">

        <!-- Username and password -->
        <div class="input-wrapper">
          <Input :value.sync="username" type="text" placeholder="Username" />
        </div>
        <div class="input-wrapper">
          <Input :value.sync="password" type="password" placeholder="Password" />
        </div>

        <!-- keep / forgot -->
        <div class="keep-forgot d-flex align-items-center justify-content-between">
          <div class="keep-chk d-flex align-items-center w-50">
            <b-form-checkbox
              id="forgot-1"
              class="d-flex models-chk align-items-center"
              v-model="status"
              name="checkbox-1"
              value="keep_login"
              unchecked-value="not_keep_login"
            >
              Keep me logged in
            </b-form-checkbox>
          </div>

          <!-- todo: router link -->
          <a href="#" class="link">
            Forgot Password?
          </a>
        </div>

        <!-- button -->
        <Button :pill="true" variant="light" class="auth-button">
          <strong>Login</strong>
        </Button>
      </form>
    </div>

    <!-- bottom section -->
    <div class="position-absolute auth-form--footer content-spacing">
      <p class="text-center dhac">
        Don't have an account?
        <span
            @click.prevent.stop="showAuthPop('OPTION_TYPE_POP')"
            class="cursor-pointer"
          >
          Register now
        </span>
    </p>
    </div>
  </div>
</template>

<script>
import Input from '@components/common/Input'
import Button from '@components/common/Button'
import AuthHeaders from '@components/common/Auth/AuthHeaders'
  export default {
    name:'LoginForm',
    props: {
      headerTitle: {
        type: String,
        default: ''
      },
      subHeaderText: {
        type: String,
        default: ''
      },
      successFlag: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        status: false,
        username:'',
        password:''
      }
    },
    methods: {
      validate() {
        console.log('login')
      },
      showAuthPop(type) {
        this.$store.dispatch('auth_pop_control/ON_SELECT_AUTH', {
          show: true,
          type: type
        })
      }
    },
    components: {Input, Button, AuthHeaders}
  }
</script>
