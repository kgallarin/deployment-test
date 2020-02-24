<template>
  <div class="auth-form">
    <!-- @common header component -->
    <template v-if="type === 'model'">
      <auth-headers header-title="Create Model Account" subs="Lorem ipsum dolor sit amet" />
    </template>

    <template v-if="type === 'studio'">
      <auth-headers header-title="Create Studio Account" subs="Lorem ipsum dolor sit amet" />
    </template>

      <ValidationObserver ref="registerForm">
        <div class="auth-form--form content-spacing">
          <form @submit.prevent="validate" autocomplete="off" name="registerForm">

            <!-- username -->
            <ValidationProvider class="position-relative d-block d-block" name="username" rules="required" v-slot="{ errors, failed }">
                <div
                    :class="[
                        { 'has-err': failed },
                        { 'active': username  !== '' },
                        { 'input-wrapper': true }
                    ]"
                >
                    <Input :value.sync="username" type="text" placeholder="Username" />
                </div>
                <div v-for="(err, index) in errors" :key="index">
                    <span class="validation-err">{{ err }}</span>
                </div>
            </ValidationProvider>

            <!-- email -->
            <ValidationProvider class="position-relative d-block" name="email" rules="required|email" v-slot="{ errors, failed }">
                <div
                    :class="[
                        { 'has-err': failed },
                        { 'active': email  !== '' },
                        { 'input-wrapper': true }
                    ]"
                >
                    <Input :value.sync="email" type="text" placeholder="Email address" />
                </div>
                <div v-for="(err, index) in errors" :key="index">
                    <span class="validation-err">{{ err }}</span>
                </div>
            </ValidationProvider>

            <!-- password -->
            <ValidationProvider class="position-relative d-block" name="password" rules="required|confirmed:repeat_password" v-slot="{ errors, failed }">
                <div
                    :class="[
                        { 'has-err': failed },
                        { 'active': password  !== '' },
                        { 'input-wrapper': true }
                    ]"
                >
                    <Input :value.sync="password" type="password" placeholder="Password" />
                </div>
                <div v-for="(err, index) in errors" :key="index">
                    <span class="validation-err">{{ err }}</span>
                </div>
            </ValidationProvider>

            <!-- repeat password -->
            <ValidationProvider class="position-relative d-block" name="repeat_password" rules="required|confirmed:password" v-slot="{ errors, failed }">
                <div
                    :class="[
                        { 'has-err': failed },
                        { 'active': repeat_password  !== '' },
                        { 'input-wrapper': true }
                    ]"
                >
                    <Input :value.sync="repeat_password" type="password" placeholder="Repeat password" />
                </div>
                <div v-for="(err, index) in errors" :key="index">
                    <span class="validation-err">{{ err }}</span>
                </div>
            </ValidationProvider>


            <!-- keep / forgot / checkbox -->
            <div class="keep-forgot d-flex align-items-center justify-content-between">
              <div class="keep-chk d-flex align-items-center">
                <b-form-checkbox
                  id="forgot-1"
                  class="d-flex models-chk align-items-center"
                  v-model="status"
                  name="checkbox-1"
                  value="keep_login"
                  unchecked-value="not_keep_login"
                >
                  I accept the <a href="#" class="color--marigold link">Services Agreement, Sensitive Data</a>
                  and <a href="#" class="color--marigold link">Cookie</a> policies.
                </b-form-checkbox>
              </div>
            </div>

            <!-- button -->
            <Button type="submit" :pill="true" variant="light" class="auth-button">
              <strong>Register now</strong>
            </Button>
          </form>
        </div>
      </ValidationObserver>



    <!-- bottom section -->
    <div class="auth-form--footer content-spacing">
      <p class="text-center dhac">
        Already have an account?
        <a href="#" @click.prevent="() => showAuthPop('LOGIN_POP')" class="color--white">Login Now</a>
      </p>
    </div>
  </div>
</template>

<script>
import Input from '@components/common/Input'
import Button from '@components/common/Button'
import AuthHeaders from '@components/common/Auth/AuthHeaders'
import { ValidationProvider, ValidationObserver, extend } from "vee-validate/dist/vee-validate.full"
import { required, email, min } from "vee-validate/dist/rules";

extend("required", {
    message: (field, values) => field === 'repeat_password' ? 'repeat password' : `${field}`
});

extend("email", {
    message: (field, values) => 'invalid email'
});

extend("confirmed", {
    message: (field, values) => `Passwords not match`
});

// extend("min", min);

import { mapGetters } from "vuex"
  export default {
    name:'RegisterForm',
    props: {
      type: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        status: false,
        username: '',
        email: '',
        password: '',
        repeat_password: ''
      }
    },
    methods: {
      showAuthPop(type) {
        this.$store.dispatch('auth_pop_control/ON_SELECT_AUTH', {
          show: true,
          type: type
        })
      },
      validate() {
        let type = this.type
        return this.$refs.registerForm.validate().then(res => {
          if(res) {
            switch(this.type) {
              case 'model':
                // api
                console.log('model-form-submitted')
                this.$emit('registrationSuccess')
              break;
              case 'studio':
                // api
                console.log('studio-form-submitted')
                this.$emit('registrationSuccess')
              break;

              default:
                return res
            }
          }
        });
      }
    },
    components: {
      Input,
      Button,
      AuthHeaders,
      ValidationProvider,
      ValidationObserver,
      extend
    }
  }
</script>
