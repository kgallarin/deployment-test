<template>
  <div class="custom-table">
    <slot name="table-head"></slot>
		<slot name="table-body"></slot>
  </div>
</template>

<script>
  export default {
    props: [],
		name: 'Table',

		data () {
			return {

			}
		}
  }
</script>
