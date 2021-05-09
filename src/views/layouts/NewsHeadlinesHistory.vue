<template>
  <div class="text-center">
    <v-bottom-sheet v-model="sheet">
      <!-- FIXME: Tooltip compatibity with v-sheet -->
      <!-- <v-tooltip right> -->
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          elevation="2"
          fab
          raised
          rounded
          color="indigo accent-4"
          small
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-history</v-icon>
        </v-btn>
      </template>

      <v-list>
        <div class="d-flex flex-row justify-space-between align-center px-6">
          <v-subheader
            class="body-1 indigo--text text--darken-4 font-weight-black"
          >
            <v-icon color="indigo darken-4" class="mr-2"
              >mdi-clock-time-three-outline</v-icon
            >
            History
          </v-subheader>
          <v-spacer />
          <v-icon color="red accent-4" @click="emptyHistory"
            >mdi-delete-empty</v-icon
          >
        </div>

        <v-list-item v-if="readNews.length === 0">
          <v-subheader class="body-1 red--text text--darken-4 font-weight-bold">
            No history available
          </v-subheader>
        </v-list-item>

        <v-list-item
          v-else
          v-for="article in readNews"
          :key="article.title"
          @click="featureNotAvailable"
        >
          <v-row class="">
            <v-col cols="11">
              <v-list-item-title
                >{{ article.title }} •
                {{ article.source.name }}</v-list-item-title
              >
            </v-col>
          </v-row>
        </v-list-item>
      </v-list>
    </v-bottom-sheet>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'NewsHeadlinesHistory',

  data() {
    return {
      sheet: false,
    };
  },

  computed: {
    ...mapGetters(['readNews']),
  },

  methods: {
    ...mapActions(['featureNotAvailable', 'emptyHistory']),
  },
};
</script>

<style scoped>
</style>
