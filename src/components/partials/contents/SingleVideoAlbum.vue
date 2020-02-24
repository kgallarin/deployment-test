<template>
  <Tile class="gallery-container">
    <!-- header container starts -->
    <div class="d-flex justify-content-between photos-album">
      <Input
        v-if="editTitle"
        v-model="videoName"
        :value="videoName"
        type="text"
        placeholder="video name goes here"
        v-click-outside="editTitleClosed"
        @keypress.enter.native="editTitleClosed"
        @keyup.native="changeVideoName"
      />

      <p v-else class="photos-album-title">{{videoName}}</p>

      <div class="d-flex justify-content-end">
        <!-- video edit -->
        <Button :click="() => editVideoStart()" :pill="false" variant="dark" class="mr-2">
          <svg height="20" width="20" fill="#FFF">
            <use :xlink:href="require('@svg/sprites/common.svg') + '#edit'" class="svg-icon" />
          </svg>
        </Button>

        <!-- back button -->
        <Button
          v-if="windowWidth > 781"
          :click="() => goBack()"
          :pill="false"
          variant="dark"
          class="btn-custom"
        >BACK</Button>

        <!-- back arrow button -->
        <Button v-else :click="() => goBack()" :pill="false" variant="dark" class="mr-2">
          <svg width="43" height="43" class="m-n2">
            <use :xlink:href="require('@svg/sprites/common.svg') + '#back'" class="svg-icon" />
          </svg>
        </Button>
      </div>
      <!-- header container ends -->
    </div>
    <div ref="vdoMainContainer" class="px-2 vdo-main-container">
      <!-- video main -->
      <div class="vdo-container-wrapper position-relative">
        <div class="vdo-container">
          <b-embed type="iframe" :src="videoSrc" allowfullscreen></b-embed>
        </div>
        <div class="vdo-container-mask">
          <Dropdown
            slotted
            :dropData="dropData"
            :class="`vdo-container-dropdown ${ windowWidth < 718  || vdoContainerHeight < ( windowHeight - 217 ) ? '' : 'mt-0'}`"
          >
            <template v-slot:custom-action>
              <a href="#" @click.prevent>
                <svg height="15" width="28" class="mt-3">
                  <use :xlink:href="require('@svg/sprites/common.svg') + '#others'" class="svg-icon" />
                </svg>
              </a>
            </template>
          </Dropdown>
        </div>
      </div>

      <div class="d-flex justify-content-between caption-container">
        <b-form-textarea
          v-if="editCaption"
          ref="albumDesc"
          v-model="videoCaption"
          placeholder="album description goes here..."
          v-click-outside="editCaptionClosed"
          @keypress.enter.native="editCaptionClosed"
          @click.prevent="resizeTextarea"
          @focus="resizeTextarea"
        />

        <label
          v-else
          :class="`photos-album photos-album-desc ${ windowWidth < 718  || vdoContainerHeight < ( windowHeight - 217 ) ? '' : 'mt-0'}`"
        >{{videoCaption}}</label>
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
    album: {
      type: Object,
      default: () => []
    }
  },
  data() {
    return {
      videoName: "VDO name",
      videoCaption: "Video caption goes here...",
      videoSrc: "",
      editTitle: false,
      editCaption: false,
      dropData: [{ id: 1, description: "Delete", action: "DELETE_ALBUM" }],
      vdoContainerHeight: 0,
      vdoContainerWidth: 0
    };
  },
  mounted() {},
  methods: {
    styles(albums_cover) {
      return {
        "background-image": `url(${albums_cover}), linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, #000)`,
        "background-repeat": "no-repeat",
        "background-size": "cover"
      };
    },
    editVideoStart() {
      this.editTitle = true;
      this.editCaption = true;
      this.$nextTick(() => {
       this.$refs.albumDesc.focus()
      });
    },
    editTitleClosed() {
      this.editTitle = false;
    },
    editCaptionClosed() {
      this.editCaption = false;
    },
    changeVideoName(event) {
      this.videoName = event.target.value;
    },
    goBack() {
      setTimeout(() => {
        this.$EventBus.$emit("viewVideoGallery");
      }, 100);

      if (this.$route.name === "SingleVideoAlbum") {
        this.$router.go(-1); //Go back to View all Video page
      }
    },
    showAlbum(album) {
      this.videoName = album.name;
      this.videoCaption = album.desc;
      this.videoSrc = album.vdo;
    },
    setContainerHeight() {
      this.vdoContainerHeight = this.$refs.vdoMainContainer.clientHeight;
      this.vdoContainerWidth = this.$refs.vdoMainContainer.clientHeight;
    },
    resizeTextarea(event) {

      //console.log(this.$refs.albumDesc)
      event.target.style.height = "auto";
      event.target.style.height = event.target.scrollHeight + "px";
    }
  },
  computed: {
    ...mapGetters("app", {
      windowWidth: "GET_WINDOW_WIDTH",
      windowHeight: "GET_WINDOW_HEIGHT"
    })
  },
  watch: {
    windowHeight(newVal, oldVal) {
      this.vdoContainerHeight = this.$refs.vdoMainContainer.clientHeight;
    }
  },
  created() {
    this.showAlbum(this.album);
  },
  mounted() {
    this.$nextTick(() => {
      this.setContainerHeight();
      this.$el.addEventListener("input", this.resizeTextarea);
    });

    this.$el.addEventListener("input", this.resizeTextarea);
    this.$el.addEventListener("resize", this.setContainerHeight);
  },
  beforeDestroy() {
    this.$el.removeEventListener("input", this.resizeTextarea);
    this.$el.removeEventListener("resize", this.setContainerHeight);
  }
};
</script>
