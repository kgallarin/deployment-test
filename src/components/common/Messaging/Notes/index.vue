<template>
  <div class="messaging-notes w-100">
    <!-- header -->
    <notes-header king="Matt Thompson" />

    <!-- note -->
    <editable-note :note="note" />

    <!-- details -->
    <details-info />
  </div>
</template>

<script>
  import NotesHeader from './NotesHeader'
  import EditableNote from './EditableNote'
  import DetailsInfo from './DetailsInfo'
  import { mapGetters, mapActions } from "vuex";

  export default {
    name: 'Notes',
    components: {
      NotesHeader,
      EditableNote,
      DetailsInfo
    },
    computed: {
      ...mapGetters("note", {
        note: "GET_NOTE"
      })
    }
  }
</script>
