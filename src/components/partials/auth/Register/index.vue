<template>
  <Modal :isAuth="true" class="auth-popup">
    <template v-slot:form>
      <div class="auth-popup-form--wrapper">
        <!-- Register form  starts-->
        <register-form v-if="!registerCompleted" @registrationSuccess="onRegisterSuccess" :type="registration_type" />
        <register-success v-else :type="registration_type" />
      </div>
    </template>
    <template v-slot:side-image>
      <div class="auth-popup-image--wrapper">
        <b-img fluid 
          :src="registration_type === 'model' ? require('@images/auth/login_banner.jpg') : require('@images/auth/studio_banner.jpg')" 
          alt="Cams Models Login" 
        />
      </div>
    </template>
  </Modal>
</template>

<script>
import Modal from '@components/common/Modal'
import RegisterForm from './RegisterForm'
import RegisterSuccess from './RegisterSuccess'
import { mapGetters } from "vuex"


export default{
  name:'Register',
  data() {
    return {
      registerCompleted: false,
    }
  },
  methods: {
    hideAuthPop(type) {
      this.$store.dispatch('auth_pop_control/ON_SELECT_AUTH', {
        show: false,
        type: ''
      })
    },
    onRegisterSuccess() {
      this.registerCompleted = true
    }
  },
  computed: {
    ...mapGetters("auth_pop_control", {
      registration_type: "GET_REGISTRATION_TYPE"
    })
  },
  components:{ Modal, RegisterForm, RegisterSuccess }
}
</script>
