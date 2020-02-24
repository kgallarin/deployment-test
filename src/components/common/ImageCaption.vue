<template>
<div class="container">
  <div class="container-caption">
    <b-form-textarea 
      placeholder="Say something about this photo"
      id="imageId"
      ref="input"
      v-model="imageCaption"
      :value="imageCaption"
      @keypress.enter.native="updateCaption"
      v-click-outside="updateCaption"
    />
  </div>
</div>
</template>
<script>
export default {
  props: {
    imageID: {
      type: String,
      default: ""
    }, 
    caption: {
      type: String,
      default: () => {}
    }
  },
  data() {
    return {
      imageCaption: ""
    }
  },
  methods : {
    updateCaption() {
      this.$emit('caption', this.$refs.input.value, this.imageID);
    }
  }
}
</script>