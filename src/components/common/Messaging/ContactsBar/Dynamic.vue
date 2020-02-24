<template>
  <div :class="[mode === 'dark' ? 'dark-mode dark-border-right' : 'light-mode light-border-right','liveshow-contacts']">
    <div :class="[mode === 'dark' ? 'dark-border-bottom' : 'light-border-bottom', 'header']">
      <b-button-group class="d-flex w-100 btn-group-justified">
        <!-- USER -->
        <b-button
          :class="[getActiveTab(0), getMode(),'nav-bnt']"
          @click="setActiveTab(0)"
        >User (9,999)</b-button>

        <!-- CHAT -->
        <b-button
          :class="[getActiveTab(1), getMode(), 'nav-bnt']"
          @click="setActiveTab(1)"
        >
          Chat (2)
          <div class="chat-active"></div>
        </b-button>
      </b-button-group>
    </div>
    
    <div class="main">
       <contact-list :clicked="() => onClickContact" :type="activeTab.id === 0 ? 'online_list' : 'default'" :dataList="data" />
    </div>
  </div>
</template>
<script>
import Button from "@components/common/Button";
import ContactList from './ContactList'

import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Button,
    ContactList
  },
  props: {
      data: {
        type: Array,
        default: () => []
      },
      type: {
        type: String,
        default:'default'
      }
    },
  data() {
    return {
      isActive: true
    };
  },
  methods: {
    ...mapActions({
      setTab: "liveshow/ON_CLICK_TAB"
    }),
    setActiveTab(id) {
      if (id === 0) {
        this.setTab({
          tabData: { id: 0, name: "USER" }
        });
      } else {
        this.setTab({
          tabData: { id: 1, name: "CHAT" }
        });
      }
    },
    getActiveTab(tab_id) {
      if(this.activeTab.id === tab_id) {
        return 'active';
      } else {
        return 'inactive'
      }
    },
    getMode() {
      if(this.mode === 'dark') {
        return ''
      } else {
        return 'light-bg'
      }
    }
  },
  computed: {
    ...mapGetters("liveshow", {
      activeTab: "GET_ACTIVE_TAB"
    }),
    ...mapGetters("liveshow_mode", {
      mode: "GET_MODE"
    })
  }
};
</script>
