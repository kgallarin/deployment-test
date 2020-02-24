<template>
  <Tile class="d-flex flex-column mt-3 p-4">
    <div class="d-flex justify-content-between">
      <p class="title d-flex m-2">{{title}}</p>
      <Dropdown placeholder="All time" customClass="custom-large fullwidth" />
    </div>
    <div class="d-flex justify-content-center mt-3">
      <SignBoard
        size="md"
        pointer="cursor"
        :class="[activeTab.id === stat.id ? 'active' : '', 'd-flex','flex-column','justify-content-center','align-items-center','pb-2','pt-2 ','ml-2','mr-2']"
        v-for="stat in tabData"
        :key="stat.id"
      >
        <div class="signboard-inner" @click="setActiveTab(stat)">
          <div>
            <svg height="40" width="40" class="m-2">
              <use
                :xlink:href="require('@svg/sprites/overview.svg') + `#${stat.icon_name}`"
                class="svg-icon"
              />
            </svg>
          </div>

          <div>
            <p class="m-1 title">{{stat.value}}</p>
            <p>{{stat.name}}</p>
          </div>
        </div>
      </SignBoard>
    </div>

    <div v-if="activeTab !== null">
      <TotalEarning v-if="isTabActive('total_earning')" />
      <OnlineHours v-if="isTabActive('online_hours')" />
      <AverageHours v-if="isTabActive('average_hours')" />
    </div>

    <div class="d-flex justify-content-center m-2">
      <Button :click="() => ''" :pill="false" variant="dark">
        <strong>FULL EARNING BREAKDOWN</strong>
      </Button>
    </div>
  </Tile>
</template>

<script>
import Button from "@components/common/Button";
import Tile from "@components/common/Tile";
import SignBoard from "@components/common/SignBoard";
import ProgressBar from "@components/common/ProgressBar";
import Dropdown from "@components/common//Dropdown";

import TotalEarning from "@components/partials/dashboard/TotalEarning";
import OnlineHours from "@components/partials/dashboard/OnlineHours";
import AverageHours from "@components/partials/dashboard/AverageHours";

import { mapGetters } from "vuex";

export default {
  components: { Button, Tile, SignBoard, Dropdown, ProgressBar, TotalEarning, OnlineHours, AverageHours},
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    setActiveTab(stat) {
      console.log(stat);
      this.$store.dispatch("overview_stat/ON_CLICK_TAB", {
        tabData: stat
      });
    },
    isTabActive(tab_description) {
      return this.activeTab.desc === tab_description;
    }
  },
  computed: {
    ...mapGetters("overview_stat", {
      activeTab: "GET_ACTIVE_TAB",
      tabData: "GET_TAB_DATA"
    }),
    yourConditionFunction() {
      return {
        total_earning_data: this.activeTab.name === "total_ear" ? true : false
      };
    }
  }
};

</script>
