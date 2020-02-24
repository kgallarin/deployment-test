<template>
  <Modal :isAuth="true" class="auth-popup">
    <template v-slot:form>

      <div class="auth-popup-form--wrapper">

        <!-- Login form  starts-->
        <login-form
          headerTitle="Login"
          subHeaderText="Welcome back"
          :successFlag="successFlag"
        />

      </div>
    </template>

    <template v-slot:side-image>

      <div class="auth-popup-image--wrapper">
        <b-img fluid :src="require('@images/auth/login_banner.jpg')" alt="Cams Models Login" />
      </div>

    </template>
  </Modal>
</template>

<script>
import Modal from '@components/common/Modal'
import LoginForm from './LoginForm'
import { mapGetters } from "vuex"


export default{
  name:'Login',
  props: {
    successFlag: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideAuthPop(type) {
      this.$store.dispatch('auth_pop_control/ON_SELECT_AUTH', {
        show: false,
        type: ''
      })
    }
  },
  components:{ Modal, LoginForm },
}
</script>
