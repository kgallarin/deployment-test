<template>
  <SliceContainer :backgroundImage="require('@images/landing/landing_section2.jpg')" class="section2" :bgCover="true" bgPosition="center">
    <div class="content-holder">
      <div class="w-50 text-wrapper">
        <h2 class="color--marigold">We protect you!</h2>
        <p>
          We offers you the best protection. Our country ban option blocks visitors from your country and our chargeback protection program keeps your earnings safe.
        </p>
        <ul class="offers-list d-flex justify-content-center">
          <li>
            <span>
              <svg height="80" width="80">
                <linearGradient id="a" x1="0%" y1=".01%" y2="99.99%">
                  <stop offset="0%" stop-color="#FF8D5C"/>
                  <stop offset="100%" stop-color="#FE2493"/>
                </linearGradient>
                <use xlink:href="#icon6" />
              </svg>
              <p>Country ban</p>
            </span>
          </li>
          <li>
            <span>
              <svg height="80" width="80">
                <defs>
                  <linearGradient id="a" x1=".164%" x2="99.836%" y1="0%" y2="100%">
                      <stop offset="0%" stop-color="#FF8D5C"/>
                      <stop offset="100%" stop-color="#FE2493"/>
                  </linearGradient>
                </defs>
                <use xlink:href="#icon7" />
              </svg>
              <p>Safe, secure and discreet</p>
            </span>
          </li>
          <li>
            <span>
              <svg height="80" width="80">
                <defs>
                  <linearGradient id="a" x1="0%" y1="0%" y2="100%">
                    <stop offset="0%" stop-color="#FF8D5C"/>
                    <stop offset="100%" stop-color="#FE2493"/>
                  </linearGradient>
                </defs>
                <use xlink:href="#icon8" />
              </svg>
              <p>Chargeback protection</p>
            </span>
          </li>
        </ul>

      </div>
    </div>
    </div>
  </SliceContainer>
</template>

<script>
import SliceContainer from '@components/partials/home/SliceContainer'
  export default {
    mounted() {
    },
    components: { SliceContainer }
  }
</script>
