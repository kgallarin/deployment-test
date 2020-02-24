<template>
  <div class="dashboard-wrapper">
    <b-container class="dashboard-container news-container" fluid>
      <!-- HEADER -->
      <div class="news-container-navigation">
        <Tile size="default" class="mb-3">
          <div class="d-flex justify-content-between w-100 pl-3 pr-3">
            <p class="title align-self-center m-0 pl-2">NEWS</p>
            <div class="button-container">
              <router-link :to="{ name: 'Overview'}">
                <svg v-if="windowWidth < 768" width="43" height="43">
                  <use :xlink:href="require('@svg/sprites/common.svg') + '#back'" class="svg-icon" />
                </svg>
                <Button v-else :click="() => ''" :pill="false" variant="dark" class="w-100">
                  <strong>BACK</strong>
                </Button>
              </router-link>
            </div>
          </div>
        </Tile>
      </div>

      <!-- NEWS CARD -->
      <NewsCard :news="newsInfo"></NewsCard>

    </b-container>
  </div>
</template>

<script>
import Button from "@components/common/Button";
import Tile from "@components/common/Tile";
import NewsCard from "@components/partials/news/NewsCard";

import { mapGetters } from "vuex";

export default {
  components: { Button, Tile, NewsCard },
  data() {
    return {
      newsInfo: [
        {
          id: 0,
          header: "This line will stand for title of the news 1",
          detail:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          date: "MONDAY, OCTOBER 22ND",
          img: "https://picsum.photos/200"
        },
        {
          id: 1,
          header: "This line will stand for title of the news 2",
          detail:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          date: "MONDAY, OCTOBER 22ND",
          img: "https://picsum.photos/201"
        },
        {
          id: 2,
          header: "This line will stand for title of the news 3",
          detail:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          date: "MONDAY, OCTOBER 22ND",
          img: "https://picsum.photos/202"
        },
        {
          id: 3,
          header: "This line will stand for title of the news 4",
          detail:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          date: "MONDAY, OCTOBER 22ND",
          img: "https://picsum.photos/203"
        },
        {
          id: 4,
          header: "This line will stand for title of the news 5",
          detail:
            "Lorempublishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          date: "MONDAY, OCTOBER 22ND",
          img: "https://picsum.photos/204"
        }
      ]
    };
  },
  computed: {
    ...mapGetters("app", {
      windowWidth: "GET_WINDOW_WIDTH"
    })
  }
};
</script>
