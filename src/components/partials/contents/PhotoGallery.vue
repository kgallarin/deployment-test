<template>
  <transition-group name="fade">
    <Gallery
      key="1"
      v-if="!showAlbum"
      title="Photo gallery"
      :gallery="albums"
      iconName="image-upload"
      imageIconTitle="Create album"
      class="mr-3 pb-3 contents-full-height"
      :maxShow="maxShow"
      type="photos"
    >
      <div slot="button" v-if="windowWidth > 768">
        <Button
          slot="button"
          :click="() => viewAllGal()"
          :pill="false"
          variant="dark"
          class="align-items-end btn-custom"
        >
          <strong v-if="this.$route.name === 'Profile'">VIEW ALL</strong>
          <strong v-else class="gallery-btn-font">{{ viewAllGallery ? 'BACK' : 'VIEW ALL'}}</strong>
        </Button>
      </div>
      <div v-else slot="button">
        <Button
          v-if="!viewAllGallery"
          :click="() => viewAllGal()"
          :pill="false"
          variant="dark"
          class="align-items-end"
        >
          <strong class="gallery-btn-font">VIEW ALL</strong>
        </Button>
        <svg v-else width="43" height="43" @click="viewAllGal()">
          <use :xlink:href="require('@svg/sprites/common.svg') + '#back'" class="svg-icon" />
        </svg>
      </div>
    </Gallery>
    <SinglePhotosAlbum v-else key="2" :album="album"></SinglePhotosAlbum>
  </transition-group>
</template>

<script>
import Tile from "@components/common/Tile";
import Button from "@components/common/Button";
import Gallery from "@components/partials/profile/Gallery";

import SinglePhotosAlbum from "@components/partials/contents/SinglePhotosAlbum";

import { mapGetters } from "vuex";
export default {
  components: {
    Button,
    Tile,
    Gallery,
    SinglePhotosAlbum
  },
  props: {
    maxShow: {
      type: Number,
      default: 7
    }
  },
  data() {
    return {
      showAlbum: false,
      viewAllGallery: false,
      album: []
    };
  },
  methods: {
    handleAlbumData(album) {
      this.showAlbum = true;
      this.album = album;
    },
    viewAllGal() {
      this.viewAllGallery = !this.viewAllGallery;

      switch (this.$route.name) {
        case "Profile":
          this.$router.push({ name: "AllPhotoAlbum" });
          setTimeout(() => {
            this.$EventBus.$emit("viewAllPhotoGallery", true);
          }, 100);
          break;
        case "Contents":
          this.$router.push({ name: "AllPhotoAlbum" });
          break;
        default:
          setTimeout(() => {
            this.$EventBus.$emit("viewAllPhotoGallery", this.viewAllGallery);
          }, 100);
          break;
      }
    },
    viewPhotoGallery(album) {
      this.showAlbum = false;
    }
  },
  computed: {
    ...mapGetters("app", {
      windowWidth: "GET_WINDOW_WIDTH"
    }),
    ...mapGetters("photo_albums", {
      albums: "GET_PHOTO_ALBUMS"
    }),
    get() {
      return this.photo_albums;
    }
  },
  created() {
    this.$EventBus.$on("selectPhotoAlbum", this.handleAlbumData);
    this.$EventBus.$on("viewPhotoGallery", this.viewPhotoGallery);
  },
  beforeDestroy() {
    this.$EventBus.$off("selectPhotoAlbum", this.handleAlbumData);
    this.$EventBus.$off("viewPhotoGallery", this.viewPhotoGallery);
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
