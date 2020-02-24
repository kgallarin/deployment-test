<template>
  <b-col xl="4" class="offer">
    <div class="offer-el"
      :style="`
        background-image: url(${computedImage});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: top right;
      `">
      <p class="header text-uppercase">{{ headerText }}</p>
      <p class="subs">
        {{ offerDesc }}
        <!-- {{computedImage}} -->
      </p>

      <!-- benefit -->
      <p class="benefit text-uppercase">{{ offerBenefit }}</p>

      <Button :click="() => ''" :pill="false" variant="light">
        <strong>READ MORE</strong>
      </Button>
    </div>
  </b-col>
</template>

<script>
import Button from "@components/common/Button"

  export default {
    props: {
      headerText: {
        type: String,
        default: ''
      },
      offerDesc: {
        type: String,
        default: ''
      },
      offerBenefit: {
        type: String,
        default: ''
      },
      bgImage: {
        type: String,
        default: ''
      }
    },
    computed:{
      computedImage() {
        return require(`@images/earn_more/${this.bgImage}`)
      }
    },
    mounted() {
      console.log('New component mounted.')
    },
    components: { Button }
  }
</script>
