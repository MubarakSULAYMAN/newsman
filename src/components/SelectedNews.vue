<template>
<v-container fluid>
  <v-card fluid class="selected-news mx-auto">
    <v-img
      class="news-image"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title class="caption">Image Description</v-card-title>

    <v-card-actions class="d-flex">
      <v-card-title class="px-2 py-0">Headline</v-card-title>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class=""
            outlined
            x-small
            fab
            color="indigo"
            v-bind="attrs"
            v-on="on"
            @click="overlay = !overlay"
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </template>
        <span>Edit headline, your way &#128521; &#129299;</span>
      </v-tooltip>
    </v-card-actions>

    <v-overlay :value="overlay" opacity="0.7">
      <headline-editor
        @overlayStatus="overlay = !overlay"
        class="headline-editor"
      />
    </v-overlay>

    <v-card-text class="py-0">
      <div class="subtitle-2 font-weight-light">Source • Author</div>
      <div class="mb-4 subtitle-2 font-weight-light">Date</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text class="body-1 black--text">
      <div>
        Small plates, salads & sandwiches - an intimate setting with 12 indoor
        seats plus patio seating.
      </div>
    </v-card-text>
  </v-card>
</v-container>
</template>

<script>
import HeadlineEditor from '@/components/HeadlineEditor.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SelectedNews',

  components: { HeadlineEditor },

  data() {
    return {
      overlay: false,
    };
  },

  computed: {
    ...mapGetters(['newsHeadline']),

    newsCategory() {
      return 'Nothing o';
    },

    newsHeadline() {
      return 'Nothing o';
    },
  },

  methods: {
    ...mapActions(['updateSelectedNewsHeadline']),
  },

  created() {
    // return this.updateSelectedNewsHeadline('this.$router.path.param');
    // return alert('Hello');
  },
};
</script>

<style scoped>
.selected-news {
  width: 100%;
}

.headline-editor {
  width: 80vw;
}

.news-image {
  height: 450px;
}

@media only screen and (max-width: 768px) {
  .news-image {
    height: 250px;
  }
}
</style>
