<template>
  <b-container class="dashboard-wrapper dashboard-container referral" fluid>
    <article class="referral-top-content">
      <form class="form-main">
        <p class="header-ttl text-uppercase">Model referral</p>
        <p class="sub-header">
          <strong>Share your link</strong>
        </p>

        <p class="sub-header">Copy link and send it to your friends:</p>

        <div class="d-flex align-items-center jusify-content-start link-container">
          <Input id="referral_link" :static_value="'candycams.com/?refererid=p_muwashi'"/>
          <!-- button -->
          <Button
            :click="() => copy('referral_link')"
            variant="light"
            class="submit-button">
            <strong class="text-uppercase">{{ textLabel }}</strong>
          </Button>
        </div>
      </form>

      <div class="post-text-container">
        <p class="post-text">
          Post the link on Facebook wall, a blog site or Twitter.
          You may send it via email or use your favourite social network to share it.
          You will gain a lifetime commission of 20% of all purchases the member makes!
        </p>
      </div>
    </article>

    <!-- Data table starts -->
    <DataTable />

  </b-container>
</template>

<script>
import Tile from "@components/common/Tile"
import Input from "@components/common/Input"
import Button from "@components/common/Button"
import DataTable from "@components/partials/referrals/ReferralLog"


import { mapGetters } from "vuex"

  export default {
    data() {
      return {
          perPage: 8,
          currentPage: 1,
          textLabel: 'Copy'
      }
    },
    components: { Tile, Input, Button, DataTable },
    methods: {
      copy(id) {
        let copyCat = document.querySelector(`#${id}`);
        copyCat.setAttribute("type", "text");
        copyCat.select();

        try {
          document.execCommand("copy");
            console.log('copied to clipboard')
            this.textLabel = 'Copied'

        } catch (err) {
          console.log(err)
        }
        window.getSelection();
      }
    },
  }
</script>
