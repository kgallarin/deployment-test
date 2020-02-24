<template>
  <b-row class="offers-list">
    <Offer
      v-for="offer in dataList"
      :key="offer.id"
      :header-text="offer.title"
      :offer-desc="offer.desc"
      :offer-benefit="offer.benefit"
      :bg-image="offer.img"
    />
  </b-row>
</template>

<script>
import Offer from "@components/partials/earn_more/Offer";
  export default {
    props: {
      dataList: {
        type: Array,
        default: () => []
      }
    },
    mounted() {
      console.log('New component mounted.')
    },
    components: { Offer }
  }
</script>
