<template>
  <div class="file-upload-form">
      <file-upload
        ref="upload"
        :input-id="name"
        v-model="files"
        @input-file="inputFile"
        @input-filter="inputFilter"
        :drop="true"
        :timeout="600 * 123214123"
      >
      <div class="label">
        <div class="uploader-label-inner">
          <p class="header-ttl">
            <strong>
              {{ headerTtl }}
              <svg height="24" width="24">
                <use
                  :xlink:href="require('@svg/sprites/models_info.svg') + '#info'"
                  class="svg-icon"
                />
              </svg>
            </strong>
          </p>
          <p class="sub-ttl">
            <strong>Browse or drag file here</strong>
          </p>
          <p class="btm-text">{{ btmText }}</p>
        </div>

        <div v-if="files.length > 0" class="image-preview d-flex flex-column">
          <template v-for="file in files">
            <img :src="file.blob" width="50" height="50" />
            <a href="#" @click.prevent.stop="removeImage(file)" class="remove-image color--bright-orange">Remove</a>
          </template>
        </div>
      </div>
    </file-upload>
  </div>
</template>

<script>
import FileUpload from 'vue-upload-component'
export default {
  props: {
    headerTtl: {
      type: String,
      default: ''
    },
    btmText: {
      type: String,
      default: ''
    },
    uploaded: {
      type: Array,
      default: () => {}
    },
    name: {
      type: String,
      default: ''
    }
  },
  components: {
    FileUpload,
  },
  data() {
    return {
      files: []
    }
  },
  methods: {
    inputFile(newFile) {
      this.$emit('update:uploaded', this.files)
    },
    inputFilter(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        if (!/\.(jpeg|jpe|jpg|gif|png|webp)$/i.test(newFile.name)) {
          return prevent()
        }
        newFile.blob = ''
        let URL = window.URL || window.webkitURL
        if (URL && URL.createObjectURL) {
          newFile.blob = URL.createObjectURL(newFile.file)
        }

      }
      if (newFile && oldFile) {
        if (!newFile.version) {
          newFile.version = 0
        }
        newFile.version++
      }

      if (!newFile && oldFile) {
        // Remove file
        // Refused to remove the file
        // return prevent()
      }
    },
    removeImage(image) {
      this.$refs.upload.remove(image)
    }
  }

}
</script>
