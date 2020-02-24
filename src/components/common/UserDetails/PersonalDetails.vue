<template>
  <div class="pop-container">
    <div class="pop-container--header d-flex justify-content-between">
      <p class="title">
        <strong>Provide personal details</strong>
      </p>

      <a href="#" @click="() => { $emit('closePop') }">
        <svg height="24" width="24">
          <use :xlink:href="require('@svg/sprites/common.svg') + '#close-lg'" class="svg-icon close" />
        </svg>
      </a>
    </div>
    <!-- inputs -->
    <div class="pop-container--body">
        <form autocomplete="off" @submit.prevent="" class="main-form pop-details">
            <b-row class="form-inner-full" no-gutters>
             <b-col xl="12" class="form-column">
              <div class="d-flex dcol-form-wrapper">
                <div class="form-group--light d-flex col50">
                 <label for="fname">Age:<span class="color--marigold">*</span></label>
                 <Input
                   id="fname"
                   placeholder="Age"
                   type="number"
                 />
                </div>

                <div class="form-group--light d-flex col50">
                 <label for="fname">Hair length:<span class="color--marigold">*</span></label>
                 <Dropdown placeholder="Male" customClass="custom-large w-100 light"/>
                </div>
              </div>
             </b-col>
             <b-col xl="12" class="form-column">
              <div class="d-flex dcol-form-wrapper">
                <div class="form-group--light d-flex col50">
                 <label for="fname">Hair color:<span class="color--marigold">*</span></label>
                 <Dropdown placeholder="Hair color" customClass="custom-large w-100 light"/>
                </div>

                <div class="form-group--light d-flex col50">
                 <label for="fname">Eye color:<span class="color--marigold">*</span></label>
                 <Dropdown placeholder="Eye color" customClass="custom-large w-100 light"/>
                </div>
              </div>
             </b-col>
             <b-col xl="12" class="form-column">
              <div class="d-flex dcol-form-wrapper">
                <div class="form-group--light d-flex col50">
                 <label for="fname">Build:<span class="color--marigold">*</span></label>
                 <Dropdown placeholder="Build" customClass="custom-large w-100 light"/>
                </div>

                <div class="form-group--light d-flex col50">
                 <label for="fname">Breast size:<span class="color--marigold">*</span></label>
                 <Dropdown placeholder="Breast size" customClass="custom-large w-100 light"/>
                </div>
              </div>
             </b-col>
             <b-col xl="12" class="form-column">
              <div class="d-flex dcol-form-wrapper">
                <div class="form-group--light d-flex col50">
                 <label for="fname">Sexual preference:<span class="color--marigold">*</span></label>
                 <Dropdown placeholder="Build" customClass="custom-large w-100 light"/>
                </div>
              </div>
             </b-col>
           </b-row>
          <!-- button -->
          <Button :click="() => submit()" variant="light" class="submit-button">
            <strong>Submit</strong>
          </Button>
        </form>
    </div>
  </div>
</template>

<script>
import Input from "@components/common/Input"
import Dropdown from "@components/common/Dropdown"
import Button from "@components/common/Button"
  export default {
    name:"BasicDetails",
    data() {
      return {
        activeInput: null
      }
    },
    mounted() { },
    methods: {
      isPopActive(tab_description) {
        return this.activeTab === tab_description
      },
      focusInput(name){
        this.activeInput = name
      },
      blurInput(name){
          this.activeInput = name
          if(this.activeInput === name) {
            this.activeInput = null
          }
      },
      isInputActive(name) {
        return this.activeInput === name
      },
      submit() {
        console.log('form submitted')
      }
    },
    components: { Input, Button, Dropdown }
  }
</script>
