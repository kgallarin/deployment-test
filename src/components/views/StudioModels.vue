<template>
  <b-container class="dashboard-wrapper dashboard-container studio-models" fluid>
    <Tile size="md" :class="{ 'mb-3' : windowWidth <= 767 }">
        <div
          :class="{
            'studio-models-navigation d-flex': true,
            'p-0': windowWidth <= 767
            }">
          <!-- Search bar -->
          <search-bar />


          <!-- hide on mobile -->
          <template v-if="windowWidth > 767">
            <!-- Dropdown -->
            <Dropdown placeholder="All models (14)" customClass="custom-large" />
            <!-- Order dropdown -->
            <Dropdown placeholder="Order by status" customClass="custom-large" />
            <!-- button add model -->
            <Button :click="() => showPop('CREATE_MODEL')" variant="light" class="">
              <span>add new model</span>
            </Button>
          </template>

        </div>
    </Tile>

    <!-- Tiled button for mobile -->
    <Tile size="md" class="mb-3" v-if="windowWidth <= 767">
      <div class="d-flex justify-content-center w-100">
        <Button :click="() => showPop('CREATE_MODEL')" variant="light" class="w-100 btn-full">
          <span>add new model</span>
        </Button>
      </div>
    </Tile>

    <!-- Tiled Dropdown for mobile -->
    <Tile size="md" class="mb-3" v-if="windowWidth <= 767">
        <div class="d-flex jutify-content-between w-100 responsive-navigation">
          <!-- Dropdown -->
          <Dropdown placeholder="All models (14)" customClass="custom-large w-50 mr-3" />
          <!-- Order dropdown -->
          <Dropdown placeholder="Order by status" customClass="custom-large w-50" />
        </div>
    </Tile>

    <div id="scroll-container" class="main-content">

      <template v-for="model in sampleData">
        <Card
          v-if="model.status === 'active'"
          :modelData="model"
          :key="model.id"
        />
        <CardIncomplete v-else :modelData="model" :key="model.id" @clickedDrop="showPop" />
      </template>
    </div>

    <!-- popup(s) container -->
    <Popups @handlePopClose="closePopup" :activated="activePop"  />
  </b-container>
</template>

<script>
import Tile from "@components/common/Tile"
import Input from "@components/common/Input"
import Dropdown from "@components/common/Dropdown"
import Button from "@components/common/Button"
import SearchBar from "@components/common/SearchBar"

import Card from "@components/partials/studio_models/Card"
import CardIncomplete from "@components/partials/studio_models/CardIncomplete"
import Popups from "@components/partials/studio_models/popups"

import { mapGetters } from "vuex"

  export default {
    data() {
      return {
        create_model: false,
        activePop: null
      }
    },
    components: { Tile, Input, Dropdown, Button, Card, SearchBar, CardIncomplete, Popups },
    methods: {
      showPop(popName) {
        this.activePop = popName
      },
      clickedOutside() {
        this.create_model = false
      },
      closePopup(){
        this.activePop = null
      }
    },
    computed: {
      ...mapGetters("models", {
        sampleData: "GET_SAMPLE_DATA"
      }),
      ...mapGetters("app", {
        windowWidth: "GET_WINDOW_WIDTH"
      })
    },
    created() {
      // this.$store.dispatch('models/FETCH_MODEL_DATA')
    }

  }
</script>
