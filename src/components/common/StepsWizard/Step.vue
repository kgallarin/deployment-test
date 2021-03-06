<template>
  <div class="custom-steps-container">
    <form @submit.prevent>

        <!-- tab content -->
        <div>
          <div class="steps-tab-content d-flex flex-column">
            <slot :activeIndex="activeTabIndex" :activeTab="activeTab"> </slot>
          </div>
        </div>

        <!-- actions -->
        <div :class="[activeTabIndex > 0 ? 'justify-content-between' : 'justify-content-center', 'd-flex steps-nav-container'] ">
          <slot name="footer" :next-tab="nextTab" :prev-tab="prevTab">
            <div>
              <Button variant="light"
                v-if="activeTabIndex > 0"
                :click="() => prevTab()"
                class="custom-steps-button btn-previous"
              >
                {{ prevButtonText }}
              </Button>
            </div>

            <div>
              <Button variant="light"
                v-if="activeTabIndex < tabCount - 1"
                :click="() => nextTab()"
                class="btn-next custom-steps-button"
              >
                {{ nextButtonText.length > 1 ? nextButtonText[activeTabIndex] : nextButtonText[0] }}
              </Button>
              <Button variant="light"  v-else class="custom-steps-button md-success" :click="() => nextTab()">
                {{ finishButtonText }}
            </Button>
            </div>
          </slot>
        </div>

    </form>
  </div>
</template>
<script>
import Button from "@components/common/Button"

export default {
  name: "CustomSteps",
  props: {
    startIndex: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: "Title"
    },
    subTitle: {
      type: String,
      default: "Subtitle"
    },
    prevButtonText: {
      type: String,
      default: "Back"
    },
    nextButtonText: {
      type: Array,
      default: () => ['next']
    },
    finishButtonText: {
      type: String,
      default: "Finish"
    },
    vertical: {
      type: Boolean,
      default: true
    }
  },
  components: { Button },
  provide() {
    return {
      addTab: this.addTab,
      removeTab: this.removeTab
    };
  },
  data() {
    return {
      tabs: [],
      activeTabIndex: 0,
      tabLinkWidth: 0,
      tabLinkHeight: 50
    };
  },
  computed: {
    tabCount() {
      return this.tabs.length;
    },
    activeTab() {
      return this.tabs[this.activeTabIndex];
    }
  },
  methods: {
    addTab(tab) {
      const index = this.$slots.default.indexOf(tab.$vnode);
      let tabTitle = tab.title || "";
      tab.tabId = `${tabTitle.replace(/ /g, "")}${index}`;
      if (!this.activeTab && index === 0) {
        tab.active = true;
        tab.checked = true;
      }
      if (this.activeTab === tab.name) {
        tab.active = true;
        tab.checked = true;
      }
      this.tabs.splice(index, 0, tab);
    },
    removeTab(tab) {
      const tabs = this.tabs;
      const index = tabs.indexOf(tab);
      if (index > -1) {
        tabs.splice(index, 1);
      }
    },
    validate(tab) {
      let tabToValidate = tab || this.activeTab;
      let beforeChange = tabToValidate.beforeChange;
      if (beforeChange) {
        return Promise.resolve(beforeChange())
          .then(res => {
            this.activeTab.hasError = res ? false : true;
            return res;
          })
          .catch(() => {
            this.activeTab.hasError = true;
          });
      } else {
        return Promise.resolve(true);
      }
    },
    async nextTab() {
      let isValid = await this.validate();
      if (isValid && this.activeTabIndex < this.tabCount - 1) {
        this.activeTabIndex++;
      }
      return isValid;
    },
    prevTab() {
      this.activeTabIndex--;
    },
    async navigateToTab(index) {
      if (this.tabs[index].checked) {
        // recursively validate each tab
        if (index > this.activeTabIndex) {
          let valid = await this.nextTab();
          if (valid) {
            this.navigateToTab(index);
          }
        } else {
          this.activeTabIndex = index;
        }
      }
    },
    onResize() {
      let tabLinks = document.getElementsByClassName("wizard-tab-link");
      if (tabLinks.length > 0 && this.tabCount > 0) {
        let { clientWidth, clientHeight } = tabLinks[0];
        this.tabLinkWidth = clientWidth;
        this.tabLinkHeight = clientHeight;
      }
    }
  },
  mounted() {
    this.activeTabIndex = this.startIndex;
    this.$nextTick(() => {
      this.tabs[this.activeTabIndex].active = true;
      this.tabs[this.activeTabIndex].checked = true;
      this.onResize();
    });
  },
  watch: {
    activeTabIndex(newValue, oldValue) {
      if (newValue !== oldValue) {
        let oldTab = this.tabs[oldValue];
        let newTab = this.tabs[newValue];
        oldTab.active = false;
        newTab.active = true;

        if (!newTab.checked) {
          newTab.checked = true;
        }
        this.$emit("tab-change", oldTab, newTab);
        this.$emit("update:startIndex", newValue);
      }
    }
  }
};
</script>
