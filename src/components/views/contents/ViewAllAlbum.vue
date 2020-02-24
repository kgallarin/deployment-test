<template>
  <b-container class="dashboard-container contents" fluid>
    <Gallery
      key="1"
      v-if="!showAlbum"
      title="Photo gallery"
      :gallery="albums"
      iconName="image-upload"
      imageIconTitle="Create album"
      class="pb-3 contents-full-height allalbum"
      type="photos"
      :maxShow="albums.length"
    >
      <div slot="button">
        <Button
          slot="button"
          :click="() => goBack()"
          :pill="false"
          variant="dark"
          class="align-items-end btn-custom"
        >
          <strong v-if="windowWidth > 718" class="gallery-btn-font">BACK</strong>
          <svg v-else width="43" height="43" @click="viewAllGal()" class="m-n2">
            <use :xlink:href="require('@svg/sprites/common.svg') + '#back'" class="svg-icon" />
          </svg>
        </Button>
      </div>
    </Gallery>
  </b-container>
</template>

<script>
import Tile from "@components/common/Tile";
import Button from "@components/common/Button";
import Gallery from "@components/partials/profile/Gallery";

import { mapGetters } from "vuex";

export default {
  components: {
    Tile,
    Button,
    Gallery
  },
  data() {
    return {
      showAlbum: false,
      viewAllGallery: false
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    handleAlbumData(album) {
      this.$router.push({
        name: "SinglePhotosAlbum",
        params: { id: album.id, album: album }
      });
    }
  },
  created() {
    this.$EventBus.$on("selectPhotoAlbum", this.handleAlbumData);
  },
  beforeDestroy() {
    this.$EventBus.$off("selectPhotoAlbum", this.handleAlbumData);
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
  }
};
</script>

<style lang="scss">
.allalbum .gallery-col.col {
  width: 25%;
  flex: 0 0 25%;
}
</style>
