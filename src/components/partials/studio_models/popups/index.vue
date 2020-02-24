<template>
  <Modal v-if="activated !== null" class="modal-forms">
    <template v-slot:content>
      <div class="content-inner" v-click-outside="closePop">

        <!-- form steps -->
        <Category ref="modelCategory" v-if="isPopActive('CREATE_MODEL')" @on-validated="validatedForm" />

        <!-- dropdown popups -->
        <BasicDetails v-if="isPopActive('BASIC_DETAIL')" @closePop="closePop" />
        <PersonalDetails v-if="isPopActive('PERSONAL_DETAIL')" @closePop="closePop" />

        <!-- form steps -->
        <DocumentWizard v-if="isPopActive('DOCUMENT_DETAIL')" />
      </div>
    </template>
  </Modal>
</template>

<script>
import Category from './Create/Category'
// * * * * * *
// Form Steps
// * * * * * *
import DocumentWizard from './DocumentWizard'
// * * * * * *
// dropdown
// * * * * * *
import BasicDetails from '@components/common/UserDetails/BasicDetails'
import PersonalDetails from '@components/common/UserDetails/PersonalDetails'

import Modal from '@components/common/Modal'
  export default {
    props: {
      activated: {
        type: String,
        default: ''
      }
    },
    mounted() { },
    methods: {
      isPopActive(tab_description) {
        return this.activated === tab_description
      },
      closePop(){
        this.$emit('handlePopClose')
      },
      validatedForm(res) {
        this.$EventBus.$emit('closePop')
      }
    },
    components: { Modal, Category, BasicDetails, PersonalDetails, DocumentWizard },
    created() {
      this.$EventBus.$on('closePop',this.closePop)
    },
    beforeDestroy() {
      this.$EventBus.$off('closePop',this.closePop)
    }
  }
</script>
