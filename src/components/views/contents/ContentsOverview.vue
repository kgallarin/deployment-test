<template>
  <b-container class="dashboard-container contents" fluid>
    <PhotoGallery :maxShow="windowWidth > 781 ? 7 : 1" key="1" v-if="viewPhotos" class="w-100 mr-3"></PhotoGallery>
    <VideoGallery :maxShow="windowWidth > 781 ? 7 : 1" key="2" v-if="viewVideos" class="w-100"></VideoGallery>
  </b-container>
</template>
<script>
import Tile from "@components/common/Tile";
import Button from "@components/common/Button";
import Gallery from "@components/partials/profile/Gallery";

import PhotoGallery from "@components/partials/contents/PhotoGallery";
import VideoGallery from "@components/partials/contents/VideoGallery";

import { mapGetters } from "vuex";

export default {
  components: {
    Button,
    Tile,
    Gallery,
    PhotoGallery,
    VideoGallery
  },
  data() {
    return {
      viewPhotos: true,
      viewVideos: true
    };
  },
  methods: {
    handleAlbumData(album) {
      //console.log(album);
    },
    viewAllPhotoGal(show) {
      if (show) {
        this.viewPhotos = true;
        this.viewVideos = false;
      } else { //show both
        this.viewPhotos = true;
        this.viewVideos = true;
      }
    },
    viewAllVideoGal(show) {
      if (show) {
        this.viewVideos = true;
        this.viewPhotos = false;
      } else { //show both
        this.viewVideos = true;
        this.viewPhotos = true;
      }
    }
  },
  computed: {
    ...mapGetters("overview_stat", {
      activeTab: "GET_ACTIVE_TAB"
    }),
    ...mapGetters("app", {
      windowWidth: "GET_WINDOW_WIDTH"
    })
  },
  created() {
    this.$EventBus.$on("viewAllPhotoGallery", this.viewAllPhotoGal);
    this.$EventBus.$on("viewAllVideoGallery", this.viewAllVideoGal);
    this.$EventBus.$on("selectPhotoAlbum", this.handleAlbumData);
  },
  beforeDestroy() {
    this.$EventBus.$off("viewAllPhotoGallery", this.viewAllPhotoGal);
    this.$EventBus.$off("viewAllVideoGallery", this.viewAllVideoGal);
    this.$EventBus.$off("selectPhotoAlbum", this.handleAlbumData);
  }
};
</script>
