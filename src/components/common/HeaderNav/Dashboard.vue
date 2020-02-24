<template>
  <b-navbar
    :class="[mode === 'dark' ? 'dark-mode' : 'light-mode', 'navbar-main', 'full-width','studio-header','h-100']"
    toggleable="lg"
    type="dark"
  >
    <div class="main w-100 d-flex h-100 w-100">
      <router-link :to="{ name: 'Overview' }" href="#" class="cams-brand">
        <b-img height="30" width="30" :src="require('@svg/candycams-sm.svg')" alt="Candycammers Models"></b-img>
      </router-link>

      <div class="search-bar h-100 d-flex">
        <svg height="20" width="20">
          <use :xlink:href="require('@svg/sprites/common.svg') + '#search'" class="svg-icon" />
        </svg>
        <Input :value.sync="searchVal" type="text" placeholder="find.." />
      </div>
      <div class="studio-header--navigation h-100">
        <ul class="d-flex h-100">
          <li>
            <router-link exact :to="{ name: 'Overview' }" href="#">Overview</router-link>
          </li>
          <li>
            <router-link exact :to="{ name: 'Profile' }" href="#">Profile</router-link>
          </li>
          <li>
            <router-link exact :to="{ name: 'Contents' }" href="#">Contents</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Messaging' }" href="#">Message</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Payout' }" href="#">Payout</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'EarnMore' }" href="#">Earn more</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Help' }" href="#">Help</router-link>
          </li>
        </ul>
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
  components: { Input, Button },
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
