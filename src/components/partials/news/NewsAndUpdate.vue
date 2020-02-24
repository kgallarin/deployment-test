<template>
  <Tile class="d-flex flex-column mt-3 pb-3">
    <!-- News Hader -->
    <div class="d-flex justify-content-between m-1 p-4">
      <p class="title">NEWS AND UPDATE</p>
      <Button :click="() => this.viewAllNews()" :pill="false" variant="dark" class="m-0">
        <strong>VIEW ALL</strong>
      </Button>
    </div>

    <div class="content d-flex" v-for="item in news" :key="item.id">
      <div class="flex-column w-100">
        <span class="line">
          <span>{{item.date}}</span>
        </span>
        <div class="d-flex m-1 pl-4">
          <!-- image goes here -->
          <b-img
            class="main-img rounded"
            :blank="false"
            blankColor="#777"
            :src="`${item.img}`"
            alt="Cams models news"
          ></b-img>
          <!-- title and detail goes here -->
          <div class="d-flex flex-column align-items-start pl-4">
            <strong class="mb-1">{{item.header}}</strong>
            <label
              class="text-wrap"
            >{{item.detail}}</label>
          </div>
        </div>
      </div>
    </div>
  </Tile>
</template>
<script>
import Button from "@components/common/Button";
import Tile from "@components/common/Tile";

export default {
  components: { Button, Tile },
  props: {
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      userInput: false,

      news:[
          {
            id: 0,
            header: "Update the policy for all model",
            detail:
              "Drogi Marszałku, Wysoka Izbo. PKB rośnie Nikt inny was nie trzeba udowadniać, ponieważ zakres i unowocześniania systemu.",
            date: "MONDAY, OCTOBER 22ND",
            img: "https://picsum.photos/200",
          },
          {
            id: 2,
            header: "Update the policy for all model",
            detail:
              "Drogi Marszałku, Wysoka Izbo. PKB rośnie Nikt inny was nie trzeba udowadniać, ponieważ zakres i unowocześniania systemu.",
            date: "MONDAY, OCTOBER 22ND",
            img: "https://picsum.photos/200"
          }
        ]
      }

  },
  methods: {
    viewAllNews() {
      console.log("news")
      this.$router.push({name : "News"});
    }
  }
};
</script>
