<template>
  <div :class="[mode, 'editable-note-container']">
    <p class="label mb-0">Note</p> 
    <div
      :class="[hovered ? 'visible-oflow' : 'invisible-oflow', 'editable-note']"
      @mouseenter="onHoverNote"
    >

      <div class="main-note-container">
        <!-- Note is here   -->
        <div
          v-if="!startEdit"
          @click.prevent="startEditNote"
          :class="['note-container']"

        >
          {{note}}
        </div>

        <!-- Editable Note is here -->
        <b-form-textarea
          v-else
          placeholder="Write someting about your follower"
          ref="input"
          v-model="content"
          @focus="resizeTextarea"
          @click.prevent="resizeTextarea"
          @keydown.native="submitNote"
          v-click-outside="updateNote"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'EditableNote',
    props: {
        mode: {
            type: String,
            default: ''
        },
        note: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
          content: "",
          startEdit: false,
          hovered: false
        };
    },
    methods: {
        ...mapActions({
            setNote: "note/SET_NOTE"
        }),
        startEditNote() {
            this.startEdit = true;
            this.$nextTick(() => {
            this.$refs.input.focus();
        });
        },
        updateNote() {
            this.setNote({ note: this.content });
            this.startEdit = false;
        },
        resizeTextarea(event) {
            event.target.style.height = "auto";
            event.target.style.height = event.target.scrollHeight + "px";
        },
        submitNote(e){
            if(e.keyCode == 13 && !e.shiftKey){
                this.updateNote()
            }

        },
        onHoverNote() {
          this.hovered = true
        },
        unHoverNote() {
          this.hovered = false
        }
    },
    mounted() {
        this.$nextTick(() => {
        this.$el.addEventListener("input", this.resizeTextarea);
        });
        this.$el.addEventListener("input", this.resizeTextarea);
        this.content = this.note;
    },
    beforeDestroy() {
        this.$el.removeEventListener("input", this.resizeTextarea);
    },
    computed: {
        ...mapGetters("app", {
        windowHeight: "GET_WINDOW_HEIGHT"
        })
    }
};
</script>
