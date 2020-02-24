<template>
  <div class="upload-multi-pics">
      <template v-if="files.length > 0">
        <div class="main" v-for="file in files" :key="file.id">
          <div class="container">
            <!-- Header is display here-->
            <div class="container-image">
              <div class="container-button" @click.prevent.stop="removeImage(file)">
                <span class="cursor-pointer">
                  <svg height="15" width="15" fill="#fff">
                    <use :xlink:href="require('@svg/sprites/auth.svg') + '#close'" class="svg-icon" />
                  </svg>
                </span>
              </div>
            </div>

            <!-- Upload Progressbar is display here-->
            <div class="progressbar-container" v-if="uploading">
              <progress-bar-gradient :value="11"></progress-bar-gradient>
            </div>

            <!-- Image is display here-->
            <div class="img-container" v-else>
              <b-img :src="file.blob" />
            </div>
          </div>


          <!-- Caption goes here-->
          <Caption :imageID="file.id" @caption="setAllCaption" />
        </div>
      </template>

    <!-- Upload Image Button -->
    <div class="main upload-container">
        <file-upload
      :multiple="true"
      :drop="true"
      v-model="files"
      @input-filter="inputFilter"
      @input-file="inputFile"
      ref="upload"
      class="upload"
      :timeout="600 * 123214123"
    >
      <ImageButton iconTitle="Upload picture" iconName="image-upload"></ImageButton>
    </file-upload>
    </div>

  </div>
</template>
<script>
import Input from "@components/common/Input";
import Uploader from "@components/common/Uploader.vue";
import ImageButton from "@components/common/ImageButton.vue";
import FileUpload from "vue-upload-component";
import ProgressBarGradient from "@components/common/ProgressBarGradient";
import Caption from "@components/common/ImageCaption";

import { mapGetters } from "vuex";

export default {
  name: "",
  components: {
    Input,
    Uploader,
    ImageButton,
    FileUpload,
    ProgressBarGradient,
    Caption
  },
  props: {
    uploaded: {
      type: Array,
      default: () => {}
    }
  },
  data() {
    return {
      files: [],
      uploading: false
    };
  },
  methods: {
    setAllCaption(caption, imageID) {
      let data = {
        fileid: imageID,
        caption: caption
      };
      this.$store.dispatch("upload_pictures/setCaptions", {
        newCaption: data
      });
    },
    inputFile(newFile) {
      this.$emit("update:uploaded", this.files);
      this.$store.dispatch("upload_pictures/setFilesToUpload", {
        files: this.files
      });
    },
    inputFilter(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        if (!/\.(jpeg|jpe|jpg|gif|png|webp)$/i.test(newFile.name)) {
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
    },
    removeImage(image) {
      this.$refs.upload.remove(image);
      this.removeCaption(image.id);
    },
    removeCaption(imageid) {
      console.log("image id == " + imageid);
      this.$store.dispatch("upload_pictures/removeCaption", {
        fileid: imageid
      });
    }
  },
  computed: {
    ...mapGetters("upload_pictures", {
      captions: "GET_CAPTIONS"
    })
  }
};
</script>
