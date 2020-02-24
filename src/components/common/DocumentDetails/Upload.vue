<template>
  <div class="pop-container d-flex flex-column">
    <div class="upload-section w-100">
      <p class="uploader-head text-center">Upload both sides of your ID, then take a picture of you holding your ID.</p>
      <div class="upload-boxes d-flex justify-content-center">
        <div class="upload-boxes-inner d-flex">
          <Uploader name="id_front" headerTtl="id front" :uploaded.sync="id_front" />

          <Uploader name="id_back" headerTtl="id back" btmText="Only double sided IDs" :uploaded.sync="id_back" />

          <Uploader name="face_id" headerTtl="face & id" :uploaded.sync="face_id" />
        </div>
      </div>
      <p class="text-center foot-text">Your documents must be reviewed before approval. <br />We shall contact you within 24 hours!</p>
    </div>
  </div>
</template>

<script>
import Uploader from "@components/common/Uploader"

  export default {
    name: 'DocumentUploader',
    data() {
      return {
        id_front: null,
        id_back: null,
        face_id: null,
      }
    },
    methods: {
      validate() {
        if(this.id_front !== null && this.id_back !== null && this.face_id !== null) {
          this.$emit("on-validated", true)
        }else {
          alert('Please complete document attachments')
        }
      }
    },
    components: { Uploader }
  }
</script>
