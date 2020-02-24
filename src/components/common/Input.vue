<template>
  <b-form-input
      :id="id"
      :class="`${dark ? 'dark' : ''} ${size === 'lg' ? 'lg' : ''} custom-input`"
      v-model="static_value !== '' ? static_value : userInput"
      :type="type"
      :placeholder="placeholder"
      @keyup="$emit('update:value', userInput)"
      @focus="inputFocus"
      @blur="inputBlur"
    />
</template>

<script>
  export default {
    props: {
      id: {
        type: String,
        default: '',
      },
      value: {
        type: String,
        default: '',
      },
      placeholder: {
        type: String,
        default: ''
      },
      inputFocus: {
        type: Function,
        default: () => {},
      },
      inputBlur: {
        type: Function,
        default: () => {},
      },
      type: {
        type: String,
        default: 'text'
      },
      dark: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: ''
      },
      static_value: {
        type: String,
        default: ''
      }

    },
    data() {
      return {
        userInput: '',
      }
    }
  }
</script>
