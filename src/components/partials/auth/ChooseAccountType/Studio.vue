<template>
  <Modal isAuth flexible class="auth-popup ">
    <template v-slot:content>
      <div class="w-100 choose-account-type choose-account-type--studio">
        <!-- common header component -->
        <auth-headers header-title="Create Studio Account" subs="Pick the one that match your studio type" />

        <div class="option-contents">
          <div class="option option-one">
            <img :src="require('@images/auth/option-individual.jpg')" alt="Individual Candycammers">
            <!-- button -->
            <Button :click="() => registerModel('STUDIO_REGISTRATION_STEPS', 'individual')" :pill="true" variant="light" class="auth-button">
              <strong>Individual</strong>
            </Button>
          </div>

          <div class="option option-two">
            <img :src="require('@images/auth/option-business.jpg')" alt="Studio Candycammers">
            <!-- button -->
            <Button :click="() => registerModel('STUDIO_REGISTRATION_STEPS', 'studio')" :pill="true" variant="light" class="auth-button">
              <strong>Business</strong>
            </Button>
          </div>
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
  name:'ChooseAccountTypeStudio',
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
