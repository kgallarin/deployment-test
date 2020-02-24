<template>
  <section class="multi-component"
    :style="`
      background-size: ${windowWidth < 1280 || bgCover ? 'cover': '100% 100%' };
      background-repeat:${repeat ? 'repeat' : 'no-repeat'};
      background-image: url(${backgroundImage});
      background-position: ${bgPosition}
      `"
    >
    <slot />
  </section>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default{
    name:'SliceContainer',
    props:{
      backgroundImage: {
        type: String,
        default: ''
      },
      repeat: {
        type: Boolean,
        default: false
      },
      bgPosition: {
        type: String,
        default: ''
      },
      bgCover: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      ...mapGetters("app", {
        windowWidth: "GET_WINDOW_WIDTH",
      }),
    }
  }
</script>

<style lang="scss">
  .multi-component {
    &--container {
      max-width: 1440px;
      margin: 0 auto;
    }
  }

</style>
