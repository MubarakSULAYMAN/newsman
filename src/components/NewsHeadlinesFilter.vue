<template>
  <!-- <div class="text-center"> -->
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
        Specify News Source
      </v-btn>
    </template>
    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index" link>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>

    <!-- <v-list>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item v-for="child in item.items" :key="child.title">
          <v-list-item-content>
            <v-list-item-title v-text="child.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list> -->
  </v-menu>
  <!-- </div> -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'NewsHeadlinesFilter',

  data() {
    return {
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],

      // items: [
      //   {
      //     action: 'mdi-ticket',
      //     items: [{ title: 'List Item' }],
      //     title: 'Attractions',
      //   },
      // ],
    };
  },

  computed: {
    ...mapGetters(['newsSources']),
  },

  methods: {
    ...mapActions(['getNewsSources']),
  },

  created() {
    return this.getNewsSources();
  },
};
</script>

<style scoped>
</style>
