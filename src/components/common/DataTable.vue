<template>
  <Tile size="lg" class="default">
    <div class="tile-inner">
      <p class="headers mb-0">Payout history</p>
      <div class="overflow-auto table-container">
        <b-table
          id="payout_history"
          class="custom-table-override"
          :items="arr_data"
          :per-page="per_page"
          :fields="field_data"
          :current-page="localCurrentPage"
          small
        ></b-table>

        <div class="pagination-container">
          <b-pagination
            class="pagination"
            v-model="localCurrentPage"
            :total-rows="rows"
            :per-page="per_page"
            aria-controls="payout_history"
            :limit="pagination_limit"
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
</template>

<script>
import Tile from "@components/common/Tile"
import { mapGetters } from "vuex"

  export default {
    data() {
      return {
        localCurrentPage: 1,
      }
    },
    props: {
      title_header: {
        type: String,
        default: ''
      },
      field_data: {
        type: Array,
        default: ()=> []
      },
      arr_data: {
        type: Array,
        default: () => []
      },
      per_page: {
        type: Number,
        default: 1
      },
      current_page: {
        type: Number,
        default: 1
      },
      pagination_limit: {
        type: String,
        default: 1
      }
    },
    computed: {
      rows() {
        return this.arr_data.length
      },
      data: {
        get(){
           return this.arr_data
         },
        set(newData){
           return newData
         }
      },
      ...mapGetters("app", {
        windowWidth: "GET_WINDOW_WIDTH"
      }),
    },
    mounted() {

    },
    components: {Tile},
    watch: {
      current_page(newVal) {
        if(newVal) {
          this.localCurrentPage = newVal
        }
      }
    }
  }
</script>
