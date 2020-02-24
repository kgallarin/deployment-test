<template>
  <div class="contacts-bar">
    <div class="header">
      <search-bar placeholder="Search" />
    </div>
    <contact-list :clicked="() => onClickContact" :type="type" :dataList="data" />
  </div>
</template>

<script>
import SearchBar from '@components/common/SearchBar'
import ContactList from './ContactList'

  export default {
    name: 'ContactsBar',
    props: {
      data: {
        type: Array,
        default: () => []
      },
      type: {
        type: String,
        default:'default'
      }
    },
    methods: {
      onClickContact(contact_data) {
        console.log(contact_data)
        console.log(1)
      }
    },
    mounted() { },
    components: { ContactList, SearchBar }
  }
</script>
