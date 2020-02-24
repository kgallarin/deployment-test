<template>
  <SliceContainer class="section3">
    <div class="content-holder">
      <div class="text-wrapper">
        <h2 class="color--marigold">Still Hesitating?</h2>

        <p class="list-title">Read what some of our models have to say about candycams</p>

        <Slider />
      </div>
    </div>
  </SliceContainer>
</template>

<script>
import SliceContainer from '@components/partials/home/SliceContainer'
import Button from '@components/common/Button'
import Slider from '@components/common/Slider'


  export default {
    mounted() {

    },
    components: { SliceContainer, Button, Slider }
  }
</script>
