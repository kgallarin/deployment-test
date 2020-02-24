<template>
  <!-- Follower Information -->
  <div :class="[mode === 'dark' ? '' : 'light-mode', 'member-info-container']">
    <!-- Name & User icon -->
    <div class="header" @click="toggleContent" v-if="member">
      <div class="wrapper">
        <svg
          :fill="mode === 'dark' ? '#fff' : '#374163'"
          class="svg-content"
          width="18"
          height="18"
        >
          <use :xlink:href="require('@svg/sprites/liveshow.svg') + '#vip'" class="svg-icon" />
        </svg>

        <p class="member-name">{{member.name}}</p>

        <svg
          :fill="mode === 'dark' ? '#fff' : '#374163'"
          class="svg-content"
          width="18"
          height="18"
          :style="style"
        >
          <use :xlink:href="require('@svg/sprites/liveshow.svg') + '#up'" class="svg-icon" />
        </svg>
      </div>
    </div>

    <!-- Member Note & Statistics -->
    <div class="content" v-if="viewDetail">
      <!-- note -->
      <editable-note :note="note" :mode="mode" />

      <hr class="separator" />

      <StatsDefault v-if="showStat" />
    </div>
  </div>
</template>
<script>
import EditableNote from "@components/common/Messaging/Notes/EditableNote";
import StatsDefault from "./StatsDefault";

import { mapGetters } from "vuex";

export default {
  components: { EditableNote, StatsDefault },
  props: {
    name: {
      type: String,
      default: ""
    },
    showStat: {
      type: Boolean,
      default: true
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
    ...mapGetters("member_info", {
      member: "GET_ACTIVE_MEMBER"
    }),
    ...mapGetters("note", {
      note: "GET_NOTE"
    })
  }
};
</script>
