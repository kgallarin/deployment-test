<template>
  <div class="tab-content models-report">
    <b-row no-gutters>
      <b-col xl="4" class="default-col">
        <Tile dark>
          <div class="tile-inner d-flex flex-column justify-content-center">
            <p class="header-text mb-0">Model status</p>
            <div class="tile-inner--front w--icon">
              <strong class="text-uppercase">active</strong>
              <svg height="24" width="24">
                <use
                  :xlink:href="require('@svg/sprites/models_info.svg') + '#info'"
                  class="svg-icon"
                />
              </svg>
            </div>
            <CustomSwitch class="mx-auto" />
          </div>
        </Tile>
      </b-col>
      <b-col xl="4" class="default-col">
        <Tile dark>
          <div class="tile-inner d-flex flex-column justify-content-center">
            <p class="header-text mb-0">Stats visibility</p>
            <div class="tile-inner--front">
              <strong class="text-uppercase">not visible</strong>
            </div>
            <CustomSwitch class="mx-auto" />
          </div>
        </Tile>
      </b-col>
      <b-col xl="4" class="default-col">
        <Tile dark>
          <div class="tile-inner d-flex flex-column justify-content-center">
            <p class="header-text mb-0">Change password</p>
            <div class="tile-inner--front">
              <strong class="small">You can send a new password to the Model's email address.</strong>
            </div>
            <a href="#" class="details-link">Send new password</a>
          </div>
        </Tile>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import CustomSwitch from "@components/common/CustomSwitch"
import Tile from "@components/common/Tile"
  export default {
    mounted() { },
    components: { Tile, CustomSwitch }
  }
</script>
