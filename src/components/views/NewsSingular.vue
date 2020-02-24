<template>
  <div class="dashboard-wrapper">
    <b-container class="dashboard-container news-container-single" fluid>
      <!-- HEADER -->
      <div class="news-container-single-navigation">
        <Tile size="default" class="mb-3">
          <div class="d-flex justify-content-between w-100 pl-3 pr-3">
            <p
              class="title align-self-center m-0 pl-2"
            > {{ windowWidth < 768 ?  "NEWS" : news.header | uppercase }} </p>

            <div class="button-container">
              <router-link :to="{ name: 'News'}">
                <svg v-if="windowWidth < 768" width="43" height="43">
                  <use :xlink:href="require('@svg/sprites/common.svg') + '#back'" class="svg-icon" />
                </svg>
                <Button v-else :click="() => ''" :pill="false" variant="dark" class="w-100">
                  BACK
                </Button>
              </router-link>
            </div>
          </div>
        </Tile>
      </div>

      <!-- NEWS CONTENT CARD-->
      <Tile size="default" class="d-flex flex-column" ref="newsCard">
        <!-- {{this.getNewsCardHeight}} -->
        <div class="news-single-main" ref="newsDetail">
          <div v-if="windowWidth > 768" class="news-single-footer">
            <p class="mr-auto">{{news.date}}</p>
            <a @click="share">
              <svg name="share" height="27" width="27" class="mr-1">
                <use :xlink:href="require('@svg/sprites/common.svg') + '#share'" class="svg-icon" />
              </svg>
              <strong>Share</strong>
            </a>
          </div>

          <b-img class="news-single-image" :blank="false" blankColor="#777" :src="newsBanner"></b-img>
          <p v-if="windowWidth < 768" class="news-single-header">{{news.header}}</p>
          <div class="news-single-detail">
            {{news.detail}}
          </div>

          <div v-if="newsHeight >= (windowHeight - 328) " class="news-single-footer">
            <p class="mr-auto">{{news.date}}</p>
            <a @click="share">
              <svg name="share" height="27" width="27" class="mr-1">
                <use :xlink:href="require('@svg/sprites/common.svg') + '#share'" class="svg-icon" />
              </svg>
              <strong>Share</strong>
            </a>
          </div>
        </div>

        <div class="d-flex justify-content-around news-single-navigation">
          <Button :click="() => ''" :pill="false" variant="dark">
            PREVIOUS
          </Button>
          <Button :click="() => ''" :pill="false" variant="dark" class="ml-auto">
            NEXT
          </Button>
        </div>
      </Tile>
    </b-container>
  </div>
</template>

<script>
import Button from "@components/common/Button";
import Tile from "@components/common/Tile";
import { mapGetters } from "vuex";

