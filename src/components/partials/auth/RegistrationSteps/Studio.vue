<template>
  <div class="registration-steps">
    <div class="registration-steps--form-wrapper mx-auto">
      <!-- custom steps form -->
      <!--
        @params next-button-text
        Array button_text[arr_index]
      -->
      <CustomSteps
        finishButtonText="Finish"
        :next-button-text="['almost done','upload documents','complete']"
      >
        <!-- Steps tab starts -->
        <StepsTab title="Provide Personal Details" :before-change="() => validateStep('step1')" :has-close="false">
          <basic-details ref="step1" @on-validated="onStepValidated" :has-header="false" :self-submit="false" />
        </StepsTab>


        <StepsTab v-if="registration_type === 'individual'" title="Provide document details" :before-change="() => validateStep('step2')" :has-close="false">
          <Details ref="step2" @on-validated="onStepValidated" :has-close="false" />
        </StepsTab>

        <StepsTab v-if="registration_type === 'studio'" title="Provide document details" :before-change="() => validateStep('step2')" :has-close="false">
          <BusinessDetails ref="step2" @on-validated="onStepValidated" :has-close="false" />
        </StepsTab>


        <StepsTab title="Provide document details" :before-change="() => validateStep('step3')" :has-close="false">
          <Upload ref="step3" @on-validated="onStepComplete" :has-close="false" />
        </StepsTab>
      </CustomSteps>
    </div>
  </div>
</template>
<script>
import CustomSteps from "@components/common/StepsWizard/Step"
import StepsTab from "@components/common/StepsWizard/StepTab"
import BasicDetails from '@components/common/UserDetails/BasicDetails'

// for individual
import Details from "@components/common/DocumentDetails/Details"
// for business
import BusinessDetails from "@components/common/DocumentDetails/BusinessDetails"
import Upload from "@components/common/DocumentDetails/Upload"
import { mapGetters } from "vuex"

export default {
  name:'RegistrationStepsStudio',
  data() {
    return {
      allModel: {}
    };
  },
  components: {
    CustomSteps,
    StepsTab,
    BasicDetails,
    BusinessDetails,
    Upload,
    Details
  },
  methods: {
    validateStep(ref) {
      return this.$refs[ref].validate();
    },
    // optional if you want to save data in single object called allModel
    onStepValidated(validated, model) {
      this.stepModel = { ...this.stepModel, ...model };
    },
    onStepComplete() {
      this.$store.dispatch('auth_pop_control/ON_SELECT_AUTH', {
        show: true,
        type: 'LOGIN_POP_SUCCESS',
        registration_type: null
      })
    }
  },
  computed: {
    ...mapGetters("auth_pop_control", {
      registration_type: "GET_REGISTRATION_TYPE"
    })
  }
};
</script>
