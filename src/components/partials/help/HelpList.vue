<template>
  <ul class="help-list">
    <li class="help-list-item" v-for="item in dataList" :key="item.id" @click="click(item)">
      <svg height="12" width="12" class="icon">
        <use :xlink:href="require('@svg/sprites/help.svg') + '#moreinfo'" />
      </svg>
      {{item.label}}
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    dataList: {
      type: Array,
      default: () => []
    },
    click: {
      type: Function,
      default: () => {}
    }
  },
  mounted() {}
};
</script>
