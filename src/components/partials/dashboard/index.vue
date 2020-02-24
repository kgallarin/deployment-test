<template>
  <b-container class="dashboard-container overview" fluid>
    <div class="w-100 main-section section1">
      <SmallProfile type="model" />
    </div>

    <div class="w-100 overview-info">
      <div class="w-100 main-section section2">
        <!-- Notification tile-->
        <Notification
          title="Account Status : Pending"
          message="Your account has been pending you will be able to go online after your document get confirm"
          icon="info"
          type="warning"
        >
        </Notification>

        <!-- Greeting tile-->
        <Tile class="mt-3 p-3 hide-on-mobile">
          <div class="d-flex mr-auto flex-column justify-content-start ml-3 mt-2">
            <p class="title title-pale">WELCOME BACK JACQUELINE ASONG</p>
            <p>Are you really to take your fan to heaven?</p>
          </div>
          <div class="d-flex p-3 align-items-end">
             <Button :click="() => ''" :pill="false" variant="light">
              <strong>Go Online Now</strong>
            </Button>
          </div>
        </Tile>

        <!-- Period Statistic -->
        <PeriodStatistics title="PERIOD STATISTICS"/>
      </div>

      <div class="w-100 main-section section3">
        <!-- Promotion Period Countdown -->
        <PromotionPeriodCountdown />

        <!-- Request Payout -->
        <RequestPayout />

        <!-- News and Updated -->
        <NewsAndUpdate />
      </div>
    </div>
  </b-container>
</template>
<script>
import Button from "@components/common/Button";
import Tile from "@components/common/Tile";
import SignBoard from "@components/common/SignBoard";
import Dropdown from "@components/common//Dropdown";
import ProgressBar from "@components/common/ProgressBar";

//Dashboard components
import RequestPayout from "@components/partials/dashboard/RequestPayout";
import NewsAndUpdate from "@components/partials/news/NewsAndUpdate";
import PromotionPeriodCountdown from "@components/partials/dashboard/PromotionPeriodCountdown";
import PeriodStatistics from "@components/partials/dashboard/PeriodStatistics";
import Notification from "@components/partials/dashboard/Notification";
import SmallProfile from "@components/partials/dashboard/SmallProfile";

import TopEarningModel from "@components/partials/dashboard/TopEarningModel";

import { mapGetters } from "vuex";

export default {
  components: {
    Button,
    Tile,
    SignBoard,
    Dropdown,
    ProgressBar,
    NewsAndUpdate,
    RequestPayout,
    PromotionPeriodCountdown,
    PeriodStatistics,
    Notification,
    SmallProfile,
    TopEarningModel
  },
  data() {
    return {
      studio_name: "This Logo Studio",
      no_of_follower: "16.8k",
      greeting: "Welcome back"
    };
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
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>
