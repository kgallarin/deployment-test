
<template>
  <div class="video-uploader">
    <b-row>
      <b-col md="12" xl="8">
        <!-- Remove vdo button is here-->
        <div class="main">
          <div class="wrapper">
            <div
              class="container-button flex-end"
              v-if="files.length > 0"
              @click.prevent.stop="removeVdo(files[0])"
            >
              <span class="cursor-pointer">
                <svg height="15" width="15" fill="#fff">
                  <use :xlink:href="require('@svg/sprites/auth.svg') + '#close'" class="svg-icon" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <!-- Progress bar is here-->
        <div v-if="files.length > 0 && !uploadedSuccess" class="vdo-wrapper">
          <div class="progressbar-container">
            <div class="wrapper">
              <progress-bar-gradient :value="progress"></progress-bar-gradient>
            </div>
          </div>
        </div>

        <!-- Video container is here-->
        <div class="vdo-wrapper">
          <!-- UPLOAD VDO button is here -->
          <div v-show="files.length === 0" class="button-container">
            <file-upload
              name="upload"
              accept="video/mp4, video/x-m4v, video/*"
              input-id="upload"
              :multiple="true"
              :drop="true"
              v-model="files"
              @input-filter="inputFilter"
              @input-file="inputFile"
              ref="upload"
              class="upload-button"
              :timeout="600 * 123214123"
            >
              <ImageButton iconTitle="Upload video" iconName="vdo-upload"></ImageButton>
            </file-upload>
          </div>

          <!-- VDO is here-->
          <div
            v-if="files.length > 0 && uploadedSuccess"
            class="embed-responsive embed-responsive-16by9 fitscreen"
          >
            <video id="vdo_preview" class="embed-responsive-item" controls="true">
              <source :src="files[0].blob" />
            </video>
          </div>
        </div>
      </b-col>

      <!-- VDO INFO container is here-->
      <b-col md="12" xl="4">
        <div class="vdoname">
          <Input
            type="text"
            placeholder="Video name"
            autocomplete="off"
            :value.sync="videoName"
            @keyup.native="setName"
            v-model="videoName"
          />
        </div>
        <!-- Caption container is here-->
        <div class="caption">
          <b-form-textarea
            placeholder="Say something about this video"
            ref="vdoCaption"
            id="vdoCaption"
            @click.prevent="resizeTextarea"
            @focus="resizeTextarea"
            @change="setVideoCaption"
            @keyup.native="setVideoCaption"
            v-model="videoCaption"
            rows="3"
          ></b-form-textarea>
        </div>

        <div class="custom-container">
          <slot name="button" />
        </div>
      </b-col>
      <!-- END of Caption container-->
    </b-row>
  </div>
</template>


<script>
import FileUpload from "vue-upload-component";
import ImageButton from "@components/common/ImageButton.vue";
import Button from "@components/common/Button";
import ProgressBarGradient from "@components/common/ProgressBarGradient";
import Input from "@components/common/Input";
import { mapGetters, mapActions } from "vuex";

export default {
  props: {},
  components: {
    FileUpload,
    ImageButton,
    Button,
    ProgressBarGradient,
    Input
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
      uploadedSuccess: false,
      progress: 0, //for demo : progress bar value
      demoProgress: null, //for demo : progressbar interval
      videoName: "",
      videoCaption: ""
    };
  },
  methods: {
    ...mapActions({
      resetVideoFile: "upload_video/resetVideoFile",
      setVideoName: "upload_video/setVideoName",
      setCaption: "upload_video/setCaption",
      setFilesToUpload: "upload_video/setFilesToUpload"
    }),
    inputFile(newFile) {
      this.$emit("update:uploaded", this.files);
      this.setVideoFile();
      /* ----------------------------------------------------
          The viewProgress() is just a demo for showing a progress bar
          please remove it later when API is added.
      -------------------------------------------------------- */
      this.viewProgress();
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
    },
    removeVdo(vdo) {
      this.$refs.upload.remove(vdo);
      this.resetVideoFile();
      this.clearFiles();
    },
    clearFiles() {
      clearInterval(this.demoProgress);
      this.files = [];
      this.uploadedSuccess = false;
      this.progress = 0;
    },
    loadingDemo() {
      /* ----------------------------------------------------
          This method is just a demo for a progress bar
          please remove it later when API is added.
      -------------------------------------------------------- */
      if (this.progress === 100) {
        this.uploadedSuccess = true;
        clearInterval(this.demoProgress);
      } else {
        this.progress++;
      }
    },
    viewProgress() {
      /* ----------------------------------------------------
          This method is just a demo for showing a progress bar
          please remove it later when API is added.
      -------------------------------------------------------- */
      this.demoProgress = setInterval(this.loadingDemo, 50);
    },
    resizeTextarea(event) {
      if (event.target.id === "vdoCaption") {
        event.target.style.height = "auto";
        event.target.style.height = event.target.scrollHeight + "px";
      }
    },
    setName() {
      this.setVideoName({
        videoName: this.videoName
      });
    },
    setVideoCaption() {
      this.setCaption({
        caption: this.videoCaption
      });
    },
    setVideoFile() {
      this.setFilesToUpload({
        file: this.files[0]
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
    if (this.vdoFile.length !== 0) {
      this.files.push(this.vdoFile);

      //This viewProgress() is just for display progress bar, please remove it later when API is added.
      this.viewProgress();
    }
  },
  beforeDestroy() {
    this.$el.removeEventListener("input", this.resizeTextarea);
    //remove video
    this.$store.dispatch("upload_video/resetVideoInfo");
  },
  computed: {
    ...mapGetters("upload_video", {
      vdoFile: "GET_VIDEO_FILE",
      vdoInfo: "GET_VIDEO_INFO"
    })
  }
};
</script>
