<template>
  <b-button v-if="variant === 'iconLink'" :class="[variant === 'iconLink' ? 'link-square-icon': '','custom-button']" :pill="pill" @click="click" @submit="submit" :variant="variant">
    <svg :height="iconH" :width="iconW">
      <use :xlink:href="require(`@svg/sprites/${iconFile}`) + `#${iconName}`" class="svg-icon" />
    </svg>
  </b-button>
  <b-button :type="type" v-else-if="type === 'submit'" class="custom-button" :pill="pill" :variant="variant">
    <slot />
  </b-button>
  <b-button v-else class="custom-button" :pill="pill" @click.prevent="click" :variant="variant">
    <slot />
  </b-button>

</template>

<script>
  export default {
    props: {
      pill: {
        type: Boolean,
        default: false
      },
      click: {
        type: Function,
        default: () => {},
      },
      submit: {
        type: Function,
        default: () => {},
      },
      variant: {
        type: String,
        default: 'link'
      },
      icon_url : {
        type: String,
        default: ''
      },
      iconH: {
        type: String,
        default:'24'
      },
      iconW: {
        type: String,
        default:'24'
      },
      type: {
        type: String,
        default: null
      }
    },
    mounted() {
    },
    computed: {
      iconFile() {
        return this.icon_url.split('#')[0];
      },
      iconName() {
        return this.icon_url.split('#')[1]||null;
      }
    }
  }
</script>
