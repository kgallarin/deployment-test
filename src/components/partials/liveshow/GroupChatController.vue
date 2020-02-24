<template>
  <Tile :class="[mode === 'dark' ? '' : 'light-mode']">
    <div :class="[mode === 'dark' ? '' : 'light-mode' , 'groupchat-controller']">
      <div class="section1">
        <div :class="[mode === 'dark' ? '' : 'dark-font', 'wrapper']">
          <label>Group private</label>
          <label>2/4</label>
        </div>

        <!-- Show Number of people in chatroom in Progress bar-->
        <progress-bar
          :class="[{ 'fullwidth bordered' : true }, { 'dark-mode-rule': mode === 'dark' }, {'light-rule-mode' : mode === 'light'}]"
          color="warm-pink"
          :value="2"
          :max="4"
        />

        <div :class="[mode === 'dark' ? '' : 'dark-font', 'user-container']">
          <div class="user-item">
            <svg :fill="mode === 'dark' ? '#fff' : '#374163'" class="svg-content" width="14" height="14">
              <use :xlink:href="require('@svg/sprites/liveshow.svg') + '#user'" class="svg-icon" />
            </svg>
            <p class="ml-2">Amarachi Nkechi</p>
          </div>

          <div class="user-item">
            <svg :fill="mode === 'dark' ? '#fff' : '#374163'" class="svg-content" width="14" height="14">
              <use :xlink:href="require('@svg/sprites/liveshow.svg') + '#user'" class="svg-icon" />
            </svg>
            <p class="ml-2">Anatoliy Shcherbatykh</p>
          </div>

          <div class="user-item">
            <svg :fill="mode === 'dark' ? '#fff' : '#374163'" class="svg-content" width="14" height="14">
              <use :xlink:href="require('@svg/sprites/liveshow.svg') + '#user'" class="svg-icon" />
            </svg>
            <p class="ml-2">––– empty –––</p>
          </div>

          <div class="user-item">
            <svg :fill="mode === 'dark' ? '#fff' : '#374163'" class="svg-content" width="14" height="14">
              <use :xlink:href="require('@svg/sprites/liveshow.svg') + '#user'" class="svg-icon" />
            </svg>
            <p class="ml-2">––– empty –––</p>
          </div>
        </div>
      </div>
      <div class="section2">
        <Button variant="light" :click="() => ''" :class="['groupchat-button', disabledGroupChat()]">Start now</Button>
      </div>
    </div>
  </Tile>
</template>
<script>
import Tile from "@components/common/Tile";
import Button from "@components/common/Button";
import ProgressBar from "@components/common/ProgressBar";
import { mapGetters } from "vuex";
export default {
  components: {
    Tile,
    Button,
    ProgressBar
  },
  data() {
    return {
      disabled: true
    }
  },
  methods: {
    stylesProgress() {
      if (this.mode === "dark") {
        return {
          "height": "18px",
          "background-color": "rgba(255, 255, 255, 0.1)",
          "border": "1px solid rgb(50, 54, 70)"
        };
      } else {
        return {
          "height": "18px",
          "background-color": "#e9ebee",
          "border": "1px solid #e9ebee"
        };
      }
    },
    disabledGroupChat() {
      if(this.disabled) {
        return this.mode === 'dark' ? 'dark-groupchat-button-disabled' : 'light-groupchat-button-disabled';
      } else {
        return ''
      }
    }
  },
    computed: {
    ...mapGetters("liveshow_mode", {
      mode: "GET_MODE"
    })
  }
};
</script>

<style lang="scss">
.dark-rule-mode {
  height: 18px;
  background-color:rgba(255, 255, 255, 0.1);
  border:1px solid rgb(50, 54, 70);
}
.light-rule-mode {
  height: 18px;
  background-color: #e9ebee;
  border:1px solid #e9ebee;
}
</style>