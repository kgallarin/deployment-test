<template>
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
</template>

<script>
import VEmojiPicker from "v-emoji-picker";
import { mapGetters, mapActions } from "vuex";

  export default {
      name:'EmojiPicker',
    mounted() {
      console.log('New component mounted.')
    },
    data() {
      return {
        showDialog: false,
      }
    },
    methods: {
      selectEmoji(emoji) {
        this.$emit('onSelectEmoji', emoji)
      }
    },
    components: {
      VEmojiPicker
    },
    computed: {
      ...mapGetters("liveshow_mode", {
        mode: "GET_MODE"
      })
    }
  }
</script>
