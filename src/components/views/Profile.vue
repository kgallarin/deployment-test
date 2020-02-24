<template>
  <div class="dashboard-wrapper">
    <b-container class="dashboard-container overview profile d-flex" fluid>
      <div class="profile-section1 w-50">
        <div class="d-flex flex-row profile-section1-part1">
          <!-- Profile image and Name -->
          <div class="d-flex flex-column mb-3 mr-3">
            <b-img
              :blank="false"
              blankColor="#777"
              class="overview-img mb-3"
              :src="computedDp"
              alt="Model profile image"
              @error="imageUrlAlt"
            ></b-img>
            <input type="file" ref="file" style="display: none" />
            <Button :click="() => $refs.file.click()" :pill="false" variant="light">
              <strong>Change profile picture</strong>
            </Button>
          </div>

          <div class="d-flex flex-column justify-content-between">
            <Tile class="p-3 justify-content-between hide-on-mobile mb-3">
              <p class="title-pale mt-auto mb-auto">Jacqueline Asong</p>
              <Button
                :click="() => ''"
                :pill="false"
                variant="light"
                class="align-items-end w-auto"
              >
                <strong>Go Online Now</strong>
              </Button>
            </Tile>

            <!-- Biography -->
            <Tile class="profile-bio" v-click-outside="editBioClosed" @click.native="editBio">
              <div v-if="startEditBio">
                <b-form-textarea
                  :placeholder="profile.bio"
                  v-model="profile.bio"
                  class="profile-edit-bio"
                  maxlength="350"
                  @keypress.enter.native="endEditBio"
                  @keyup="countCharacter"
                ></b-form-textarea>
              </div>
              <label class="profile-label" ref="profileBio" v-else>{{profile.bio}}</label>
            </Tile>
          </div>
        </div>
        <!-- Profile Setting Tabs -->
        <Tabs />
      </div>

      <!-- section 2 -->
      <div class="profile-section2 d-flex flex-column w-50">
        <PhotoGallery :maxShow="windowWidth > 718 ? 3 : 1"></PhotoGallery>
        <VideoGallery :maxShow="windowWidth > 718 ? 3 : 1"></VideoGallery>
      </div>
    </b-container>
  </div>
</template>

<script>
import IndexIcons from "@components/common/SpriteIcons/landing";
import Button from "@components/common/Button";
import Tile from "@components/common/Tile";
import Dropdown from "@components/common/Dropdown";
import Tabs from "@components/partials/profile/Tabs.vue";
import SignBoard from "@components/common/SignBoard";
import ImageButton from "@components/common/ImageButton";

import Gallery from "@components/partials/profile/Gallery";
import PhotoGallery from "@components/partials/contents/PhotoGallery";
import VideoGallery from "@components/partials/contents/VideoGallery";

import { mapGetters } from "vuex";

const limitBioCount = 500; //maximun bio length

export default {
  name: "",
  components: { Tile, Button, Dropdown, Tabs, SignBoard, ImageButton, Gallery, PhotoGallery, VideoGallery },
  data() {
    return {
      profile: {
        bio:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi ut odio dolores facilis cumque harum. Sunt, quaerat sint necessitatibus vel, maxime dolores ea numquam illum harum, voluptas dolore amet ullam!"
      },
      defaultImage: "model_default.png",
      tabIndex: 1,
      startEditBio: false,
      totalRemainCount: 500,
      photoGallery: [
        {
          id: 0,
          name: "Album name goes here",
          image: "https://picsum.photos/200"
        },
        {
          id: 1,
          name: "Album name goes here",
          image: "https://picsum.photos/200"
        },
        {
          id: 2,
          name: "Album name goes here",
          image: "https://picsum.photos/200"
        }
      ],
      videoGallery: [
        {
          id: 0,
          name: "Video name goes here",
          image: "https://picsum.photos/200"
        },
        {
          id: 1,
          name: "Video name goes here",
          image: "https://picsum.photos/200"
        },
        {
          id: 2,
          name: "Video name goes here",
          image: "https://picsum.photos/200"
        }
      ]
    };
  },
  filters: {
    uppercase: function(v) {
      return v.toUpperCase();
    }
  },
  computed: {
    ...mapGetters("app", {
      windowWidth: "GET_WINDOW_WIDTH"
    }),
    computedDp() {
      return require(`@images/dashboard/${this.defaultImage}`)
    }
  },
  methods: {
    imageUrlAlt(event) {
      event.target.src = defaultImage;
    },
    editBioClosed() {
      this.startEditBio = false;
    },
    editBio() {
      this.startEditBio = true;
      this.$refs.profileBio;
    },
    endEditBio(event) {
      console.log(event);
      if (!event.shiftKey) {
        this.editBioClosed();
      }
    },
    countCharacter(event) {
      this.totalRemainCount = limitBioCount - this.profile.bio.length;
      console.log(this.totalRemainCount);
      if (this.totalRemainCount < 0) {
      }
    }
  }
};
</script>
