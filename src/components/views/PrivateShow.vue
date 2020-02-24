<template>
  <b-container
    :class="[mode === 'dark' ? '' : 'light-bg' ,'dashboard-wrapper', 'dashboard-container', 'private-show']"
    fluid
  >
    <!-- Setting & Basic Stat -->
    <div class="section1">
      <Setting class="flex-1-0 mr-3" />
      <MediaController class="flex-2-0" />
    </div>

    <!-- CHAT, LIVECAM, and Stat -->
    <div class="section2">
      <Tile
        :class="[mode === 'dark' ? 'dark-mode' : 'light-mode', 'chatbox-container', 'flex-1-0']"
      >
        <div class="chatbox">
          <div class="wrapper justify-content-between">
            <!-- Microphoe : 2 way audio featues -->
            <svg fill="#fff" class="svg-content" width="40" height="40" v-if="isTwoWayAudio">
              <use
                :xlink:href="require('@svg/sprites/liveshow.svg') + '#microphone-on-active'"
                class="svg-icon"
              />
            </svg>

            <!-- Setting font -->
            <FontSetting class="ml-auto"/>
          </div>

          <!-- For chat -->
          <div class="conversation-main-container">
            <conversation
              :messages="messageData"
              bubble-type="whiteblack"
              :darkmode="mode === 'dark' ? true : false"
            />
          </div>
          <Composer />
        </div>
      </Tile>

      <div class="flex-2-0 d-flex flex-column">
        <!-- Webcam -->
        <CamLive class="camlive-privateshow mb-3" />

        <!-- Note and overall stat -->
        <div class="container-left">
          <Note :name="member.name" class="mr-3 mb-3" />

          <div class="stat-container">
            <div class="wrapper mb-3">
              <StatCard class="mr-3" :member="member">
                <div :class="[mode === 'dark' ? 'dark-mode' : 'light-mode', 'card-header']">
                  <p class="title">Overall</p>
                </div>
              </StatCard>
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
import VideoAndAudioController from "@components/partials/liveshow/VideoAndAudioController";
import MicrophoneController from "@components/partials/liveshow/MicrophoneController";

import EndshowCard from "@components/partials/liveshow/EndshowCard";
import StatCard from "@components/partials/followers_info/StatsCard";
import Note from "@components/partials/followers_info/Note";

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
    VideoAndAudioController,
    MicrophoneController,
    EndshowCard,
    StatCard,
    Note
  },
  data() {
    return {
      data: {
        timeOnPrivate: "2:22:33",
        token: "29,480"
      },
      isTwoWayAudio: true
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
    })
  }
};
</script>
