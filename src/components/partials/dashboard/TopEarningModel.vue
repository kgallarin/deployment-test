<template>
  <Tile class="top-earning-model">
    <div class="header">
      <p class="title text-uppercase">top earning models</p>
      <Dropdown placeholder="All time" customClass="custom-large" />
    </div>

    <div class="top-earning-model-container table-header title">
      Model
      <Dropdown placeholder="Earning" :dropData="dropdownData" />
    </div>

    <div class="wrapper oflow-hidden">
      <div
        class="top-earning-model-container table-content"
        v-for="model in models"
        :key="model.id"
      >
        <div class="d-flex">
          <img
            :src="model.img"
            alt="Cams models user"
            class="main-img rounded-circle mr-3"
            width="43"
            height="43"
          />
          <div class="model-info">
            <span class="bold">{{model.username}}</span>
            <span>{{model.sex}}</span>
          </div>
        </div>
        <span class="bold">{{model.earning}}</span>
      </div>
    </div>
  </Tile>
</template>
<script>
import Tile from "@components/common/Tile";
import Dropdown from "@components/common//Dropdown";

import { mapGetters } from "vuex";

export default {
  components: {
    Tile,
    Dropdown
  },
  data() {
    return {
      dropdownData: [
        { id: 1, description: "Earning" },
        { id: 2, description: "Online hours" },
        { id: 3, description: "Average/hour" }
      ]
    };
  },
  computed: {
    ...mapGetters("models", {
      models: "GET_SAMPLE_DATA_TOP10_MODELS"
    })
  }
};
</script>