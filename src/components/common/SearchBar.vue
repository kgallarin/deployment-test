<template>
  <div
    :class="{
      'mb-0 mr-0': windowWidth <= 767,
      'search-form d-flex align-items-center': true
      }"
    >
    <svg height="20" width="20">
      <use
        :xlink:href="require('@svg/sprites/common.svg') + '#search-md'"
        class="svg-icon"
      />
    </svg>
    <Input :placeholder="placeholder" />
  </div>
</template>

<script>
import Input from "@components/common/Input"
import { mapGetters } from "vuex"

  export default {
    name:'SearchBar',
    props: {
      placeholder: {
        type: String,
        default: ''
      }
    },
    components: { Input },
    computed: {
      ...mapGetters("app", {
        windowWidth: "GET_WINDOW_WIDTH"
      })
    }
  }
</script>
