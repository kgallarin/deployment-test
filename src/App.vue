<template>
  <div id="app" :class="[modal_state ? 'oflow-hidden' : '', 'h-100']">
    <!-- auth popup -->
    <AuthPop v-if="modal_state" />

    <component :is="layout" v-if="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import Modal from '@components/common/Modal'
import AuthPop from '@components/partials/auth/PopupScreen'
import { mapGetters } from "vuex";


const requireContext = require.context(
  '@components/layouts',
  false,
  /.*\.vue$/
)

const layouts = requireContext
  .keys()
  .map(file => [file.replace(/(^.\/)|(\.vue$)/g, ''), requireContext(file)])
  .reduce((components, [name, component]) => {
    components[name] = component.default || component
    return components
  }, {})

export default {
  name: 'app',
  components: { Modal,AuthPop },
  computed: {
    layout() {
      return layouts[this.$route.meta.layout || 'default']
    },
    ...mapGetters("auth_pop_control", {
      modal_state: "GET_MODAL_STATE"
    })
  },
  methods: {
    setInnerWidthEvent() {
      this.$store.commit('app/SET_WINDOW_WIDTH', window.innerWidth)
    },
    setInnerHeightEvent() {
      this.$store.commit('app/SET_WINDOW_HEIGHT', window.innerHeight)
    }
  },
  created() {
    window.addEventListener('resize', this.setInnerWidthEvent)
    window.addEventListener('resize', this.setInnerHeightEvent)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setInnerWidthEvent)
    window.removeEventListener('resize', this.setInnerHeightEvent)
  }

};
</script>