export default {
  components: { Button, Tile },
  data() {
    return {
      newsHeight: 0,
      news: {
        id: 0,
        header: "This line will stand for title of the news 1",
        detail: `
        Many people were hoping that if the Democrats won control of Congress they would reverse the online gambling ban, but experts doubt they will even try or that if they do that the will be successful. Once the bill was passed and signed into law by the president, it became much harder to reverse the law. The democrats would need to bring up the law and get it to a vote, then after the vote passed it needs to go to the president for his signature. The problem with this is that the current president is the one who signed the bill into law in the first place.
        Many people were hoping that if the Democrats won control of Congress they would reverse the online gambling ban, but experts doubt they will even try or that if they do that the will be successful. Once the bill was passed and signed into law by the president, it became much harder to reverse the law. The democrats would need to bring up the law and get it to a vote, then after the vote passed it needs to go to the president for his signature. The problem with this is that the current president is the one who signed the bill into law in the first place.Many people were hoping that if the Democrats won control of Congress they would reverse the online gambling ban, but experts doubt they will even try or that if they do that the will be successful. Once the bill was passed and signed into law by the president, it became much harder to reverse the law. The democrats would need to bring up the law and get it to a vote, then after the vote passed it needs to go to the president for his signature. The problem with this is that the current president is the one who signed the bill into law in the first place.Many people were hoping that if the Democrats won control of Congress they would reverse the online gambling ban, but experts doubt they will even try or that if they do that the will be successful. Once the bill was passed and signed ar I am sorry to say you were mistaken and that you are going to have to wait a little longer, but that does not mean you need to sit quietly by.

        The key is to make sure that you are heard, write letters to congressmen, and attend protest rallies anything that will keep this issue in the front of the minds of the politicians so they know that just as the Republicans lost the house so can they

        Many people were hoping that if the Democrats won control of Congress they would reverse the online gambling ban, but experts doubt they will even try or that if they do that the will be successful. Once the bill was passed and signed into law by the president, it became much harder to reverse the law. The democrats would need to bring up the law and get it to a vote, then after the vote passed it needs to go to the president for his signature. The problem with this is that the current president is the one who signed the bill into law in the first place.
        Many people were hoping that if the Democrats won control of Congress they would reverse the online gambling ban, but experts doubt they will even try or that if they do that the will be successful. Once the bill was passed and signed into law by the president, it became much harder to reverse the law. The democrats would need to bring up the law and get it to a vote, then after the vote passed it needs to go to the president for his signature. The problem with this is that the current president is the one who signed the bill into law in the first place.Many people were hoping that if the Democrats won control of Congress they would reverse the online gambling ban, but experts doubt they will even try or that if they do that the will be successful. Once the bill was passed and signed into law by the president, it became much harder to reverse the law. The democrats would need to bring up the law and get it to a vote, then after the vote passed it needs to go to the president for his signature. The problem with this is that the current president is the one who signed the bill into law in the first place.Many people were hoping that if the Democrats won control of Congress they would reverse the online gambling ban, but experts doubt they will even try or that if they do that the will be successful. Once the bill was passed and signed ar I am sorry to say you were mistaken and that you are going to have to wait a little longer, but that does not mean you need to sit quietly by.

        The key is to make sure that you are heard, write letters to congressmen, and attend protest rallies anything that will keep this issue in the front of the minds of the politicians so they know that just as the Republicans lost the house so can they

        Many people were hoping that if the Democrats won control of Congress they would reverse the online gambling ban, but experts doubt they will even try or that if they do that the will be successful. Once the bill was passed and signed into law by the president, it became much harder to reverse the law. The democrats would need to bring up the law and get it to a vote, then after the vote passed it needs to go to the president for his signature. The problem with this is that the current president is the one who signed the bill into law in the first place.
        Many people were hoping that if the Democrats won control of Congress they would reverse the online gambling ban, but experts doubt they will even try or that if they do that the will be successful. Once the bill was passed and signed into law by the president, it became much harder to reverse the law. The democrats would need to bring up the law and get it to a vote, then after the vote passed it needs to go to the president for his signature. The problem with this is that the current president is the one who signed the bill into law in the first place.Many people were hoping that if the Democrats won control of Congress they would reverse the online gambling ban, but experts doubt they will even try or that if they do that the will be successful. Once the bill was passed and signed into law by the president, it became much harder to reverse the law. The democrats would need to bring up the law and get it to a vote, then after the vote passed it needs to go to the president for his signature. The problem with this is that the current president is the one who signed the bill into law in the first place.Many people were hoping that if the Democrats won control of Congress they would reverse the online gambling ban, but experts doubt they will even try or that if they do that the will be successful. Once the bill was passed and signed ar I am sorry to say you were mistaken and that you are going to have to wait a little longer, but that does not mean you need to sit quietly by.

        The key is to make sure that you are heard, write letters to congressmen, and attend protest rallies anything that will keep this issue in the front of the minds of the politicians so they know that just as the Republicans lost the house so can they.`,
        date: "MONDAY, OCTOBER 22ND",
        img: "studio_banner.jpg"
      }
    };
  },
  computed: {
    ...mapGetters("app", {
      windowWidth: "GET_WINDOW_WIDTH",
      windowHeight: "GET_WINDOW_HEIGHT"
    }),
    newsBanner() {
      return  require(`@images/auth/${this.news.img}`)
    }
  },
  filters: {
    uppercase: function(v) {
      return v.toUpperCase();
    }
  },
  mounted() {
    this.newsHeight = this.$refs.newsDetail.clientHeight
  },
  watch:{
    windowWidth(newVal, oldVal){
      this.newsHeight = this.$refs.newsDetail.clientHeight
    },
    windowHeight(newVal, oldVal){
      this.newsHeight = this.$refs.newsDetail.clientHeight
    }
  },
  methods: {
    share() {
      alert('share');
    }
  }
};
</script>
