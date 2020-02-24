<template>

  <div :class="[mode === 'dark' ? 'dark-mode' : 'light-mode', 'dashboard-footer']">
    <Dropdown placeholder="English" />

    <div :class="[mode === 'dark' ? 'dark-mode' : 'light-mode', 'dashboard-footer--nav']">
      <ul>
        <li>
          <a href="">Member Login</a>
        </li>
        <li>
          <a href="">Adult Affiliate Program</a>
        </li>
        <li>
          <a href="">Contact us</a>
        </li>
        <li>
          <a href="">Online Support</a>
        </li>
        <li>
          <a href="">FAQ</a>
        </li>
        <li>
          <a href="">Certified Studios</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Dropdown from '../Dropdown'
import { mapGetters } from "vuex";

  export default {
    props: {
      isLightMode: {
        type: Boolean,
        default: false
      }
    },
    components: { Dropdown },
    computed: {
      ...mapGetters("liveshow_mode", {
        mode: "GET_MODE"
      })
    }
  }
</script>
