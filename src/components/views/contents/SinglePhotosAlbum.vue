<template>
  <b-container class="dashboard-container contents" fluid>
    <SinglePhotosAlbum :album="album" size="sm"></SinglePhotosAlbum>
  </b-container>
</template>

<script>
import SinglePhotosAlbum from "@components/partials/contents/SinglePhotosAlbum";

import { mapGetters } from "vuex";
export default {
  components: {
    SinglePhotosAlbum
  },
  data() {
    return {
      showAlbum: false,
      viewAllGallery: false,
      album: {}
    };
  },
  methods: {

  },
  computed: {
    ...mapGetters("app", {
      windowWidth: "GET_WINDOW_WIDTH"
    })
  },
  created() {
    this.album = this.$route.params.album;
  },
  beforeDestroy() {
  }
};
</script>