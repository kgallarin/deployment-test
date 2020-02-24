<template>
  <!-- NEWS CONTENT CARD-->
  <div class="news-container-main">
    <div v-for="item in news" :key="item.id">
      <Tile size="default" class="mb-3 news-card" >
        <div class="m-0 main-content cursor-pointer" @click.stop="seeDetail">
            <div>
              <b-img class="news-image" :blank="false" blankColor="#777" :src="item.img"></b-img>
            </div>
          <div class="news-info d-flex flex-column justify-content-between">
                <p class="news-header">{{item.header}}</p>
                <p class="news-detail">{{item.detail}}</p>

            <div class="news-footer">
              <p class="mr-auto">{{item.date}}</p>
              <a @click.stop="share">
                <svg name="share" height="27" width="27" class="mr-1">
                  <use :xlink:href="require('@svg/sprites/common.svg') + '#share'" class="svg-icon" />
                </svg>
                Share
              </a>
            </div>
          </div>
        </div>
      </Tile>
    </div>
  </div>
</template>
<script>
import Button from "@components/common/Button";
import Tile from "@components/common/Tile";
import { mapGetters } from "vuex";
export default {
  components: { Button, Tile },
  props: {
    news: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters("app", {
      windowWidth: "GET_WINDOW_WIDTH"
    })
  },
  methods: {
    share() {
      alert('share');
    },
    seeDetail() {
      console.log("see detail")
      this.$router.push({name : "NewsSingle"});
    }
  }
};
</script>
