<template>
  <div class="tab-content models-report">
    <b-row no-gutters>
      <b-col xl="3" class="default-col">
        <Tile dark>
          <div class="tile-inner d-flex flex-column justify-content-center">
            <p class="header-text mb-0">PAYOUT STATUS LEVEL</p>
            <div class="tile-inner--front w--icon">
              <strong>LEVEL 1</strong>
              <svg height="24" width="24">
                <use
                  :xlink:href="require('@svg/sprites/models_info.svg') + '#info'"
                  class="svg-icon"
                />
              </svg>
            </div>
            <p class="sub-text">100 USD left to increase your share by 5%</p>
          </div>
        </Tile>
      </b-col>
      <b-col xl="3" class="default-col">
        <Tile dark>
          <div class="tile-inner d-flex flex-column justify-content-center">
            <p class="header-text mb-0">PAYOUT STATUS LEVEL</p>
            <div class="tile-inner--front">
              <strong>0 H 0 M</strong>
            </div>
            <a href="#" class="details-link">Show more details</a>
          </div>
        </Tile>
      </b-col>
      <b-col xl="3" class="default-col">
        <Tile dark>
          <div class="tile-inner d-flex flex-column justify-content-center">
            <p class="header-text mb-0">LAST PERIOD INCOME</p>
            <div class="tile-inner--front w--icon">
              <strong>$ 0.00</strong>
              <svg height="24" width="24">
                <use
                  :xlink:href="require('@svg/sprites/models_info.svg') + '#info'"
                  class="svg-icon"
                />
              </svg>
            </div>
            <a href="#" class="details-link">Show more details</a>
          </div>
        </Tile>
      </b-col>
      <b-col xl="3" class="default-col">
        <Tile dark>
          <div class="tile-inner d-flex flex-column justify-content-center">
            <p class="header-text mb-0">revenue share</p>
            <div class="tile-inner--front">
              <strong>50%</strong>
              <svg height="24" width="24">
                <use
                  :xlink:href="require('@svg/sprites/models_info.svg') + '#info'"
                  class="svg-icon"
                />
              </svg>
            </div>
            <a href="#" class="details-link">Request new rate</a>
          </div>
        </Tile>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Tile from "@components/common/Tile"
  export default {
    mounted() { },
    components: { Tile }
  }
</script>
