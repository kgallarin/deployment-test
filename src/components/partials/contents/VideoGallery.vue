<template>
  <transition-group>
    <Gallery
      key="1"
      v-if="!showAlbum"
      title="video gallery"
      :gallery="albums"
      iconName="vdo-upload"
      imageIconTitle="Upload video"
      class="mr-3 pb-3"
      :maxShow="maxShow"
      type="vdo"
    >
      <Button
        slot="button"
        :click="() => viewAllGal()"
        :pill="false"
        variant="dark"
        class="align-items-end btn-custom"
      >
        <strong class="gallery-btn-font">{{ viewGallery ? 'BACK' : 'VIEW ALL' }}</strong>
      </Button>
    </Gallery>
    <SingleVideoAlbum key="2" v-else :album="album"></SingleVideoAlbum>
  </transition-group>
</template>

<script>
import Tile from "@components/common/Tile";
import Button from "@components/common/Button";
import Gallery from "@components/partials/profile/Gallery";
import SingleVideoAlbum from "@components/partials/contents/SingleVideoAlbum";

import { mapGetters } from "vuex";

export default {
  components: {
    Button,
    Tile,
    Gallery,
    SingleVideoAlbum
  },
  props: {
    maxShow: {
      type: Number,
      default: 7
    }
  },
  data() {
    return {
      viewGallery: false,
      showAlbum: false,
      album: []
    };
  },
  methods: {
    handleAlbumData(album) {
      this.showAlbum = true;
      this.album = album;
    },
    viewAllGal() {
      this.viewGallery = !this.viewGallery;

      switch (this.$route.name) {
        case "Profile":
          this.$router.push({ name: "AllVideoAlbum" });
          setTimeout(() => {
            this.$EventBus.$emit("viewAllVideoGallery", true);
          }, 100);
          break;
        case "Contents":
          this.$router.push({ name: "AllVideoAlbum"});
          break;
        default:
          setTimeout(() => {
            this.$EventBus.$emit("viewAllVideoGallery", this.viewAllGallery);
          }, 100);
          break;
      }

      setTimeout(() => {
        this.$EventBus.$emit("viewAllVideoGallery", this.viewGallery);
      }, 100);
    },
    viewVideoGallery() {
      this.showAlbum = false;
    }
  },
  computed: {
    ...mapGetters("app", {
      windowWidth: "GET_WINDOW_WIDTH"
    }),
      ...mapGetters("vdo_albums", {
      albums: "GET_VDO_ALBUMS"
    }),
    get() {
      return this.vdo_albums;
    }
  },
  created() {
    this.$EventBus.$on("selectVideoAlbum", this.handleAlbumData);
    this.$EventBus.$on("viewVideoGallery", this.viewVideoGallery);
  },
  beforeDestroy() {
    this.$EventBus.$off("selectVideoAlbum", this.handleAlbumData);
    this.$EventBus.$off("viewVideoGallery", this.viewVideoGallery);
  }
};
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
