<template>
  <Tile class="gallery-container">
    <div class="d-flex justify-content-between p-3 m-1 mx-2">
      <p :class="`gallery-title mt-auto mb-auto ${titleClass}`">{{title}}</p>
      <slot name="button" />
    </div>

    <div class="d-flex flex-wrap p-2 justify-content-start">
      <b-row class="gallery-flex-wrap m-2">
        <b-col class="gallery-col">
          <!-- <input  style="display: none" id="fileInput" type="file" v-on:change="uploadVideo($event)"> -->

          <div
            :class="`photo-album img-container ${customClass}`"
            @click.stop="createAlbum(type)"
            ref="file"
          >
            <file-upload
              v-if="type === 'vdo'"
              name="fileInput"
              accept="video/mp4, video/x-m4v, video/*"
              input-id="fileInput"
              :multiple="true"
              :drop="true"
              v-model="file"
              @input-file="uploadVideo"
              @input-filter="inputFilter"
              ref="fileInput"
              class="upload-button"
              :timeout="600 * 123214123"
            ></file-upload>
            <div class="content">
              <ImageButton :iconTitle="imageIconTitle" :iconName="iconName" :iconW="47" :iconH="43"></ImageButton>
            </div>
          </div>
        </b-col>
        <b-col v-for="(album, index) in gallery" class="gallery-col" :key="album.id">
          <div
            class="position-relative"
            v-if="index < maxShow"
            @click.stop="showDetail(type, album)"
          >
            <div :dark="true" :class="`img-container photo-album ${customClass}`" :key="album.id">
              <div class="content w-100" :style="`background-image: url(${album.image}); linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, #000) background-repeat: no-repeat; background-size: cover; background-position: center center`"></div>
            </div>
            <div class="albumname">
              <p class="pl-3">{{album.name}}</p>
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
            <div class="photo-mask"></div>
          </div>
        </b-col>
      </b-row>
    </div>
  </Tile>
</template>
<script>
import Button from "@components/common/Button";
import Tile from "@components/common/Tile";
import ImageButton from "@components/common/ImageButton";
import Dropdown from "@components/common/Dropdown";
import FileUpload from "vue-upload-component";
import { mapGetters } from "vuex";

export default {
  name: "",
  components: { Tile, Button, ImageButton, Dropdown, FileUpload },
  props: {
    title: {
      type: String,
      default: "Album"
    },
    gallery: {
      type: Array,
      default: function() {
        return [];
      }
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
    type: {
      //photos or vdo
      type: String,
      default: ""
    }
  },
  data() {
    return {
      dropData: [
        { id: 0, description: "Rename", action: "RENAME_ALBUM" },
        { id: 1, description: "Delete", action: "DELETE_ALBUM" }
      ],
      file: []
    };
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
    checkRoute(type, album) {
      switch (this.$route.name) {
        case "Contents":
          this.$router.push({ name: "Contents" }).catch(err => {});
          break;
        case "Profile":
          if (type === "photos") {
            this.$router.push({
              name: "AllPhotoAlbum",
              params: { id: album.id }
            });
          } else {
            this.$router.push({
              name: "AllVideoAlbum",
              params: { id: album.id }
            });
          }
          break;
        default:
          break;
      }
    },
    showDetail(type, album) {
      this.checkRoute(type, album);
      if (type === "photos") {
        setTimeout(() => {
          this.$EventBus.$emit("selectPhotoAlbum", album);
        }, 100);
      } else {
        setTimeout(() => {
          this.$EventBus.$emit("selectVideoAlbum", album);
        }, 100);
      }
    },
    createAlbum(type) {
      if (type === "photos") {
        this.$router.push({ name: "UploadPicture" });
      } else if (type === "vdo") {
        document.getElementById("fileInput").click();
      }
    },
    uploadVideo(newFile) {
      this.$store.dispatch("upload_video/setFilesToUpload", {
        file: newFile
      });
      this.$router.push({ name: "UploadVideo" });
    },
    inputFilter(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        if (!/\.(m4v|avi|mp4|mov|mpg|mpeg)$/i.test(newFile.name)) {
          return prevent();
        }
        newFile.blob = "";
        let URL = window.URL || window.webkitURL;
        if (URL && URL.createObjectURL) {
          newFile.blob = URL.createObjectURL(newFile.file);
        }
      }
      if (newFile && oldFile) {
        if (!newFile.version) {
          newFile.version = 0;
        }
        newFile.version++;
      }

      if (!newFile && oldFile) {
        // Remove file
        // Refused to remove the file
        // return prevent()
      }
    }
  },
  computed: {
    ...mapGetters("app", {
      windowWidth: "GET_WINDOW_WIDTH"
    }),
    ...mapGetters("upload_video", {
      vdoFile: "GET_VIDEO_FILE"
    })
  },
  created() {
  }
};
</script>
