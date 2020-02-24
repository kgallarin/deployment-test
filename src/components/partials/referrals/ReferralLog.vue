<template>
  <div class="data-table-wrapper">
    <Tile size="lg" class="default">
      <div class="tile-inner">
        <p class="headers mb-0">Payout history</p>
        <div class="table-container">
          <b-table
            id="referral_log"
            class="custom-table-override"
            :items="payout_data"
            :per-page="8"
            :fields="windowWidth > 767 ? data = [
              { key: 'Id', thClass: 'd-none', tdClass: 'd-none' },
              { key: 'date', label:'Payment date', sortable: false},
              { key: 'amount_commission', label:'Amount', sortable: false},
              { key: 'gateway', label:'TBD', sortable: false},
              { key: 'status', label:'TBD', sortable: false},
              { key: 'type', label:'TBD', sortable: false}
            ] :
            data = [
              { key: 'Id', thClass: 'd-none', tdClass: 'd-none' },
              { key: 'date', label:'Payment date', sortable: false},
              { key: 'amount_commission', label:'Amount', sortable: false},
              { key: 'gateway', label:'Method', sortable: false},
              { key: 'status', thClass: 'd-none', tdClass: 'd-none', label:'Payment Status', sortable: false},
              { key: 'type', thClass: 'd-none', tdClass: 'd-none', label:'Payment Type', sortable: false}
            ]"
            :current-page="current"
            small
          >
            <template v-slot:cell(amount_commission)="data">
              $ {{ parseFloat(data.item.amount_commission).toFixed(2) }}
            </template>
          </b-table>

          <div class="pagination-container">
            <b-pagination
              class="pagination"
              v-model="current"
              :total-rows="rows"
              :per-page="perPage"
              aria-controls="referral_log"
              :limit="windowWidth > 767 ? '5' : '2'"
            >
            <!-- first -->
            <template v-slot:first-text>
              <svg height="12" width="15" class="rotate-180">
                <use :xlink:href="require('@svg/sprites/common.svg') + '#rewind'" class="svg-icon" />
              </svg>
            </template>

            <!-- previous -->
            <template v-slot:prev-text>
              <svg height="12" width="10" class="rotate-180">
                <use :xlink:href="require('@svg/sprites/common.svg') + '#play'" class="svg-icon" />
              </svg>
            </template>

            <!-- next -->
            <template v-slot:next-text>
              <svg height="12" width="10">
                <use :xlink:href="require('@svg/sprites/common.svg') + '#play'" class="svg-icon" />
              </svg>
            </template>

            <!-- last -->
            <template v-slot:last-text>
              <svg height="12" width="15">
                <use :xlink:href="require('@svg/sprites/common.svg') + '#rewind'" class="svg-icon" />
              </svg>
            </template>

            <!-- ellipsis -->
            <template v-slot:ellipsis-text>...</template>
            </b-pagination>
          </div>
        </div>
      </div>
    </Tile>

    <!-- data tables end -->
  </div>
</template>

<script>
import Tile from "@components/common/Tile"

import { mapGetters } from "vuex"

  export default {
    methods: {
      copy(id) {
        let copyCat = document.querySelector(`#${id}`);
        copyCat.setAttribute("type", "text");
        copyCat.select();

        try {
          document.execCommand("copy");
            console.log('copied to clipboard')

        } catch (err) {
          console.log(err)
        }

        window.getSelection();
      }
    },
    computed: {
      rows() {
        return this.data.length
      },
      data: {
        get(){
           return this.payout_data
         },
        set(newData){
           return newData
         }
      },
      current: {
        get(){
           return this.currentPage
         },
        set(newData){
           this.$store.commit('referral/SET_CURRENT_PAGE', newData)
         }
      },
      ...mapGetters("referral", {
        payout_data: "GET_REFERRAL_HISTORY",
        perPage: "GET_PER_PAGE",
        currentPage: "GET_CURRENT_PAGE"
      }),
      ...mapGetters("app", {
        windowWidth: "GET_WINDOW_WIDTH"
      })
    },
    components: { Tile }
  }
</script>
