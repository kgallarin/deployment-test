<template>
  <b-container
    :class="[mode === 'dark' ? '' : 'light-bg' ,'dashboard-wrapper', 'dashboard-container', 'liveshow']"
    fluid
  >
    <div class="section1">
      <Setting class="left" />
      <MediaController class="right" />
    </div>

    <div class="section2">
      <ChatPanel class="mr-3" />

      <div class="wrapper">
        <CamLive class="camlive-liveshow mb-3" />
        <RequestController class="mb-3 pb-0" />
        <GroupChatController class="mb-3" />
      </div>
    </div>
  </b-container>
</template>
<script>
import Setting from "@components/partials/liveshow/Setting";
import MediaController from "@components/partials/liveshow/MediaController";
import ChatPanel from "@components/partials/liveshow/Chat";
import CamLive from "@components/partials/liveshow/CamLive";
import VideoAndAudioController from "@components/partials/liveshow/VideoAndAudioController";
import MicrophoneController from "@components/partials/liveshow/MicrophoneController";
import GroupChatController from "@components/partials/liveshow/GroupChatController";
import RequestController from "@components/partials/liveshow/RequestController";
import { mapGetters } from "vuex";

export default {
  components: {
    Setting,
    MediaController,
    ChatPanel,
    CamLive,
    VideoAndAudioController,
    MicrophoneController,
    GroupChatController,
    RequestController
  },
  computed: {
    ...mapGetters("liveshow_mode", {
      mode: "GET_MODE"
    })
  }
};
</script>