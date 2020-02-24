<template>
  <Tile size="default">
    <div class="display-flex">
      <div class="tile-with-icon">
        <div class="tile-icon">
          <svg height="40" width="40">
            <use :xlink:href="require('@svg/sprites/overview.svg') + `#${icon}`" fill="white" />
          </svg>
        </div>
        <div class="d-flex justify-content-start flex-column ml-3 mt-2 pb-2 pr-3">
          <div>
            <p :class="`${type} mb-2`">{{title}}</p>
            <p>{{message}}</p>
          </div>
        </div>
      </div>
    </div>
  </Tile>
</template>
<script>
import Tile from "@components/common/Tile";

export default {
  components: { Tile },
  props: {
    title: {
      type: String,
      default: ""
    },
    message: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "primary"
    },
    icon: {
      type: String,
      default: "info"
    }
  }
};
</script>
