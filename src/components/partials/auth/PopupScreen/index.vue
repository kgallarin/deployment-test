<template>
  <div class="root">
    <!-- login form + image -->
    <template v-if="isActive('LOGIN_POP')">
      <transition name="fade" mode="out-in" appear>
        <login />
      </transition>
    </template>

    <!-- login form (2) with success flag + image -->
    <template v-if="isActive('LOGIN_POP_SUCCESS')">
      <transition name="fade" mode="out-in" appear>
        <login success-flag />
      </transition>
    </template>

    <!-- Choose account type -> MODEL -->
    <template v-if="isActive('OPTION_TYPE_POP')">
      <transition name="fade" mode="out-in" appear>
        <choose-account-type  />
      </transition>
    </template>

    <!-- Choose account type -> STUDIO -->
    <template v-if="isActive('OPTION_TYPE_POP_STUDIO')">
      <transition name="fade" mode="out-in" appear>
        <choose-account-type-studio  />
      </transition>
    </template>

    <!-- registration model -->
    <template v-if="isActive('MODEL_REGISTER_POP')">
      <transition name="fade" mode="out-in" appear>
        <register />
      </transition>
    </template>

    <!-- registration studio STEPS -->
    <template v-if="isActive('STUDIO_REGISTRATION_STEPS')">
      <transition name="fade" mode="out-in" appear>
        <registration-steps-studio />
      </transition>
    </template>

    <!-- registration model STEPS -->
    <template v-if="isActive('MODEL_REGISTRATION_STEPS')">
      <transition name="fade" mode="out-in" appear>
        <registration-steps-model />
      </transition>
    </template>

  </div>
</template>

<script>
import Login from '@components/partials/auth/Login'

// Choose account type option
import ChooseAccountType from '@components/partials/auth/ChooseAccountType/Model'
import ChooseAccountTypeStudio from '@components/partials/auth/ChooseAccountType/Studio'

// Registration
import Register from '@components/partials/auth/Register'
// Registration steps
import RegistrationStepsModel from '@components/partials/auth/RegistrationSteps/Model'
import RegistrationStepsStudio from '@components/partials/auth/RegistrationSteps/Studio'

import { mapGetters } from "vuex"
import { isTabActive } from '@helpers'

export default{
  name:'AuthPop',
  methods: {
    hideAuthPop(type) {
      this.$store.dispatch('auth_pop_control/SHOW_AUTH_POP', {
        show: false,
        type: type
      })
    },
    isActive(tab_name) {
      // @params isTabActive(tab_name, store active tab)
      // root > helpers > index.js
       return isTabActive(tab_name, this.activeTab)
    }
  },
  computed: {
    ...mapGetters("auth_pop_control", {
      activeTab: "GET_AUTH_TYPE"
    })
  },
  components:{
    Login,
    ChooseAccountType,
    ChooseAccountTypeStudio,
    Register,
    RegistrationStepsModel,
    RegistrationStepsStudio
  },
}
</script>
