<template>
    <div
      class="tab-pane"
      role="tabpanel"
      :id="tabId"
      :aria-hidden="!active"
      :aria-labelledby="`step-${tabId}`"
      :class="{ 'active show': active }"
      v-show="active"
    >
      <!-- tab header -->
      <div :class="[hasClose ? 'justify-content-between': 'justify-content-center', 'steps--header d-flex']">
        <p class="title">
          <strong>{{ title }}</strong>
        </p>

        <a href="#" v-if="hasClose" @click="() => { this.$EventBus.$emit('closePop') }">
          <svg height="24" width="24">
            <use :xlink:href="require('@svg/sprites/common.svg') + '#close-lg'" class="svg-icon close" />
          </svg>
        </a>
      </div>
      <slot></slot>
    </div>
</template>
<script>
export default {
  name: "StepsTab",
  props: {
    title: {
      type: String,
      default: ''
    },
    hasClose: {
      type: Boolean,
      default: true
    },
    id: String,
    beforeChange: Function
  },
  inject: ["addTab", "removeTab"],
  data() {
    return {
      active: false,
      checked: false,
      hasError: false,
      tabId: ""
    };
  },
  mounted() {
    this.addTab(this);
  },
  destroyed() {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
    this.removeTab(this);
  }
};
</script>
