<template>
  <div class="tab-content model-stat-info">
    <b-row no-gutters>
      <b-col xl="6" class="default-col">
        <Tile dark>
          <div class="tile-inner d-flex flex-column justify-content-center">
            <div class="tile-inner--front">
              <svg height="32" width="32">
                <use
                  :xlink:href="require('@svg/sprites/models_info.svg') + '#unrated'"
                  class="svg-icon ico-unrated"
                />
              </svg>
              <strong>NOT RATED</strong>
            </div>
            <p class="sub-text">Audio quality</p>
          </div>
        </Tile>
      </b-col>
      <b-col xl="6" class="default-col">
        <Tile dark>
          <div class="tile-inner d-flex flex-column justify-content-center">
            <div class="tile-inner--front">
              <svg height="32" width="32">
                <use
                  :xlink:href="require('@svg/sprites/models_info.svg') + '#unrated'"
                  class="svg-icon ico-unrated"
                />
              </svg>
              <strong>NOT RATED</strong>
            </div>
            <p class="sub-text">Audio quality</p>
          </div>
        </Tile>
      </b-col>

      <!-- three col -->
      <b-col xl="4" class="default-col">
        <Tile dark>
          <div class="tile-inner d-flex flex-column justify-content-center">
            <div class="tile-inner--front">
              <strong>pending</strong>
            </div>
            <p class="sub-text">protection</p>
          </div>
        </Tile>
      </b-col>
      <b-col xl="4" class="default-col">
        <Tile dark>
          <div class="tile-inner d-flex flex-column justify-content-center">
            <div class="tile-inner--front">
              <strong>no</strong>
            </div>
            <p class="sub-text">Candycams selected</p>
          </div>
        </Tile>
      </b-col>
      <b-col xl="4" class="default-col">
        <Tile dark>
          <div class="tile-inner d-flex flex-column justify-content-center">
            <div class="tile-inner--front">
              <strong>nothing</strong>
            </div>
            <p class="sub-text">Santions</p>
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
