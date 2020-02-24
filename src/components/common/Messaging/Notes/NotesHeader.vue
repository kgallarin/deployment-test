<template>
    <header class="messaging-notes-header d-flex">
        <div class="icon-container">

            <template v-if="windowWidth > 1279">
              <svg
                  fill="#374163"
                  class="svg-content"
                  width="18"
                  height="18"
              >
                  <use :xlink:href="require('@svg/sprites/messaging.svg') + '#king-icon'" class="svg-icon" />
              </svg>
            </template>


            <!-- back button -->
            <template v-if="windowWidth < 1280">
              <Button
                :click="() => this.$router.push({ name: 'ConversationPanel' })"
                class="back-button ml-0"
                variant="iconLink"
                icon_url="messaging.svg#back"
                iconH="43"
                iconW="43" />
            </template>
        </div>
        <p class="room-king">
          <svg
              v-if="windowWidth < 1280"
              fill="#374163"
              class="svg-content mr-2"
              width="18"
              height="18"
          >
            <use :xlink:href="require('@svg/sprites/messaging.svg') + '#king-icon'" class="svg-icon" />
          </svg>
          {{ king }}
        </p>

        <div class="menu"></div>
    </header>
</template>
<script>
import Button from "@components/common/Button";
import { mapGetters } from "vuex";

export default {
    name: 'NotesHeader',
    props: {
        king: {
            type: String,
            default: ''
        }
    },
    components: { Button },
    computed: {
      ...mapGetters("app", {
        windowWidth: "GET_WINDOW_WIDTH"
      })
    }
}
</script>
