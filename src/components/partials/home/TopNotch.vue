<template>
  <SliceContainer :backgroundImage="require('@images/landing/landing_section3.jpg')" :bgCover="true" bgPosition="bottom" class="section3">
    <div class="content-holder">
      <div class="text-wrapper">
        <h2 class="color--marigold">Earn Millions of Dollars</h2>

        <p class="list-title">Top 3 models in this month</p>

        <ul class="section3--list">
          <li>
            <span>
              <svg height="20" width="20">
                <use xlink:href="#icon_medal1" />
              </svg>
              <p>SweetTaniyaa</p>
            </span>
          </li>
          <li>
            <span>
              <svg height="20" width="20">
                <use xlink:href="#icon_medal2" />
              </svg>
              <p>AriannaEden</p>
            </span>
          </li>
          <li>
            <span>
              <svg height="20" width="20">
                <use xlink:href="#icon_medal3" />
              </svg>
              <p>JennaAndJack</p>
            </span>
          </li>
        </ul>

        <Button :click="() => handleClick()" :pill="true" variant="light" class="join-button">
          <strong>Join Us!</strong>
        </Button>
      </div>
    </div>
  </SliceContainer>
</template>

<script>
import SliceContainer from '@components/partials/home/SliceContainer'
import Button from '@components/common/Button'
  export default {
    mounted() {
    },
    methods: {
      handleClick() {

      }
    },
    components: { SliceContainer, Button }
  }
</script>
