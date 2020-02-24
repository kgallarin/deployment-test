<template>
  <Tile
    :class="[mode === 'dark' ? '' : 'light-mode', 'member-info-container']"
  >
    <!-- Name & Button -->
    <div :class="[mode === 'dark' ? 'dark-mode' : 'light-mode', 'header']">
      <div class="wrapper">
        <svg
          :fill="mode === 'dark' ? '#fff' : '#374163'"
          class="svg-content"
          width="18"
          height="18"
        >
          <use :xlink:href="require('@svg/sprites/liveshow.svg') + '#vip'" class="svg-icon" />
        </svg>
        <p class="name">{{name}}</p>
      </div>
    </div>

    <editable-note :note="note" />
  
  </Tile>
</template>
<script>
import Tile from "@components/common/Tile";
import EditableNote from "@components/common/Messaging/Notes/EditableNote";

import { mapGetters } from "vuex";
export default {
  components: { Tile, EditableNote },
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      viewDetail: false,
      style: `-webkit-transform: scaleY(-1);
              -moz-transform: scaleY(-1);
              -o-transform: scaleY(-1);
              transform: scaleY(-1);`
    };
  },
  methods: {
    toggleContent() {
      this.viewDetail = !this.viewDetail;
      if (this.viewDetail) {
        this.style = "";
      } else {
        this.style = ` -webkit-transform: scaleY(-1);
                        -moz-transform: scaleY(-1);
                        -o-transform: scaleY(-1);
                        transform: scaleY(-1);`;
      }
    }
  },
  computed: {
    ...mapGetters("liveshow_mode", {
      mode: "GET_MODE"
    }),
    ...mapGetters("note", {
      note: "GET_NOTE"
    })
  }
};
</script>