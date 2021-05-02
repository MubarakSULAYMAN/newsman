<template>
  <!-- <div class="text-center"> -->
  <v-menu offset-y open-on-hover transition="slide-y-transition" bottom>
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
      <v-list-item v-for="(item, index) in items" :key="index">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
  <!-- </div> -->
</template>

<script>
export default {
  name: 'NewsHeadlinesFilter',

  data: () => ({
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ],
  }),
};
</script>

<style scoped>
</style>
