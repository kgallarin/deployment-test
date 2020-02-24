<template>
  <Modal isAuth flexible class="auth-popup ">
    <template v-slot:content>
      <div class="w-100 choose-account-type">
        <!-- common header component -->
        <auth-headers header-title="Are you a model or a studio?" subs="Pick the one that match your account type" />

        <div class="option-contents">
          <div class="option option-one">
            <!-- button -->
            <Button :click="() => registerModel('MODEL_REGISTER_POP', 'model')" :pill="true" variant="light" class="auth-button">
              <strong>I'm a model</strong>
            </Button>
          </div>

          <div class="option option-two">
            <!-- button -->
            <Button :click="() => registerModel('MODEL_REGISTER_POP', 'studio')" :pill="true" variant="light" class="auth-button">
              <strong>I'm a studio</strong>
            </Button>
          </div>
        </div>

        <!-- bottom section -->
        <div class="auth-form--footer content-spacing d-flex align-items-center justify-content-center">
          <p class="text-center dhac">
            Already have an account?
            <a href="#" @click.prevent="() => showAuthPop('LOGIN_POP')" class="color--white">Login Now</a>
          </p>
        </div>
      </div>
    </template>
  </Modal>
</template>

<script>
import Modal from '@components/common/Modal'
import AuthHeaders from '@components/common/Auth/AuthHeaders'
import Button from '@components/common/Button'
import { mapGetters } from "vuex"


export default{
  name:'ChooseAccountType',
  methods: {
    hideAuthPop(type) {
      this.$store.dispatch('auth_pop_control/ON_SELECT_AUTH', {
        show: false,
        type: ''
      })
    },
    showAuthPop(type, registration_type) {
      this.$store.dispatch('auth_pop_control/ON_SELECT_AUTH', {
        show: true,
        type: type,
        registration_type: registration_type || null
      })
    },
    registerModel(type, reg_type) {
        this.showAuthPop(type, reg_type)
    }
  },
  components:{ Modal, AuthHeaders, Button },
}
</script>
