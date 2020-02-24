<template>
  <div class="">
    <div class="mx-auto">
      <CustomSteps finishButtonText="Finish"  :next-button-text="['upload documents','complete']">
        <StepsTab title="Upload document details" :before-change="() => validateStep('step1')">
            <Details ref="step1" @on-validated="onStepValidated"></Details>
        </StepsTab>
        <StepsTab title="Provide document details" :before-change="() => validateStep('step2')">
          <Upload ref="step2" @on-validated="onStepComplete"></Upload>
        </StepsTab>
      </CustomSteps>
    </div>
  </div>
</template>
<script>
import Upload from "@components/common/DocumentDetails/Upload"
import Details from "@components/common/DocumentDetails/Details"

import CustomSteps from "@components/common/StepsWizard/Step"
import StepsTab from "@components/common/StepsWizard/StepTab"

export default {
  data() {
    return {
      allModel: {}
    };
  },
  components: {
    Upload,
    Details,
    CustomSteps,
    StepsTab
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
      this.$EventBus.$emit('closePop')
    }
  }
};
</script>
