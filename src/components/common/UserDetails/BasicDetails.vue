<template>
  <div class="pop-container">
    <div v-if="hasHeader" class="pop-container--header d-flex justify-content-between">
      <p class="title">
        <strong>Provide personal details</strong>
      </p>

      <a href="#" v-if="hasClose" @click="() => { $emit('closePop') }">
        <svg height="24" width="24">
          <use :xlink:href="require('@svg/sprites/common.svg') + '#close-lg'" class="svg-icon close" />
        </svg>
      </a>
    </div>
    <!-- inputs -->
    <ValidationObserver ref="basicDetails">
      <div class="pop-container--body">
        <form autocomplete="off" @submit.prevent="validate" class="main-form pop-details" name="basicDetails">
            <b-row class="form-inner-full" no-gutters>
             <b-col xl="12" class="form-column">
              <div class="form-group--light d-flex">
                <label for="fname">Full name:<span class="color--marigold">*</span></label>

                <!-- First name -->
                <ValidationProvider class="position-relative d-block d-block w-100" name="firstname" rules="required" v-slot="{ errors, failed }">
                   <div
                       :class="[
                           { 'has-err': failed },
                           { 'active': firstname  !== '' },
                           { 'input-wrapper': true }
                       ]"
                   >
                       <Input
                         id="fname"
                         placeholder="Name"
                         :value.sync="firstname"
                       />
                   </div>
                </ValidationProvider>

                <!-- Last name  -->
                <ValidationProvider class="position-relative d-block d-block w-100" name="lastname" rules="required" v-slot="{ errors, failed }">
                   <div
                       :class="[
                           { 'has-err': failed },
                           { 'active': lastname  !== '' },
                           { 'input-wrapper': true }
                       ]"
                   >
                       <Input
                         id="lastname"
                         placeholder="Lastname"
                         :value.sync="lastname"
                         class="d-nolabel"
                       />
                   </div>
                </ValidationProvider>
              </div>
             </b-col>

             <!-- DOB -->
             <b-col xl="12" class="form-column">
               <div class="form-group--light d-flex">
                <label for="fname">Date of birth:<span class="color--marigold">*</span></label>
                <ValidationProvider class="position-relative d-block d-block w-100" name="month" rules="required" v-slot="{ errors, failed }">
                   <div
                       :class="[
                           { 'has-err': failed },
                           { 'active': month  !== '' },
                           { 'form-group--light d-flex': true }
                       ]"
                   >
                      <Dropdown
                       :placeholder="month !== '' ? month : 'Month'"
                       customClass="custom-large w-100 light"
                       v-model="month"
                       :click="(data) => month = data.description"
                       :drop-data="month_option"
                      />
                   </div>
                </ValidationProvider>

                <ValidationProvider class="position-relative d-block d-block w-100" name="day" rules="required" v-slot="{ errors, failed }">
                   <div
                       :class="[
                           { 'has-err': failed },
                           { 'active': day  !== '' },
                           { 'form-group--light d-flex': true }
                       ]"
                    >
                      <Dropdown
                       :placeholder="day !== '' ? day : 'Day'"
                       customClass="custom-large w-100 light"
                       v-model="day"
                       :click="(data) => day = data.description"
                       :drop-data="day_option"
                      />
                   </div>
                </ValidationProvider>

                <ValidationProvider class="position-relative d-block d-block w-100" name="year" rules="required" v-slot="{ errors, failed }">
                   <div
                       :class="[
                           { 'has-err': failed },
                           { 'active': year  !== '' },
                           { 'form-group--light d-flex': true }
                       ]"
                    >
                      <Dropdown
                       :placeholder="year !== '' ? year : 'Year'"
                       customClass="custom-large w-100 light"
                       v-model="year"
                       :click="(data) => year = data.description"
                       :drop-data="year_option"
                      />
                   </div>
                </ValidationProvider>

               </div>
             </b-col>

             <!-- Gender -->
             <b-col xl="12" class="form-column">
              <ValidationProvider class="position-relative d-block d-block w-100" name="gender" rules="required" v-slot="{ errors, failed }">
                 <div
                     :class="[
                         { 'has-err': failed },
                         { 'active': gender  !== '' },
                         { 'form-group--light d-flex': true }
                     ]"
                 >
                    <label for="fname">Gender:<span class="color--marigold">*</span></label>
                    <Dropdown
                     :placeholder="gender !== '' ? gender : 'Gender'"
                     customClass="custom-large w-100 light"
                     v-model="gender"
                     :click="(data) => gender = data.description"
                     :drop-data="gender_option"
                    />
                 </div>
              </ValidationProvider>
             </b-col>

             <!-- Country -->
             <b-col xl="12" class="form-column">


              <ValidationProvider class="position-relative d-block d-block w-100" name="country" rules="required" v-slot="{ errors, failed }">
                 <div
                     :class="[
                         { 'has-err': failed },
                         { 'active': country  !== '' },
                         { 'form-group--light d-flex': true }
                     ]"
                 >
                   <label for="country">Country:<span class="color--marigold">*</span></label>
                   <Dropdown
                    name="country"
                    :placeholder="country !== '' ? country : 'Select country'"
                    customClass="custom-large w-100 light"
                    v-model="country"
                    :click="(data) => country = data.description"
                    :drop-data="country_option"
                   />
                 </div>
              </ValidationProvider>
             </b-col>

             <!-- Nationality -->
             <b-col xl="12" class="form-column">
               <ValidationProvider class="position-relative d-block d-block w-100" name="nationality" rules="required" v-slot="{ errors, failed }">
                  <div
                      :class="[
                          { 'has-err': failed },
                          { 'active': nationality  !== '' },
                          { 'form-group--light d-flex': true }
                      ]"
                  >
                  <label for="nationality">Nationality:<span class="color--marigold">*</span></label>
                  <Dropdown
                    name="nationality"
                    :placeholder="nationality !== '' ? nationality : 'Nationality'"
                    customClass="custom-large w-100 light"
                    v-model="nationality"
                    :click="(data) => nationality = data.description"
                    :drop-data="nationality_option"
                  />
                  </div>
               </ValidationProvider>
             </b-col>

            <!-- Ethnicity -->
             <b-col xl="12" class="form-column">

               <ValidationProvider class="position-relative d-block d-block w-100" name="ethnicity" rules="required" v-slot="{ errors, failed }">
                  <div
                      :class="[
                          { 'has-err': failed },
                          { 'active': ethnicity  !== '' },
                          { 'form-group--light d-flex': true }
                      ]"
                  >
                  <label for="ethnicity">Ethnicity:<span class="color--marigold">*</span></label>
                  <Dropdown
                   name="ethnicity"
                   :placeholder="ethnicity !== '' ? ethnicity : 'Choose your ethnicity'"
                   customClass="custom-large w-100 light"
                   v-model="ethnicity"
                   :click="(data) => ethnicity = data.description"
                   :drop-data="ethnicity_option"
                  />
                  </div>
               </ValidationProvider>
             </b-col>

           </b-row>
          <!-- button -->
          <Button v-if="selfSubmit" type="submit" variant="light" class="submit-button">
            <strong>Submit</strong>
          </Button>
        </form>
      </div>
    </ValidationObserver>
  </div>
