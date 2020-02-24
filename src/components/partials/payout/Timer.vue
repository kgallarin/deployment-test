<template>
    <b-row class="timer" v-if="endTime">
        <b-col class="wrapper day">
            <div class="timer-inner">
              <span class="number">{{ this.pad(days) }}</span>
              <div class="format" v-if="!isNaN(days)">{{  'days' }}</div>
            </div>
        </b-col>
        <b-col class="wrapper hour">
            <div class="timer-inner">
              <span class="number">{{ this.pad(hours) }}</span>
              <div class="format" v-if="!isNaN(hours)">{{ 'hours' }}</div>
            </div>
        </b-col>
        <b-col class="wrapper min">
            <div class="timer-inner">
              <span class="number">{{ this.pad(minutes) }}</span>
              <div class="format" v-if="!isNaN(minutes)">{{ 'minutes' }}</div>
            </div>
        </b-col>
        <b-col class="wrapper sec">
            <div class="timer-inner">
              <span class="number">{{ this.pad(seconds) }}</span>
              <div class="format" v-if="!isNaN(seconds)">{{ 'seconds' }}</div>
            </div>
        </b-col>
    </b-row>
</template>

<script>
  export default {
    name: "Timer",
    props: [
      'endTime'
    ],
    data: function () {
      return {
        timer: 0,
        startTime: 0,
        interval: 0,
        days: 0,
        minutes: 0,
        hours: 0,
        seconds: 0
      };
    },
    mounted() {
      this.startTime = (new Date()).getTime();
      this.timerCount(this.startTime, this.endTime);
      this.interval = setInterval(() => {
        this.timerCount(this.startTime, this.endTime);
      }, 1000);
    },
    methods: {
      timerCount: function (start, end) {
        let now = new Date().getTime();
        let distance = start - now;
        let passTime = end - now;

        if (distance < 0 && passTime < 0) {
          clearInterval(this.interval);
        } else if (distance < 0 && passTime > 0) {
          this.calcTime(passTime);
        } else if (distance > 0 && passTime > 0) {
          this.calcTime(distance);
        }
      },
      calcTime: function (dist) {
        this.days = Math.floor(dist / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((dist % (1000 * 60)) / 1000);
      },
      pad: function (number, size = 2) {
        let string = number + '';
        while (string.length < size) {
          string = '0' + string;
        }
        return string;
      }
    }
  }
</script>
