<template>
  <SliceContainer :backgroundImage="require('@images/landing/main.jpg')" class="section1">
    <div class="multi">
      <div class="content-holder">
        <div class="section1-text-wrapper text-center h-100">
          <h3>Become a candycams model</h3>
          <h1 class="color--marigold">Get up to 80% share!</h1>
          <h3>No.1 webcam site in the world!</h3>

          <!-- button -->
          <Button :click="() => showAuthPop('OPTION_TYPE_POP')" :pill="true" variant="light" class="join-button">
            <strong>Join Us!</strong>
          </Button>
          <p class="account">
            Already have an account?
            <a href="#" @click.prevent="showAuthPop('LOGIN_POP')" class="link">
              <strong>Login here</strong>
            </a >
          </p>
        </div>
      </div>
      <div class="mask"></div>
    </div>
    <article class="features-wrapper d-flex align-items-center justify-content-center">
      <ul class="d-flex align-items-center">
         <li>
          <span>
            <svg height="80" width="80">
              <defs>
                <linearGradient id="a" x1="7.708%" x2="92.292%" y1="0%" y2="100%">
                  <stop offset="0%" stop-color="#FF8D5C"/>
                  <stop offset="100%" stop-color="#FE2493"/>
                </linearGradient>
              </defs>
              <use xlink:href="#icon1" />
            </svg>
            <p>Flexible working hours</p>
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
               <use xlink:href="#icon2" />
             </svg>
              <p>Fun conversations</p>
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
              <use xlink:href="#icon3" />
            </svg>
              <p>Payout every two weeks</p>
           </span>
         </li>
         <li>
           <span>
            <svg height="80" width="80">
              <linearGradient id="a" x1="0%" y1=".015%" y2="99.985%">
                <stop offset="0%" stop-color="#FF8D5C"/>
                <stop offset="100%" stop-color="#FE2493"/>
              </linearGradient>
              <use xlink:href="#icon4" />
            </svg>
              <p>Payout every two weeks</p>
           </span>
         </li>
         <li>
           <span>
             <svg height="80" width="80">
               <defs>
                 <linearGradient id="a" x1=".002%" x2="99.998%" y1="0%" y2="100%">
                     <stop offset="0%" stop-color="#FF8D5C"/>
                     <stop offset="100%" stop-color="#FE2493"/>
                 </linearGradient>
               </defs>
               <use xlink:href="#icon5" />
             </svg>
              <p>Learn how to use candycams</p>
           </span>
         </li>
       </ul>
    </article>
  </SliceContainer>
</template>

<script>
import SliceContainer from '@components/partials/home/SliceContainer'
import Button from '@components/common/Button'
  export default {
    components:{ SliceContainer, Button },
    methods: {
      showAuthPop(type) {
        this.$store.dispatch('auth_pop_control/ON_SELECT_AUTH', {
          show: true,
          type: type
        })
      }
    }
  }
</script>
