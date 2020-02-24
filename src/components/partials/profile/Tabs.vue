<template>
  <Tile class="flex-column">
    <!-- Tab Navigation -->
    <div class="d-flex pb-n3 profile-nav">
      <ul class="d-flex flex-fill text-center profile-nav-ul">
        <li
          class="profile-nav-item"
          :class="{ 'profile-nav-item-active' : tabIndex === 0 }"
          @click.stop="showTab(0, $event)"
        >
          <strong>BASIC DETAILS</strong>
        </li>
        <li
          class="profile-nav-item"
          :class="{ 'profile-nav-item-active' : tabIndex === 1 }"
          @click="showTab(1, $event)"
        >
          <strong>SPECIAL DETAILS</strong>
        </li>
        <li
          class="profile-nav-item"
          :class="{ 'profile-nav-item-active' : tabIndex === 2 }"
          @click="showTab(2, $event)"
        >
          <strong>SETTINGS</strong>
        </li>
      </ul>
    </div>

    <!-- Tab Content -->
    <div class="profile-tab-content p-3 m-2">
      <!-- Tab 1 : Basic DETAILS -->
      <div v-if="tabIndex === 0">
        <p class="title">Basic information</p>
        <div class="d-flex flex-wrap m-0 p-0 justify-content-between">
          <div class="d-flex flex-column profile-flex-row" v-for="item in basicInfo" :key="item.id">
            <label class="title title blur">{{item.data.description}}</label>
            <Dropdown
              :placeholder="item.data.length > 0 ? item.data[0].description : item.label"
              customClass="custom-large dark-text-left text-uppercase sm"
              :dropData="item.data"
            />
          </div>
        </div>
      </div>

      <!-- Tab 2 : SPECIAL DETAILS -->
      <div v-if="tabIndex === 1">
        <p class="title mb-3 pb-2">appearance</p>
        <b-form-checkbox-group class="d-flex flex-wrap cb-group align-items-start">
          <template v-for="item in appearance">
            <b-form-checkbox
              :key="item.id"
              class="d-flex models-chk align-items-center pink-cb profile-cb"
              :value="item.label"
            >
              <span class="text-uppercase">{{item.label}}</span>
            </b-form-checkbox>
          </template>
        </b-form-checkbox-group>

        <p class="title mt-3 mb-2 pb-2">willingness</p>
        <b-form-checkbox-group class="d-flex flex-wrap align-items-start profile-cb-group">
          <template v-for="item in willingness">
            <b-form-checkbox
              :key="item.id"
              class="d-flex models-chk align-items-center pink-cb profile-cb"
              :value="item.label"
            >
              <span class="text-uppercase">{{item.label}}</span>
            </b-form-checkbox>
          </template>
        </b-form-checkbox-group>

        <p class="title mt-3 mb-2 pb-2">common language</p>
        <b-form-checkbox-group class="d-flex flex-wrap align-items-start">
          <template v-for="item in common_language">
            <b-form-checkbox
              :key="item.id"
              :class="`d-flex models-chk align-items-center pink-cb profile-cb ${item.id === common_language.length - 1 ? 'profile-cb-fullwidth' : null}`"
              :value="item.label"
            >
              <span class="text-uppercase">{{item.label}}</span>
            </b-form-checkbox>
          </template>
        </b-form-checkbox-group>
      </div>

      <!-- Tab 3 : SETTINGS -->
      <div v-if="tabIndex === 2">
        <p class="title">price setting</p>
        <div class="d-flex profile-flex-col justify-content-between">
          <div class="d-flex flex-column profile-dropdown">
            <label class="title title blur">standard price</label>
            <Dropdown
              placeholder="2 TOKENS"
              customClass="custom-large dark-text-left text-uppercase sm"
              :dropData="gender"
            />
          </div>
          <div class="d-flex flex-column profile-dropdown">
            <label class="title blur">CAM2CAM PRICE</label>
            <Dropdown
              placeholder="2 TOKENS"
              customClass="custom-large dark-text-left text-uppercase sm"
            />
          </div>
          <div class="d-flex flex-column profile-dropdown">
            <label class="title blur">2 way audio price</label>
            <Dropdown
              placeholder="2 TOKENS"
              customClass="custom-large dark-text-left text-uppercase sm"
            />
          </div>
        </div>

        <p class="title mt-3">ban everyone in one country or state</p>
        <div class="d-flex profile-flex-col">
          <div class="d-flex flex-column profile-dropdown">
            <label class="title blur">ban option</label>
            <Dropdown
              placeholder="EVERYONE"
              customClass="custom-large dark-text-left text-uppercase sm"
            />
          </div>
          <div class="d-flex flex-column profile-dropdown-lg">
            <label class="title blur">country or state 1</label>
            <Dropdown
              placeholder="EVERYONE"
              customClass="custom-large dark-text-left text-uppercase sm"
            />
          </div>
        </div>

        <div class="d-flex profile-flex-col">
          <div class="d-flex flex-column profile-dropdown">
            <label class="title blur">ban option</label>
            <Dropdown
              placeholder="EVERYONE"
              customClass="custom-large dark-text-left text-uppercase sm"
            />
          </div>
          <div class="d-flex flex-column profile-dropdown-lg">
            <label class="title blur">country or state 2</label>
            <Dropdown
              placeholder="EVERYONE"
              customClass="custom-large dark-text-left text-uppercase sm"
            />
          </div>
        </div>

        <div class="d-flex profile-flex-col">
          <div class="d-flex flex-column profile-dropdown">
            <label class="title blur">ban option</label>
            <Dropdown
              placeholder="EVERYONE"
              customClass="custom-large dark-text-left text-uppercase sm"
            />
          </div>
          <div class="d-flex flex-column profile-dropdown-lg">
            <label class="title blur">country or state 3</label>
            <Dropdown
              placeholder="EVERYONE"
              customClass="custom-large dark-text-left text-uppercase sm"
            />
          </div>
        </div>
      </div>
    </div>
  </Tile>
