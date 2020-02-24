<template>
  <Tile size="lg" :class="[{ 'mb-3' : windowWidth <= 767 }]" >
    <div class="tile-inner">
      <p class="headers">billing address</p>

      <div class="block mb-0 billing-address">
        <form class="blue-form">
          <div class="d-flex justify-content-between">
            <b-row class="w-100">
              <b-col xl="6" class="">
                <p class="block-ttl text-uppercase color--verylightgray">Name</p>
                <div class="input-container">
                  <Input dark size="lg" placeholder="PETER PARKER" />
                </div>
              </b-col>

              <b-col xl="6" class="">
                <p class="block-ttl text-uppercase color--verylightgray">Country</p>
                <div class="input-container">
                  <Dropdown placeholder="All models (14)" customClass="custom-large dark-text-left w-100" />
                </div>
              </b-col>

              <b-col xl="6" class="">
                <p class="block-ttl text-uppercase color--verylightgray">City</p>
                <div class="input-container">
                  <Input dark size="lg" placeholder="PETER PARKER" />
                </div>
              </b-col>

              <b-col xl="6" class="">
                <p class="block-ttl text-uppercase color--verylightgray">Zip / Postal code</p>
                <div class="input-container">
                  <Input dark size="lg" placeholder="PETER PARKER" />
                </div>
              </b-col>

              <b-col xl="12" class="">
                <p class="block-ttl text-uppercase color--verylightgray">Address</p>
                <div class="input-container">
                  <Input dark size="lg" placeholder="112/223 Some street, midtown" />
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
    data() {
      return {

      }
    },
    components: { Tile, Button, Input, Dropdown },
    methods: { },
    computed: {
      ...mapGetters("app", {
        windowWidth: "GET_WINDOW_WIDTH"
      })
    },
    created() {
      // this.$store.dispatch('models/FETCH_MODEL_DATA')
    }

  }
</script>
