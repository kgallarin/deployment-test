<template>
  <b-container class="dashboard-wrapper dashboard-container studio-settings" fluid>
    <Tile>
      <div class="studio-settings-main w-100">
        <!-- HEADER -->
        <h1 class="header">Studio Settings</h1>

        <div class="main-content">
          <!-- UPLOAD STUDIO's IMAGE-->
          <div class="studio-profile">
            <label class="sub-header">STUDIO PROFILE</label>

            <div class="upload-wrapper">
              <ImageUploader />
            </div>
          </div>

          <!-- Setting Input-->
          <div class="setting-container">
            <div class="main">
              <div class="form-input">
                <label class="sub-header">Studio name</label>
                <Input placeholder="Studio name" static_value="Studio name" />
              </div>

              <div class="form-input">
                <label class="sub-header">Revenue Share</label>
                <Dropdown
                  customClass="custom-large dark-text-left text-uppercase sm"
                  :dropData="revenueShare"
                  :placeholder="selected !== null ? selected.description: ''"
                  :click="onChange"
                />
              </div>
            </div>

            <div class="main">
              <div class="form-input">
                <label class="sub-header">Studio description</label>
                <textarea placeholder="Studio description" rows="3" v-model="description"></textarea>
              </div>

              <div class="form-input">
                <label class="sub-header">Email notification</label>

                <div class="d-flex flex-wrap noti-container">
                  <b-form-checkbox-group class="d-flex flex-wrap cb-group align-items-start">
                    <b-form-checkbox class="d-flex models-chk pink-cb">
                      <span>notification 1</span>
                    </b-form-checkbox>
                  </b-form-checkbox-group>

                  <b-form-checkbox-group class="d-flex flex-wrap cb-group align-items-start">
                    <b-form-checkbox class="d-flex models-chk pink-cb">
                      <span>notification 2</span>
                    </b-form-checkbox>
                  </b-form-checkbox-group>

                  <b-form-checkbox-group class="d-flex flex-wrap cb-group align-items-start">
                    <b-form-checkbox class="d-flex models-chk pink-cb">
                      <span>notification 3</span>
                    </b-form-checkbox>
                  </b-form-checkbox-group>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="button-wrapper">
          <Button :click="() => ''" :pill="false" variant="light" class="btn-endshow">SAVE</Button>
        </div>
      </div>
    </Tile>
  </b-container>
</template>
<script>
import Tile from "@components/common/Tile";
import ImageButton from "@components/common/ImageButton.vue";
import Input from "@components/common/Input";
import Button from "@components/common/Button";
import Dropdown from "@components/common/Dropdown";
import FileUpload from "vue-upload-component";

import ImageUploader from "@components/common/ImageUploader";

export default {
  components: {
    Tile,
    ImageButton,
    Input,
    Button,
    Dropdown,
    FileUpload,
    ImageUploader
  },
  data() {
    return {
      revenueShare: [
        { id: 1, description: "10%" },
        { id: 2, description: "20%" },
        { id: 3, description: "30%" },
        { id: 4, description: "40%" },
        { id: 5, description: "50%" },
        { id: 6, description: "60%" }
      ],
      selected: { id: 1, description: "10%" },
      description: "Studio description",
      files: []
    };
  },
  methods: {
    uploadImage() {
      //this.$refs.
    },
    onChange(data) {
      this.selected = data;
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
    }
  }
};
</script>