<template>
  <b-dropdown :class="`slotted-dropdown custom-dropdown ${customClass}`" v-bind="$attrs" :placement="placement" v-if="slotted" no-caret>
    <template v-slot:button-content>
      <slot name="custom-action" />
    </template>
    <b-dropdown-item v-for="data in dropData" href="#" :key="data.id" @click.prevent="click(data)">{{ data.description }}</b-dropdown-item>
  </b-dropdown>

    <b-dropdown v-else :size="size" :text="placeholder" variant="outline" :class="`custom-dropdown ${customClass}`" show>
      <b-dropdown-item v-if="dropData.length > 0" v-for="data in dropData" href="#" :key="data.id" @click.prevent="click(data)">{{ data.description }}</b-dropdown-item>
      <template v-else>
        <b-dropdown-item-button >English</b-dropdown-item-button>
        <b-dropdown-item-button>Spanish</b-dropdown-item-button>
      </template>
    </b-dropdown>
</template>
<script>
export default {
    props: {
        dropData: {
          type: Array,
          default: () => []
        },
        size: {
            type: String,
            default:'sm'
        },
        placeholder: {
            type: String,
            default: ''
        },
        variant: {
            type: String,
            default: 'outline'
        },
        customClass: {
            type: String,
            default: 'small'
        },
        slotted: {
          type: Boolean,
          default: false
        },
        click: {
          type: Function,
          default: () => {},
        },
        placement: {
          type: String,
          default: 'center'
        }
    }
}
</script>
