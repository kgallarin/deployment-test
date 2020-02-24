<template>
  <div class="file-upload-form image-uploader">
    <file-upload
      ref="upload"
      :input-id="name"
      v-model="files"
      @input-file="inputFile"
      @input-filter="inputFilter"
      :drop="true"
      :timeout="600 * 123214123"
    >
      <div class="p-2">
        <ImageButton iconTitle="Upload picture" iconName="image-upload"></ImageButton>
      </div>
       <div v-if="files.length > 0" class="image-preview">
          <template v-for="file in files">
            <img :src="file.blob" width="50" height="50" :key="file.id" />
          </template>
        </div>
    </file-upload>
  </div>
</template>

<script>
import FileUpload from "vue-upload-component";
import ImageButton from "@components/common/ImageButton.vue";

export default {
  props: {
    headerTtl: {
      type: String,
      default: ""
    },
    btmText: {
      type: String,
      default: ""
    },
    uploaded: {
      type: Array,
      default: () => {}
    },
    name: {
      type: String,
      default: ""
    }
  },
  components: {
    FileUpload,
    ImageButton
  },
  data() {
    return {
      files: []
    };
  },
  methods: {
    inputFile(newFile) {
      this.$emit("update:uploaded", this.files);
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
    }
  }
};
</script>
