<template>
  <div :class="[isAuth ? '' : 'dark', 'modal-wrapper']">
    <div :class="[isAuth ? '' : 'max-w', 'modal--inner w-100 position-relative d-flex align-items-center justify-content-center']" >
      <!-- half with image layout -->
      <template v-if="isAuth && !flexible">
        <div class="auth-wrapper d-flex">
          <slot name="form" />
          <slot name="side-image" />
        </div>
      </template>
      <!-- full -->
      <template v-if="isAuth && flexible">
        <div class="auth-wrapper d-flex">
          <slot name="content" />
        </div>
      </template>

      <template v-else>
        <div class="custom-modal-content">
          <slot name="content" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
  export default {
    props: {
      isAuth: {
        type: Boolean,
        default: false
      },
      flexible: {
        type: Boolean,
        default: false
      }
    },
    mounted() {}
  }
</script>
