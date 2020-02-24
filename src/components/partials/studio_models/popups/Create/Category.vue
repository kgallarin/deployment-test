<template>
  <div class="pop-container category-form">
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
    <ul class="category-list">
      <template v-for="cat in categories">
        <li :class="[ {'category-list--li' : true}, {'active' : selected && selected.id === cat.id} ]" :key="cat.id">
          <div class="category-list--li-inner">
            <a href="#"
              @click.prevent.stop="selectCategory(cat)"
            >
              <div class="category-list--inner">
                <p class="title">
                  {{ cat.title }}
                </p>
                <p class="desc">
                  {{ cat.desc }}
                </p>

                <!-- dropdown(s) -->
                <div class="dropdown-container">
                  <template v-for="dropdown in cat.dropdown">
                    <Dropdown placeholder="All models (14)" customClass="custom-large dark-text-left w-100" :key="dropdown.id" />
                  </template>
                </div>
              </div>
            </a>
          </div>
        </li>
      </template>
    </ul>

    <div class="email-section">
      <ValidationObserver ref="categoryForm">
        <form autocomplete="off" class="main-form" @submit.prevent="validate">
          <div class="form-inner">
            <!-- email address field with validation -->
              <ValidationProvider
                name="emailCat"
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
                      { 'form-group d-flex': true },
                      { 'active': isInputActive('email-fg') }
                    ]"
                  >
                    <label class="form-label" for="email">Email Address:</label>
                    <div class="d-flex w-100">
                      <Input
                        id="emailCat"
                        :value.sync="dummyData.emailCat"
                        placeholder="email@domain.com"
                        :inputFocus="() => focusInput('email-fg')"
                        :inputBlur="() => blurInput('email-fg')"
                      />
                      <Button variant="iconLink" id="email-tt" icon_url="models_info.svg#info" iconH="24" iconW="24" />
                      <b-tooltip target="email-tt" trigger="hover" custom-class="dark-tooltip no-arrow">
                        Lorem ipsum dolor sit amet for email tooltip
                      </b-tooltip>
                    </div>
                  </div>
                  <!-- validation -->
                  <div class="validation-notifs">
                    <div class="error" v-show="failed">Email is not valid</div>
                  </div>

                  <!-- validation ends-->
                </div>
              </ValidationProvider>


              <!-- accept terms -->
              <div class="terms-content d-flex">
                <b-form-checkbox
                  id="stats"
                  class="d-flex models-chk align-items-center pink-cb"
                  v-model="dummyData.stats"
                  name="asdasdf"
                >
                  <span class="text-uppercase">
                    Enable statistics
                  </span>
                </b-form-checkbox>
                <Button variant="iconLink" id="stat-tt" icon_url="models_info.svg#info" iconH="24" iconW="24" />
                <b-tooltip target="stat-tt" trigger="hover" custom-class="dark-tooltip no-arrow">
                  Lorem ipsum dolor sit amet for stat tooltip
                </b-tooltip>
              </div>
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
import { mapGetters } from "vuex"

import Dropdown from "@components/common/Dropdown"
import Input from "@components/common/Input"
import Button from "@components/common/Button"

// vee validate
import { extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";
import { ValidationObserver, ValidationProvider } from "vee-validate";

  export default {
    name:"Category",
    data() {
      return {
        activeInput: null,
        status: false,

        dummyData: {
          emailCat: null,
          stats: null
        }
      }
    },
    methods: {
      selectCategory(category) {
        console.log(category) // data
        this.$store.commit('create_model/SET_CATEGORY_DATA', category)
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
        return this.$refs.categoryForm.validate().then(res => {
          if (!res || this.selected === null) {
            return;
          }
          console.log(res)
          this.$emit("on-validated", res);
          return res;
        });
      }
    },
    computed: {
      ...mapGetters("create_model", {
        categories: "GET_CATEGORY_DATA",
        selected: "GET_SELECTED_DATA",
      })
    },
    components: { Dropdown, Input, ValidationObserver, ValidationProvider, Button }
  }
</script>
