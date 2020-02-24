<template>
  <div class="pop-container">
    <!-- inputs -->
    <div class="pop-container--body">
      <ValidationObserver ref="documentDetails">
        <form autocomplete="off" @submit.prevent="validate" class="main-form lg-label pop-details">
            <b-row class="form-inner-full" no-gutters>
              <!-- id type -->
             <b-col xl="12" class="form-column">
               <ValidationProvider
                 name="id_type"
                 rules="required"
                 v-slot="{ failed, errors }"
                >
                 <div
                   :class="[
                     { 'mb-0 has-err': failed },
                     { 'flex flex-column': true },
                   ]"
                  >
                  <div class="form-group--light d-flex">
                    <label for="id_type">ID Type:<span class="color--marigold">*</span></label>
                    <Dropdown
                      id="id_type"
                      v-model="id_type"
                      :placeholder="id_type !== null ? id_type : 'Type'"
                      :dropData="type"
                      :click="(data) => id_type = data.description"
                      customClass="custom-large w-100 light"
                    />
                  </div>
                 </div>
               </ValidationProvider>
             </b-col>

             <b-col xl="12" class="form-column">
              <ValidationProvider
                name="id_number"
                rules="required"
                v-slot="{ failed, errors }"
               >
                <div
                  :class="[
                    { 'mb-0 has-err': failed },
                    { 'flex flex-column': true },
                  ]"
                 >
                 <div class="form-group--light d-flex">
                  <label for="id_number">ID Number:<span class="color--marigold">*</span></label>
                  <Input
                    id="id_number"
                    :value.sync="id_number"
                    type="text"
                    placeholder="Enter your ID here"
                  />
                 </div>
                </div>
              </ValidationProvider>
             </b-col>

             <!-- DOB -->
             <b-col xl="12" class="form-column">
               <div class="form-group--light d-flex">
                <label for="fname">ID Expiration date:<span class="color--marigold">*</span></label>
                <ValidationProvider class="position-relative d-block d-block w-100" name="month" :rules="hasNoExpiry" v-slot="{ errors, failed }">
                   <div
                       :class="[
                           { 'has-err': failed },
                           { 'has-disabled': activeInput },
                           { 'active': month  !== '' },
                           { 'form-group--light d-flex': true }
                       ]"
                   >
                      <Dropdown
                       :placeholder="month !== '' && !activeInput ? month : 'Month'"
                       customClass="custom-large w-100 light"
                       v-model="month"
                       :click="(data) => activeInput === true ? month = '' : month = data.description"
                       :drop-data="month_option"
                      />
                   </div>
                </ValidationProvider>

                <ValidationProvider class="position-relative d-block d-block w-100" name="day" :rules="hasNoExpiry" v-slot="{ errors, failed }">
                   <div
                       :class="[
                           { 'has-err': failed },
                           { 'has-disabled': activeInput },
                           { 'active': day  !== '' },
                           { 'form-group--light d-flex': true }
                       ]"
                    >
                      <Dropdown
                       :placeholder="day !== '' && !activeInput ? day : 'Day'"
                       customClass="custom-large w-100 light"
                       v-model="day"
                       :click="(data) => day = data.description"
                       :drop-data="day_option"
                      />
                   </div>
                </ValidationProvider>

                <ValidationProvider class="position-relative d-block d-block w-100" name="year" :rules="hasNoExpiry" v-slot="{ errors, failed }">
                   <div
                       :class="[
                           { 'has-err': failed },
                           { 'has-disabled': activeInput },
                           { 'active': year  !== '' },
                           { 'form-group--light d-flex': true }
                       ]"
                    >
                      <Dropdown
                       :placeholder="year !== '' && !activeInput ? year : 'Year'"
                       customClass="custom-large w-100 light"
                       v-model="year"
                       :click="(data) => year = data.description"
                       :drop-data="year_option"
                      />
                   </div>
                </ValidationProvider>

               </div>
             </b-col>

             <b-col xl="12" class="form-column">
               <b-form-checkbox
                 id="terms"
                 class="d-flex models-chk align-items-center pink-cb"
                 v-model="activeInput"
                 name="checkbox-1"
               >
                 <span class="text-uppercase font-smallest">
                  My ID doesn’t have an expiry date
                 </span>
               </b-form-checkbox>
             </b-col>
           </b-row>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import Input from "@components/common/Input"
import Button from "@components/common/Button"
import Dropdown from "@components/common/Dropdown"


// vee validate
import { extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";
import { ValidationObserver, ValidationProvider } from "vee-validate";

extend("required", required);
extend("email", email);

  export default {
    name:"Details",
    data() {
      return {
        activeInput: false,
        id_type: null,
        id_number: null,

        type: [
          { id: 0, description: 'Type 1' },
          { id: 1, description: 'Type 2' },
          { id: 2, description: 'Type 3' }
        ],
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
      validate() {
        return this.$refs.documentDetails.validate().then(res => {
          this.$emit("on-validated", res);
          return res;
        });
      }
    },
    computed: {
      hasNoExpiry() {
         if(this.activeInput === true) {
           return {required: false}
         }else {
           return {required: true}
         }

      }
    },
    components: { Input, Button, ValidationObserver, ValidationProvider, Dropdown }
  }
</script>