</template>

<script>
import IndexIcons from "@components/common/SpriteIcons/landing";
import Button from "@components/common/Button";
import Tile from "@components/common/Tile";
import Dropdown from "@components/common/Dropdown";

// sections
export default {
  name: "",
  components: { Tile, Button, Dropdown },
  data() {
    return {
      selected: 0,
      tabIndex: 0,
      basicInfo: [
        {
          id: 0,
          label: "gender",
          data: [
            { id: "1", description: "male" },
            { id: "2", description: "female" },
            { id: "3", description: "rather not say" }
          ]
        },
        {
          id: 1,
          label: "interested in",
          data: [
            { id: "1", description: "male" },
            { id: "2", description: "female" },
            { id: "3", description: "rather not say" }
          ]
        },
        {
          id: 2,
          label: "age",
          data: [
            { id: "1", description: "24" },
            { id: "2", description: "25" },
            { id: "3", description: "26" }
          ]
        },
        {
          id: 3,
          label: "language",
          data: [
            { id: "1", description: "English" },
            { id: "2", description: "Thai" }
          ]
        },
        {
          id: 4,
          label: "body type",
          data: [{ id: "1", description: "Normal" }]
        },
        {
          id: 5,
          label: "eyes color",
          data: [{ id: "1", description: "Blue" }]
        },
        {
          id: 6,
          label: "hair color",
          data: [{ id: "1", description: "Black" }]
        },
        {
          id: 7,
          label: "hair length",
          data: [{ id: "1", description: "Long" }]
        },
        {
          id: 8,
          label: "breast size",
          data: [{ id: "1", description: "Normal" }]
        }
      ],
      appearance: [
        { id: 0, label: "leather", value: "leather" },
        { id: 1, label: "tattoo", value: "tattoo" },
        { id: 2, label: "stockings", value: "stockings" }
      ],
      willingness: [
        { id: 0, label: "anal sex", value: "anal sex" },
        { id: 1, label: "dildo", value: "dildo" },
        { id: 2, label: "vibrator", value: "vibrator" },
        { id: 3, label: "love balls", value: "love balls" },
        { id: 4, label: "zoom", value: "zoom" },
        { id: 5, label: "close up", value: "close up" },
        { id: 6, label: "roleplay", value: "roleplay" },
        { id: 7, label: "fingering", value: "fingering" },
        { id: 9, label: "striptease", value: "striptease" },
        { id: 10, label: "dancing", value: "dancing" },
        { id: 11, label: "butt plug", value: "butt plug" },
        { id: 12, label: "live orgasm", value: "live orgasm" },
        { id: 13, label: "oil", value: "oil" },
        { id: 14, label: "smoke cigarette", value: "smoke cigarette" }
      ],
      common_language: [
        { id: 0, label: "english", value: "english" },
        { id: 1, label: "spanish", value: "spanish" },
        { id: 2, label: "finnish", value: "finnish" },
        { id: 3, label: "french", value: "french" },
        { id: 4, label: "german", value: "german" },
        { id: 5, label: "italian", value: "italian" },
        { id: 6, label: "dutch", value: "dutch" },
        { id: 7, label: "norwegian", value: "norwegian" }
      ],
      status: [
        { id: 0, name: "WOMAN", checked: true },
        { id: 1, name: "MEN", checked: true },
        { id: 2, name: "WOMANa", checked: true },
        { id: 3, name: "MENw", checked: false },
        { id: 4, name: "WOMAeasdN", checked: true },
        { id: 5, name: "MasdEN", checked: true }
      ],
      gender: [{ id: 0, label: "WOMAN" }, { id: 1, label: "MEN" }]
    };
  },
  methods: {
    showTab(id, event) {
      this.tabIndex = id;
    },
    toUpperCase: function(v) {
      return v.toUpperCase();
    }
  }
};
</script>
