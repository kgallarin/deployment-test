<template>
  <!-- ACTIVE -->
  <Tile :id="`card-${modelData.id}`" class="flex-column model-card">
    <!-- profile -->
    <div class="d-flex main-view-container">
      <div class="content main-profile d-flex align-items-center inactive">
        <!-- profile image -->
        <b-img class="main-img" :blank="false" blankColor="#777" src="https://picsum.photos/200" rounded="circle" alt="Cams models user"></b-img>
        <div class="main-profile-details  d-flex flex-column">
          <strong>{{ modelData.username }}</strong>
          <span>{{ modelData.sex }}</span>
        </div>
      </div>

      <!-- status -->
      <div class="content status d-flex align-items-center inactive">
        <p :class="[modelData.status === 'closed' ? 'warn--red' : 'color--marigold']">{{ modelData.status }}</p>
      </div>

      <ul v-if="modelData.status === 'inactive'" class="navigations">
        <li :class="[{ 'active': activeNav === nav.id}]" v-for="nav in inActiveUserNav" :key="nav.id">
          <template v-if="nav.description === 'edit'">
            <Dropdown slotted :dropData="dropData" :right="windowWidth > 767 ? true : false"  :center="windowWidth <= 767 ? true : false" :click="handleDropMenu">
              <template v-slot:custom-action>
                <a href="#" @click.prevent="">
                  <svg height="43" width="43">
                    <use
                      :xlink:href="require('@svg/sprites/models_info.svg') + `#${nav.description}`"
                      class="svg-icon"
                    />
                  </svg>
                </a>
              </template>
            </Dropdown>
          </template>
          <template v-else>
            <a href="#" @click.prevent="">
              <svg height="43" width="43">
                <use
                  :xlink:href="require('@svg/sprites/models_info.svg') + `#${nav.description}`"
                  class="svg-icon"
                />
              </svg>
            </a>
          </template>
        </li>
      </ul>
    </div>
  </Tile>
</template>

<script>
import Tile from "@components/common/Tile"
import Dropdown from '@components/common/Dropdown'
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
        activeTab: null,
        dropData: [
          { id:0, description: 'Basic details', action:'BASIC_DETAIL' },
          { id:1, description: 'Personal details', action:'PERSONAL_DETAIL' },
          { id:2, description: 'Document details', action:'DOCUMENT_DETAIL' }
        ]
      }
    },
    methods: {
      handleDropMenu(data) {
        this.$emit('clickedDrop', data.action)
      }
    },
    components: { Tile, Dropdown },
    computed: {
      ...mapGetters("models", {
        inActiveUserNav: "GET_INACT_USERNAV",
        activeElement: "GET_ACTIVE_ELEM"
      }),
      ...mapGetters("app", {
        windowWidth: "GET_WINDOW_WIDTH"
      })
    }
}
</script>
