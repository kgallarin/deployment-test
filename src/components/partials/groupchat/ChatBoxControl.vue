<template>
  <Tile
    :class="[mode === 'dark' ? '' : 'light-mode','groupchat' ,'member-info-container', 'chatbox-control']"
  >
    <!-- HEADER -->
    <div :class="[mode === 'dark' ? 'dark-mode' : 'light-mode', 'header', 'center']">
      <div class="wrapper">
        <svg
          :fill="mode === 'dark' ? '#fff' : '#374163'"
          class="svg-content"
          width="18"
          height="18"
        >
          <use :xlink:href="require('@svg/sprites/liveshow.svg') + '#vip'" class="svg-icon" />
        </svg>
        <p class="name">Chatbox control</p>
      </div>
    </div>

    <div class="content-container mt-3">
      <div class="content" @click.prevent="setSelectedMember(null)">
        <span>Public Chat</span>
        <span>({{members.length}})</span>
      </div>
      <div class="content" v-for="member in members" :key="member.id" @click.prevent="setSelectedMember(member.id)">
        <span>{{member.name}}</span>
        <span>(2)</span> <!-- number of private chat -->
      </div>
    </div>
  </Tile>
</template>
<script>
import Tile from "@components/common/Tile";
import EditableNote from "@components/common/Messaging/Notes/EditableNote";

import { mapGetters, mapActions } from "vuex";

export default {
  components: { Tile, EditableNote },
  data() {
    return {
      member: null,
      viewDetail: false,
      style: `-webkit-transform: scaleY(-1);
              -moz-transform: scaleY(-1);
              -o-transform: scaleY(-1);
              transform: scaleY(-1);`
    };
  },
  methods: {
    ...mapActions({
      selectedMember: "member_info/SET_SELECTED_MEMBER"
    }),
    setSelectedMember(id) {
      this.selectedMember({memberid: id})
    },
    toggleContent() {
      this.viewDetail = !this.viewDetail;
      if (this.viewDetail) {
        this.style = "";
      } else {
        this.style = ` -webkit-transform: scaleY(-1);
                        -moz-transform: scaleY(-1);
                        -o-transform: scaleY(-1);
                        transform: scaleY(-1);`;
      }
    }
  },
  computed: {
    ...mapGetters("liveshow_mode", {
      mode: "GET_MODE"
    }),
    ...mapGetters("member_info", {
      members: "GET_MEMBERS"
    })
  }
};
</script>
