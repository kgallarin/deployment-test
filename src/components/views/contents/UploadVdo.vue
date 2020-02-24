<template>
  <div class="dashboard-wrapper">
    <b-container class="dashboard-container contents contents-full-height upload-vdo" fluid>
      <Tile class="main-container">
        <!-- HEADER GOES HERE -->
        <div class="header">
          <p class="title">upload video</p>
          <!-- Back button -->
          <span id="bt_back" class="cursor-pointer align-self-end" @click.stop="goBack()">
            <svg height="30" width="20" fill="#fff">
              <use :xlink:href="require('@svg/sprites/auth.svg') + '#close'" class="svg-icon" />
            </svg>
          </span>
        </div>

        <div class="video-container mt-3">
          <!-- Video upload container goes here-->
          <VideoUploader>
            <!-- UPLOAD VDO BUTTON goes here-->
            <div class="upload-button-container" slot="button">
              <Button :click="() => uploadVideo()" :pill="false" variant="light" :disabled="!validVdoInfo">Upload now</Button>
            </div>
          </VideoUploader>
        </div>
      </Tile>
    </b-container>
  </div>
</template>
<script>
import Tile from "@components/common/Tile";
import VideoUploader from "@components/common/VideoUploader";
import Button from "@components/common/Button";
import { mapGetters } from "vuex";

export default {
  components: {
    Tile,
    VideoUploader,
    Button
  },
  props: {
    uploaded: {
      type: Array,
      default: () => {}
    }
  },
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    uploadVideo() {
      console.log("upload goes here...")
    }
  },
  mounted() {},
  created() {},
  computed: {
    ...mapGetters("upload_video", {
      vdoInfo: "GET_VIDEO_INFO",
      validVdoInfo: "GET_VIDEO_ISVALID_INFO"
    })
  }
};
</script>
