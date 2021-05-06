<template>
  <v-container fluid :class="margin()">
    <v-row no-gutters>
      <v-col cols="12" md="9">
        <selected-news class="selected-news" />
      </v-col>

      <v-col cols="0" md="3" class="related-news mt-3 px-6">
        <related-headlines />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SelectedNews from '@/components/SelectedNews.vue';
import RelatedHeadlines from '@/components/RelatedHeadlines.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'NewsDetails',

  components: { SelectedNews, RelatedHeadlines },

  metaInfo() {
    return {
      titleTemplate: `Newsman(${this.selectedNews.title}) - ${this.selectedNews.source.name}`,
    };
  },

  methods: {
    margin() {
      if (this.$vuetify.breakpoint.name === 'lg') {
        return 'ma-4';
      }
      return 'ma-2 ml-0';
    },
  },

  computed: {
    ...mapGetters(['selectedNews']),
  },
};
</script>

<style scoped>
.selected-news {
  width: 100%;
}

@media only screen and (max-width: 958px) {
  .related-news {
    display: none;
  }
}
</style>
