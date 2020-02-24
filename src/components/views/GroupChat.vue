<template>
  <b-container
    :class="[mode === 'dark' ? '' : 'light-bg' ,'dashboard-wrapper', 'dashboard-container', 'private-show', 'groupchat']"
    fluid
  >
    <!-- Setting & Basic Stat -->
    <div class="section1">
      <Setting class="flex-2-0 mr-3" />
      <MediaController class="flex-3-0" />
    </div>

    <!-- CHAT, LIVECAM, Media setting & Stat -->
    <div class="section2">
      <!-- CHAT -->

      <Tile :class="[mode === 'dark' ? 'dark-mode' : 'light-mode', 'chatbox-container']">
        <div class="chatbox">
          <div class="wrapper justify-content-between">
            <FollowerInfo class="align-self-start" :showStat="false"/>
            <!-- Setting font -->
            <FontSetting />
          </div>

          <!-- For chat -->
          <div class="conversation-main-container">
            <conversation :messages="messageData" bubble-type="whiteblack" :darkmode="mode === 'dark' ? true : false" />
          </div>

          <!-- message composer -->
          <composer />
        </div>
      </Tile>

      <div class="flex-3-0 d-flex flex-column">
        <CamLive class="camlive-groupchat mb-3" />

        <div class="container-left wrapper">
          <ChatboxControl class="mr-3 mb-3" />
          <div class="stat-container">
            <div class="wrapper mb-3">
              <ParticipantInfo v-if="member !== null" />

              <EndshowCard :data="data" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </b-container>
</template>
<script>
import Tile from "@components/common/Tile";

import Setting from "@components/partials/liveshow/Setting";
import MediaController from "@components/partials/liveshow/MediaController";

//Private Chat box
import Conversation from "@components/common/Messaging/Conversation";
import Composer from "@components/common/Messaging/Composer/Round";
import FontSetting from "@components/partials/liveshow/Chat/FontSetting.vue";

import CamLive from "@components/partials/liveshow/CamLive";

import EndshowCard from "@components/partials/liveshow/EndshowCard";

import ChatboxControl from "@components/partials/groupchat/ChatboxControl";
import ParticipantInfo from "@components/partials/groupchat/ParticipantInfo";
import FollowerInfo from "@components/partials/followers_info/default.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    Tile,
    Setting,
    MediaController,
    Conversation,
    Composer,
    FontSetting,
    CamLive,
    EndshowCard,
    ParticipantInfo,
    ChatboxControl,
    FollowerInfo
  },
  data() {
    return {
      data: {
        timeOnPrivate: "2:22:33",
        token: "29,480"
      }
    };
  },
  computed: {
    ...mapGetters("liveshow_mode", {
      mode: "GET_MODE"
    }),
    ...mapGetters("member_info", {
      member: "GET_ACTIVE_MEMBER"
    }),
     ...mapGetters("messaging", {
      messageData: "GET_MESSAGE"
    }),
  }
};
</script>
