<template>
  <div :class="[isSent ? 'sent' : 'received', 'message', 'wp-bubbles' ]">
    <div class="d-flex justify-content-between">
      <p class="name" v-if="hasName">{{ data.user.username }}</p>
      <p class="timestamp" v-if="hasTimestamp"> {{ date }} </p>
    </div>
    <div class="content">
      <img v-if="data.attachment" :src="data.attachment.blob" class="attachment">
      {{ data.message }}
    </div>
  </div>
</template>

<script>
import moment from 'moment'
  export default {
    name: 'WhitePinkBubble',
    props: {
      isSent: {
        type: Boolean,
        default: false
      },
      styleType: {
        type: String,
        default:''
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
      }
    },
    computed: {
      date() {
        return moment(this.data.created_at).format('HH:mm')
      }
    }
  }
</script>
