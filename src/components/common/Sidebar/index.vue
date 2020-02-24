<template>
  <div class="cm-sidebar" @click.prevent.stop="clickedBg">
    <div @click.stop="" class="cm-sidebar--inner position-relative" :style="`left: ${leftPos}px`" >
      <ul class="nav-list">
        <!-- <li v-for="nav in navigation" :key="nav.id">
          <a href="#">
            {{ nav.label }}
          </a>
        </li> -->
        <li>
          <router-link exact :to="{ name: 'Overview' }" href="#">Overview</router-link>
        </li>
        <li>
          <router-link exact :to="{ name: 'Profile' }" href="#">Profile</router-link>
        </li>
        <li>
          <router-link exact :to="{ name: 'Contents' }" href="#">Contents</router-link>
        </li>
        <!-- <li>
          <router-link :to="{ name: 'Message' }" href="#">Message</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Payout' }" href="#">Payout</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'EarnMore' }" href="#">Earn more</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Help' }" href="#">Help</router-link>
        </li> -->
      </ul>

      <SmallProfile class="mx-auto" />
    </div>
  </div>
</template>

<script>
import Tile from "@components/common/Tile";
import SmallProfile from "@components/partials/dashboard/SmallProfile";
  export default {
      props: {
        sbState: {
          type: Boolean,
          default: false
        }
      },
      data() {
        return {
          leftPos: '-300',
          navigation: [
            { id: 0, label: 'Overview' },
            { id: 1, label: 'Profile' },
            { id: 2, label: 'Contents' },
            { id: 3, label: 'Message' },
            { id: 4, label: 'Payout' },
            { id: 5, label: 'Earn more' },
            { id: 6, label: 'Help' }
          ]
        }
      },
      methods: {
        clickedBg() {
          this.$EventBus.$emit('closeSidebar')
        }
      },
      components: { Tile, SmallProfile },
      watch: {
        sbState(newVal, oldVal) {
          if(newVal) {
            setTimeout(() => {
              this.leftPos = '0'
            },100)
          }

          this.leftPos = '-300'
        }
      }
    }
</script>
