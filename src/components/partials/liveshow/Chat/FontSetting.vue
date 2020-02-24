<template>
  <div class="font-setting">
    <!-- Decrease font size -->
    <svg fill="#000" class="svg-content" width="30" height="30" @click.prevent="decreaseSize">
      <use :xlink:href="require('@svg/sprites/liveshow.svg') + '#minus'" class="svg-icon" />
    </svg>

    <!-- Increase font size -->
    <svg fill="#fff" class="svg-content" width="30" height="30" @click.prevent="increaseSize">
      <use :xlink:href="require('@svg/sprites/liveshow.svg') + '#plus'" class="svg-icon" />
    </svg>

    <!-- Auto font size -->
    <svg fill="#fff" class="svg-content" width="30" height="30" @click.prevent="setFontSizeToDefault">
      <use :xlink:href="require('@svg/sprites/liveshow.svg') + '#auto'" class="svg-icon" />
    </svg>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      size: 14,
      smallest: 10,
      largest: 36
    }
  },
  methods: {
    ...mapActions({
      setFontSize: "font_size/SET_FONT_SIZE",
      resetFontSize: "font_size/RESET_FONT_SIZE"
    }),
    increaseSize() {
      if(this.size < this.largest) {
        this.size++
        this.setFontSize({ size: this.size })
      }

    },
    decreaseSize() {
      if(this.size > this.smallest) {
        this.size--
        this.setFontSize({ size: this.size })
      }
    },
    setFontSizeToDefault() {
      this.size = 14
      this.resetFontSize()
    }
  }
};
</script>
