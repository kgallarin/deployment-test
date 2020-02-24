<template>
  <div class="small-profile">
    <!-- Profile image -->
    <b-img
      :blank="false"
      blankColor="#777"
      class="overview-img"
      :src="type=== 'model' ? require('@images/dashboard/model_default.png') : require('@images/dashboard/profile_default.png')"
      fluid
      alt="Model profile image"
    ></b-img>

    <!-- name -->
    <Tile class="name-tile justify-content-center mt-3 mb-3" size="sm">
      <p>JACQUELINE ASONG</p>
    </Tile>

    <!-- For a model -->
    <Tile v-if="type === 'model'" class="follower-tile flex-column text-center mt-3 mb-3 pt-4 pb-4">
      <p class="no-of-followers">16.8k</p>
      <p class="label text-uppercase">FOLLOWER</p>
    </Tile>

    <!-- For a studio -->
    <Tile v-else class="follower-tile flex-column text-center mt-3 mb-3 pt-4 pb-4">
      <p class="no-of-followers">25</p>
      <p class="label text-uppercase">Models</p>

      <p class="no-of-followers">14</p>
      <p class="label text-uppercase">Onlines</p>
    </Tile>
  </div>
</template>

<script>
import Tile from "@components/common/Tile";
export default {
  components: { Tile },
  props: {
    type: {
      type: String,
      default: ''
    }
  }
};
</script>
