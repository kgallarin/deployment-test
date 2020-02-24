<template>
  <div class="route-options">
    <!-- back button -->
    <Button
      :click="() => this.$router.push({ name: 'Messaging' })"
      class="back-button"
      variant="iconLink"
      icon_url="messaging.svg#back"
      iconH="43"
      iconW="43" />

      <!-- info button (to notes) -->
      <Button
        :click="() => this.$router.push({ name: 'MessageNotes' })"
        class="back-button"
        variant="iconLink"
        icon_url="messaging.svg#info"
        iconH="24"
        iconW="24" />
  </div>
</template>

<script>
import Button from "@components/common/Button";
  export default {
    name:'RouteOptions',
    components: {
      Button
    },
    methods: {
      onClickBack() {

      }
    }
  }
</script>
