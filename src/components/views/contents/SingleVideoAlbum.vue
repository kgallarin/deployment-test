<template>
  <b-container class="dashboard-container contents-viewall" fluid>
    <SingleVideoAlbum :album="album" size="sm"></SingleVideoAlbum>
  </b-container>
</template>

<script>
import SingleVideoAlbum from "@components/partials/contents/SingleVideoAlbum";

import { mapGetters } from "vuex";
export default {
  components: {
    SingleVideoAlbum
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
  beforeDestroy() {}
};
</script>