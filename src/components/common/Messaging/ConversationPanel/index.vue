<template>
  <div class="conversation-panel w-100 d-flex flex-column justify-content-between">
    <!-- status bar starts -->
    <status-bar :is-active="true" last-seen="1m" user-name="John Doe" />

    <!-- conversation starts -->
    <!-- message-style
        @params
        bubble-type="whitepink" - uses WhitePinkBubblesComponent
    -->
    <conversation :messages="messageData" bubble-type="whitepink"/>

    <!-- message composer -->
    <composer :uploaded.sync="uploadedImg" />
  </div>
</template>

<script>
import Composer from '@components/common/Messaging/Composer/Block'
import StatusBar from '@components/common/Messaging/StatusBar/StatusBarDefault'
import Conversation from '@components/common/Messaging/Conversation'

import { mapGetters } from "vuex";
  export default {
    name:'ConversationPanel',
    props: {
      messages: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        uploadedImg: null,
      }
    },
    mounted() {
    },
    methods: {
      handleUploaded(e) {
        console.log(e)
      }
    },
    components: { StatusBar, Composer, Conversation },
    watch: {
      uploadedImg(newVal) {
        console.log(newVal,'nwe')
      }
    },
    computed: {
      ...mapGetters("messaging", {
        messageData: "GET_MESSAGE"
      }),
      ...mapGetters("app", {
        windowWidth: "GET_WINDOW_WIDTH"
      })
    }
  }
</script>
