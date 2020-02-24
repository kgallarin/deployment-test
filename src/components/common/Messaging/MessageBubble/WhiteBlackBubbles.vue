<template>
  <div
    :class="[isSent ? 'sent' : 'received', darkmode ? 'dark' : 'light','message', 'wb-bubbles' ]"
  >
    <div class="d-flex justify-content-between">
      <p class="name" v-if="hasName" :style="{fontSize: fontSize}">{{ data.user.username }}:&nbsp;</p>
    </div>
    <div class="content" :style="{fontSize: fontSize}">
 
      <img v-if="data.attachment" :src="data.attachment.blob" class="attachment" />
      {{ data.message }}
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapGetters } from "vuex";

export default {
  name: "WhitePinkBubble",
  props: {
    isSent: {
      type: Boolean,
      default: false
    },
    styleType: {
      type: String,
      default: ""
    },
    hasTimestamp: {
      type: Boolean,
      default: false
    },
    hasName: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default: () => {}
    },
    darkmode: {
      type: Boolean,
      default: true
    }
  },
  computed: {
     ...mapGetters("font_size", {
      fontSize: "GET_FONT_SIZE"
    }),
    date() {
      return moment(this.data.created_at).format("HH:mm");
    }
  }
};
</script>
