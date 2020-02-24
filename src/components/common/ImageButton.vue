<template>
  <div class="image-button-layout h-100" @click="click">
    <div class="border-dot">
      <svg :height="iconH" :width="iconW">
        <use :xlink:href="require('@svg/sprites/common.svg') + `#${iconName}`" class="svg-icon" />

      </svg>
      <p class="mt-2">{{iconTitle}}</p>
    </div>
  </div>
</template>
<script>
import Tile from "@components/common/Tile";

export default {
  name: "",
  components: { Tile },
  props: {
    iconW: {
      type: Number,
      default: 47
    },
    iconH: {
      type: Number,
      default: 43
    },
    iconTitle: {
      type: String,
      default: "upload"
    },
    iconName: {
      type: String,
      default: "upload"
    },
    click: {
      type: Function,
      default: () => {}
    }
  },
  mounted() {}
};
</script>
