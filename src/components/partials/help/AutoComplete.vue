<template>
  <div class="help-info-autocomplete" @click="toggleVisible" v-click-outside="closedSearchResult">
    <div class="search-wrapper">
      <!-- Search Input -->
      <b-input
        v-model="query"
        type="text"
        placeholder="search..."
        class="w-100"
        @focus="showResult = true"
      />
      <div class="search-icon-container">
        <svg height="20" width="20" fill="#cdcdd0">
          <use :xlink:href="require('@svg/sprites/common.svg') + '#search-md'" class="svg-icon" />
        </svg>
      </div>
    </div>

    <!-- Search result is shown here -->
    <div class="option" v-if="showResult">
      <ul>
        <li
          v-for="(match, index) in matches"
          :key="match[filterBy].id"
          :class='{"active-item": currentItem === index}'
          @click="click(match)"
        >
          <span class="search-highlight" v-html="highlight(match[filterBy])"></span>
        </li>
        <li v-if="query !== ''"  :class='{"active-item": currentItem === matches.length}'>
          Don't find any answer here
          <span class="search-highlight bold">Contact us.</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Input from "@components/common/Input";

export default {
  components: { Input },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    filterBy: {
      type: String
    },
    click: {
        type: Function,
        default: () => {},
      }
  },
  data() {
    return {
      visible: false,
      showResult: false,
      query: "",
      currentItem: 0
    };
  },
  methods: {
    toggleVisible() {
      this.visible = !this.visible;
    },
    closedSearchResult() {
      this.showResult = false;
    },
    highlight(result) {
      const texts = this.query.split(/[\s-_/\\|\.]/gm).filter(t => !!t) || [''];
      return result.replace(new RegExp('(.*?)(' + texts.join('|') + ')(.*?)','gi'), '<span class="highlight">$1</span><span class="nonhighlight">$2</span><span class="highlight">$3</span>');
    },
    nextItem () {
      //go up
    	if (event.keyCode === 38 && this.currentItem > 0) {
      	this.currentItem--
      }
      //go down
      else if (event.keyCode === 40 && this.currentItem < this.matches.length) {
      	this.currentItem++
      }
      //go to the last
      else if (event.keyCode === 38 && this.currentItem === 0) {
        this.currentItem = this.matches.length
      }
      //go to the top
      else if (event.keyCode === 40 && this.currentItem === this.matches.length) {
        this.currentItem = 0
      }
    }
  },
  computed: {
    matches() {
      if (this.query === "") {
        return [];
      }

      return this.items.filter(item =>
        item[this.filterBy].toLowerCase().includes(this.query.toLowerCase())
      );
    }
  },
  mounted() {
    document.addEventListener("keyup", this.nextItem);
  }
};
</script>
