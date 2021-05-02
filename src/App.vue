<template>
  <v-app>
    <v-app-bar app color="indigo" dark>
      <v-toolbar-title class="app-name" @click="goHome">
        Newsman
      </v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <the-footer />
  </v-app>
</template>

<script>
import TheFooter from '@/views/layouts/TheFooter.vue';

export default {
  name: 'App',

  components: { TheFooter },

  data: () => ({
    //
  }),

  methods: {
    goHome() {
      if (this.$router.currentRoute.path !== '') {
        return this.$router.push('/').catch((err) => {
          if (err.name !== 'NavigationDuplicated') {
            console.log(err);
          }
        });
      }
      return {};
    },
  },

  created() {
    // return alert(this.$router.currentRoute.path);
  },
};
</script>

<style scoped>
.app-name:hover {
  cursor: pointer;
}
</style>
