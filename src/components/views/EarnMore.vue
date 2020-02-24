<template>
  <b-container class="dashboard-wrapper dashboard-container offers-main" fluid>
    <OffersList :data-list="offers" />
  </b-container>
</template>

<script>
import OffersList from "@components/partials/earn_more/OffersList";
import { mapGetters } from "vuex";
  export default {
    mounted() {
      // console.log('New component mounted.')
    },
    computed: {
      ...mapGetters("earn_more", {
        offers: "GET_OFFERS"
      })
    },
    components: { OffersList }
  }
</script>
