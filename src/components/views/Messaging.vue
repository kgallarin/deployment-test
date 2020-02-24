<template>
  <b-container class="dashboard-wrapper dashboard-container payout" fluid>
    <template v-if="windowWidth > 1279">
      <div class="messaging-main w-100 w-100">
        <!-- left bar -->
        <contacts-bar :data="contactsData" />
        <!-- mid -->
        <conversation-panel />
        <!-- right -->
        <Notes />
      </div>
    </template>

    <!-- mobile template please see components for other settings -->
    <template v-else>
      <div class="messaging-main w-100 w-100">
        <transition name="fade" mode="out-in" appear>
          <router-view :data="contactsData" />
        </transition>
      </div>
    </template>

  </b-container>
</template>

<script>
import ContactsBar from '@components/common/Messaging/ContactsBar/Default'
import ConversationPanel from '@components/common/Messaging/ConversationPanel'
import Notes from '@components/common/Messaging/Notes'

import { mapGetters } from "vuex";

  export default {
    mounted() {
    },
    components: { ContactsBar, ConversationPanel, Notes },
    computed: {
      ...mapGetters("app", {
        windowWidth: "GET_WINDOW_WIDTH"
      }),
      ...mapGetters("contacts", {
        contactsData: "GET_CONTACTS"
      })
    }
  }

</script>
