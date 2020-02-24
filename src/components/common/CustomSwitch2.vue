<template>
  <div class="d-flex align-items-center">
    <label class="switch">
      <input
        class="custom-input"
        v-model="userInput"
        type="checkbox"
        :placeholder="placeholder"
        @keyup="$emit('update:value', userInput)"
      />
      <span class="slider round">
        <p :class="[userInput ? 'checked' : '', 'switch-status']"></p>
      </span>
    </label>
    <p class="switch-label">{{ userInput ? 'ON' : 'OFF' }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: {
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      userInput: true
    };
  },
  methods: {
    ...mapActions({
      setMode: "liveshow_mode/SET_MODE"
    })
  },
  mounted() {
    if(this.mode === 'dark') {
      this.userInput = true;
    } else {
      this.userInput = false;
    }
  },
  watch: {
    userInput(newVal) {
      this.$nextTick(() => {
        if(newVal) {
          this.setMode({mode : 'dark'})
        } else {
          this.setMode({mode : 'light'})
        }
      });
    }
  },
    computed: {
    ...mapGetters("liveshow_mode", {
      mode: "GET_MODE"
    })
  }
};
</script>

<style lang="scss">
.switch {
  position: relative;
  display: inline-block;
  width: 42px;
  height: 24px;
  margin-bottom: 0px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #374163;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  left: 3px;
  bottom: 3px;
  background-color: #fff;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  width: 18px;
  height: 18px;
}

input:checked + .slider {
  background-color: #f05e83;
}

input:focus + .slider {
  box-shadow: 0 0 1px #f05e83;
}

input:checked + .slider:before {
  -webkit-transform: translateX(18px);
  -ms-transform: translateX(18px);
  transform: translateX(18px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}

.switch-status {
  position: absolute;
  right: 6px;
  min-width: auto !important;
  top: 3px;
  font-size: 16px;
  letter-spacing: -0.38px;
  font-weight: 700;
  line-height: normal;
  font-family: "Bariol", sans-serif;
  transition: 0.1s fade !important;
  transition-delay: 2s;

  &.checked {
    right: initial;
    left: 6px;
  }
}

.switch-label {
  padding-left: 8px;
  margin-left: 12px;
  font-family: "Bariol", sans-serif;
  font-size: 10px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
}
</style>
