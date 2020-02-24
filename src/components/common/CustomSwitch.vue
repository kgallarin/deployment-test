<template>
  <label class="switch">
    <input
      class="custom-input"
      v-model="userInput"
      type="checkbox"
      :placeholder="placeholder"
      @keyup="$emit('update:value', userInput)"
      />
    <span class="slider round">
      <p :class="[userInput ? 'checked' : '', 'switch-status']">{{ userInput ? 'ON' : 'OFF'  }}</p>
    </span>
  </label>
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
        default: '',
      },
      placeholder: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        userInput: false,
      }
    }
  }
</script>

<style lang="scss">
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 24px;
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
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  left: 3px;
  bottom: 3px;
  background-color: #fff;
  -webkit-transition: .4s;
  transition: .4s;
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
  -webkit-transform: translateX(36px);
  -ms-transform: translateX(36px);
  transform: translateX(36px);
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
    top: 4px;
    font-size: 16px;
    letter-spacing: -0.38px;
    font-weight: 700;
    line-height: normal;
    font-family: "Bariol", sans-serif;
    transition: .1s fade !important;
    transition-delay: 2s;

    &.checked {
      right: initial;
      left: 6px;
    }
}
</style>
