<template>
  <Tile :class="[mode === 'dark' ? 'dark-mode' : 'light-mode', 'liveshow-message-container']">
    <div :class="[mode === 'dark' ? 'dark-mode' : 'light-mode', 'liveshow-message']">
      <!-- All contacts -->
      <contacts-bar :data="contactsData" />

      <div :class="[mode === 'dark' ? 'dark-mode' : 'light-mode','conversation']">
        <!-- Adjust font size is here -->
        <FontSetting />

        <!-- VIP Info is here (Only for private chat) -->
        <FollowerInfo v-if="activeTab.id === 1" />

        <!-- All live conversation go here -->
        <div class="conversation-main-container">
          <conversation :messages="messageData" bubble-type="whiteblack" :darkmode="mode === 'dark' ? true : false" />
        </div>
        <!-- Input for start chat -->
        <composer />

      </div>
    </div>
  </Tile>
</template>
<script>
import Tile from "@components/common/Tile";

import Conversation from "@components/common/Messaging/Conversation";
import Composer from "@components/common/Messaging/Composer/Round";

import ContactsBar from "@components/common/Messaging/ContactsBar/Dynamic";

import FontSetting from "@components/partials/liveshow/Chat/FontSetting.vue";
import FollowerInfo from "@components/partials/followers_info/default.vue";

import { mapGetters } from "vuex";

export default {
  mounted() {},
  components: {
    Tile,
    ContactsBar,
    Conversation,
    Composer,
    FontSetting,
    FollowerInfo
  },
  computed: {
    ...mapGetters("liveshow", {
      activeTab: "GET_ACTIVE_TAB"
    }),
    ...mapGetters("liveshow_mode", {
      mode: "GET_MODE"
    }),
    ...mapGetters("messaging", {
      messageData: "GET_MESSAGE"
    }),
    ...mapGetters("contacts", {
      contactsData: "GET_CONTACTS"
    })
  }
};
</script>