</template>

<script>
import Input from "@components/common/Input"
import Dropdown from "@components/common/Dropdown"
import Button from "@components/common/Button"

import { ValidationProvider, ValidationObserver, extend } from "vee-validate/dist/vee-validate.full"
import { required, email, min } from "vee-validate/dist/rules";

  export default {
    name:"CreateModelPop",
    props: {
      hasHeader: {
        type: Boolean,
        default: true
      },
      selfSubmit: {
        type: Boolean,
        default: true
      },
      hasClose: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        activeInput: null,
        firstname: '',
        lastname: '',
        gender:'',
        country: '',
        nationality: '',
        ethnicity:'',
        month:'',
        day:'',
        year:'',

        gender_option: [
          { id: 0, description: 'Male' },
          { id: 1, description: 'Female' }
        ],
        country_option: [
          { id: 0, description: 'Thailand' },
          { id: 1, description: 'Spain' },
          { id: 2, description: 'Vietnam' }
        ],
        nationality_option: [
          { id: 0, description: 'Thai' },
          { id: 1, description: 'Spanish' },
          { id: 2, description: 'Vietnamese' }
        ],
        ethnicity_option: [
          { id: 0, description: 'Asian' },
          { id: 1, description: 'White' },
          { id: 2, description: 'Ebony' }
        ],
        month_option: [
          { id: 0, description: 'January' },
          { id: 1, description: 'February' },
          { id: 2, description: 'March' },
          { id: 3, description: 'April' },
          { id: 4, description: 'May' },
          { id: 5, description: 'June' },
          { id: 6, description: 'July' },
          { id: 7, description: 'August' },
          { id: 8, description: 'September' },
          { id: 9, description: 'October' },
          { id: 10, description: 'November' },
          { id: 11, description: 'December' }
        ],
        day_option: [
          { id: 0, description: '1' },
          { id: 1, description: '2' },
          { id: 2, description: '3' },
          { id: 3, description: '4' },
          { id: 4, description: '5' },
          { id: 5, description: '6' },
          { id: 6, description: '7' },
          { id: 7, description: '8' },
          { id: 8, description: '9' },
          { id: 9, description: '10' },
          { id: 10, description: '11' },
          { id: 11, description: '12' }
        ],
        year_option: [
          { id: 0, description: '1991' },
          { id: 1, description: '1992' },
          { id: 2, description: '1993' },
          { id: 3, description: '1994' },
          { id: 4, description: '1995' },
          { id: 5, description: '1996' },
          { id: 6, description: '1997' },
          { id: 7, description: '1998' },
          { id: 8, description: '1999' },
          { id: 9, description: '1990' },
          { id: 10, description: '1791' },
          { id: 11, description: '1891' }
        ]



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
      },
      validate() {
          if(this.selfSubmit) {
            // self submission get data
          }else {
            return this.$refs.basicDetails.validate().then(res => {
              this.$emit("on-validated", res);
              return res;
            });
          }
      }
    },
    components: { Input, Button, Dropdown, ValidationObserver, ValidationProvider }
  }
</script>
