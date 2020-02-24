<template>
  <div class="offset-header-wrapper landing-wrapper">
    <Main />
    <Offers />
    <TopNotch />
    <Reviews />

    <!-- Gradient icons for all browsers -->
    <IndexIcons />
  </div>
</template>

<script>
import IndexIcons from "@components/common/SpriteIcons/landing";
import { checkNull } from "@helpers";

// sections
import Main from "@components/partials/home/Main";
import Offers from "@components/partials/home/Offers";
import TopNotch from "@components/partials/home/TopNotch";
import Reviews from "@components/partials/home/Reviews";

export default {
  name: "",
  props: {},
  data: () => ({}),
  methods: {
    handleClick() {
      console.log("handleClick");
    },
    initRegistrationStepsModel() {
      this.$store.dispatch('auth_pop_control/ON_SELECT_AUTH', {
        show: true,
        type: 'MODEL_REGISTRATION_STEPS'
      })
    },
    initRegistrationStepsStudio() {
      this.$store.dispatch('auth_pop_control/ON_SELECT_AUTH', {
        show: true,
        type: 'OPTION_TYPE_POP_STUDIO'
      })
    }
  },
  components: { Main, IndexIcons, Offers, TopNotch, Reviews },
  created() {
    let params = this.$route.query;
    console.log(params)
    if((checkNull(params.confirm_email) && params.confirm_email === 'true') && (checkNull(params.register_type) && params.register_type === 'model')) {
      this.initRegistrationStepsModel()
    }
    if((checkNull(params.confirm_email) && params.confirm_email === 'true') && (checkNull(params.register_type) && params.register_type === 'studio')) {
      this.initRegistrationStepsStudio()
    }
  }

};
</script>
