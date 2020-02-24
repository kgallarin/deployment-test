<template>
  <div class="message-composer">
    <div :class="[mode=== 'dark' ? '' : 'light-bg', 'img-preview']" v-if="files.length > 0">
      <!-- PREVIEW IMAGE FILE -->
      <template v-for="file in files">
        <div class="img-container" :key="file.id">
          <div class="button-container" @click.prevent.stop="removeImage(file)">
            <span class="cursor-pointer">
              <svg height="15" width="15" fill="#fff">
                <use :xlink:href="require('@svg/sprites/auth.svg') + '#close'" class="svg-icon" />
              </svg>
            </span>
          </div>
          <b-img :src="file.blob"></b-img>
        </div>
      </template>
      <!-- END PREVIEW IMAGE FILE -->
    </div>

    <div class="composer-container">
      <!-- EMOJI ICON CONTAINER -->
      <div class="emoji-container">
        <svg
          :fill="mode === 'dark' ? '#fff' : '#374163'"
          class="svg-content"
          width="26"
          height="26"
          @click="showDialog = true"
        >
          <use :xlink:href="require('@svg/sprites/liveshow.svg') + '#emoji'" class="svg-icon" />
        </svg>
        <div class="wrapper">
          <VEmojiPicker
            ref="emojiContainer"
            @select="selectEmoji"
            v-show="showDialog"
            v-click-outside="() => showDialog = false"
          />
        </div>
      </div>

      <!-- USER INPUT MESSAGE CONTAINER -->
      <TextareaAutosize
        :style="{ fontSize: fontSize }"
        ref="textarea"
        cols="30"
        rows="1"
        placeholder="Type your message…"
        v-model="message"
        @keydown.native="composeMe"
        :class="[mode === 'dark' ? '' : 'light-bg']"
        :min-height="30"
        :max-height="1000"
      />

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
    </div>
  </div>
</template>

<script>
import VEmojiPicker from "v-emoji-picker";
import FileUpload from "vue-upload-component";

import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    VEmojiPicker,
    FileUpload
  },
  props: {
    value: {
      type: String,
      default: ""
    },
    uploaded: {
      type: Array,
      default: () => []
    },
    messageType: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      showDialog: false,
      message: "",
      files: []
    };
  },
  methods: {
    ...mapActions({
      composeMessage: "messaging/COMPOSE_MESSAGE"
    }),
    selectEmoji(emoji) {
      this.message += emoji.data;
    },
    isValidMessage() {
      if (this.message.trim() !== "" || this.files.length !== 0) {
        return true;
      }
    },
    composeMe(e) {
      this.message.trim();

      if (e.key === "Enter" && this.message === "") {
        if (this.selectedUpload !== null) {
          if (!e.shiftKey) {
            this.onMessageSubmit();
            e.preventDefault();
          }
        } else {
          e.preventDefault();
        }
      } else {
        if (e.key === "Enter") {
          if (!e.shiftKey) {
            this.onMessageSubmit();
            e.preventDefault();
          }
        }
      }
    },
    onMessageSubmit() {
      if (this.isValidMessage()) {
        let msg = {
          message: this.message,
          credits: null,
          created_at: 1581062795,
          attachment: this.files.length > 0 ? this.files[0] : null,
          user: {
            id: 2,
            name: "Jaclyn Schmitt",
            username: "sexy",
            type: "performer",
            channel: "performer.sexy"
          }
        };

        //set the sent message
        this.composeMessage({
          message: msg
        });

        //clear message after submit
        this.message = "";
        this.files = [];
      }
    },
    selectFile() {
      document.getElementById("file").click();
    },
    inputFile(newFile) {
      this.$EventBus.$emit("fileBlobDetected");
      console.log("asdjnf");
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
      this.$refs.file.remove(image);
      this.files = [];
    }
  },
  mounted() {},
  computed: {
    ...mapGetters("font_size", {
      fontSize: "GET_FONT_SIZE"
    }),
    ...mapGetters("liveshow", {
      activeTab: "GET_ACTIVE_TAB"
    }),
    ...mapGetters("liveshow_mode", {
      mode: "GET_MODE"
    })
  },
  watch: {
    fontSize(newVal) {
      //resize textarea container when font is change;
      this.$nextTick(() => {
        this.$refs.textarea.resize();
      });
    }
  }
};
</script>
