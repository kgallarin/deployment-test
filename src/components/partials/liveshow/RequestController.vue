<template>
  <Tile :class="[mode === 'dark' ? '' : 'light-mode']">
    <div class="request-controller">
      <div :class="[mode === 'dark' ? '' : 'light-mode', 'info']">
        <label>
          Uche Ogbonna is invited you to
          <span>Private</span>
        </label>
        <div class="button-wrapper">
          <Button variant="light text-uppercase" :click="() => ''">accept</Button>
          <Button variant="light text-uppercase" :click="() => ''">decline</Button>
        </div>
      </div>
      <div :class="[mode === 'dark' ? '' : 'light-mode', 'info']">
        <label>
          Homayoun Shakibaii is invited you to
          <span>Private</span>
        </label>
        <div class="button-wrapper">
          <Button variant="light text-uppercase" :click="() => ''">accept</Button>
          <Button variant="light text-uppercase" :click="() => ''">decline</Button>
        </div>
      </div>
      <div :class="[mode === 'dark' ? '' : 'light-mode', 'info']">
        <label>
          Leonardo Oliveira is invited you to
          <span>Private</span>
        </label>
        <div class="button-wrapper">
          <Button variant="light text-uppercase" :click="() => ''">accept</Button>
          <Button variant="light text-uppercase" :click="() => ''">decline</Button>
        </div>
      </div>
    </div>
  </Tile>
</template>
<script>
import Tile from "@components/common/Tile";
import Button from "@components/common/Button";
import { mapGetters } from "vuex";
export default {
  components: {
    Tile,
    Button
  },
  computed: {
    ...mapGetters("liveshow_mode", {
      mode: "GET_MODE"
    })
  }
};
</script>