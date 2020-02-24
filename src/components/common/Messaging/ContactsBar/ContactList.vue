<template>
  <div
    @mouseenter="onBrowseContact"
    @mouseleave="unBrowseContact"
    :class="[hovered ? 'visible-oflow' : 'invisible-oflow', 'contacts-bar-list']"
  >
    <template v-for="(contact,index) in dataList">
      <contact :clickContact="() => clicked(contact)" :style-type="type" :active="contact.active" :key="index" :info="contact"/>
    </template>
  </div>
</template>

<script>
import Contact from "./Contact";
import { mapGetters } from "vuex";

export default {
  props: {
    dataList: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: 'default'
    }
  },
  data() {
    return {
      hovered: false
    }
  },
  methods: {
    onBrowseContact() {
      this.hovered = true
    },
    unBrowseContact() {
      this.hovered = false
    },
    clicked(info) {
      if(this.windowWidth > 1280) {

      }else {
        this.$router.push({ name:'ConversationPanel' })
      }
    }
  },
  computed: {
    ...mapGetters("app", {
      windowWidth: "GET_WINDOW_WIDTH"
    }),
    ...mapGetters("contacts", {
      contactsData: "GET_CONTACTS"
    })
  },
  components: { Contact }
};
</script>
