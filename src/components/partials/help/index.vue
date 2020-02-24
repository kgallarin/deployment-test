<template>
  <div class="help-info">
    <div class="section-1">
      <!-- General Question -->
      <Tile class="wrapper">
        <div class="help-info-main">
          <p class="header">General Question</p>
          <HelpList :dataList="generalQuestion" :click="(question) => showAnswer(question)" />
        </div>
        <div class="svg-wrapper">
          <svg height="105" width="95" class="bg-icon">
            <use :xlink:href="require('@svg/sprites/help.svg') + '#site'" />
          </svg>
        </div>
      </Tile>

      <!-- Credit Purchase -->
      <Tile class="wrapper">
        <div class="help-info-main">
          <p class="header">Credit Purchase</p>
          <HelpList :dataList="creditPurchase" :click="(question) => showAnswer(question)" />
        </div>
        <div class="svg-wrapper">
          <svg height="95" width="95" class="bg-icon top-0">
            <use :xlink:href="require('@svg/sprites/help.svg') + '#credit'" />
          </svg>
        </div>
      </Tile>

      <!-- Member Account -->
      <Tile class="wrapper">
        <div class="help-info-main">
          <p class="header">Member Account</p>
          <HelpList :dataList="memberAccount" :click="(question) => showAnswer(question)" />
        </div>
        <div class="svg-wrapper">
          <svg height="105" width="95" class="bg-icon">
            <use :xlink:href="require('@svg/sprites/help.svg') + '#member'" />
          </svg>
        </div>
      </Tile>

      <!-- Livewebcam Models -->
      <Tile class="wrapper">
        <div class="help-info-main">
          <p class="header">Livewebcam Models</p>
          <HelpList :dataList="liveWebcamModels" :click="(question) => showAnswer(question)" />
        </div>
        <div class="svg-wrapper">
          <svg height="95" width="95" class="bg-icon">
            <use :xlink:href="require('@svg/sprites/help.svg') + '#model'" />
          </svg>
        </div>
      </Tile>
    </div>
    <div class="section-2">
      <Tile class="search-container">
        <label class="header">Hello, how can we help you?</label>
        <div class="position-relative w-100 autocomplete-container">
          <div class="autocomplete-wrapper">
            <Autocomplete :items="allQuestions" filterBy='label' :click="showAnswer" />
          </div>
        </div>
      </Tile>
      <Tile class="wrapper">
        <b-row class="w-100">
          <b-col sm="12" md="6">
            <!-- Useful tips and tricks -->
            <div class="help-info-main">
              <p class="header">Useful tips and tricks</p>
              <HelpList :dataList="usefulTips" :click="(question) => showAnswer(question)" />
            </div>

            <!-- Site related information -->
            <div class="help-info-main">
              <p class="header">Site related information</p>
              <HelpList :dataList="siteRelated" :click="(question) => showAnswer(question)" />
            </div>
          </b-col>
          <b-col sm="12" md="6">
            <!-- Technical information -->
            <div class="help-info-main">
              <p class="header">Technical information</p>
              <HelpList :dataList="technicalInfo" :click="(question) => showAnswer(question)" />
            </div>

            <!-- OTHER QUESTIONS -->
            <div class="help-info-main">
              <p class="header">OTHER QUESTIONS</p>
              <HelpList :dataList="others" :click="(question) => showAnswer(question)" />
            </div>
          </b-col>
        </b-row>
      </Tile>
    </div>
  </div>
</template>
<script>
import Tile from "@components/common/Tile";
import Input from "@components/common/Input";
import HelpList from "@components/partials/help/HelpList";
import Autocomplete from "@components/partials/help/AutoComplete"
import { mapGetters, mapActions } from "vuex";

export default {
  components: { Tile, Input, HelpList, Autocomplete},
  data() {
    return {};
  },
  mounted() {},
  methods: {
    ...mapActions({
      setSelectedQuestion: "help/SET_SELECTED_QUESTION"
    }),
    showAnswer(question) {
      //set selected question
      this.setSelectedQuestion({
        question: question
      });
      //go to answer page
      this.$router.push({
        name: "Answer",
        params: { id: question.id }
      });
    }
  },
  computed: {
    ...mapGetters("help", {
      generalQuestion: "GET_GENERAL_QUESTION",
      creditPurchase: "GET_CREDIT_PURCHASE",
      memberAccount: "GET_MEMBER_ACCOUNT",
      liveWebcamModels: "GET_LIVEWEBCAM_MODELS",
      usefulTips: "GET_USEFUL_TIPS_AND_TRICKS",
      siteRelated: "GET_SITE_RELATED_INFO",
      technicalInfo: "GET_TECHNICAL_INFO",
      others: "GET_OTHER_QUESTIONS",
      allQuestions: "GET_ALL_QUESTIONS"
    })
  }
};
</script>
