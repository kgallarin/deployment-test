<template>
  <!-- UPLOAD IMAGE FILE CONTAINER -->
  <div class="image-container" @click="selectFile()">
    <file-upload
      ref="file"
      name="file"
      input-id="file"
      v-model="files"
      @input-file="inputFile"
      @input-filter="inputFilter"
      :drop="true"
      :timeout="600 * 123214123"
    />
    <svg
      :fill="mode === 'dark' ? '#fff' : '#374163'"
      class="svg-content"
      width="26"
      height="26"
    >
      <use :xlink:href="require('@svg/sprites/liveshow.svg') + '#gallery'" class="svg-icon" />
    </svg>
  </div>
</template>

<script>
import FileUpload from "vue-upload-component";
  export default {
    name:'ImageUploader',
    prop: {
      uploaded: {
        type: Array,
        default: () => {}
      }
    },
    data() {
      return {
        files: []
      }
    },
    methods: {
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
        this.$refs.file.remove(image);
        this.files = [];
      },
      selectFile() {
        document.getElementById("file").click();
      },
      inputFile(newFile) {
        this.$emit("update:uploaded", this.files);
      }
    },
    mounted() {}
  }
</script>
