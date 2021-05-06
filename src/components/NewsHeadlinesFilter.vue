<template>
  <v-menu
    offset-y
    open-on-hover
    close-on-content-click
    transition="slide-y-transition"
    bottom
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="indigo accent-4 font-weight-bold"
        dark
        v-bind="attrs"
        v-on="on"
      >
        News Source
      </v-btn>
    </template>

    <v-list style="max-height: 300px" class="overflow-y-auto">
      <v-list-item
        v-for="source in newsSources"
        :key="source.id"
        link
        @click="getSourceTopHeadlines(source.id)"
      >
        <v-list-item-title>{{ source.name }}</v-list-item-title>
      </v-list-item>
    </v-list>

    <!-- FIXME: Width not customizable with virtual scroll -->
    <!-- <v-card
      elevation="16"
      max-width="400"
      class="mx-auto"
    >
    <v-virtual-scroll bench="0" :items="newsSources" :item-height="50" height="300" class="white">
      <template v-slot:default="{ item }">
        <v-list-item :key="item.id" link @click="getSourceTopHeadlines(item.id)">
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item>
      </template>
    </v-virtual-scroll>
    </v-card> -->
  </v-menu>
  <!-- </div> -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'NewsHeadlinesFilter',

  data() {
    return {};
  },

  computed: {
    ...mapGetters(['newsSources']),
  },

  methods: {
    getSourceTopHeadlines(source) {
      return this.$store.dispatch('getSourceTopHeadlines', source);
    },

    ...mapActions(['getNewsSources', 'getSourceTopHeadlines']),
  },

  created() {
    return this.$store.dispatch('getNewsSources');
  },
};
</script>

<style scoped>
</style>
