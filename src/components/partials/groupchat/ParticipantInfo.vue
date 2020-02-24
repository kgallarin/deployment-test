<template>
  <StatCard class="mr-3" :member="member" :timeOnPrivate="true">
    <!-- participant name-->
    <div class="d-flex justify-content-between m-3">
      <label class="bold">{{member.name}}</label>
      <div class="d-flex">
        <svg width="30" height="30" id="prev-user" @click.prevent="prevMember">
          <use :xlink:href="require('@svg/sprites/common.svg') + '#prev-user'" class="svg-icon" />
        </svg>
        <svg width="30" height="30" id="next-user" @click.prevent="nextMember">
          <use :xlink:href="require('@svg/sprites/common.svg') + '#next-user'" class="svg-icon" />
        </svg>
      </div>
    </div>
  </StatCard>
</template>
<script>
import Tile from "@components/common/Tile";
import StatCard from "@components/partials/followers_info/StatsCard";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Tile,
    StatCard
  },
  methods: {
     ...mapActions({
      nextMember: "member_info/NEXT_MEMBER",
      prevMember: "member_info/PREV_MEMBER"
    })
  },
  computed: {
      ...mapGetters("member_info", {
      member: "GET_ACTIVE_MEMBER"
    })
  }
};
</script>