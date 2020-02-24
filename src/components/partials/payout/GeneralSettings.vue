<template>
  <Tile size="lg" :class="[{ 'mb-3' : windowWidth <= 767 }]" >
    <div class="tile-inner">
      <p class="headers">billing address</p>

      <div class="block mb-0 billing-address">
        <form class="blue-form">
          <div class="d-flex justify-content-between">
            <b-row class="w-100">
              <b-col xl="12">
                <p class="block-ttl text-uppercase color--verylightgray">Currency</p>
                <div class="input-container">
                  <Dropdown placeholder="All models (14)" customClass="custom-large dark-text-left w-100" />
                </div>
              </b-col>
              <b-col xl="12">
                <div class="d-flex align-items-center justify-content-between">
                  <p class="block-ttl text-uppercase color--verylightgray">Payout type</p>
                  <svg id="ptype" height="15" width="15" class="cursor-pointer">
                    <use :xlink:href="require('@svg/sprites/common.svg') + '#info-sm'" class="svg-icon" />
                  </svg>
                  <b-tooltip target="ptype" trigger="hover" custom-class="black-tooltip no-arrow tooltip-payout">
                    <p>
                      If you would prefer a faster payout, you can Withdraw your most recent payout any time before the Normal payout date,
                      or you can set your payout type to Normal Payout in order to have your funds sent as soon as the period is closed.
                      Please note that a payment period is always closed 3 business days after the calendar end of the period.
                    </p>
                  </b-tooltip>
                </div>
                <div class="input-container">
                  <Dropdown placeholder="All models (14)" customClass="custom-large dark-text-left w-100" />
                </div>
              </b-col>
              <b-col xl="12">
                <div class="d-flex align-items-center justify-content-between">
                  <p class="block-ttl text-uppercase color--verylightgray">Payout limit</p>
                  <svg height="15" width="15" id="plimit" class="cursor-pointer">
                    <use :xlink:href="require('@svg/sprites/common.svg') + '#info-sm'" class="svg-icon" />
                  </svg>
                  <b-tooltip target="plimit" trigger="hover" custom-class="black-tooltip no-arrow tooltip-payout">
                    <p>
                      The Payout Limit is the amount of earnings you must reach before getting paid.
                      Normally, you are advised to choose the lowest payout limit ($100) to ensure that you will get paid more frequently.
                    </p>
                  </b-tooltip>
                </div>
                <div class="input-container">
                  <Dropdown placeholder="All models (14)" customClass="custom-large dark-text-left w-100" />
                </div>
              </b-col>
            </b-row>
          </div>
        </form>
      </div>
    </div>
  </Tile>
</template>

<script>
import Tile from "@components/common/Tile"
import Button from "@components/common/Button"
import Input from "@components/common/Input"
import Dropdown from "@components/common/Dropdown"

import { mapGetters } from "vuex"

  export default {
    mounted() {
    },
    components: {
      Tile,
      Input,
      Dropdown
    },
    computed: {
      ...mapGetters("app", {
        windowWidth: "GET_WINDOW_WIDTH"
      })
    }
  }
</script>

<style lang="scss">

</style>
