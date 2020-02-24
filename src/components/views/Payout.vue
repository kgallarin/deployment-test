<template>
  <b-container class="dashboard-wrapper dashboard-container payout" fluid>
    <div class="payout--inner">
      <b-row class="md-gutter">
        <b-col class="w-100 md-gutter request-payout">
          <RequestPayout />
        </b-col>
        <b-col class="w-100 md-gutter billing-address">
            <BillingAddress />
        </b-col>
        <b-col class="w-100 md-gutter general-settings">
          <GeneralSettings />
        </b-col>
      </b-row>

      <!-- Payout history -->
      <b-row>
        <b-col xl="12" class="w-100 payout-history">
          <PayoutHistory />
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import Tile from "@components/common/Tile"
import RequestPayout from "@components/partials/payout/RequestPayout"
import BillingAddress from "@components/partials/payout/BillingAddress"
import GeneralSettings from "@components/partials/payout/GeneralSettings"
import PayoutHistory from "@components/partials/payout/PayoutHistory"

import { mapGetters } from "vuex"

  export default {
    data() {
      return {

      }
    },
    components: { BillingAddress, Tile, RequestPayout, GeneralSettings, PayoutHistory },
    methods: { },
    computed: {
      ...mapGetters("app", {
        windowWidth: "GET_WINDOW_WIDTH"
      })
    }

  }
</script>
