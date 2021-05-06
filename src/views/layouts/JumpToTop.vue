<template>
  <v-btn
    v-scroll="onScroll"
    v-show="fab"
    fab
    dark
    fixed
    bottom
    right
    color="primary"
    @click="toTop"
  >
    <v-icon>mdi-chevron-up</v-icon>
  </v-btn>
</template>

<script>
export default {
  data() {
    return {
      fab: false,
    };
  },

  methods: {
    onScroll(e) {
      if (typeof window === 'undefined') return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      const windowSize = window.innerHeight + Math.ceil(window.pageYOffset);
      let tolerance;

      if (['xs', 'sm'].includes(this.$vuetify.breakpoint.name)) {
        tolerance = 120;
      } else tolerance = 100;

      const bottom = windowSize + tolerance >= document.body.offsetHeight;

      this.fab = top > 20 && !bottom;
    },

    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>

<style>
</style>
