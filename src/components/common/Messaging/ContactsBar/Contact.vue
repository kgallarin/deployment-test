<template>
  <div @click.prevent="clickContact(info)"
    :class="[{ 'light-hover' : mode !== 'dark'}, { 'contact-list-container' : styleType === 'online_list' }, { 'contacts-bar-contact' : styleType === 'default'}]">

    <!-- default contact list -->
    <template v-if="styleType === 'default'">
      <!-- username and status -->
      <div class="d-flex justify-content-between">
        <user-status :active="active" :name="info.name"/>
        <div class="options"></div>
      </div>

      <!-- recent message and timestamp -->
      <div class="d-flex justify-content-between">
        <p
          class="last-message"
        >Can you send me the client presso asdasdasjdnasjdnasjdnjasndjasndjnasjdnajsdnajsndjas</p>
        <p class="timestamp">1 min</p>
      </div>
    </template>


    <!-- with icons -->
    <template v-if="styleType === 'online_list'">
      
      <div class="d-flex" @click.prevent="clickContact(info)">
        <!-- USER ICON -->
       <svg :fill="mode === 'dark' ? '#fff' : '#374163'" class="svg-content" width="14" height="14" >
         <use :xlink:href="require('@svg/sprites/liveshow.svg') + '#user'" class="svg-icon" />
       </svg>

       <!-- NAME -->
       <p class="ml-2">{{info.name}}</p>
      </div>
      <!-- CHAT ICON  -->
      <!-- v-if="contact.vip && contact.active" @click="startChat" -->
      <div class="chatbox">
       <svg :fill="mode === 'dark' ? '#fff' : '#374163'" class="svg-content" width="14" height="14">
         <use :xlink:href="require('@svg/sprites/liveshow.svg') + '#chat'" class="svg-icon" />
       </svg>
      </div>
    </template>
  </div>

</template>

<script>
import UserStatus from "@components/common/UserStatus";
import { mapGetters } from "vuex";

export default {
  props: {
    active: {
      type: Boolean,
      default: false
    },
    info: {
      type: Object,
      default: {}
    },
    styleType: {
      type: String,
      default: 'default'
    },
    clickContact: {
      type: Function,
      default: () => {}
    }
  },
  components: {
    UserStatus
  },
  methods: {
  },
  methods: {
    clickme() {
      console.log(2)
    }
  },
  computed: {
    ...mapGetters("liveshow_mode", {
      mode: "GET_MODE"
    })
  },
  mounted() {
  }
};
</script>
