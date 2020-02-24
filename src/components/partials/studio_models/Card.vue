<template>
  <!-- ACTIVE -->
  <Tile :id="`card-${modelData.id}`" class="flex-column model-card">
    <!-- profile -->
    <div class="d-flex main-view-container inactive">
      <div class="content main-profile d-flex align-items-center active">
        <!-- profile image -->
        <b-img class="main-img" :blank="false" blankColor="#777" src="https://picsum.photos/200" rounded="circle" alt="Cams models user"></b-img>
        <div class="main-profile-details  d-flex flex-column">
          <strong>{{ modelData.username }}</strong>
          <span>{{ modelData.sex }}</span>
        </div>
      </div>

      <!-- status -->
      <div class="content status d-flex align-items-center">
        <p class="color--green">{{ modelData.status }}</p>
      </div>

      <ul class="navigations">
        <li :id="`selected-${nav.id}`" :class="[{ 'active': activeNav === nav.id}]" v-for="nav in activeUserNav" :key="nav.id">
          <template v-if="nav.description !== 'find'">
            <a href="#"
              @click.prevent="
                setNav(nav)
                setTab(nav)
              "
            >
              <svg height="43" width="43">
                <use
                  :xlink:href="require('@svg/sprites/models_info.svg') + `#${nav.description}`"
                  class="svg-icon"
                />
              </svg>
            </a>
          </template>
          <template v-else>
            <router-link :to="{name: 'Home'}">
              <svg height="43" width="43">
                <use
                  :xlink:href="require('@svg/sprites/models_info.svg') + `#${nav.description}`"
                  class="svg-icon"
                />
              </svg>
            </router-link>
          </template>
        </li>
      </ul>
    </div>

    <!-- tab presentation -->
    <div v-if="this.activeTab !== null" class="tab-view">
      <StatusInfo v-if="isTabActive('status_info')" />
      <Report v-if="isTabActive('report')" />
      <Settings v-if="isTabActive('settings')" />
    </div>
  </Tile>
</template>

<script>
import Tile from "@components/common/Tile"

// Tab view components
import Report from "@components/partials/studio_models/Report"
import Settings from "@components/partials/studio_models/Settings"
import StatusInfo from "@components/partials/studio_models/StatusInfo"

import { mapGetters } from "vuex";
  export default {
    props: {
      modelData: {
        type: Object,
        default: {}
      }
    },
    data() {
      return {
        activeNav: null,
        activeTab: null
      }
    },
    components: { Tile, Report, Settings, StatusInfo },
    methods: {
      setNav(selectedNav) {
        if(selectedNav.id === this.activeNav) {
          this.activeNav = null
        }
        else {
          this.activeNav = selectedNav.id
        }
        this.$store.dispatch("models/ON_CLICK_NAV", {
          element: this.$el.id
        })

        setTimeout(() => {
          this.$scrollTo(`#${this.activeElement}`, 150, {
            container: '#scroll-container',
            easing: 'linear',
            offset: 0
          })
        }, 100);

      },
      setTab(selectedNav) {
        if(selectedNav.description === this.activeTab) {
          this.activeTab = null
        }
        else {
          this.activeTab = selectedNav.description
        }
      },
      isTabActive(tab_description) {
        return this.activeTab === tab_description
      },
      closeAll() {
        this.activeTab = null
        this.activeNav = null
      }
    },
    computed: {
      ...mapGetters("models", {
        activeUserNav: "GET_ACT_USERNAV",
        activeElement: "GET_ACTIVE_ELEM"
      })
    },
    watch: {
      activeElement(newVal, oldVal) {
          oldVal == this.$el.id ? this.closeAll() : null
      }
    }
}
</script>
