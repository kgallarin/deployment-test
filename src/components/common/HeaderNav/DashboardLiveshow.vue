<template>
  <b-navbar
    :class="[mode === 'dark' ? 'dark-mode' : 'light-mode', 'navbar-main', 'full-width','studio-header','h-100']"
    toggleable="lg"
    type="dark"
  >
    <div class="main d-flex h-100 w-100">
      <div class="navbar">
        <b-img :src="require('@svg/candycams.svg')" alt="Candycammers Models"></b-img>
      </div>

      <div class="d-flex flex-row align-items-center justify-content-center w-100">
        <!-- This status is depending on model action -->
        <status-tag color='emerald' status="Online" class="m-1" />
        <status-tag color='green-blue' status="Vibratoy" class="m-1" />
        <status-tag color='warm-pink' status="Private Cam" class="m-1" />
        <status-tag color='frog-green' status="2 Ways Audio" class="m-1" />
        <status-tag color='bright-orange' status="Cam2Cam" class="m-1" />
        <status-tag color='tangerine' status="Group Chat" class="m-1" />
      </div>
      <div class="studio-header--right-container d-flex align-items-center">
        <b-img
          v-bind="mainProps"
          src="https://picsum.photos/200"
          rounded="circle"
          alt="Cams models user"
        ></b-img>
      </div>
    </div>
  </b-navbar>
</template>

<script>
import Input from "@components/common/Input";
import Button from "@components/common/Button";
import StatusTag from "@components/common/StatusTag";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      searchVal: "",
      mainProps: {
        blank: false,
        blankColor: "#777",
        width: 75,
        height: 75,
        class: "m1"
      }
    };
  },
  components: { Input, Button, StatusTag },
  computed: {
    ...mapGetters("app", {
      windowWidth: "GET_WINDOW_WIDTH"
    }),
    ...mapGetters("liveshow_mode", {
      mode: "GET_MODE"
    })
  },
  methods: {}
};
</script>
