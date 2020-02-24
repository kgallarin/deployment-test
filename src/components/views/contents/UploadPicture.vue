<template>
  <div class="dashboard-wrapper">
    <b-container class="dashboard-container contents contents-full-height" fluid>
      <Tile class="d-flex upload-picture h-100">
        <!-- SECTION 1 : add album name, album description, and upload button-->
        <div class="section1">
          <div class="wrapper">
            <p class="title pb-2">Create Album</p>
            <!-- Back button for mobile view-->
            <span id="bt_back" class="cursor-pointer" @click.stop="goBack()">
              <svg height="20" width="20" fill="#fff">
                <use :xlink:href="require('@svg/sprites/auth.svg') + '#close'" class="svg-icon" />
              </svg>
            </span>
          </div>

          <ValidationObserver v-slot="{ invalid, errors }" ref="form">
            <form autocomplete="off" @submit.prevent>
              <validation-provider name="albumName" rules="required" v-slot="{ errors }">
                <Input
                  placeholder="Album name"
                  :value.sync="albumName"
                  id="albumName"
                  name="albumName"
                />
                <span class="error">{{ errors[0] }}</span>
              </validation-provider>

              <validation-provider name="albumDesc" rules="required" v-slot="{ errors }">
                <b-form-textarea
                  id="albumDesc"
                  placeholder="Description"
                  @click.prevent="resizeTextarea"
                  @focus="resizeTextarea"
                  v-model="albumDesc"
                  rows="3"
                ></b-form-textarea>
                <span class="error">{{ errors[0] }}</span>
              </validation-provider>

              <Button
                type="submit"
                :pill="false"
                variant="light"
                :disabled="invalid"
                :click="() => handleUploadAlbum()"
              >
                <strong>Upload now</strong>
              </Button>
              <p class="my-3 error-red" v-if="!hasFiles">No files to upload !, please add some...</p>
            </form>
          </ValidationObserver>
        </div>
        <!-- END SECTION 1 -->

        <!-- SECTION 2 : Select images to upload & Images preview-->
        <div class="section2">
          <!-- Back button -->
          <span id="bt_back" class="cursor-pointer align-self-end" @click.stop="goBack()">
            <svg height="20" width="20" fill="#fff">
              <use :xlink:href="require('@svg/sprites/auth.svg') + '#close'" class="svg-icon" />
            </svg>
          </span>

          <!-- Main container: select images to upload & Images preview -->
          <div class="main">
            <UploadMultiPictures></UploadMultiPictures>
            <!-- Main container: Upload button for mobile layout -->
            <div class="button-container">
              <Button
                type="submit"
                :pill="false"
                variant="light"
                :click="() => handleUploadAlbum()"
              >
                <strong>Upload now</strong>
              </Button>
            </div>
            <!-- END Main container: Upload button for mobile layout -->
          </div>
        </div>

        <!-- END SECTION 2 -->
      </Tile>
    </b-container>
  </div>
</template>
<script>
import Tile from "@components/common/Tile";
import Button from "@components/common/Button";
import Input from "@components/common/Input";
import Uploader from "@components/common/Uploader";
import UploadMultiPictures from "@components/common/UploadMultiPictures";

// vee validate
import { ValidationObserver, ValidationProvider, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

import { mapGetters } from "vuex";

extend("required", {
  ...required,
  message: "Tell your follwers what this album is about"
});

export default {
  components: {
    Button,
    Tile,
    Input,
    Uploader,
    UploadMultiPictures,
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      hasFiles: true,
      uploading: false,
      albumName: null,
      albumDesc: null
    };
  },
  methods: {
    goBack() {
      this.resetAlbum(); //clean data
      this.$router.go(-1);
    },
    resizeTextarea(event) {
      if (event.target.id === "albumDesc") {
        event.target.style.height = "auto";
        event.target.style.height = event.target.scrollHeight + "px";
      }
    },
    handleUploadAlbum() {
      this.setAlbumInfo();
      if (this.filesAmount > 0) {
        //upload goes here...
        console.log("upload goes here...");
        this.uploading = true;
        console.log(this.albumInfo);
      } else {
        this.hasFiles = false;
      }
    },
    setAlbumInfo() {
      //set album name
      this.$store.dispatch("upload_pictures/setAlbumName", {
        albumName: this.albumName
      });
      //set album description
      this.$store.dispatch("upload_pictures/setAlbumDesc", {
        albumDesc: this.albumDesc
      });
    },
    resetAlbum() {
      this.$store.dispatch("upload_pictures/resetAlbum", {
        albumName: this.albumName
      });
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$el.addEventListener("input", this.resizeTextarea);
    });
    this.$el.addEventListener("input", this.resizeTextarea);
  },
  created() {
    this.$store.dispatch("upload_pictures/resetAlbum");
  },
  beforeDestroy() {
    this.$el.removeEventListener("input", this.resizeTextarea);
  },
  computed: {
    ...mapGetters("upload_pictures", {
      albumInfo: "GET_ALBUM_INFO",
      filesAmount: "GET_AMOUNT_FILES"
    })
  },
  watch: {
    filesAmount(newVal, oldVal) {
      if (newVal > 0) {
        this.hasFiles = true;
      } else {
        this.hasFiles = false;
      }
    }
  }
};
</script>
