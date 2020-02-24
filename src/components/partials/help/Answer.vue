<template>
  <div class="help-info">
    <Tile class="mb-3 help-info-answer">
      <div class="help-info-answer-main">
        <p class="header">{{selectedQuestion.label}}</p>
        <span id="bt_back" class="cursor-pointer" @click.stop="goBack()">
          <svg height="20" width="20" fill="#fff">
            <use :xlink:href="require('@svg/sprites/auth.svg') + '#close'" class="svg-icon" />
          </svg>
        </span>
      </div>
      <div class="answer-container">
        <p>{{selectedQuestion.content}}</p>
      </div>
    </Tile>
  </div>
</template>
<script>
import Tile from "@components/common/Tile";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { Tile },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  computed: {
    ...mapGetters("help", {
      selectedQuestion: "GET_SELECTED_QUESTION"
    })
  }
};
</script>
