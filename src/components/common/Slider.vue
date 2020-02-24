<template>
  <div class="slider-wrapper">
    <swiper :options="swiperOption" ref="cmoSlider">
      <!-- slides -->
      <swiper-slide>
        <div class="slide-comments">
          <b-img v-bind="mainProps" rounded="circle" alt="Circle image" class="image"></b-img>

          <div class="comment-wrapper position-relative">
            <div class="gap d-flex align-items-center justify-content-start">
              <svg height="13" width="16">
                <use xlink:href="#quoteStart" />
              </svg>
            </div>
            <p class="comment">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
              et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
              Donec pede justo, fringilla vel,
            </p>
          </div>

          <p class="name color--marigold">Devin Simmons</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-comments">
          <b-img v-bind="mainProps" rounded="circle" alt="Circle image" class="image"></b-img>

          <div class="comment-wrapper position-relative">
            <div class="gap d-flex align-items-center justify-content-start">
              <svg height="13" width="16">
                <use xlink:href="#quoteStart" />
              </svg>
            </div>
            <p class="comment">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
              et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
              Donec pede justo, fringilla vel,
            </p>
          </div>

          <p class="name color--marigold">Devin Simmons</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-comments">
          <b-img v-bind="mainProps" rounded="circle" alt="Circle image" class="image"></b-img>

          <div class="comment-wrapper position-relative">
            <div class="gap d-flex align-items-center justify-content-start">
              <svg height="13" width="16">
                <use xlink:href="#quoteStart" />
              </svg>
            </div>
            <p class="comment">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
              et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
              Donec pede justo, fringilla vel,
            </p>
          </div>

          <p class="name color--marigold">Devin Simmons</p>
        </div>
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination pagination-custom"  slot="pagination"></div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    name: 'carrousel',
    data() {
        return {
          swiperOption: {
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              touchEventsTarget: 'wrapper',
              clickable:true
            },
            grabCursor: true,
            cssWidthAndHeight: true,
            slidesPerView: 1,
            spaceBetween: 30,
          },

          mainProps: { blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1' }
      }
    },
    computed: {
      swiper() {
        return this.$refs.cmoSlider.swiper
      }
    },
    components: { swiper, swiperSlide }
  }
</script>
