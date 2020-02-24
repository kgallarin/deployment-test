<template>
  <b-container class="dashboard-wrapper dashboard-container" fluid>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </b-container>
</template>
<script>

export default {
  components: {  },
  data() {
    return {};
  },
  mounted() {}
};
</script>