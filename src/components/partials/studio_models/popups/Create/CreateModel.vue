<template>
  <div class="pop-container">
    <!-- tab header -->
     <div class="steps--header d-flex justify-content-between ">
       <p class="title">
         <strong>Create model</strong>
       </p>

       <a href="#" @click="() => { this.$EventBus.$emit('closePop') }">
         <svg height="24" width="24">
           <use :xlink:href="require('@svg/sprites/common.svg') + '#close-lg'" class="svg-icon close" />
         </svg>
       </a>
     </div>
    <!-- inputs -->
    <div class="pop-container--body">
      <ValidationObserver ref="form">
        <form autocomplete="off" class="main-form" @submit.prevent="validate">
          <div class="form-inner">
            <!-- email address field with validation -->
              <ValidationProvider
                name="email"
                rules="email|required"
                v-slot="{ failed, errors }"

              >
                <div
                  :class="[
                    { 'mb-0 has-err': failed },
                    { 'flex flex-column': true },
                  ]"
                >
                  <div
                  :class="[
                      { 'mb-0': failed },
                      { 'active form-group d-flex': true },
                      { 'active': isInputActive('email-fg') }
                    ]"
                  >
                    <label class="form-label" for="email">Email Address:</label>
                    <Input
                      id="email"
                      value="email@domain.com"
                      disabled
                      placeholder="email@domain.com"
                      :inputFocus="() => focusInput('email-fg')"
                      :inputBlur="() => blurInput('email-fg')"
                      class="wo-tip"
                    />
                  </div>
                  <!-- validation -->
                  <div class="validation-notifs">
                    <div class="error" v-show="failed">Email is not valid</div>
                  </div>

                  <!-- validation ends-->
                </div>
              </ValidationProvider>


              <!-- password field with validation -->
              <ValidationProvider
                name="password"
                rules="required"
                v-slot="{ failed }"
              >
                <div
                  :class="[
                    { 'mb-0 has-err': failed },
                    { 'flex flex-column': true },
                  ]"
                >
                  <div
                  :class="[
                      { 'mb-0': failed },
                      { 'form-group d-flex': true },
                      { 'active': isInputActive('password-fg') }
                    ]"
                  >
                    <label class="form-label" for="password">Password:</label>
                    <div class="d-flex w-100">
                      <Input
                        id="email"
                        type="password"
                        :value.sync="dummyData.password"
                        placeholder="Enter your password here"
                        :inputFocus="() => focusInput('password-fg')"
                        :inputBlur="() => blurInput('password-fg')"
                      />
                      <Button variant="iconLink" icon_url="models_info.svg#info" iconH="24" iconW="24" />
                    </div>
                  </div>

                  <div class="validation-notifs">
                    <div class="error" v-show="failed">Password is required</div>
                  </div>
                </div>
              </ValidationProvider>

              <!-- password field with validation -->
              <ValidationProvider
                name="screen_name"
                rules="required"
                v-slot="{ failed }"
              >
                <div
                  :class="[
                    { 'mb-0 has-err': failed },
                    { 'flex flex-column': true },
                  ]"
                >
                  <div
                  :class="[
                      { 'mb-0': failed },
                      { 'form-group d-flex': true },
                      { 'active': isInputActive('screen-name') }
                    ]"
                  >
                    <label class="form-label" for="screen_name">Screen name:</label>
                    <div class="d-flex w-100">
                      <Input
                        id="screen_name"
                        type="text"
                        :value.sync="dummyData.screen_name"
                        placeholder="Enter your password here"
                        :inputFocus="() => focusInput('screen-name')"
                        :inputBlur="() => blurInput('screen-name')"
                      />
                      <Button variant="iconLink" icon_url="models_info.svg#info" iconH="24" iconW="24" />
                    </div>
                  </div>

                  <div class="validation-notifs">
                    <div class="error" v-show="failed">Screen name is required</div>
                  </div>
                </div>
              </ValidationProvider>
              <ValidationProvider
                name="terms"
                rules="required"
                v-slot="{ failed }"
              >
              <!-- accept terms -->
              <div class="terms-content">
                <b-form-checkbox
                  id="terms"
                  class="d-flex models-chk align-items-center pink-cb"
                  v-model="dummyData.terms"
                  name="checkbox-1"
                >
                  <span class="text-uppercase">
                    I accept the
                      <a href="#" class="color--marigold">Services Agreement, Sensitive Data</a>
                      and
                      <a href="#" class="color--marigold">Cookie</a>
                    policies for Models/Studios.
                  </span>
                </b-form-checkbox>
              </div>


              <!-- validation -->
              <div class="validation-notifs terms-vv">
                <div class="error" v-show="failed">Please read the terms policies</div>
              </div>
            </ValidationProvider>
          </div>
          <!-- button -->
          <Button type="submit" variant="light" class="submit-button">
            <strong>Submit</strong>
          </Button>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import Input from "@components/common/Input"
import Button from "@components/common/Button"

// vee validate
import { extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";
import { ValidationObserver, ValidationProvider } from "vee-validate";

extend("required", required);
extend("email", email);

  export default {
    name:"CreateModelPop",
    data() {
      return {
        activeInput: null,
        status: false,

        dummyData: {
          email: null,
          password: null,
          screen_name:null,
          terms: null
        }
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
        this.$refs.form.validate().then(res => {
          if (!res) {
            return;
          }
          this.$emit("on-validated", res);
          console.log(res)
          return res;
        });
      }
    },
    components: { Input, Button, ValidationObserver, ValidationProvider },
    watch: {
      dummyData: {
        handler(newVal, oldVal) {
          if(!newVal.terms) {
            this.dummyData.terms = null
          }
        },
        deep: true
      }
    }
  }
</script>
