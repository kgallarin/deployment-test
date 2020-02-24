<template>
  <Tile class="gallery-container">
    <div class="d-flex justify-content-between photos-album">
      <Input
        v-if="startEditTitle"
        v-model="albumName"
        :value="albumName"
        type="text"
        placeholder="albumname goes here"
        v-click-outside="editAlbumTitleClosed"
        @keypress.enter.native="editAlbumTitleClosed"
        @keyup.native="changeAlbumName"
      />

      <p v-else class="photos-album-title">{{albumName}}</p>
      <div class="d-flex justify-content-end w-50">
        <Button :click="() => editAlbumStart()" :pill="false" variant="dark" class="mr-2">
          <svg height="20" width="20" fill="#FFF">
            <use :xlink:href="require('@svg/sprites/common.svg') + '#edit'" class="svg-icon" />
          </svg>
        </Button>
        <Button
          v-if="windowWidth > 781"
          :click="() => goBack()"
          :pill="false"
          variant="dark"
          class="btn-custom"
        >BACK</Button>
        <Button v-else :click="() => goBack()" :pill="false" variant="dark" class="mr-2">
          <svg width="43" height="43" class="m-n2">
            <use :xlink:href="require('@svg/sprites/common.svg') + '#back'" class="svg-icon" />
          </svg>
        </Button>
      </div>
    </div>
    <div
      class="d-flex justify-content-start flex-wrap photos-album-desc-container"
      @click.prevent="editAlbumDesc"
    >
      <div v-if="startEditDesc" class="w-100">
        <b-form-textarea
          ref="albumDesc"
          v-model="albumDesc"
          placeholder="album description goes here..."
          v-click-outside="editAlbumDescClosed"
          @keypress.enter.native="editAlbumDescClosed"
        ></b-form-textarea>
      </div>
      <label v-else class="photos-album label">{{albumDesc}}</label>
    </div>
    <div class="photos-album-photos">
      <div class="grid-wrapper">
        <div class="grid">
          <div class="grid-sizer"></div>
          <div :class="`grid-item ${size}`" v-for="photo in album.photos" :key="photo.id">
            <div class="photo-mask"></div>
            <img :src="photo.src" />
            <div class="photos-album-dropdown">
              <Dropdown slotted :dropData="dropData">
                <template v-slot:custom-action>
                  <a href="#" @click.prevent>
                    <svg height="15" width="28" class="mt-n2">
                      <use :xlink:href="require('@svg/sprites/common.svg') + '#others'" class="svg-icon" />
                    </svg>
                  </a>
                </template>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Tile>
</template>

<script>
import Button from "@components/common/Button";
import Tile from "@components/common/Tile";
import ImageButton from "@components/common/ImageButton";
import Dropdown from "@components/common/Dropdown";
import Input from "@components/common/Input";

import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

import { mapGetters } from "vuex";

export default {
  name: "",
  components: { Tile, Button, ImageButton, Dropdown, Input },
  props: {
    title: {
      type: String,
      default: "Album"
    },
    imageIconTitle: {
      type: String,
      default: "Create album"
    },
    iconName: {
      type: String,
      default: "image-upload"
    },
    maxShow: {
      //number of album to display
      type: Number,
      default: 4
    },
    titleClass: {
      type: String,
      default: ""
    },
    customClass: {
      //custom style album
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: ""
    },
    album: {
      type: Object,
      default: ()=> []
    }
  },
  data() {
    return {
      dropData: [{ id: 1, description: "Delete", action: "DELETE_ALBUM" }],
      startEditTitle: false,
      startEditDesc: false,
      albumName: "Album name goes here...",
      albumDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
      photos: []
    };
  },
  mounted() {
    this.loadGallery();
  },
  methods: {
    styles(albums_cover) {
      return {
        "background-image": `url(${albums_cover}), linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, #000)`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        "background-position": "center center"
      };
    },
    goBack() {
      setTimeout(() => {
        this.$EventBus.$emit("viewPhotoGallery");
      }, 100);

      if(this.$route.name === "SinglePhotosAlbum") {
        this.$router.go(-1); //Go back to View all Photos album page
      }
    },
    loadGallery() {
      let grid = document.querySelector(".grid");
      let msnry = new Masonry(grid, {
        itemSelector: ".grid-item",
        percentPosition: true,
        rowWidth: ".grid-sizer"
      });
      imagesLoaded(grid).on("progress", () => {
        msnry.layout();
      });
    },
    editAlbumStart() {
      this.startEditDesc = true;
      this.startEditTitle = true;
    },
    editAlbumDesc() {
      this.startEditDesc = true;
      this.$nextTick(() => {
        this.$refs.albumDesc.focus();
      });
    },
    editAlbumTitle() {
      this.startEditTitle = true;
    },
    editAlbumDescClosed() {
      this.startEditDesc = false;
    },
    editAlbumTitleClosed(event) {
      this.startEditTitle = false;
    },
    changeAlbumName(event) {
      this.albumName = event.target.value;
    },
    showAlbum(album) {
      this.albumName = album.name;
      this.albumDesc = album.desc;
      this.photos = album.photos;
    }
  },
  computed: {
    ...mapGetters("app", {
      windowWidth: "GET_WINDOW_WIDTH"
    })
  },
  created() {
    this.showAlbum(this.album)
  }
};
</script>
