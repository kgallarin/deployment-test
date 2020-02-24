<template>
  <div
    @mouseenter="onBrowseMessages"
    @mouseleave="unBrowseMessages"
    :class="[hovered ? 'visible-oflow' : 'invisible-oflow', 'message-conversation']"
    ref="messageFeed"
  >

    <template v-if="bubbleType === 'whitepink'">
      <white-pink-bubble
        v-for="message in messages"
        :data="message"
        hasTimestamp
        hasName
        :key="message.id"

        :class="{ 'sent' :message.user.type === 'performer' }"
        />
    </template>

     <template v-if="bubbleType === 'whiteblack'">
      <white-black-bubble
        v-for="message in messages"
        :data="message"
        hasTimestamp
        :hasName="message.user.type === 'performer' ? false : true"
        :key="message.id"
        :darkmode="darkmode"
        :class="{ 'sent' :message.user.type === 'performer' }"
        />
    </template>

  </div>
</template>

<script>
import WhitePinkBubble from '@components/common/Messaging/MessageBubble/WhitePinkBubbles'
import WhiteBlackBubble from '@components/common/Messaging/MessageBubble/WhiteBlackBubbles'
  
  export default {
    props: {
      bubbleType: {
        type: String,
        default: ''
      },
      messages: {
        type: Array,
        default: () => []
      },
      darkmode: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        hovered: false
      }
    },
    methods: {
      onBrowseMessages() {
        this.hovered = true
      },
      unBrowseMessages() {
        this.hovered = false
      },
      scrolltoNew() {
        var container = this.$refs.messageFeed
        container.scrollTop = container.scrollHeight - container.clientHeight
      },
      handleComposerChange() {
          setTimeout(() => {
            this.scrolltoNew()
          },100)
      }
    },
    components: { WhitePinkBubble, WhiteBlackBubble },
    watch: {
      messages(newMessage) {
        if (newMessage) {
          this.$nextTick(() => {
            this.scrolltoNew()
          });
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.scrolltoNew()
      });
    },
    created() {
      this.$EventBus.$on('fileBlobDetected',this.handleComposerChange)
    },
    beforeDestroy() {
      this.$EventBus.$off('fileBlobDetected',this.handleComposerChange)
    }
  }
</script>
