<template>
  <b-container class="dashboard-container contents-viewall" fluid>
    <Gallery
      key="1"
      v-if="!showAlbum"
      title="video gallery"
      :gallery="albums"
      iconName="vdo-upload"
      imageIconTitle="Upload video"
      class=" pb-3 contents-full-height allalbum"
      :maxShow="albums.length"
      type="vdo"
    >
      <div slot="button">
        <Button
          slot="button"
          :click="() => goBack()"
          :pill="false"
          variant="dark"
          class="align-items-end btn-custom"
        >
          <strong v-if="windowWidth > 1024" class="gallery-btn-font">BACK</strong>
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
  props: {
    maxShow: {
      type: Number,
      default: 7
    }
  },
  data() {
    return {
      showAlbum: false,
      viewGallery: false,
      vdo: {}
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    handleAlbumData(album) {
      this.$router.push({
        name: "SingleVideoAlbum",
        params: { id: album.id, album: album }
      });
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
  },
  beforeDestroy() {
    this.$EventBus.$off("selectVideoAlbum", this.handleAlbumData);
  }
};
</script>
