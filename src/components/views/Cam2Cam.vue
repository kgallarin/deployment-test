<template>
  <b-container
    :class="[mode === 'dark' ? '' : 'light-bg' ,'dashboard-wrapper', 'dashboard-container', 'private-show','cam2cam']"
    fluid
  >
    <!-- Setting & Basic Stat -->
    <div class="section1">
      <Setting class="flex-2-0 mr-3" />
      <MediaController :member="member" class="flex-3-0" />
    </div>

    <div class="section2">
      <!-- CAMERA FOR FOLLOWER -->
      <Tile :class="[mode === 'dark' ? '' : 'light-mode','camlive', 'camlive-cam2cam','mr-3']">
        <video autoplay :class="mode === 'dark' ? '' : 'video-light-mode'"></video>
      </Tile>

      <!-- CAMERA FOR MODEL -->
      <CamLive class="camlive-cam2cam" />
    </div>

    <!-- CHAT, LIVECAM, Media setting & Stat -->
    <div class="section3">
      <!-- CHAT -->

      <Tile :class="[mode === 'dark' ? 'dark-mode' : 'light-mode', 'chatbox-container']">
        <div class="chatbox">
          <div class="wrapper justify-content-between">
            <!-- Microphoe - display when a follower's microphone is turn on / hide when turn off -->
            <svg fill="#fff" class="svg-content" width="40" height="40">
              <use
                :xlink:href="require('@svg/sprites/liveshow.svg') + '#microphone-on-active'"
                class="svg-icon"
              />
            </svg>

            <!-- Setting font -->
            <FontSetting />
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

      <div class="flex-3-0 d-flex flex-column">
        <div class="container-left">
          <!-- NOTE -->
          <Note :name="member.name" class="mr-3 mb-3" />

          <div class="stat-container">
            <!-- Statistic -->
            <div class="wrapper mb-3">
              <!-- Statistics : token, spent on you, lastchat, time on private -->
              <StatCard :member="member" class="mr-3">
                <div :class="[mode === 'dark' ? 'dark-mode' : 'light-mode', 'card-header']">
                  <p class="title">Overall</p>
                </div>
              </StatCard>
              <!-- Button for ending the show, time on private, tokens you make -->
              <EndshowCard :data="data" />
            </div>
            <!-- End statistic -->
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

import Conversation from "@components/common/Messaging/Conversation";
import Composer from "@components/common/Messaging/Composer/Round";
import FontSetting from "@components/partials/liveshow/Chat/FontSetting.vue";

import CamLive from "@components/partials/liveshow/CamLive";

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
    EndshowCard,
    StatCard,
    Note
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
    })
  }
};
</script>